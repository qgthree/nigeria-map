<template>
  <div class="menu">
    <router-link class="menu-box"
      v-tooltip.bottom="{ content: 'Home', trigger: 'hover' }"
      :class="{ button_selected: selected('exp') }"
      :to="{name: 'explore'}">
      <span class="menu-box-icon humanitarian-icon-House"></span>
    </router-link>
    <router-link class="menu-box"
      v-tooltip.bottom="{ content: 'Partners', trigger: 'hover' }"
      :class="{ button_selected: selected('part') }"
      :to="{name: 'partners'}">
      <span class="menu-box-icon humanitarian-icon-Partnership"></span>
    </router-link>
    <router-link class="menu-box"
      v-tooltip.bottom="{ content: 'Sectors', trigger: 'hover' }"
      :class="{ button_selected: selected('sect') }"
      :to="{name: 'sectors'}">
      <span class="menu-box-icon humanitarian-icon-Chart"></span>
    </router-link>
    <router-link class="menu-box"
      v-tooltip.bottom="{ content: 'States', trigger: 'hover' }"
      :class="{ button_selected: selected('prov') }"
      :to="{name: 'states'}">
      <span class="menu-box-icon humanitarian-icon-Location"></span> 1
    </router-link>
    <router-link class="menu-box"
      v-tooltip.bottom="{ content: 'LGAs', trigger: 'hover' }"
      :class="{ button_selected: selected('lga') }"
      :to="{name: 'lgas'}">
      <span class="menu-box-icon humanitarian-icon-Location"></span> 2
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MapMenu',
  props: {
    nav: Object
  },
  methods: {
    selected (id) {
      if (id === this.nav.type) {
        return true
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/styles/settings.styl'
.menu
  position fixed
  top 15px
  right 15px
  height 50px
  width 325px
  display grid
  grid-template-columns 1fr 1fr 1fr 1fr 1fr
  padding 0px 20px
  background-color brandNormal
  border-radius 4px
  z-index 2000
  .menu-box
    display flex
    align-items center
    justify-content center
    height 100%
    width 100%
    cursor pointer
    text-decoration none
    color bgColor
    .menu-box-icon
      width 30px
      transition all 0.25s ease
      font-size 14px
      opacity 0.6
    .menu-box-text
      margin-left 15px
      text-transform uppercase
      font-size 14px
      font-weight bold
  .button_selected, .menu-box:hover
    .menu-box-icon
      font-size 24px
      opacity 1
</style>
