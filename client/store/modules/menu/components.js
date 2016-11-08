import { lazyLoading } from './lazyLoading'

export default {
  name: 'Components',
  path: '/components',
  meta: {
    icon: 'fa-building-o',
    expanded: false
  },
  component: lazyLoading('components', true),

  children: [
    {
      path: '',
      component: lazyLoading('components/Default')
    },
    {
      name: 'BackToTop',
      path: 'backToTop',
      meta: {
        description: 'Jump component is based on jump.js',
        repository: 'https://github.com/vue-bulma/jump'
      },
      component: lazyLoading('components/BackToTop')
    },
    {
      name: 'Collapse',
      path: 'collapse',
      meta: {
        description: 'Collapse component',
        repository: 'https://github.com/vue-bulma/collapse'
      },
      component: lazyLoading('components/Collapse')
    },
    {
      name: 'Datepicker',
      path: 'datepicker',
      meta: {
        description: 'Datepicker component is based on flatpickr',
        repository: 'https://github.com/vue-bulma/datepicker'
      },
      component: lazyLoading('components/Datepicker')
    },
    {
      name: 'Emoji',
      path: 'emoji',
      meta: {
        description: 'Emoji Component is based on emojione.com',
        repository: 'https://github.com/vue-bulma/emoji'
      },
      component: lazyLoading('components/Emoji')
    },
    {
      name: 'Message',
      path: 'message',
      meta: {
        description: 'Message component',
        repository: 'https://github.com/vue-bulma/message'
      },
      component: lazyLoading('components/Message')
    },
    {
      name: 'Modal',
      path: 'modal',
      meta: {
        description: 'Modal component',
        repository: 'https://github.com/vue-bulma/modal'
      },
      component: lazyLoading('components/Modal')
    },
    {
      name: 'Notification',
      path: 'notification',
      meta: {
        description: 'Notification component',
        repository: 'https://github.com/vue-bulma/notification'
      },
      component: lazyLoading('components/Notification')
    },
    {
      name: 'ProgressBar',
      path: 'progress-bar',
      meta: {
        description: 'ProgressBar component',
        repository: 'https://github.com/vue-bulma/progress-bar'
      },
      component: lazyLoading('components/ProgressBar')
    },
    {
      name: 'ProgressTracker',
      path: 'progress-tracker',
      meta: {
        description: 'ProgressTracker component is based on progress-tracker',
        repository: 'https://github.com/vue-bulma/progress-tracker'
      },
      component: lazyLoading('components/ProgressTracker')
    },
    {
      name: 'Quill',
      path: 'quill',
      meta: {
        description: 'Your powerful, rich text editor',
        repository: 'https://github.com/vue-bulma/quill'
      },
      component: lazyLoading('components/Quill')
    },
    {
      name: 'Rating',
      path: 'rating',
      meta: {
        description: 'Rating component is based on starability.css',
        repository: 'https://github.com/vue-bulma/rating'
      },
      component: lazyLoading('components/Rating')
    },
    {
      name: 'Slider',
      path: 'slider',
      meta: {
        description: 'Slider component',
        repository: 'https://github.com/vue-bulma/slider'
      },
      component: lazyLoading('components/Slider')
    },
    {
      name: 'Switch',
      path: 'switch',
      meta: {
        description: 'Switch component',
        repository: 'https://github.com/vue-bulma/switch'
      },
      component: lazyLoading('components/Switch')
    },
    {
      name: 'Tabs',
      path: 'tabs',
      meta: {
        description: 'Tabs component',
        repository: 'https://github.com/vue-bulma/tabs'
      },
      component: lazyLoading('components/Tabs')
    },
    {
      name: 'Tooltip',
      path: 'tooltip',
      meta: {
        description: 'Tooltip component is based on hint.css',
        repository: 'https://github.com/vue-bulma/tooltip'
      },
      component: lazyLoading('components/Tooltip')
    },
    {
      name: 'Lory',
      path: 'lory',
      meta: {
        description: 'Slider component is based on lory, lory: ☀ Touch enabled minimalistic slider',
        repository: 'https://github.com/vue-bulma/lory'
      },
      component: lazyLoading('components/Lory')
    }
  ]
}
