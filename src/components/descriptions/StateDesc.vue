<template>
  <div class="desc-container">
    <perfect-scrollbar class="perfect-scrollbar">
      <h2 class="desc-title">{{state.properties.admin1Name_en}}</h2>
      <div class="desc_subtitle">
        <span>{{ awardCount }} award<span v-if="awardCount !== 1">s</span></span>
      </div>
      <AwardList :awards="awardsByState(state.properties.admin1Name_en)" />
    </perfect-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AwardList from '@/components/descriptions/AwardList'
export default {
  name: 'StateDesc',
  components: {
    AwardList
  },
  props: {
    state: Object
  },
  computed: {
    awardCount () {
      return this.awardsByState(this.state.properties.admin1Name_en).length
    },
    ...mapGetters('BHANav', [
      'awardsByState'
    ])
  }
}
</script>
