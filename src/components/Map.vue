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
    geoJSON2 () { return L.geoJSON(this.lgas, this.options2(this.lgas)) }
  },
  methods: {
    activities (type, id) {
      if (type === 'sect') {
        return this.activitiesBySector(id)
      } else if (type === 'part') {
        return this.activitiesByPartner(id)
      } else if (type === 'prov') {
        return this.activitiesByProvince(id)
      } else return []
    },
    currentState (feature) {
      if (this.state && feature.properties.admin1Pcode === this.state.properties.admin1Pcode) {
        return true
      }
    },
    options () {
      const self = this
      const highlight = this.settings.colors.highlight
      const active = this.settings.colors.active
      const normalStyle = {
        weight: 1,
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
          layer.bindTooltip(feature.properties.admin1Name_en)
          // Look at each activity. If the activity occurs in this state, highlight the state.
          self.activities(self.$route.meta.nav, self.$route.params.id).map(activity => {
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
        opacity: 0,
        fillColor: highlight,
        fillOpacity: 0
      }
      const activeStyle = {
        weight: 1,
        color: highlight,
        opacity: 0.6,
        fillColor: active,
        fillOpacity: 0.6
      }
      const countrywideStyle = {
        weight: 1,
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
          let fillStyle = noStyle
          if (feature.properties.admin1Pcode === self.$route.params.id) {
            layer.setStyle(countrywideStyle)
            fillStyle = countrywideStyle
            // set hover events on all states
            layer.bindTooltip(feature.properties.admin2Name_en)
            layer.addEventListener('mouseover', () => { layer.setStyle({ fillOpacity: 0.35 }) })
            layer.addEventListener('mouseout', () => { layer.setStyle({ fillOpacity: fillStyle.fillOpacity }) })
          }
          // Look at each activity. If the activity occurs in this state, highlight the state.
          self.activities(self.$route.meta.nav, feature.properties.admin1Name_en).map(activity => {
            if (activity.lgas && activity.lgas.includes(feature.properties.admin2Name_en) && feature.properties.admin1Pcode === self.$route.params.id) {
              layer.setStyle(activeStyle)
              fillStyle = activeStyle
            }
          })
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
