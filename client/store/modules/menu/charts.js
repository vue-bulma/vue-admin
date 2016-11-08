import { lazyLoading } from './lazyLoading'

export default {
  name: 'Charts',
  path: '/charts',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false
  },
  component: lazyLoading('charts', true),

  children: [
    /*
    {
      name: 'CanvasGauges',
      path: 'canvas-gauges',
      component: lazyLoading('charts/CanvasGauges')
    },
    */
    {
      name: 'Chartist',
      path: 'chartist',
      component: lazyLoading('charts/Chartist')
    },
    {
      name: 'Chartjs',
      path: 'chartjs',
      component: lazyLoading('charts/Chartjs')
    },
    {
      name: 'Peity',
      path: 'peity',
      component: lazyLoading('charts/Peity')
    },
    {
      name: 'Plotly',
      path: 'plotly',
      component: lazyLoading('charts/Plotly')
    }
  ]
}
