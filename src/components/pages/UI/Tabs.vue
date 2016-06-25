<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Alignment</h1>
          <div class="block">
            <tabs animation="slide" :only-fade="false">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos" selected>Video Tab</tab-pane>
              <tab-pane label="Documents" disabled>Document Tab</tab-pane>
            </tabs>
          </div>
          <div class="block">
            <tabs alignment="centered" :only-fade="false">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos" selected>Video Tab</tab-pane>
              <tab-pane label="Documents" disabled>Document Tab</tab-pane>
            </tabs>
          </div>
          <div class="block">
            <tabs alignment="right" :only-fade="false">
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
          <div class="columns">
            <div class="column">
              <tabs type="boxed">
                <tab-pane label="Pictures">Pictures Tab</tab-pane>
                <tab-pane label="Music">Music Tab</tab-pane>
                <tab-pane label="Videos">Video Tab</tab-pane>
                <tab-pane label="Documents">Document Tab</tab-pane>
              </tabs>
            </div>
            <div class="column">
              <tabs type="toggle">
                <tab-pane label="Pictures">Pictures Tab</tab-pane>
                <tab-pane label="Music">Music Tab</tab-pane>
                <tab-pane label="Videos">Video Tab</tab-pane>
                <tab-pane label="Documents">Document Tab</tab-pane>
              </tabs>
            </div>
            <div class="column">
              <tabs type="boxed" :is-fullwidth="true" alignment="centered" size="large">
                <tab-pane label="Pictures" icon="fa fa-image">Pictures Tab</tab-pane>
                <tab-pane label="Music" icon="fa fa-music">Music Tab</tab-pane>
                <tab-pane label="Videos" icon="fa fa-film">Video Tab</tab-pane>
                <tab-pane label="Documents" icon="fa fa-file-text-o">Document Tab</tab-pane>
              </tabs>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Layouts</h1>
          <div class="columns">
            <div class="column">
              <tabs layout="bottom" :only-fade="false">
                <tab-pane label="Pictures">Simple responsive horizontal navigation tabs, with different styles</tab-pane>
                <tab-pane label="Music">Music Tab</tab-pane>
                <tab-pane label="Videos">Video Tab</tab-pane>
                <tab-pane label="Documents">Document Tab</tab-pane>
              </tabs>
            </div>
            <div class="column">
              <tabs layout="left" :only-fade="false">
                <tab-pane label="Pictures">Simple responsive horizontal navigation tabs, with different styles</tab-pane>
                <tab-pane label="Music">Music Tab</tab-pane>
                <tab-pane label="Videos">Video Tab</tab-pane>
                <tab-pane label="Documents">Document Tab</tab-pane>
              </tabs>
            </div>
            <div class="column">
              <tabs layout="right" animation="fade" :only-fade="false">
                <tab-pane label="Pictures" icon="fa fa-image">Simple responsive horizontal navigation tabs, with different styles</tab-pane>
                <tab-pane label="Music" icon="fa fa-music">Music Tab</tab-pane>
                <tab-pane label="Videos" icon="fa fa-film">Video Tab</tab-pane>
                <tab-pane label="Documents" icon="fa fa-file-text-o">Document Tab</tab-pane>
              </tabs>
            </div>
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
.column {
  margin: 10px;
  border: 1px solid #fce473;
}
</style>
