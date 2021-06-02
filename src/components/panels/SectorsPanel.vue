<template>
  <div class="sidepanel">
    <perfect-scrollbar class="perfect-scrollbar">
      <div v-for="{ code, name, icon } in sectors"
        :key="code"
        class="sidepanel-button"
        :class="{ button_selected: selected(code) }"
        v-on:click="navTo('sector', code)"
        v-tooltip.right="{ content: name, trigger: 'hover' }"
      >
        <div>
          <span :class="`icon icon-${icon}`"></span>
          <span>{{ code }}</span>
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'SectorsPanel',
  props: {
    sectors: Array,
    nav: Object
  },
  methods: {
    selected (id) {
      if (id === this.nav.id) {
        return true
      }
    },
    navTo (type, id) {
      if (id !== this.nav.id) {
        this.$router.push({ name: type, params: { id: id } })
      }
    }
  }
}
</script>
