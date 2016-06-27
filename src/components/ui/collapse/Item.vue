<template>
  <div class="card collapse-item" :class="{ 'is-fullwidth': $parent.isFullwidth }">
    <header class="card-header" role="tab" :aria-expanded="selected ? 'true' : 'fase'">
      <p class="card-header-title">{{ title }}</p>
      <a class="card-header-icon" @click.prevent="toggle">
        <i class="fa fa-angle-down"></i>
      </a>
    </header>
    <div class="card-content animated" v-el:content v-if="selected">
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
    selected: {
      type: Boolean,
      default: false
    }
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
  .card-content {
    padding-top: 0;
    padding-bottom: 0;
  }
  .card-content-box {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
