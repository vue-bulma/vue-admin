<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Alignment</h1>
          <div class="block">
            <tabs>
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos" selected>Video Tab</tab-pane>
              <tab-pane label="Documents" disabled>Document Tab</tab-pane>
            </tabs>
          </div>
          <div class="block">
            <tabs alignment="centered">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos" selected>Video Tab</tab-pane>
              <tab-pane label="Documents" disabled>Document Tab</tab-pane>
            </tabs>
          </div>
          <div class="block">
            <tabs alignment="right">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos">Video Tab</tab-pane>
              <tab-pane label="Documents">Document Tab</tab-pane>
            </tabs>
          </div>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Sizes</h1>
          <div class="block">
            <tabs size="small">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos">Video Tab</tab-pane>
              <tab-pane label="Documents">Document Tab</tab-pane>
            </tabs>
          </div>
          <div class="block">
            <tabs size="medium">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos">Video Tab</tab-pane>
              <tab-pane label="Documents">Document Tab</tab-pane>
            </tabs>
          </div>
          <div class="block">
            <tabs size="large">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos">Video Tab</tab-pane>
              <tab-pane label="Documents">Document Tab</tab-pane>
            </tabs>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
          <div class="block">
            <tabs type="boxed">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos">Video Tab</tab-pane>
              <tab-pane label="Documents">Document Tab</tab-pane>
            </tabs>
          </div>
          <div class="block">
            <tabs type="toggle">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos">Video Tab</tab-pane>
              <tab-pane label="Documents">Document Tab</tab-pane>
            </tabs>
          </div>
          <div class="block">
            <tabs type="boxed" :is-fullwidth="true" alignment="centered" size="large">
              <tab-pane label="Pictures" icon="fa fa-image">Pictures Tab</tab-pane>
              <tab-pane label="Music" icon="fa fa-music">Music Tab</tab-pane>
              <tab-pane label="Videos" icon="fa fa-film">Video Tab</tab-pane>
              <tab-pane label="Documents" icon="fa fa-file-text-o">Document Tab</tab-pane>
            </tabs>
          </div>
        </article>
      </div>

    </div>
  </div>
</template>

<script>
import Tabs from '../../ui/tabs/Tabs'
import TabPane from '../../ui/tabs/TabPane'

export default {
  components: {
    Tabs,
    TabPane
  }
}
</script>

<style lang="scss" scoped>
</style>
