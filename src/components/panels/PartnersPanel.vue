<template>
  <div class="sidepanel">
    <perfect-scrollbar class="perfect-scrollbar">
      <div v-for="{ partner_code, partner_name } in partners"
        :key="partner_code"
        class="sidepanel-button"
        :class="{ button_selected: selected(partner_code) }"
        v-on:click="navTo('partner', partner_code)"
        v-tooltip.right="{ content: partner_name, trigger: 'hover' }"
      >
        {{ partner_code }}
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'PartnersPanel',
  props: {
    partners: Array,
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
