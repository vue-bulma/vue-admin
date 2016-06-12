import Vue from 'vue'

Vue.transition('bounce', {
  enterClass: 'bounceIn',
  leaveClass: 'bounceOut'
})
Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
})
Vue.transition('zoom', {
  enterClass: 'zoomIn',
  leaveClass: 'zoomOut'
})
