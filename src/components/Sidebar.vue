<template>
  <aside class="menu va-sidebar">
    <ul class="menu-list">
      <li v-for="item in menu">
        <a v-link="{ name: item.link, activeClass: 'is-active' }" @click="toggle(!!item.menu, item, $event)" v-bind="{ 'aria-expanded': !!item.expanded }">
          <span class="icon is-small" v-if="item.icon">
            <i class="fa {{ item.icon }}"></i>
          </span>
          <span>{{ item.label }}</span>
          <span class="icon is-small is-angle" v-if="item.menu">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
        <ul v-if="item.menu" :class="{ 'va-collapse': item.menu }">
          <li v-for="subItem in item.menu">
            <a v-link="{ name: subItem.link, activeClass: 'is-active' }">{{ subItem.label }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {

  data () {
    return {
      menu: [
        {
          link: 'Dashboard',
          label: 'Dashboard',
          icon: 'fa-home'
        },
        {
          label: 'Charts',
          icon: 'fa-bar-chart',
          expanded: false,
          menu: [
            {
              link: 'ChartJs',
              label: 'Chart.js'
            }
          ]
        }
      ]
    }
  },

  methods: {
    toggle (hasCollapse, item, $e) {
      if (hasCollapse) {
        $e.preventDefault()
        item.expanded = !item.expanded
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma';

.va-sidebar {
  width: 180px !important;

  @include mobile() {
    & {
      width: 52px !important;
      overflow: hidden;
    }
  }

  .va-collapse {
    display: none;
  }

  .menu-list li a {
    position: relative;

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
