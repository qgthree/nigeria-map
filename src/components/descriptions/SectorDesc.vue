<template>
  <div class="desc-container">
    <perfect-scrollbar class="perfect-scrollbar">
      <h2 class="desc-title">{{sector.name}}</h2>
      <div class="desc_subtitle">
        <span>{{ awardCount }} award<span v-if="awardCount !== 1">s</span></span>
      </div>
      <AwardList :awards="awardsBySector(sector.code)" :thisSector="sector.code" />
    </perfect-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AwardList from '@/components/descriptions/AwardList'
export default {
  name: 'SectorDesc',
  components: {
    AwardList
  },
  props: {
    sector: Object
  },
  computed: {
    awardCount () {
      return this.awardsBySector(this.sector.code).length
    },
    ...mapGetters('BHANav', [
      'awardsBySector'
    ])
  }
}
</script>
