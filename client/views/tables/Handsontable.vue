<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1>Data grid</h1>
          <handsontable :data="rawData" :settings="{ }"></handsontable>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Handsontable from 'vue-handsontable'

export default {
  components: {
    Handsontable
  },

  data () {
    return {
      rawData: [
        ['', 'Kia', 'Nissan', 'Toyota', 'Honda'],
        ['2008', 10, 11, 12, 13],
        ['2009', 20, 11, 14, 13],
        ['2010', 30, 15, 12, 13]
      ]
    }
  }
}
</script>
