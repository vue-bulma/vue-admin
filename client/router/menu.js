// show: meta.label -> name
// name: component name
// meta.label: display label

// lazy loading Components
// const Chartjs = resolve => require(['../views/charts/Chartjs.vue'], resolve)
// const Chartist = resolve => require(['../views/charts/Chartist.vue'], resolve)
// const Peity = resolve => require(['../views/charts/Peity.vue'], resolve)
// const Plotly = resolve => require(['../views/charts/Plotly.vue'], resolve)

export default [
  {
    name: 'Dashboard',
    path: '/dashboard',
    meta: {
      icon: 'fa-tachometer'
    },
    component: require('../views/dashboard')
  },
  {
    name: 'Charts',
    path: '/charts',
    meta: {
      icon: 'fa-bar-chart-o',
      expanded: false
    },
    component: require('../views/charts'),

    children: [
      {
        name: 'Chartist',
        path: 'chartist',
        component: require('../views/charts/Chartist') // Chartist
      },
      {
        name: 'Chartjs',
        path: 'chartjs',
        component: require('../views/charts/Chartjs') // Chartjs
      },
      {
        name: 'Peity',
        path: 'peity',
        component: require('../views/charts/Peity') // Peity
      },
      {
        name: 'Plotly',
        path: 'plotly',
        component: require('../views/charts/Plotly') // Plotly
      }
    ]
  },
  {
    meta: {
      label: 'UI Features',
      icon: 'fa-laptop',
      expanded: false,
    },

    children: [
      {
        name: 'Buttons',
        path: '/buttons',
        component: require('../views/ui/Buttons') // Buttons
      },
      {
        name: 'Form',
        path: '/form',
        component: require('../views/ui/Form') // Form
      },
      {
        name: 'Typography',
        path: '/typography',
        component: require('../views/ui/Typography') // Typography
      },
      {
        name: 'Icons',
        path: '/icons',
        component: require('../views/ui/Icons') // Icons
      }
    ]
  },
  {
    name: 'Components',
    path: '/components',
    meta: {
      icon: 'fa-building-o',
      expanded: false
    },
    component: require('../views/components'),

    children: [
      {
        path: '',
        component: require('../views/components/Default')
      },
      {
        name: 'BackToTop',
        path: 'backToTop',
        meta: {
          repository: 'https://github.com/vue-bulma/jump'
        },
        component: require('../views/components/BackToTop') // BackToTop
      },
      {
        name: 'Collapse',
        path: 'collapse',
        meta: {
          repository: 'https://github.com/vue-bulma/collapse'
        },
        component: require('../views/components/Collapse') // Collapse
      },
      {
        name: 'Datepicker',
        path: 'datepicker',
        meta: {
          repository: 'https://github.com/vue-bulma/datepicker'
        },
        component: require('../views/components/Datepicker') // Datepicker
      },
      {
        name: 'Emoji',
        path: 'emoji',
        meta: {
          repository: 'https://github.com/vue-bulma/emoji'
        },
        component: require('../views/components/Emoji') // Emoji
      },
      {
        name: 'Message',
        path: 'message',
        meta: {
          repository: 'https://github.com/vue-bulma/message'
        },
        component: require('../views/components/Message') // Message
      },
      {
        name: 'Modal',
        path: 'modal',
        meta: {
          repository: 'https://github.com/vue-bulma/modal'
        },
        component: require('../views/components/Modal') // Modal
      },
      {
        name: 'Notification',
        path: 'notification'
      },
      {
        name: 'Progress',
        path: 'progress'
      },
      {
        name: 'Rating',
        path: 'rating'
      },
      {
        name: 'Slider',
        path: 'slider'
      },
      {
        name: 'Switch',
        path: 'switch'
      },
      {
        name: 'Tabs',
        path: 'tabs'
      },
      {
        name: 'Tooltip',
        path: 'tooltip'
      }
    ]
  },
  {
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
          label: 'Basic Tables'
        },
        component: require('../views/tables/Basic') // Basic
      },
      {
        name: 'Handsontable',
        path: '/tables/handsontable',
        component: require('../views/tables/Handsontable') // Handsontable
      }
    ]
  }
]
