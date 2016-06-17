<template>
  <aside class="menu app-sidebar animated" :class="{ 'slideInLeft': sidebar.opened, 'slideOutLeft': !sidebar.opened }">
    <ul class="menu-list">
      <li v-for="item in menu">
        <a v-link="{ name: item.link }" @click="toggle(item, $event)" aria-expanded="{{ isExpanded(item) }}">
          <span class="icon is-small" v-if="item.icon">
            <i class="fa {{ item.icon }}"></i>
          </span>
          <span>{{ item.label }}</span>
          <span class="icon is-small is-angle" v-if="item.subMenu">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
        <ul v-if="item.subMenu" :class="{ 'collapse': item.subMenu }">
          <li v-for="subItem in item.subMenu">
            <a v-link="{ name: subItem.link }">{{ subItem.label }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  vuex: {
    getters: {
      menu: state => state.menu,
      sidebar: state => state.sidebar
    }
  },

  methods: {
    toggle (item, $e) {
      if (this.hasCollapse(item)) {
        $e.preventDefault()
        item.expanded = !item.expanded
      }
    },

    hasCollapse (item) {
      return !!item.subMenu
    },

    isExpanded (item) {
      return item.expanded
    }
  }

}
</script>

<style lang="scss">
@import '~bulma';

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
  }

  .menu-list li a {
    position: relative;
    white-space: nowrap;

    .is-angle {
      position: absolute;
      right: 10px;
      transition: all .377s ease;
    }

    &[aria-expanded] {

      .is-angle {
        transform: rotate(180deg);
      }

      & + .collapse {
        display: block;
      }
    }

  }
}

</style>
