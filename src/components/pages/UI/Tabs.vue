<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Alignment</h1>
          <div class="block is-flex">
            <tabs animation="slide" :only-fade="false">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos" selected>Video Tab</tab-pane>
              <tab-pane label="Documents" disabled>Document Tab</tab-pane>
            </tabs>
          </div>
          <div class="block is-flex">
            <tabs alignment="centered" :only-fade="false">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos" selected>Video Tab</tab-pane>
              <tab-pane label="Documents" disabled>Document Tab</tab-pane>
            </tabs>
          </div>
          <div class="block is-flex">
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
          <div class="block is-flex">
            <tabs size="small">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos">Video Tab</tab-pane>
              <tab-pane label="Documents">Document Tab</tab-pane>
            </tabs>
          </div>
          <div class="block is-flex">
            <tabs size="medium">
              <tab-pane label="Pictures">Pictures Tab</tab-pane>
              <tab-pane label="Music">Music Tab</tab-pane>
              <tab-pane label="Videos">Video Tab</tab-pane>
              <tab-pane label="Documents">Document Tab</tab-pane>
            </tabs>
          </div>
          <div class="block is-flex">
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
            <div class="column is-flex">
              <tabs type="boxed">
                <tab-pane label="Pictures">Pictures Tab</tab-pane>
                <tab-pane label="Music">Music Tab</tab-pane>
                <tab-pane label="Videos">Video Tab</tab-pane>
                <tab-pane label="Documents">Document Tab</tab-pane>
              </tabs>
            </div>
            <div class="column is-flex">
              <tabs type="toggle">
                <tab-pane label="Pictures">Pictures Tab</tab-pane>
                <tab-pane label="Music">Music Tab</tab-pane>
                <tab-pane label="Videos">Video Tab</tab-pane>
                <tab-pane label="Documents">Document Tab</tab-pane>
              </tabs>
            </div>
            <div class="column is-flex">
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
            <div class="column is-flex">
              <tabs layout="bottom" :only-fade="false">
                <tab-pane label="Pictures">
                  <p>Simple responsive horizontal navigation tabs, with different styles</p>
                  <p>Simple responsive horizontal navigation tabs, with different styles</p>
                </tab-pane>
                <tab-pane label="Music">Music Tab</tab-pane>
                <tab-pane label="Videos">Video Tab</tab-pane>
                <tab-pane label="Documents">Document Tab</tab-pane>
              </tabs>
            </div>
            <div class="column is-flex">
              <tabs layout="left" :only-fade="false">
                <tab-pane label="Pictures">
                  <p>Simple responsive horizontal navigation tabs, with different styles</p>
                  <p>Simple responsive horizontal navigation tabs, with different styles</p>
                </tab-pane>
                <tab-pane label="Music">Music Tab</tab-pane>
                <tab-pane label="Videos">Video Tab</tab-pane>
                <tab-pane label="Documents">Document Tab</tab-pane>
              </tabs>
            </div>
            <div class="column is-flex">
              <tabs layout="right" animation="fade" :only-fade="false">
                <tab-pane label="Pictures" icon="fa fa-image">
                  <p>Simple responsive horizontal navigation tabs, with different styles</p>
                  <p>Simple responsive horizontal navigation tabs, with different styles</p>
                </tab-pane>
                <tab-pane label="Music" icon="fa fa-music">Music Tab</tab-pane>
                <tab-pane label="Videos" icon="fa fa-film">Video Tab</tab-pane>
                <tab-pane label="Documents" icon="fa fa-file-text-o" selected>Document Tab</tab-pane>
              </tabs>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'

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
