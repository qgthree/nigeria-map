import states from '../assets/data/states.js'
import lgas from '../assets/data/lgas.js'
import awards from '../assets/data/awards.js'
import sectors from '../assets/data/sectors.js'
import partners from '../assets/data/partners.js'
import dates from '../assets/data/dates.js'
export default {
  namespaced: true,
  state: {
    awards: awards,
    partners: partners,
    sectors: sectors,
    states: states,
    lgas: lgas,
    dates: dates,
    nav: {
      type: null,
      id: null,
      date: null,
      dateSelector: 'off'
    }
  },
  getters: {
    dateList: state => {
      // find the index of the currently-selected date
      let selectedIndex = 0
      const test = state.dates.findIndex(item => item.id === state.nav.date)
      if (test && test > -1) {
        selectedIndex = test
      }
      // set each date's place in the rotation
      const dateList = []
      state.dates.map((item, index) => {
        const spot = index - selectedIndex + 5
        if (spot >= 1 && spot <= 9) {
          item.column = spot
          dateList.push(item)
        }
      })
      return dateList
    },
    lgaSort: state => {
      let lgas = state.lgas.features
      return lgas.sort((a, b) => {
        var nameA = a.properties.admin2Name_en.toUpperCase(); // ignore upper and lowercase
        var nameB = b.properties.admin2Name_en.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    },
    awardsSubset: state => {
      const subset = []
      state.awards.map(award => {
        let endDate
        award.NCE_Date
          ? endDate = new Date(award.NCE_Date)
          : endDate = new Date(award.End_Date)
        const selectedDate = new Date(state.nav.date)
        if (endDate >= selectedDate && award.activities) {
          subset.push(award)
        }
      })
      return subset.sort((a, b) => {
        let x
        let y
        a.NCE_Date ? x = new Date(a.NCE_Date) : x = new Date(a.End_Date)
        b.NCE_Date ? y = new Date(b.NCE_Date) : y = new Date(b.End_Date)
        return x - y
      })
    },
    // for "explore" view
    partner: (state) => () => {
      if (state.nav.type === 'part') {
        return state.partners.find(partner => partner.partner_code === state.nav.id)
      }
    },
    sector: (state) => () => {
      if (state.nav.type === 'sect') {
        return state.sectors.find(sector => sector.code === state.nav.id)
      }
    },
    state: (state) => () => {
      return state.states.features.find(item => item.properties.admin1Pcode === state.nav.id)
    },
    lga: (state) => () => {
      return state.lgas.features.find(item => item.properties.admin2Pcode === state.nav.id)
    },
    // for descriptions
    awardsByPartner: (state, getters) => (partner) => {
      return getters.awardsSubset.filter(award => award.Partner_Code === partner)
    },
    awardsBySector: (state, getters) => (sector) => {
      return getters.awardsSubset.filter(award => award.activities.some(activity => activity.sector === sector))
    },
    awardsByState: (state, getters) => (state) => {
      return getters.awardsSubset.filter(award => award.activities.some(activity => activity.state.includes(state) || activity.state.includes('Countrywide')))
    },
    awardsByLGA: (state, getters) => (lga) => {
      return getters.awardsSubset.filter(award => award.activities.some(activity => (activity.lgas && activity.lgas.includes(lga)) || activity.state.includes('Countrywide')))
    },
    // for map
    activitiesByPartner: (state, getters) => (partner) => {
      const awards = getters.awardsByPartner(partner)
      return awards.map(award => award.activities).flat(1)
    },
    activitiesBySector: (state, getters) => (sector) => {
      const activities = getters.awardsSubset.map(award => award.activities).flat(1)
      return activities.filter(activity => activity.sector === sector)
    },
    activitiesByProvince: (state, getters) => (province) => {
      const prov = state.states.features.find(item => item.properties.admin1Pcode === province)
      const activities = getters.awardsSubset.map(award => award.activities).flat(1)
      return activities.filter(activity => activity.state.includes(prov.properties.admin1Name_en) || activity.state.includes('Countrywide'))
    }
  },
  mutations: {
    setNav (state, data) {
      state.nav.type = data.type
      state.nav.id = data.id
    },
    setDate (state, date) {
      state.nav.date = date
    },
    setSelector (state, status) {
      state.nav.dateSelector = status
    }
  },
  actions: {
    async updateNav ({ commit, state }, payload) {
      const descriptionClosed = duration => {
        return new Promise(resolve => {
          // close the description, then wait a moment
          if (state.nav.type === payload.type) {
            commit('setNav', { type: payload.type, id: null })
          } else {
            commit('setNav', { type: null, id: null })
          }
          setTimeout(resolve, duration)
        })
      }
      try {
        await descriptionClosed(300)
        commit('setNav', payload)
      } catch (err) {
        console.log('error:' + err)
      }
    },
    updateDate ({ commit }, date) {
      commit('setDate', date)
    },
    toggleDateSelector ({ commit, state }) {
      let newState = 'off'
      if (state.nav.dateSelector === 'off') {
        newState = 'on'
      }
      commit('setSelector', newState)
    }
  }
}
