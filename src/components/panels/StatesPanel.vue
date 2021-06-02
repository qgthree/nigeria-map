<template>
  <div class="sidepanel">
    <perfect-scrollbar class="perfect-scrollbar">
      <div v-for="{ properties } in states"
        :key="properties.admin1Pcode"
        class="sidepanel-button"
        :class="{ button_selected: selected(properties.admin1Pcode) }"
        v-on:click="navTo('state', properties.admin1Pcode)"
        v-tooltip.right="{ content: properties.admin1Name_en, trigger: 'hover' }"
      >
        {{ properties.admin1Name_en }}
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'StatesPanel',
  props: {
    states: Array,
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
