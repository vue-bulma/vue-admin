<template>
  <aside class="menu app-sidebar">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li>
        <a href="#">
          <span class="icon is-small"><i class="fa fa-tachometer"></i></span>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon is-small"><i class="fa fa-bar-chart-o"></i></span>
          Charts
          <span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon is-small"><i class="fa fa-building-o"></i></span>
          Components
          <span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span>
        </a>
        <ul>
          <li><a href="#">BackToTop</a></li>
          <li><a href="#">Collapse</a></li>
          <li><a href="#">Datepicker</a></li>
          <li><a href="#">Emoji</a></li>
          <li><a href="#">Message</a></li>
          <li><a href="#">Modal</a></li>
          <li><a href="#">Notification</a></li>
          <li><a href="#">Progress</a></li>
          <li><a href="#">Rating</a></li>
          <li><a href="#">Slider</a></li>
          <li><a href="#">Switch</a></li>
          <li><a href="#">Tabs</a></li>
          <li><a href="#">Tooltip</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <span class="icon is-small"><i class="fa fa-table"></i></span>
          Tables
          <span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span>
        </a>
        <ul>
          <li><a href="#">Basic</a></li>
          <li><a href="#">Handsontable</a></li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {

  data () {
    return {
      menu: []
    }
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
