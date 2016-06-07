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
      },
      {
        link: 'Plotly',
        label: 'Plotly'
      }
    ]
  },
  {
    label: 'UI Features',
    icon: 'fa-laptop',
    expanded: false,
    subMenu: [
      {
        link: 'Buttons',
        label: 'Buttons'
      },
      {
        link: 'Typography',
        label: 'Typography'
      },
      {
        link: 'Icons',
        label: 'Icons'
      }
    ]
  }
]
