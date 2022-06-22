<template>
  <div class="desc-container">
    <perfect-scrollbar class="perfect-scrollbar">
      <h2 class="desc-title">{{lga.properties.admin2Name_en}}</h2>
      <div class="desc-card">
        <div class="desc-data">
          <span class="desc-data_label">
            LGA in <router-link :to="{name: 'state', params: { id: lga.properties.admin1Pcode }}">{{lga.properties.admin1Name_en}}</router-link>
          </span>
        </div>
        <div class="desc-data">
          <span class="desc-data_label">
            Population:
          </span>
          <span>{{lga.properties.Pop2020.toLocaleString()}}</span>
        </div>
        <div class="desc-data" v-if="lga.properties.IDP_Total.toLocaleString() !== '0'" >
          <span class="desc-data_label">
            IDP Total:
          </span>
          <span>{{lga.properties.IDP_Total.toLocaleString()}}</span>
        </div>
      </div>
      <div class="desc_subtitle">
        <span>{{ awardCount }} award<span v-if="awardCount !== 1">s</span></span>
      </div>
      <AwardList :awards="awardsByLGA(lga.properties.admin2Name_en)" />
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
    lga: Object
  },
  computed: {
    awardCount () {
      return this.awardsByLGA(this.lga.properties.admin2Name_en).length
    },
    ...mapGetters('BHANav', [
      'awardsByLGA'
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
