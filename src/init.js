import sidebar from './config/sidebar'

const handler = () => {
  if (!document.hidden) {
    let rect = document.body.getBoundingClientRect()
    sidebar.opened = rect.width - 3 >= 768
  }
}

window.addEventListener('DOMContentLoaded', handler)
window.addEventListener('resize', handler)
document.addEventListener('visibilitychange', handler)
