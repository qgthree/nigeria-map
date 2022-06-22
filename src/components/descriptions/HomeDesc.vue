<template>
  <div class="desc-container">
    <perfect-scrollbar class="perfect-scrollbar">
      <h2 class="desc-title">Awards in Nigeria</h2>
      <div class="desc_subtitle">Updated July 12, 2021</div>
      <div class="desc_summary">
        This interactive tool details BHA awards currently active in Nigeria. Use the map and menus to view awards related to a specific <router-link :to="{name: 'partners'}">partner</router-link>, <router-link :to="{ name: 'sectors' }">sector</router-link>, <router-link :to="{ name: 'states' }">state</router-link>, or <router-link :to="{ name: 'lgas' }">LGA</router-link>. Use the date selector or timeline to list only awards that will remain active after the selected date.
      </div>
      <div class="desc_sources">
        <div style="text-decoration: underline;">Data Sources</div>
        <div>Administrative Boundaries | OCHA Humanitarian Data Exchange (HDX) (2021)</div>
        <div>Population Data | OCHA Humanitarian Data Exchange (HDX) (2020)</div>
        <div>IDP Data | Displacement Tracking Matrix / International Organization for Migration, <em>Nigeria — Site Assessment — Round 36</em> (2021)</div>
      </div>
      <!--
      <div class="desc_sources">
        <div><strong>Data Sources</strong></div>
        <div>Administrative Boundaries | <a href="https://data.humdata.org/group/nga?ext_cod=1#dataset-filter-start" target="_blank">OCHA Humanitarian Data Exchange (HDX)</a> (2021)</div>
        <div>Population Data | <a href="https://data.humdata.org/group/nga?ext_cod=1#dataset-filter-start" target="_blank">OCHA Humanitarian Data Exchange (HDX)</a> (2020)</div>
        <div>IDP Data | <a href="https://displacement.iom.int/datasets/nigeria-%E2%80%94-site-assessment-%E2%80%94-round-36" target="_blank">Displacement Tracking Matrix / International Organization for Migration, <em>Nigeria — Site Assessment — Round 36</em></a> (2021)</div>
      </div>
      -->
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
    .desc_summary, .desc_sources
      text-align justify
      font-style normal !important
      a
        color brandNormal
        text-decoration underline
    .desc_sources
      margin-top 50px
      font-size 11px
</style>
