import Vue from 'vue'

Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
})

Vue.transition('fade-right-left', {
  enterClass: 'fadeInRight',
  leaveClass: 'fadeOutLeft'
})

Vue.transition('fade-left-right', {
  enterClass: 'fadeInLeft',
  leaveClass: 'fadeOutRight'
})

Vue.transition('zoom', {
  enterClass: 'zoomIn',
  leaveClass: 'zoomOut'
})

let types = ['', 'Left', 'Right']
types.forEach((e) => {
  let name = `bounce${e ? `-${e.toLowerCase()}` : ''}`
  Vue.transition(name, {
    enterClass: `bounceIn${e}`,
    leaveClass: `bounceOut${e}`
  })
})

let types2 = ['Up', 'Down']
types2.forEach((e) => {
  let name = `bounce-${e.toLowerCase()}`
  Vue.transition(name, {
    enterClass: `bounceIn${e}`,
    leaveClass: `bounceOut${e === 'Up' ? 'Down' : 'Up'}`
  })
})
