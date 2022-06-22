<template>
  <main class="OFDA-explore">
    <WorldMap
      :settings="leafSettings"
      :states="states"
      :lgas="lgas"
      :date="nav.date" />
    <MapMenu :nav="nav" />
    <transition name="slide-fade">
      <PartnersPanel v-if="nav.type === 'part'"
        :partners="partners"
        :nav="nav" />
      <SectorsPanel v-if="nav.type === 'sect'"
        :sectors="sectors"
        :nav="nav" />
      <StatesPanel v-if="nav.type === 'prov'"
        :states="states.features"
        :nav="nav" />
      <LGAsPanel v-if="nav.type === 'lga'"
        :nav="nav" />
    </transition>
    <transition name="slide-fade">
      <HomeDesc v-if="nav.type === 'exp'" />
      <PartnerDesc v-if="partner()" :partner="partner()" />
      <SectorDesc v-if="sector()" :sector="sector()" />
      <StateDesc v-if="state()" :state="state()" />
      <LGADesc v-if="lga()" :lga="lga()" />
    </transition>
    <transition name="slide-fade-up">
      <Timeline v-if="id !== null" :dates="dateList" />
    </transition>
    <transition name="slide-fade-up">
      <DateSelector
        v-if="nav.dateSelector === 'on' && id !== null"
        :date="nav.date" />
    </transition>
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import MapMenu from '@/components/Menu.vue'
import Timeline from '@/components/Timeline.vue'
import DateSelector from '@/components/DateSelector.vue'
import WorldMap from '@/components/Map.vue'
import PartnersPanel from '@/components/panels/PartnersPanel.vue'
import SectorsPanel from '@/components/panels/SectorsPanel.vue'
import StatesPanel from '@/components/panels/StatesPanel.vue'
import LGAsPanel from '@/components/panels/LGAsPanel.vue'
import HomeDesc from '@/components/descriptions/HomeDesc.vue'
import PartnerDesc from '@/components/descriptions/PartnerDesc'
import SectorDesc from '@/components/descriptions/SectorDesc'
import StateDesc from '@/components/descriptions/StateDesc'
import LGADesc from '@/components/descriptions/LGADesc'

export default {
  name: 'Explore',
  components: {
    WorldMap,
    PartnersPanel,
    SectorsPanel,
    StatesPanel,
    LGAsPanel,
    HomeDesc,
    PartnerDesc,
    SectorDesc,
    StateDesc,
    LGADesc,
    MapMenu,
    Timeline,
    DateSelector
  },
  computed: {
    ...mapState('BHAMap', ['leafSettings']),
    ...mapState('BHANav', [
      'states',
      'lgas',
      'partners',
      'sectors',
      'nav'
    ]),
    ...mapGetters('BHANav', [
      'partner',
      'sector',
      'state',
      'lga',
      'dateList'
    ]),
    type () {
      return this.$route.meta.nav || null
    },
    id () {
      return this.$route.params.id || null
    }
  },
  methods: {
    ...mapActions('BHANav', ['updateNav', 'updateDate']),
    date () {
      const start = new Date()
      const year = start.getFullYear()
      const month = start.getMonth() + 1
      return year + '-' + month.toString().padStart(2, '0')
    }
  },
  created () {
    this.updateNav({ type: this.type, id: this.id })
    this.updateDate(this.date())
  },
  watch: {
    '$route.matched' () {
      this.updateNav({ type: this.type, id: this.id })
    }
  }
}
</script>

<style scoped lang="stylus">
.OFDA-explore
  min-width 320px
  height 100vh
</style>
