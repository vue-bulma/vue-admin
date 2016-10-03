<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-3">
        <article class="tile is-child box">
          <h4 class="title">Pie</h4>
          <peity :type="'pie'" :data="'1/5'"></peity>
          <peity :type="'pie'" :data="'226/360'"></peity>
          <peity :type="'pie'" :data="'0.52/1.561'"></peity>
          <peity :type="'pie'" :data="'1,4'"></peity>
          <peity :type="'pie'" :data="'226,134'"></peity>
          <peity :type="'pie'" :data="'0.52,1.041'"></peity>
          <peity :type="'pie'" :data="'1,2,3,2,2'"></peity>
        </article>
      </div>
      <div class="tile is-parent is-3">
        <article class="tile is-child box">
          <h4 class="title">Donut</h4>
          <peity :type="'donut'" :data="'1/5'"></peity>
          <peity :type="'donut'" :data="'226/360'"></peity>
          <peity :type="'donut'" :data="'0.52/1.561'"></peity>
          <peity :type="'donut'" :data="'1,4'"></peity>
          <peity :type="'donut'" :data="'226,134'"></peity>
          <peity :type="'donut'" :data="'0.52,1.041'"></peity>
          <peity :type="'donut'" :data="'1,2,3,2,2'"></peity>
        </article>
      </div>
      <div class="tile is-parent is-3">
        <article class="tile is-child box">
          <h4 class="title">Line</h4>
          <peity :type="'line'" :data="'5,3,9,6,5,9,7,3,5,2'"></peity>
          <peity :type="'line'" :data="'5,3,2,-1,-3,-2,2,3,5,2'"></peity>
          <peity :type="'line'" :data="'0,-3,-6,-4,-5,-4,-7,-3,-5,-2'"></peity>
        </article>
      </div>
      <div class="tile is-parent is-3">
        <article class="tile is-child box">
          <h4 class="title">Bar</h4>
          <peity :type="'bar'" :data="'5,3,9,6,5,9,7,3,5,2'"></peity>
          <peity :type="'bar'" :data="'5,3,2,-1,-3,-2,2,3,5,2'"></peity>
          <peity :type="'bar'" :data="'0,-3,-6,-4,-5,-4,-7,-3,-5,-2'"></peity>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Options <strong>:options="{}"</strong></h4>
          <peity :type="'donut'" :options='{ "fill": ["red", "#eeeeee"], "innerRadius": 10, "radius": 40 }' :data="'1/7'"></peity>
          <peity :type="'donut'" :options='{ "fill": ["orange", "#eeeeee"], "innerRadius": 14, "radius": 36 }' :data="'2/7'"></peity>
          <peity :type="'donut'" :options='{ "fill": ["yellow", "#eeeeee"], "innerRadius": 16, "radius": 32 }' :data="'3/7'"></peity>
          <peity :type="'donut'" :options='{ "fill": ["green", "#eeeeee"],  "innerRadius": 18, "radius": 28 }' :data="'4/7'"></peity>
          <peity :type="'donut'" :options='{ "fill": ["blue", "#eeeeee"],   "innerRadius": 20, "radius": 24 }' :data="'5/7'"></peity>
          <peity :type="'donut'" :options='{ "fill": ["indigo", "#eeeeee"], "innerRadius": 18, "radius": 20 }' :data="'6/7'"></peity>
          <peity :type="'donut'" :options='{ "fill": ["violet", "#eeeeee"], "innerRadius": 15, "radius": 16 }' :data="'7/7'"></peity>
        </article>
      </div>
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Updating</h4>
          <peity :type="'line'" :options='{ width: "50%" }' :data="lineData"></peity>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Peity from 'vue-peity'

export default {
  components: {
    Peity
  },

  data () {
    return {
      data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2]
    }
  },

  computed: {
    lineData () {
      return this.data.toString()
    }
  },

  created () {
    setInterval(() => {
      // https://vuejs.org/guide/list.html#Mutation-Methods
      let random = Math.round(Math.random() * 10)
      this.data.shift()
      this.data.push(random)
    }, 1024)
  }
}
</script>
