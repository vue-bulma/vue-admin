import Vue from 'vue'
import anime from 'animejs'

Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
})

Vue.transition('fade-horizontal-rtl', {
  enterClass: 'fadeInRight',
  leaveClass: 'fadeOutLeft'
})

Vue.transition('fade-horizontal-ltr', {
  enterClass: 'fadeInLeft',
  leaveClass: 'fadeOutRight'
})

Vue.transition('slide-horizontal-rtl', {
  enterClass: 'slideInRight',
  leaveClass: 'slideOutLeft'
})

Vue.transition('slide-horizontal-ltr', {
  enterClass: 'slideInLeft',
  leaveClass: 'slideOutRight'
})

Vue.transition('fade-vertical-dtu', {
  enterClass: 'fadeInUp',
  leaveClass: 'fadeOutUp'
})

Vue.transition('fade-vertical-utd', {
  enterClass: 'fadeInDown',
  leaveClass: 'fadeOutDown'
})

Vue.transition('slide-vertical-dtu', {
  enterClass: 'slideInUp',
  leaveClass: 'slideOutUp'
})

Vue.transition('slide-vertical-utd', {
  enterClass: 'slideInDown',
  leaveClass: 'slideOutDown'
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

Vue.transition('fade-expand', {
  css: false,
  enter: function (targets, done) {
    let height = targets.offsetHeight
    let opacity = 1
    let duration = 233
    let easing = 'easeOutExpo'
    let complete = () => {
      targets.removeAttribute('style')
      done()
    }
    targets.style.height = 0
    targets.style.opacity = 0
    let options = {
      targets,
      duration,
      easing,
      opacity,
      height,
      complete
    }
    this.anime = anime(options)
  },
  enterCancelled: function (el) {
    this.anime.pause()
  },
  leave: function (targets, complete) {
    let height = 0
    let opacity = 0
    let duration = 233
    let easing = 'easeOutExpo'
    let options = {
      targets,
      duration,
      easing,
      opacity,
      height,
      complete
    }
    this.anime = anime(options)
  },
  leaveCancelled: function (el) {
    this.anime.pause()
  }
})
