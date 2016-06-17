<template>
  <div class="hello" v-for="item in items">
    <h1>{{ item.message }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',

      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  }
}
</script>

<style>

</style>
