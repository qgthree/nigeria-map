<template>
  <div class="desc-container">
    <perfect-scrollbar class="perfect-scrollbar">
      <h2 class="desc-title">{{state.properties.admin1Name_en}}</h2>
      <div class="desc-card">
        <div class="desc-data">
          <span class="desc-data_label">
            State in Nigeria
          </span>
        </div>
        <div class="desc-data">
          <span class="desc-data_label">
            Population:
          </span>
          <span>{{state.properties.Pop2020.toLocaleString()}}</span>
        </div>
      </div>
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

<style lang="stylus" scoped >
@import '../../assets/styles/settings.styl'
.desc-card
  margin-top 30px !important
  border-left 1px solid #e6e6e6
  .desc-data
    text-align center
    margin 5px
</style>
