<template>
  <nav class="BHA-timeline">
    <div class="timeline--left">
      <span class="compass" v-on:click="toggleDateSelector()">
        <IosTimeIcon
          w="30"
          h="30"
          class="pointer"
          v-tooltip.top="{
            content: '<em>Only awards that remain active on the selected date will be shown.</em>',
            classes: 'tipnormal',
            trigger: 'hover'
            }" />
      </span>
    </div>
    <div class="timeline--center">
      <transition-group tag="div" class="BHA-items--grid">
        <div
          v-for="{ id, column, month, year } in dates"
          v-on:click="updateDate(id)"
          :key="id"
          :class="`col${column} BHA-items--item pointer`"
          tabindex="-1">
          {{ monthString(month) }} ’{{ yearString(year) }}
        </div>
      </transition-group>
    </div>
    <div class="timeline--right">
      <span
        v-on:click="getDate(4) ? updateDate(getDate(4).id) : null"
        v-bind:class="getDate(4) ? 'pointer' : null"
      >
        <IosArrowRoundBackIcon w="30" h="30" />
      </span>
      <span
        v-on:click="getDate(6) ? updateDate(getDate(6).id) : null"
        v-bind:class="getDate(6) ? 'pointer' : null"
      >
        <IosArrowRoundForwardIcon w="30" h="30" />
      </span>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import IosTimeIcon from 'vue-ionicons/dist/ios-time.vue'
import IosArrowRoundBackIcon from 'vue-ionicons/dist/ios-arrow-back.vue'
import IosArrowRoundForwardIcon from 'vue-ionicons/dist/ios-arrow-forward.vue'
export default {
  name: 'Timeline',
  components: {
    IosTimeIcon,
    IosArrowRoundBackIcon,
    IosArrowRoundForwardIcon
  },
  props: {
    dates: Array
  },
  methods: {
    ...mapActions('BHANav', ['updateDate', 'toggleDateSelector']),
    getDate (spot) {
      return this.dates.find(date => date.column === spot)
    },
    monthString (month) {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      return monthNames[month - 1]
    },
    yearString (year) {
      return year.toString().substr(2, 2)
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/styles/settings.styl'
// mixins
menuButtons()
  height 30px
  align-self center

pointer(x)
  .pointer
    opacity x
    cursor pointer
    &:hover
      opacity 1

spot(x, y)
  grid-row-start x
  grid-row-end x+1
  grid-column-start y
  grid-column-end y+1

responsiveGrid(x)
  .BHA-items--grid
    width x + '%'
    left ((x - 100) / -2) + '%'

.BHA-timeline
  position fixed
  bottom 0px
  left 0px
  height 50px
  width 100%
  display grid
  grid-template-columns 25% 50% 25%
  padding 0px 30px
  white-space nowrap
  background-color brandNormal
  z-index 2000
  color #FFF
  .timeline--left
    text-align left
    menuButtons()
    pointer(1)
  .timeline--center
    align-self center
    overflow hidden
    pointer(0.7)
  .timeline--right
    text-align right
    menuButtons()
    span
      opacity 0.5
      transition all 200ms ease
    pointer(1)

  // template styles
  .BHA-items--grid
    display grid
    grid-template-columns repeat(9, 1fr)
    position relative
    .BHA-items--item
      display flex
      align-items center
      justify-content center
      font-size 18px
      transition all 200ms ease
      outline 0
      height 50px
      user-select none
    .col1
      spot 1 1
    .col2
      spot 1 2
    .col3
      spot 1 3
    .col4
      spot 1 4
    .col5
      spot 1 5
      color #fff !important
      cursor default
      opacity 1
    .col6
      spot 1 6
    .col7
      spot 1 7
    .col8
      spot 1 8
    .col9
      spot 1 9
    .BHA-items--item:before
      content ""
      display grid
      position absolute
      height 3px
      width 50px
      bottom 0px
      background-color bgColor
      visibility hidden
      -webkit-transform scaleX(0)
      transform scaleX(0)
      -webkit-transition all 0.5s ease-in-out 0s
      transition all 0.4s ease-in-out 0s
    .BHA-items--item.col5:before
      visibility visible
      -webkit-transform scaleX(1)
      transform scaleX(1)

  .col1, .col2, .col8, .col9
    opacity 0

  responsiveGrid(300)

  @media screen and (min-width 800px)
    responsiveGrid(175)
</style>
