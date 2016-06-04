<template>
  <ol class="breadcrumb">
    <li v-for="(index, item) in list"><span v-if="isLatest(index)" class="active">{{item.label}}</span>
      <a v-else v-link="{ name: item.link }">{{item.label}}</a>
    </li>
  </ol>
</template>

<script>
export default {

  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  methods: {
    isLatest (index) {
      return index === this.list.length - 1
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  list-style: none;
  align-items: center;
  display: flex;
  justify-content: flex-end;

  & > li + li:before {
    padding: 0 5px;
    color: #ccc;
    content: "/\00a0";
  }
}
</style>
