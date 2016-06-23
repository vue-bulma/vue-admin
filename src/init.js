export default (config) => {
  const { sidebar } = config
  const { body } = document
  const WIDTH = 768
  const RATIO = 3

  const handler = () => {
    if (!document.hidden) {
      let rect = body.getBoundingClientRect()
      sidebar.isMobile = rect.width - RATIO < WIDTH
      sidebar.opened = !sidebar.isMobile
    }
  }

  document.addEventListener('visibilitychange', handler)
  window.addEventListener('DOMContentLoaded', handler)
  window.addEventListener('resize', handler)
}
