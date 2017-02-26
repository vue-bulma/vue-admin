import lazyLoading from './lazyLoading'

export default {
  path: '/components',
  meta: {
    icon: 'fa-building-o',
    expanded: false,
    label: 'Components'
  },
  component: lazyLoading('components', true),

  children: [
    {
      name: 'Components',
      path: '',
      component: lazyLoading('components/Default'),
      meta: {
        link: 'components/Default.vue'
      }
    },
    {
      name: 'BackToTop',
      path: 'backToTop',
      meta: {
        description: 'Jump component is based on jump.js',
        repository: 'https://github.com/vue-bulma/jump',
        link: 'components/BackToTop.vue'
      },
      component: lazyLoading('components/BackToTop')
    },
    {
      name: 'Brace',
      path: 'brace',
      meta: {
        description: 'Code editor component that based on brace',
        repository: 'https://github.com/vue-bulma/brace',
        link: 'components/Brace.vue'
      },
      component: lazyLoading('components/Brace')
    },
    {
      name: 'Collapse',
      path: 'collapse',
      meta: {
        description: 'Collapse component',
        repository: 'https://github.com/vue-bulma/collapse',
        link: 'components/Collapse.vue'
      },
      component: lazyLoading('components/Collapse')
    },
    {
      name: 'Datepicker',
      path: 'datepicker',
      meta: {
        description: 'Datepicker component is based on flatpickr',
        repository: 'https://github.com/vue-bulma/datepicker',
        link: 'components/Datepicker.vue'
      },
      component: lazyLoading('components/Datepicker')
    },
    {
      name: 'Emoji',
      path: 'emoji',
      meta: {
        description: 'Emoji Component is based on emojione.com',
        repository: 'https://github.com/vue-bulma/emoji',
        link: 'components/Emoji.vue'
      },
      component: lazyLoading('components/Emoji')
    },
    {
      name: 'Message',
      path: 'message',
      meta: {
        description: 'Message component',
        repository: 'https://github.com/vue-bulma/message',
        link: 'components/Message.vue'
      },
      component: lazyLoading('components/Message')
    },
    {
      name: 'Modal',
      path: 'modal',
      meta: {
        description: 'Modal component',
        repository: 'https://github.com/vue-bulma/modal',
        link: 'components/Modal.vue'
      },
      component: lazyLoading('components/Modal')
    },
    {
      name: 'Notification',
      path: 'notification',
      meta: {
        description: 'Notification component',
        repository: 'https://github.com/vue-bulma/notification',
        link: 'components/Notification.vue'
      },
      component: lazyLoading('components/Notification')
    },
    {
      name: 'ProgressBar',
      path: 'progress-bar',
      meta: {
        description: 'ProgressBar component',
        repository: 'https://github.com/vue-bulma/progress-bar',
        link: 'components/ProgressBar.vue'
      },
      component: lazyLoading('components/ProgressBar')
    },
    {
      name: 'ProgressTracker',
      path: 'progress-tracker',
      meta: {
        description: 'ProgressTracker component is based on progress-tracker',
        repository: 'https://github.com/vue-bulma/progress-tracker',
        link: 'components/ProgressTracker.vue'
      },
      component: lazyLoading('components/ProgressTracker')
    },
    {
      name: 'Quill',
      path: 'quill',
      meta: {
        description: 'Your powerful, rich text editor',
        repository: 'https://github.com/vue-bulma/quill',
        link: 'components/Quill.vue'
      },
      component: lazyLoading('components/Quill')
    },
    {
      name: 'Rating',
      path: 'rating',
      meta: {
        description: 'Rating component is based on starability.css',
        repository: 'https://github.com/vue-bulma/rating',
        link: 'components/Rating.vue'
      },
      component: lazyLoading('components/Rating')
    },
    {
      name: 'Slider',
      path: 'slider',
      meta: {
        description: 'Slider component',
        repository: 'https://github.com/vue-bulma/slider',
        link: 'components/Slider.vue'
      },
      component: lazyLoading('components/Slider')
    },
    {
      name: 'Switch',
      path: 'switch',
      meta: {
        description: 'Switch component',
        repository: 'https://github.com/vue-bulma/switch',
        link: 'components/Switch.vue'
      },
      component: lazyLoading('components/Switch')
    },
    {
      name: 'Tabs',
      path: 'tabs',
      meta: {
        description: 'Tabs component',
        repository: 'https://github.com/vue-bulma/tabs',
        link: 'components/Tabs.vue'
      },
      component: lazyLoading('components/Tabs')
    },
    {
      name: 'Tooltip',
      path: 'tooltip',
      meta: {
        description: 'Tooltip component is based on hint.css',
        repository: 'https://github.com/vue-bulma/tooltip',
        link: 'components/Tooltip.vue'
      },
      component: lazyLoading('components/Tooltip')
    },
    {
      name: 'Lory',
      path: 'lory',
      meta: {
        description: 'Slider component is based on lory, lory: ☀ Touch enabled minimalistic slider',
        repository: 'https://github.com/vue-bulma/lory',
        link: 'components/Lory.vue'
      },
      component: lazyLoading('components/Lory')
    }
  ]
}
