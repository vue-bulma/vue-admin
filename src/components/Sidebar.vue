<template>
  <aside class="menu app-sidebar animated" :class="{ 'slideInLeft': sidebar.opened, 'slideOutLeft': !sidebar.opened }">
    <ul class="menu-list">
      <li v-for="item in menu">
        <a class="touchable" v-link="{ name: item.link }" @click="toggle(item, $event)" :aria-expanded="isExpanded(item) ? 'true' : 'false'">
          <span class="icon is-small" v-if="item.icon">
            <i :class="['fa', item.icon]"></i>
          </span>
          <span>{{ item.label }}</span>
          <span class="icon is-small is-angle" v-if="item.subMenu">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
        <ul v-show="isReady && item.expanded" :class="{ 'collapse': item.subMenu }" @click="autoClose" transition="menu-expand">
          <li v-for="subItem in item.subMenu">
            <a class="touchable" v-link="{ name: subItem.link }">{{ subItem.label }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
let count = 0

export default {
  vuex: {
    getters: {
      menu: state => state.menu,
      sidebar: state => state.sidebar
    }
  },

  data () {
    return {
      steps: this.menu.filter(i => !!i.subMenu).length,
      isReady: false
    }
  },

  ready () {
    this.isReady = true
  },

  methods: {
    toggle (item, $e) {
      if (this.hasCollapse(item)) {
        $e.preventDefault()
        item.expanded = !item.expanded
      } else {
        this.autoClose()
      }
    },

    hasCollapse (item) {
      return !!item.subMenu
    },

    isExpanded (item) {
      let hasCollapse = this.hasCollapse(item)
      if (!hasCollapse) return
      if (count < this.steps) {
        count++
        item.expanded = !!(item.subMenu.filter(i => i.link === this.$route.name).length)
      }
      return this.isReady & item.expanded
    },

    autoClose () {
      this.sidebar.isMobile && (this.sidebar.opened = false)
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
  padding: 20px 0px 50px;
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

  .collapse {
    display: none;

    &.in {
      display: block;
    }
    // tr&.in    { display: table-row; }
    // tbody&.in { display: table-row-group; }
  }

  .collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height .377s ease;
  }

  .menu-list li {
    overflow: hidden;
  }

  .menu-list li a {
    position: relative;
    white-space: nowrap;

    .is-angle {
      position: absolute;
      right: 10px;
      transition: transform .377s ease;
    }

    &[aria-expanded="true"] {

      .is-angle {
        transform: rotate(180deg);
      }

      & + .collapse {
        display: block;
        visibility: visible;
      }
    }
  }

  .menu-list li ul {
    margin: 0 10px;
    transform: translate3d(0, 0, 0);

    > li:first-child {
      padding-top: 10px;
    }

    > li:last-child {
      padding-bottom: 10px;
    }
  }

}

</style>
