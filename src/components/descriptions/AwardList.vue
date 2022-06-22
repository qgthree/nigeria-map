<template>
  <transition-group name="desc-card" tag="div" class="desc-award-list">
    <div v-for="{ Partner_Code, Number, total, Summary, Start_Date, End_Date, NCE_Date } in awards" :key="Number" class="desc-card">
      <IosInfoIcon
        v-if="Summary"
        w="14"
        h="14"
        class="info-icon"
        v-tooltip.right="{
          content: Summary,
          classes: 'tipnormal',
          trigger: 'hover',
          offset: '20'
          }" />
      <div class="desc-data">
        <span class="desc-data_label">
          Award:
        </span>
        <span>{{ Number }}</span>
      </div>
      <div class="desc-data" v-if="$route.meta.nav !== 'part'">
        <span class="desc-data_label">Partner: </span>
        <router-link class="desc-data_link" :to="{name: 'partner', params: { id: Partner_Code }}">{{ Partner_Code }}</router-link>
      </div>
      <div class="award-table">
        <div class="award-table_labels">
          <div>SECTOR</div>
          <div>STATE(S)</div>
          <div class="award-table_labels_amt">AMOUNT</div>
        </div>
        <div class="award-table_activity" v-for="{ sector, state, amount } in activities(Number)" :key="sector">
          <div class="award-table_activity_sector">
            <span
              v-if="sector === thisSector"
              v-tooltip.top="{
                content: sectorByActivity(sector).name,
                classes: 'tipnormal',
                trigger: 'hover' }"
              :class="`sectorActive icon icon-${sectorByActivity(sector).icon}`">
            </span>
            <router-link
              v-else
              :to="{name: 'sector', params: { id: sector }}"
              v-tooltip.top="{
                content: sectorByActivity(sector).name,
                classes: 'tipnormal',
                trigger: 'hover' }"
              :class="`icon icon-${sectorByActivity(sector).icon}`">
            </router-link>
          </div>
          <div
            class="award-table_activity_state"
            v-tooltip.top="{
              content: state.join(', '),
              classes: 'tipnormal',
              trigger: 'hover'
              }">
            <span
              v-for="(place, index) in state" :key="index">
              {{ place }}<span v-if="index !== state.length - 1">, </span>
            </span>
          </div>
          <div class="award-table_activity_amt">
            <span v-if="amount">{{ amount.toLocaleString('en') }}</span>
          </div>
        </div>
        <div class="award-table_summary">
          <div>TOTAL</div>
          <div></div>
          <div class="award-table_summary_amt">{{ TotalAmt(Number) }}</div>
        </div>
      </div>
      <div class="award-table">
        <div class="award-table_labels">
          <div>START</div>
          <div>END</div>
          <div>NCE</div>
        </div>
        <div class="award-table_summary">
          <div>{{ Start_Date }}</div>
          <div>{{ End_Date }}</div>
          <div>{{ NCE_Date }}</div>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import { mapState } from 'vuex'
import IosInfoIcon from 'vue-ionicons/dist/ios-information-circle.vue'
export default {
  name: 'AwardList',
  components: {
    IosInfoIcon
  },
  props: {
    awards: Array,
    thisSector: String
  },
  computed: {
    ...mapState('BHANav', ['sectors'])
  },
  methods: {
    TotalAmt (awardNumber) {
      const award = this.awards.find(award => award.Number === awardNumber)
      if (award.total) {
        return '$' + award.total.toLocaleString('en')
      } else if (!award.activities || !award.activities.find(activity => activity.amount)) {
        return 'n/a'
      } else {
        const allocated = award.activities.map(activity => parseFloat(activity.amount))
        return '$' + allocated.reduce((a, b) => a + b, 0).toLocaleString('en')
      }
    },
    activities (awardNumber) {
      return this.awards.find(award => award.Number === awardNumber).activities
    },
    sectorByActivity (code) {
      return this.sectors.find(sector => sector.code === code)
    }
  }
}
</script>

<style lang="stylus" scoped >
@import '../../assets/styles/settings.styl'
row(x)
  display grid
  align-items center
  padding x 8px
  grid-template-columns 1fr 1fr 1fr

.info-icon
  margin-left 6px
  bottom -2px
  opacity 0.4
  float right
  position relative
  top -10px
  right -10px

.award-table
  margin-bottom 20px
  font-size 14px
  .award-table_labels
    row(1px)
    font-style italic
    font-weight normal
    background-color rgba(0, 0, 0, 0.05)
    border-radius 4px
    margin-bottom 5px
  .award-table_activity
    row(3px)
    background-image linear-gradient(to right, #333 10%, rgba(255, 255, 255, 0) 0%)
    background-position bottom
    background-size 10px 1px
    background-repeat repeat-x
    .award-table_activity_sector
      display flex
      align-items center
      .icon
        font-size 22px
        transition all .2s
        color brandNormal
        &:hover, &:active
          color brandActive
          text-decoration none
      .sectorActive
        color brandActive
    .award-table_activity_state
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      cursor default
  .award-table_summary
    row(3px)
    font-style italic
    font-weight normal
.award-table_labels_amt,
.award-table_activity_amt,
.award-table_summary_amt
  text-align right
</style>
