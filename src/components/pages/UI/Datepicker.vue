<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title"></h1>
          <div class="block is-flex">
            <datepicker></datepicker>
          </div>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title"></h1>
          <div class="block is-flex">
          </div>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title"></h1>
          <div class="block is-flex">
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from '../../ui/Datepicker'

export default {
  components: {
    Datepicker
  }
}
</script>

<style lang="scss" scoped>
.column {
  margin: 10px;
  border: 1px solid #fce473;
}
</style>
