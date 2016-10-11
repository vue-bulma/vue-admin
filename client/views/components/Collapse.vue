<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Nests</h1>
          <div class="block is-flex">
            <collapse>
              <collapse-item title="Components">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              </collapse-item>
              <collapse-item title="Elements">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              </collapse-item>
              <collapse-item title="Nests">
                <collapse>
                  <collapse-item title="Nest Child">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
                  </collapse-item>
                </collapse>
              </collapse-item>
            </collapse>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Accordion</h1>
          <div class="block is-flex">
            <collapse accordion>
              <collapse-item title="Components">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              </collapse-item>
              <collapse-item title="Elements" selected>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              </collapse-item>
              <collapse-item title="Nests">
                <collapse>
                  <collapse-item title="Nest Child">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
                  </collapse-item>
                </collapse>
              </collapse-item>
            </collapse>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Default Selected</h1>
          <div class="block is-flex">
            <collapse accordion is-fullwidth>
              <collapse-item title="Components">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              </collapse-item>
              <collapse-item title="Elements">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              </collapse-item>
                <collapse-item title="Nests" selected>
                <collapse>
                  <collapse-item title="Nest Child" selected>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
                  </collapse-item>
                </collapse>
              </collapse-item>
            </collapse>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { Collapse, Item as CollapseItem } from 'vue-bulma-collapse'

export default {
  components: {
    Collapse,
    CollapseItem
  }
}
</script>

<style lang="scss" scoped>
.tile.is-child {
  width: 100%;
}
</style>
