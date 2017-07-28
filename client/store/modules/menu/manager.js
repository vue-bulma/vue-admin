import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'Gerencia',
    icon: 'fa-user',
    expanded: false
  },

  children: [
    {
      name: 'Agenda',
      path: '/manager/schedule',
      meta: {
        link: 'manager/Schedule.vue'
      },
      icon: 'fa-user',
      component: lazyLoading('manager/Schedule')
    }
  ]
}
