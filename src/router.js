import Vue from 'vue'
import Router from 'vue-router'
import Explore from './views/Explore.vue'

Vue.use(Router)

export default new Router({
  base: process.env.NODE_ENV === 'production' ? '/afghanmap-demo/' : '/',
  routes: [
    {
      path: '/',
      name: 'explore',
      component: Explore,
      meta: {
        title: '',
        nav: 'exp'
      },
      children: [
        {
          path: '/partners/',
          name: 'partners',
          component: Explore,
          meta: {
            title: '',
            nav: 'part'
          },
          children: [
            {
              path: '/partners/:id',
              name: 'partner',
              component: Explore,
              meta: {
                title: '',
                nav: 'part'
              }
            }
          ]
        },
        {
          path: '/sectors/',
          name: 'sectors',
          component: Explore,
          meta: {
            title: '',
            nav: 'sect'
          },
          children: [
            {
              path: '/sectors/:id',
              name: 'sector',
              component: Explore,
              meta: {
                title: '',
                nav: 'sect'
              }
            }
          ]
        },
        {
          path: '/states/',
          name: 'states',
          component: Explore,
          meta: {
            title: '',
            nav: 'prov'
          },
          children: [
            {
              path: '/states/:id',
              name: 'state',
              component: Explore,
              meta: {
                title: '',
                nav: 'prov'
              }
            }
          ]
        },
        {
          path: '/lgas/',
          name: 'lgas',
          component: Explore,
          meta: {
            title: '',
            nav: 'lga'
          },
          children: [
            {
              path: '/lgas/:id',
              name: 'lga',
              component: Explore,
              meta: {
                title: '',
                nav: 'lga'
              }
            }
          ]
        }
      ]
    },
    {
      path: '*',
      name: 'catch',
      component: Explore,
      meta: {
        title: '',
        nav: '404'
      }
    }
  ]
})
