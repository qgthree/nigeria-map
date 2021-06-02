<template>
  <div class="dateSelector">
    <div class="yearSelector">
      <div
        class="arrow"
        v-bind:class="year > currentYear ? 'clickable' : null"
        v-on:click="year > currentYear ? updateYear(-1) : null">
        <IosArrowRoundBackIcon w="15" h="15" />
      </div>
      <div>{{ year }}</div>
      <div
        class="arrow"
        v-bind:class="year < currentYear + 5 ? 'clickable' : null"
        v-on:click="year < currentYear + 5 ? updateYear(1) : null">
        <IosArrowRoundForwardIcon w="15" h="15" />
      </div>
    </div>
    <div class="monthSelector">
      <div
        v-for="(month, index) in months"
        :key="index"
        v-bind:class="[
          monthInactive(index) ? null : 'monthActive',
          date === year + '-' + (index + 1).toString().padStart(2, '0') ? 'monthSelected' : null
        ]"
        v-on:click="monthInactive(index) ? null : [updateDate(year + '-' + (index + 1).toString().padStart(2, '0')), toggleDateSelector()]"
        class="month">
        {{ month }}
      </div>
    </div>
  </div>
</template>

<script>
import IosArrowRoundBackIcon from 'vue-ionicons/dist/ios-arrow-back.vue'
import IosArrowRoundForwardIcon from 'vue-ionicons/dist/ios-arrow-forward.vue'
import { mapActions } from 'vuex'
export default {
  name: 'DateSelector',
  components: {
    IosArrowRoundBackIcon,
    IosArrowRoundForwardIcon
  },
  props: {
    date: String
  },
  data () {
    return {
      currentYear: new Date().getFullYear(),
      year: null,
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  methods: {
    ...mapActions('BHANav', ['updateDate', 'toggleDateSelector']),
    setYear () {
      this.year = parseInt(this.date.substr(0, 4))
    },
    updateYear (inc) {
      this.year = this.year + inc
    },
    monthInactive (index) {
      return this.year <= this.currentYear && (index) < new Date().getMonth()
    }
  },
  mounted () {
    this.setYear()
  }
}
</script>

<style lang="stylus">
@import '../assets/styles/settings.styl'

clickable()
  background-color #fff
  &:hover
    background-color brandNormal
    color #fff
    cursor pointer

.dateSelector
  position fixed
  bottom 60px
  left 30px
  width 250px
  height 200px
  background-color brandNormal
  border-radius 4px
  overflow hidden
  z-index 1999
  -webkit-box-shadow 0px 0px 22px -6px rgba(0,0,0,0.52)
  -moz-box-shadow 0px 0px 22px -6px rgba(0,0,0,0.52)
  box-shadow 0px 0px 22px -6px rgba(0,0,0,0.52)
  .yearSelector
    height 50px
    display grid
    align-items center
    background-color #fff
    border-bottom 1px solid brandNormal
    font-size 20px
    grid-template-columns 25% 50% 25%
    grid-row-gap 1px
    div
      user-select none
    .arrow
      height 100%
      display flex
      justify-content center
      align-items center
      div
        transition opacity 0.3s ease
        opacity 0.3
  .monthSelector
    height 150px
    display grid
    grid-template-columns 25% 25% 25% 25%
    grid-row-gap 1px
    .month
      height 100%
      display flex
      justify-content center
      align-items center
      background-color #f2f2f2
      user-select none
      transition all 0.3s ease
      color rgba(0, 0, 0, 0.5)
    .monthActive
      color rgba(0, 0, 0, 1)
      clickable()
    .monthSelected
      background-color brandActive
.clickable
  transition all 0.3s ease
  clickable()
  div
    opacity 1 !important
</style>
