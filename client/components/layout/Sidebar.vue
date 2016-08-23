<template>
  <aside class="menu app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li v-for="item in menu">
        <router-link :to="item.path" :aria-expanded="item.meta.expanded ? 'true' : 'false'" v-if="item.path" @click.native="item.meta.expanded = !item.meta.expanded">
          <span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span class="icon is-small is-angle" v-if="item.children && item.children.length">
            <i class="fa fa-angle-down"></i>
          </span>
        </router-link>
        <a :aria-expanded="item.meta.expanded" v-else @click="item.meta.expanded = !item.meta.expanded">
          <span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span class="icon is-small is-angle" v-if="item.children && item.children.length">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>

        <expanding v-if="item.children && item.children.length">
          <ul v-show="item.meta.expanded">
            <li v-for="subItem in item.children">
              <router-link :to="(item.path || '') + '/' + subItem.path">
                {{ subItem.meta && subItem.meta.label || subItem.name }}
              </router-link>
            </li>
          </ul>
        </expanding>
      </li>
      <!-- <li>
        <router-link to="/dashboard">
          <span class="icon is-small"><i class="fa fa-tachometer"></i></span>
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/charts" :aria-expanded="isExpanded('Charts') ? 'true' : 'false'" @click.native="toggle('Charts')">
          <span class="icon is-small"><i class="fa fa-bar-chart-o"></i></span>
          Charts
          <span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span>
        </router-link>
        <expanding>
          <ul v-show="isExpanded('Charts')">
            <li>
              <router-link to="/charts/chartjs">
                Chartjs
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
        </expanding>
      </li>
      <li>
        <a :aria-expanded="isExpanded('Components')  ? 'true' : 'false'" @click="toggle('Components')">
          <span class="icon is-small"><i class="fa fa-building-o"></i></span>
          Components
          <span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span>
        </a>
        <expanding>
          <ul v-show="isExpanded('Components')">
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
        </expanding>
      </li>
      <li>
        <a :aria-expanded="isExpanded('Tables') ? 'true' : 'false'" @click="toggle('Tables')">
          <span class="icon is-small"><i class="fa fa-table"></i></span>
          Tables
          <span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span>
        </a>
        <expanding>
          <ul v-show="isExpanded('Tables')">
            <li>
              <router-link to="/tables/basic">Basic</router-link>
            </li>
            <li>
              <router-link to="/tables/handsontable">Handsontable</router-link>
            </li>
          </ul>
        </expanding>
      </li> -->
    </ul>
  </aside>
</template>

<script>
import Expanding from 'vue-bulma-expanding'

export default {
  components: {
    Expanding
  },

  props: {
    show: Boolean
  },

  data () {
    return {
    }
  },

  mounted () {
  },

  computed: {
    menu () {
      return this.$store.state.menu
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
  height: calc(100% - 50px);
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
      transition: transform .377s ease;
    }
  }

  .menu-label {
    padding-left: 5px;
  }

  .menu-list {
    li a {
      &[aria-expanded="true"] {
        .is-angle {
          transform: rotate(180deg);
        }
      }
    }

    li a + ul {
      margin: 0 10px 0 15px;
    }
  }

}
</style>
