import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'Gerencia',
    icon: 'fa-user',
    expanded: false
  },

  children: [
    {
      name: 'Agenda-Gerencia',
      path: '/manager/schedule',
      meta: {
        link: 'manager/Schedule.vue'
      },
      icon: 'fa-user',
      component: lazyLoading('manager/Schedule')
    },
    {
      name: 'Usuários',
      path: '/manager/users',
      meta: {
        icon: 'fa-group',
        link: 'Users'
      },
      component: lazyLoading('manager/users', true)
    }
  ]
}
