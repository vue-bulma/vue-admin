<template>
  <aside class="menu va-sidebar">
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
        <ul v-if="item.subMenu" :class="{ 'va-collapse': item.subMenu }">
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
      menu: state => state.menu
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

<style lang="scss" scoped>
@import '~bulma';

.va-sidebar {
  .va-collapse {
    display: none;
  }

  .menu-list li a {
    position: relative;
    white-space: nowrap;

    .is-angle {
      position: absolute;
      right: 10px;
    }

    &[aria-expanded] {

      .is-angle {
        transform: rotate(180deg);
      }

      & + .va-collapse {
        display: block;
      }
    }

  }
}

</style>
