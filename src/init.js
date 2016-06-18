import sidebar from './config/sidebar'

const WIDTH = 768
const RATIO = 3

const handler = () => {
  if (!document.hidden) {
    let rect = document.body.getBoundingClientRect()
    sidebar.isMobile = rect.width - RATIO < WIDTH
    sidebar.opened = !sidebar.isMobile
  }
}

window.addEventListener('DOMContentLoaded', handler)
window.addEventListener('resize', handler)
document.addEventListener('visibilitychange', handler)
