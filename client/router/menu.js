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
    component: require('views/dashboard')
  },
  {
    name: 'Charts',
    path: '/charts',
    meta: {
      icon: 'fa-bar-chart-o',
      expanded: false
    },
    component: require('views/charts'),

    children: [
      {
        name: 'Chartist',
        path: 'chartist',
        component: require('views/charts/Chartist') // Chartist
      },
      {
        name: 'Chartjs',
        path: 'chartjs',
        component: require('views/charts/Chartjs') // Chartjs
      },
      {
        name: 'Peity',
        path: 'peity',
        component: require('views/charts/Peity') // Peity
      },
      {
        name: 'Plotly',
        path: 'plotly',
        component: require('views/charts/Plotly') // Plotly
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
        component: require('views/ui/Buttons') // Buttons
      },
      {
        name: 'Form',
        path: '/form',
        component: require('views/ui/Form') // Form
      },
      {
        name: 'Typography',
        path: '/typography',
        component: require('views/ui/Typography') // Typography
      },
      {
        name: 'Icons',
        path: '/icons',
        component: require('views/ui/Icons') // Icons
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
    component: require('views/components'),

    children: [
      {
        path: '',
        component: require('views/components/Default')
      },
      {
        name: 'BackToTop',
        path: 'backToTop',
        meta: {
          description: 'Jump component is based on jump.js',
          repository: 'https://github.com/vue-bulma/jump'
        },
        component: require('views/components/BackToTop') // BackToTop
      },
      {
        name: 'Collapse',
        path: 'collapse',
        meta: {
          description: 'Collapse component',
          repository: 'https://github.com/vue-bulma/collapse'
        },
        component: require('views/components/Collapse') // Collapse
      },
      {
        name: 'Datepicker',
        path: 'datepicker',
        meta: {
          description: 'Datepicker component is based on flatpickr',
          repository: 'https://github.com/vue-bulma/datepicker'
        },
        component: require('views/components/Datepicker') // Datepicker
      },
      {
        name: 'Emoji',
        path: 'emoji',
        meta: {
          description: 'Emoji Component is based on emojione.com',
          repository: 'https://github.com/vue-bulma/emoji'
        },
        component: require('views/components/Emoji') // Emoji
      },
      {
        name: 'Message',
        path: 'message',
        meta: {
          description: 'Message component',
          repository: 'https://github.com/vue-bulma/message'
        },
        component: require('views/components/Message') // Message
      },
      {
        name: 'Modal',
        path: 'modal',
        meta: {
          description: 'Modal component',
          repository: 'https://github.com/vue-bulma/modal'
        },
        component: require('views/components/Modal') // Modal
      },
      {
        name: 'Notification',
        path: 'notification',
        meta: {
          description: 'Notification component',
          repository: 'https://github.com/vue-bulma/notification'
        },
        component: require('views/components/Notification') // Notification
      },
      {
        name: 'ProgressBar',
        path: 'progress-bar',
        meta: {
          description: 'ProgressBar component',
          repository: 'https://github.com/vue-bulma/progress-bar'
        },
        component: require('views/components/ProgressBar') // ProgressBar
      },
      {
        name: 'ProgressTracker',
        path: 'progress-tracker',
        meta: {
          description: 'ProgressTracker component is based on progress-tracker',
          repository: 'https://github.com/vue-bulma/progress-tracker'
        },
        component: require('views/components/ProgressTracker') // ProgressTracker
      },
      {
        name: 'Rating',
        path: 'rating',
        meta: {
          description: 'Rating component is based on starability.css',
          repository: 'https://github.com/vue-bulma/rating'
        },
        component: require('views/components/Rating') // Rating
      },
      {
        name: 'Slider',
        path: 'slider'
      },
      {
        name: 'Switch',
        path: 'switch',
        meta: {
          description: 'Switch component',
          repository: 'https://github.com/vue-bulma/switch'
        },
        component: require('views/components/Switch') // Switch
      },
      {
        name: 'Tabs',
        path: 'tabs',
        meta: {
          description: 'Tabs component',
          repository: 'https://github.com/vue-bulma/tabs'
        },
        component: require('views/components/Tabs') // Tabs
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
