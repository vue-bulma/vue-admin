<template>
  <div class="counter" @click="$store.dispatch('INCREMENT')">
    {{ count }}
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>
.counter {
  cursor: pointer;
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  box-shadow: inset 0 0 10px #ccc;
  user-select: none;
}
</style>