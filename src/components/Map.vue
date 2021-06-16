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
    center () {
      return this.state ? [this.state.properties.Y, this.state.properties.X] : this.settings.countryCenter
    },
    zoom () { return this.state ? this.settings.stateZoom : this.settings.countryZoom },
    geoJSON () { return L.geoJSON(this.states, this.options(this.states)) },
    geoJSON2 () {
      return L.geoJSON(
        this.lgaSubset(),
        this.options2(this.lgaSubset())
      )
    }
  },
  methods: {
    lgaSubset () {
      const lgafeatures = this.lgas.features.filter(lga => lga.properties.admin1Pcode === this.$route.params.id)
      const subset = { type: this.lgas.type, features: lgafeatures }
      return subset
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
    options () {
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
      const activeStyle = {
        opacity: 0.6,
        fillColor: active,
        fillOpacity: 0.6
      }
      const countrywideStyle = {
        opacity: 0.6,
        fillColor: active,
        fillOpacity: 0.15
      }
      return {
        style () {
          return normalStyle
        },
        onEachFeature (feature, layer) {
          let fillStyle = normalStyle
          layer.bindTooltip(
            '<span class="tip-title">' + feature.properties.admin1Name_en + '</span>' +
            '<br/>' +
            '<span class="tip-pop">Pop. ' + feature.properties.SUM_Population2016.toLocaleString() + '</span>'
          )
          // Look at each activity. If the activity occurs in this state, highlight the state.
          self.activities().map(activity => {
            if (activity.state.includes(feature.properties.admin1Name_en)) {
              layer.setStyle(activeStyle)
              fillStyle = activeStyle
            } else if (activity.state.includes('Countrywide') && fillStyle !== activeStyle) {
              layer.setStyle(countrywideStyle)
              fillStyle = countrywideStyle
            }
          })
            layer.addEventListener('mouseover', () => { layer.setStyle({ fillOpacity: 0.35 }) })
            layer.addEventListener('mouseout', () => { layer.setStyle({ fillOpacity: fillStyle.fillOpacity }) })
            layer.addEventListener('click', function () {
              self.$router.push({ name: 'state', params: { id: feature.properties.admin1Pcode } })
            })
        }
      }
    },
    options2 () {
      const self = this
      const highlight = this.settings.colors.highlight
      const active = this.settings.colors.active
      const noStyle = {
        weight: 0,
        opacity: 0,
        fillColor: highlight,
        fillOpacity: 0
      }
      const activeStyle = {
        weight: 0.8,
        color: highlight,
        opacity: 0.6,
        fillColor: active,
        fillOpacity: 0.6
      }
      const statewideStyle = {
        weight: 0.8,
        color: highlight,
        opacity: 0.6,
        fillColor: active,
        fillOpacity: 0.15
      }
      return {
        style () {
          return noStyle
        },
        onEachFeature (feature, layer) {
          // set general style
          layer.setStyle(statewideStyle)
          let fillStyle = statewideStyle

          let sectors = () => {
            let sectorList = []
            self.activities().map((activity) => {
              if (!activity.lgas || activity.lgas.includes(feature.properties.admin2Name_en)) {
                sectorList.push(activity.sector)
              }
            })
            return Array.from(new Set(sectorList))
          }

          // add tooltip
          layer.bindTooltip(
            '<span class="tip-title">' + feature.properties.admin2Name_en + '</span>' +
            '<br/>' +
            '<span class="tip-pop">Pop. ' + feature.properties.Population2016.toLocaleString() + '</span>' +
            '<br/>' +
            sectors()
          )

          // highlight selected state; set hover events on all other states
          layer.addEventListener('mouseover', () => { layer.setStyle({ fillOpacity: 0.35 }) })
          layer.addEventListener('mouseout', () => { layer.setStyle({ fillOpacity: fillStyle.fillOpacity }) })

          // Look at each activity. If the activity occurs in this lga, highlight the lga.
          const sectorActivity = self.activities().some(activity => activity.lgas && activity.lgas.includes(feature.properties.admin2Name_en))
          if (sectorActivity) {
            layer.setStyle(activeStyle)
            fillStyle = activeStyle
          }
        }
      }
    },
    updateMap (map) {
      if (map.hasLayer(this.shapes)) { map.removeLayer(this.shapes) }
      if (this.$route.meta.nav === 'prov' && this.$route.params.id) {
        this.shapes = this.geoJSON2
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
  font-size 14px
  text-align left
  text-transform none

.tip-pop
  font-weight normal
  font-style italic !important

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
