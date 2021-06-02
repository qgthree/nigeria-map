<template>
  <div class="desc-container">
    <perfect-scrollbar class="perfect-scrollbar">
      <h2 class="desc-title">{{partner.partner_name}}</h2>
      <div class="desc_subtitle">
        <span>{{ awardCount }} award<span v-if="awardCount !== 1">s</span></span>
      </div>
      <AwardList :awards="awardsByPartner(partner.partner_code)" />
    </perfect-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AwardList from '@/components/descriptions/AwardList'
export default {
  name: 'PartnerDesc',
  components: {
    AwardList
  },
  props: {
    partner: Object
  },
  computed: {
    awardCount () {
      return this.awardsByPartner(this.partner.partner_code).length
    },
    ...mapGetters('BHANav', [
      'awardsByPartner'
    ])
  }
}
</script>
