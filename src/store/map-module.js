export default {
  namespaced: true,
  state: {
    leafSettings: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      // eslint-disable-next-line
      countryCenter: [9.1, 8.66],
      countryZoom: 6.2,
      stateZoom: 7.6,
      lgaZoom: 9,
      minZoom: 2.5,
      maxZoom: 9,
      colors: {
        highlight: '#008751',
        active: '#ffdd00'
      },
      mapOptions: {
        zoomSnap: 0.2,
        zoomControl: false,
        scrollWheelZoom: true,
        doubleClickZoom: false,
        worldCopyJump: true
      }
    }
  }
}
