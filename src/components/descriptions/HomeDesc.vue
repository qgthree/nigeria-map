<template>
  <div class="desc-container">
    <perfect-scrollbar class="perfect-scrollbar">
      <h2 class="desc-title">Awards in Nigeria</h2>
      <div class="desc_subtitle">Updated April 27, 2021</div>
      <div class="desc_summary">
        This interactive tool details BHA awards currently active in Nigeria. Use the map and menus to view awards related to a specific <router-link :to="{name: 'partners'}">partner</router-link>, <router-link :to="{ name: 'sectors' }">sector</router-link>, or <router-link :to="{ name: 'states' }">state</router-link>. Use the date selector or timeline to list only awards that will remain active after the selected date.
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'HomeDesc'
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/settings.styl'
.desc-container
  display grid
  align-items center
  padding 0px 20px
  .perfect-scrollbar
    .desc-title
      font-size 28px !important
    .desc_subtitle
      font-size 14px
      opacity 0.8
    .desc_summary
      text-align justify
      font-style normal !important
      a
        color brandNormal
        text-decoration underline
</style>
