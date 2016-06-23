<template>
  <div :class="{ tabs: true, [`is-${size}`]: size, [`is-${alignment}`]: alignment, [`is-${type}`]: type, [`is-fullwidth`]: isFullwidth }">
    <slot name="left-tab-list"></slot>
    <tab-list>
      <li v-for="tab in $tabPanes"
        role="tab"
        :class="{ 'is-active': isActived($index), 'is-disabled': tab.disabled }"
        :aria-selected="isActived($index) ? 'true' : 'false'"
        :aria-expanded="isActived($index) ? 'true' : 'false'"
        :aria-disabled="tab.disabled ? 'true' : 'false'"
        :selected="isActived($index)"
        :disabled="tab.disabled"
        @click.prevent="select($index)">
        <a>
          <span :class="['icon', { 'is-small': size !== 'large' }]" v-if="tab.icon"><i :class="tab.icon"></i></span>
          <span>{{ tab.label }}</span>
        </a>
      </li>
    </tab-list>
    <slot name="right-tab-list"></slot>
    <div class="tab-content is-flex">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TabList from './TabList'

export default {
  components: {
    TabList
  },

  props: {
    isFullwidth: Boolean,
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    alignment: {
      type: String,
      default: ''
    },
    selectedIndex: {
      type: Number,
      default: -1
    }
  },

  computed: {
    $tabPanes () {
      return this.$children.filter(child => child._isTabPane)
    }
  },

  ready () {
    for (let i = 0, l = this.$tabPanes.length; i < l; ++i) {
      let tabPane = this.$tabPanes[i]
      if (!tabPane.disabled && tabPane.selected) {
        this.select(i)
        break
      }
    }
    if (this.selectedIndex === -1) {
      this.select(0)
    }
  },

  methods: {
    isActived (index) {
      return index === this.selectedIndex
    },

    select (index) {
      let prevSelectedIndex = this.selectedIndex
      this.selectedIndex = index
      this.$broadcast('on-tab-click', this.selectedIndex, prevSelectedIndex)
    }
  }
}
</script>

<style lang="scss">
.tabs {
  flex-direction: column;

  .tab-content {
    min-height: 40px;
    overflow: hidden;
    position: relative;
  }

  .tab-pane {
    display: none;
    transform: translate3d(0, 0, 0);
    width: 100%;

    &.is-active {
      display: block;
    }
  }
}
</style>
