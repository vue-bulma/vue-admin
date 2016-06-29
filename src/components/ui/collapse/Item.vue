<template>
  <div class="card collapse-item" :class="{ 'is-fullwidth': $parent.isFullwidth, 'is-active': selected }">
    <header class="card-header is-unselectable" role="tab" :aria-expanded="selected ? 'true' : 'fase'" @click.prevent="toggle">
      <h3 class="card-header-title">{{ title }}</h3>
      <span class="card-header-icon">
        <i class="fa fa-angle-right"></i>
      </span>
    </header>
    <div class="card-content" v-if="selected" transition="fade-expand">
      <div class="card-content-box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    selected: Boolean
  },

  created () {
    this._isCollapseItem = true
  },

  ready () {
    if (this.selected) {
      this.$dispatch('on-item-open', this.index)
    }
  },

  computed: {
    index () {
      return this.$parent.$collapseItems.indexOf(this)
    }
  },

  methods: {
    toggle () {
      this.selected = !this.selected
      if (this.selected) {
        this.$dispatch('on-item-open', this.index)
      }
    }
  }
}
</script>

<style lang="scss">
.collapse-item {
  .card-header {
    cursor: pointer;
  }
  .card-header-icon {
    transition: transform .377s ease;
  }
  .card-content {
    padding-top: 0;
    padding-bottom: 0;
    overflow: hidden;
  }
  .card-content-box {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &.is-active {
    > .card-header {
      > .card-header-icon {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
