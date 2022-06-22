<template>
  <div class="sidepanel">
    <perfect-scrollbar class="perfect-scrollbar">
      <div v-for="{ properties } in lgaSort"
        :key="properties.admin2Pcode"
        class="sidepanel-button"
        :class="{ button_selected: selected(properties.admin2Pcode) }"
        v-on:click="navTo('lga', properties.admin2Pcode)"
        v-tooltip.right="{ content: properties.admin2Name_en, trigger: 'hover' }"
      >
        {{ properties.admin2Name_en }}
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LGAsPanel',
  props: {
    nav: Object
  },
  computed: {
    ...mapGetters('BHANav', ['lgaSort'])
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
