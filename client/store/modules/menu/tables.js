import lazyLoading from './lazyLoading'

export default {
  name: 'Tables',
  meta: {
    icon: 'fa-table',
    expanded: false
  },

  children: [
    {
      name: 'BasicTables',
      path: '/tables/basic',
      meta: {
        label: 'Basic Tables',
        link: 'tables/Basic.vue'
      },
      component: lazyLoading('tables/Basic')
    },
    {
      name: 'Handsontable',
      path: '/tables/handsontable',
      meta: {
        link: 'tables/Handsontable.vue'
      },
      component: lazyLoading('tables/Handsontable')
    }
  ]
}
