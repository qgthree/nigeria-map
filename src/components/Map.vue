<template>
  <div id="mapContainer" ref="map"  >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import L from 'leaflet'
export default {
  name: 'WorldMap',
  props: {
    settings: Object,
    states: Object,
    lgas: Object,
    date: String
  },
  data () {
    return {
      map: null,
      shapes: null
    }
  },
  computed: {
    ...mapGetters('BHANav', [
      'activitiesBySector',
      'activitiesByPartner',
      'activitiesByProvince'
    ]),
    state () {
      return this.states.features.find(item => item.properties.admin1Pcode === this.$route.params.id) || null
    },
    lga () {
      return this.lgas.features.find(item => item.properties.admin2Pcode === this.$route.params.id) || null
    },
    center () {
      return this.lga ? [this.lga.properties.Lat, this.lga.properties.Long]
      : this.state ? [this.state.properties.Y, this.state.properties.X]
      : this.settings.countryCenter
    },
    zoom () {
      return this.lga ? this.settings.lgaZoom
      : this.state ? this.settings.stateZoom
      : this.settings.countryZoom
    },
    geoJSON () { return L.geoJSON(this.states, this.options0(this.states)) },
    geoJSON2 () {
      return L.geoJSON(
        this.lgaSubset(),
        this.options1(this.lgaSubset())
      )
    },
    geoJSON3 () {
      return L.geoJSON(
        this.lgaSolo(),
        this.options2(this.lgaSolo())
      )
    }
  },
  methods: {
    lgaSubset () {
      const lgafeatures = this.lgas.features.filter(lga => lga.properties.admin1Pcode === this.$route.params.id)
      const subset = { type: this.lgas.type, features: lgafeatures }
      return subset
    },
    lgaSolo () {
      const lgafeatures = this.lgas.features.filter(lga => lga.properties.admin2Pcode === this.$route.params.id)
      const lga = { type: this.lgas.type, features: lgafeatures }
      return lga
    },
    activities () {
      const type = this.$route.meta.nav
      const id = this.$route.params.id
      if (type === 'sect') {
        return this.activitiesBySector(id)
      } else if (type === 'part') {
        return this.activitiesByPartner(id)
      } else if (type === 'prov' && id) {
        return this.activitiesByProvince(id)
      } else return []
    },
    options0 () {
      const self = this
      const highlight = this.settings.colors.highlight
      const active = this.settings.colors.active
      const normalStyle = {
        weight: 0.8,
        color: highlight,
        opacity: 0.4,
        fillColor: highlight,
        fillOpacity: 0.03
      }
      const countrywideStyle = {
        opacity: 0.6,
        fillColor: active,
        fillOpacity: 0.15
      }
      const activeStyle = {
        opacity: 0.6,
        fillColor: active,
        fillOpacity: 0.6
      }
      return {
        style () {
          return normalStyle
        },
        onEachFeature (feature, layer) {
          // set general style
          let fillStyle = normalStyle

          // add tooltip
          layer.bindTooltip(
            '<span class="tip-title">' + feature.properties.admin1Name_en + '</span>' +
            '<br/>' +
            '<span class="tip-detail">Pop: ' + feature.properties.Pop2020.toLocaleString() + '</span>'
          )

          // set hover events
          layer.addEventListener('mouseover', () => { layer.setStyle({ fillOpacity: 0.35 }) })
          layer.addEventListener('mouseout', () => { layer.setStyle({ fillOpacity: fillStyle.fillOpacity }) })
          layer.addEventListener('click', function () {
            self.$router.push({ name: 'state', params: { id: feature.properties.admin1Pcode } })
          })

          // Look at each activity. If the activity occurs in this state, highlight the state.
          const countrywideActivity = self.activities().some(activity => activity.state.includes('Countrywide'))
          const sectorActivity = self.activities().some(activity => activity.state.includes(feature.properties.admin1Name_en))

          if (countrywideActivity) {
            layer.setStyle(countrywideStyle)
            fillStyle = countrywideStyle
          }

          if (sectorActivity) {
            layer.setStyle(activeStyle)
            fillStyle = activeStyle
          }
        }
      }
    },
    options1 () {
      const self = this
      const highlight = this.settings.colors.highlight
      const active = this.settings.colors.active
      const statewideStyle = {
        weight: 0.8,
        color: highlight,
        opacity: 0.6,
        fillColor: active,
        fillOpacity: 0.15
      }
      const activeStyle = {
        fillOpacity: 0.6
      }
      return {
        onEachFeature (feature, layer) {
          // set general style
          layer.setStyle(statewideStyle)
          let fillStyle = statewideStyle

          const pop = () => {
            if (feature.properties.Pop2020) {
              return '<br/>' + '<span class="tip-detail">Pop: ' + feature.properties.Pop2020.toLocaleString() + '</span>'
            } else {
              return
            }
          }

          const IDPs = () => {
            if (feature.properties.IDP_Total !== 0) {
              return '<br/>' + '<span class="tip-detail">IDPs: ' + feature.properties.IDP_Total.toLocaleString() + '</span>'
            } else {
              return ''
            }
          }

          /*
          let sectors = () => {
            let sectorList = []
            self.activities().map((activity) => {
              if (!activity.lgas || activity.lgas.includes(feature.properties.admin2Name_en)) {
                sectorList.push(activity.sector)
              }
            })
            return '<br />' + Array.from(new Set(sectorList))
          }
          */

          // add tooltip
          layer.bindTooltip(
            '<span class="tip-title">' + feature.properties.admin2Name_en + '</span>' +
            pop() +
            IDPs()
            /*
            sectors()
            */
          )

          // set hover events
          layer.addEventListener('mouseover', () => { layer.setStyle({ fillOpacity: 0.35 }) })
          layer.addEventListener('mouseout', () => { layer.setStyle({ fillOpacity: fillStyle.fillOpacity }) })
          layer.addEventListener('click', function () {
            self.$router.push({ name: 'lga', params: { id: feature.properties.admin2Pcode } })
          })

          // Look at each activity. If the activity occurs in this lga, highlight the lga.
          const sectorActivity = self.activities().some(activity => activity.lgas && activity.lgas.includes(feature.properties.admin2Name_en))

          if (sectorActivity) {
            layer.setStyle(activeStyle)
            fillStyle = activeStyle
          }
        }
      }
    },
    options2 () {
      const highlight = this.settings.colors.highlight
      const active = this.settings.colors.active
      const activeStyle = {
        weight: 0.8,
        color: highlight,
        opacity: 0.6,
        fillColor: active,
        fillOpacity: 0.15
      }
      return {
        onEachFeature (feature, layer) {
          // set general style
          layer.setStyle(activeStyle)

          const pop = () => {
            if (feature.properties.Pop2020) {
              return '<br/>' + '<span class="tip-detail">Pop: ' + feature.properties.Pop2020.toLocaleString() + '</span>'
            } else {
              return ''
            }
          }

          const IDPs = () => {
            if (feature.properties.IDP_Total !== 0) {
              return '<br/>' + '<span class="tip-detail">IDPs: ' + feature.properties.IDP_Total.toLocaleString() + '</span>'
            } else {
              return ''
            }
          }

          // add tooltip
          layer.bindTooltip(
            '<span class="tip-title">' + feature.properties.admin2Name_en + '</span>' +
            pop() +
            IDPs()
          )
        }
      }
    },
    updateMap (map) {
      if (map.hasLayer(this.shapes)) { map.removeLayer(this.shapes) }
      if (this.$route.meta.nav === 'prov' && this.$route.params.id) {
        this.shapes = this.geoJSON2
      } else if (this.$route.meta.nav === 'lga' && this.$route.params.id) {
        this.shapes = this.geoJSON3
      } else {
        this.shapes = this.geoJSON
      }
      this.shapes.addTo(map)
      map.setView(this.center, this.zoom)
    }
  },
  mounted () {
    const { mapOptions, url } = this.settings
    this.map = L.map('mapContainer', mapOptions)
    L.tileLayer(url).addTo(this.map)
    this.updateMap(this.map)
  },
  watch: {
    '$route.matched' () {
      this.updateMap(this.map)
    },
    date: function () {
      this.updateMap(this.map)
    }
  }
}
</script>

<style lang="stylus">
@import "../../node_modules/leaflet/dist/leaflet.css";
.leaflet-tooltip
  font-size 15px
  text-align left
  text-transform none

.tip-detail
  font-weight normal
  font-style italic !important
  max-width 200px

.leaflet-bottom.leaflet-right
  display none

.leaflet-interactive
  transition all 0.2s

.leaflet-container
  bottom 0px
  height 100%
  width calc(100% + 500px)
  background-color #fffbf5
</style>
