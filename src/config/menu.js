export default [
  {
    link: 'Dashboard',
    label: 'Dashboard',
    icon: 'fa-tachometer'
  },
  {
    label: 'Charts',
    icon: 'fa-bar-chart-o',
    expanded: true,
    subMenu: [
      {
        link: 'ChartJs',
        label: 'ChartJs'
      },
      {
        link: 'Chartist',
        label: 'Chartist'
      }
    ]
  },
  {
    label: 'UI Features',
    icon: 'fa-laptop',
    expanded: false,
    subMenu: [
      {
        link: 'Typography',
        label: 'Typography'
      }
    ]
  }
]
