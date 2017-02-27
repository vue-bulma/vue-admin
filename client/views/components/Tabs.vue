<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <div class="tile is-child box">
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
        </div>
      </div>

      <div class="tile is-parent is-6">
        <div class="tile is-child box">
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
        </div>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <h1 class="title">Styles</h1>
          <tabs type="boxed">
            <tab-pane label="Pictures">Pictures Tab</tab-pane>
            <tab-pane label="Music">Music Tab</tab-pane>
            <tab-pane label="Videos">Video Tab</tab-pane>
            <tab-pane label="Documents">Document Tab</tab-pane>
          </tabs>
          <tabs type="toggle">
            <tab-pane label="Pictures">Pictures Tab</tab-pane>
            <tab-pane label="Music">Music Tab</tab-pane>
            <tab-pane label="Videos">Video Tab</tab-pane>
            <tab-pane label="Documents">Document Tab</tab-pane>
          </tabs>
          <tabs type="boxed" :is-fullwidth="true" alignment="centered" size="large">
            <tab-pane label="Pictures" icon="fa fa-image">Pictures Tab</tab-pane>
            <tab-pane label="Music" icon="fa fa-music">Music Tab</tab-pane>
            <tab-pane label="Videos" icon="fa fa-film">Video Tab</tab-pane>
            <tab-pane label="Documents" icon="fa fa-file-text-o">Document Tab</tab-pane>
          </tabs>
        </div>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <h1 class="title">Layouts</h1>
          <tabs layout="bottom" :only-fade="false">
            <tab-pane label="Pictures">
              <p>Simple responsive horizontal navigation tabs, with different styles</p>
              <p>Simple responsive horizontal navigation tabs, with different styles</p>
            </tab-pane>
            <tab-pane label="Music">Music Tab</tab-pane>
            <tab-pane label="Videos">Video Tab</tab-pane>
            <tab-pane label="Documents">Document Tab</tab-pane>
          </tabs>
          <tabs layout="left" :only-fade="false">
            <tab-pane label="Pictures">
              <p>Simple responsive horizontal navigation tabs, with different styles</p>
              <p>Simple responsive horizontal navigation tabs, with different styles</p>
            </tab-pane>
            <tab-pane label="Music">Music Tab</tab-pane>
            <tab-pane label="Videos">Video Tab</tab-pane>
            <tab-pane label="Documents">Document Tab</tab-pane>
          </tabs>
          <tabs layout="right" animation="fade" :only-fade="false">
            <tab-pane v-for="item in items" :key="item.label" :label="item.label" :icon="'fa fa-' + item.icon">
              {{ item.desc }}
            </tab-pane>
          </tabs>
        </div>
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
  },

  data () {
    return {
      items: [
        {
          icon: 'image',
          label: 'Pictures',
          desc: 'Simple responsive horizontal navigation tabs, with different styles'
        },
        {
          icon: 'music',
          label: 'Music',
          desc: 'Music Tab'
        },
        {
          icon: 'film',
          label: 'Videos',
          desc: 'Video Tab'
        },
        {
          icon: 'file-text-o',
          label: 'Documents',
          desc: 'Document Tab'
        }
      ]
    }
  },

  mounted () {
    this.items.splice(0, 1)
    setInterval(() => {
      this.randomTabs()
    }, 3000)
  },

  methods: {
    randomTabs () {
      this.items.unshift(this.items.pop())
    }
  }
}
</script>

<style lang="scss">
.tabs {
  margin: 20px;
  .tab-content {
    min-height: 50px;
  }
}
</style>
