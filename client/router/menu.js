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
        component: require('../views/charts/Chartjs') // Chartist
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
        path: 'buttons'
      },
      {
        name: 'Form',
        path: 'form'
      },
      {
        name: 'Typography',
        path: 'typography'
      },
      {
        name: 'Icons',
        path: 'icons'
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

    children: [
      {
        name: 'BackToTop',
        path: 'backToTop'
      },
      {
        name: 'Collapse',
        path: 'collapse'
      },
      {
        name: 'Datepicker',
        path: 'datepicker'
      },
      {
        name: 'Emoji',
        path: 'emoji'
      },
      {
        name: 'Message',
        path: 'message'
      },
      {
        name: 'Modal',
        path: 'modal'
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
        path: 'tables/basic',
        meta: {
          label: 'Basic Tables'
        }
      },
      {
        name: 'Handsontable',
        path: 'tables/handsontable'
      }
    ]
  }
]
