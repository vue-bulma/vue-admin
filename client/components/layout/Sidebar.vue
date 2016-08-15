<template>
  <aside class="menu app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li>
        <router-link to="/dashboard">
          <span class="icon is-small"><i class="fa fa-tachometer"></i></span>
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/charts">
          <span class="icon is-small"><i class="fa fa-bar-chart-o"></i></span>
          Charts
          <span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span>
        </router-link>
        <ul>
          <li>
            <router-link to="/charts/chartjs">
              ChartJs
            </router-link>
          </li>
          <li>
            <router-link to="/charts/chartist">
              Chartist
            </router-link>
          </li>
          <li>
            <router-link to="/charts/peity">
              Peity
            </router-link>
          </li>
          <li>
            <router-link to="/charts/plotly">
              Plotly
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/components">
          <span class="icon is-small"><i class="fa fa-building-o"></i></span>
          Components
          <span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span>
        </router-link>
        <ul>
          <li>
            <router-link to="/components/backtotop">BackToTop</router-link>
          </li>
          <li>
            <router-link to="/components/collapse">Collapse</router-link>
          </li>
          <li>
            <router-link to="/components/datepicker">Datepicker</router-link>
          </li>
          <li>
            <router-link to="/components/emoji">Emoji</router-link>
          </li>
          <li>
            <router-link to="/components/message">Message</router-link>
          </li>
          <li>
            <router-link to="/components/modal">Modal</router-link>
          </li>
          <li>
            <router-link to="/components/notification">Notification</router-link>
          </li>
          <li>
            <router-link to="/components/progress">Progress</router-link>
          </li>
          <li>
            <router-link to="/components/rating">Rating</router-link>
          </li>
          <li>
            <router-link to="/components/slider">Slider</router-link>
          </li>
          <li>
            <router-link to="/components/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/components/tabs">Tabs</router-link>
          </li>
          <li>
            <router-link to="/components/tooltip">Tooltip</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/tables">
          <span class="icon is-small"><i class="fa fa-table"></i></span>
          Tables
          <span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span>
        </router-link>
        <ul>
          <li>
            <router-link to="/tables/basic">Basic</router-link>
          </li>
          <li>
            <router-link to="/tables/handsontable">Handsontable</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {

  props: {
    show: Boolean
  }

}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import '~bulma/sass/utilities/mixins';

.app-sidebar {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  padding: 20px 0 50px;
  width: 180px;
  min-width: 45px;
  max-height: 100vh;
  height: 100%;
  z-index: 1024 - 1;
  background: #FFF;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
  overflow-x: hidden;

  @include mobile() {
    transform: translate3d(-180px, 0, 0);
  }

  .icon {
    vertical-align: baseline;
    &.is-angle {
      position: absolute;
      right: 10px;
    }
  }

  .menu-label {
    padding-left: 5px;
  }

  .menu-list li ul {
    margin-left: 15px;
  }
}
</style>
