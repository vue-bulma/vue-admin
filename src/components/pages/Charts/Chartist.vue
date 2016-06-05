<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">LINES</h4>
        <div class="content">
          <chartist class="lines-bars" :type="'line'" :data="linesData" :options="linesOptions"></chartist>
        </div>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">BARS</h4>
        <div class="content">
          <chartist class="lines-bars" :type="'bar'" :data="linesData" :options="linesOptions"></chartist>
        </div>
      </article>
    </div>
  </div>

  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">PIES & DONUTS</h4>
        <div class="content">
          <div class="columns">
            <div class="column">
              <chartist class="lines-bars" :type="'pie'" :data="pieData" :options="pieOptions"></chartist>
            </div>
            <div class="column">
              <chartist class="lines-bars" :type="'pie'" :data="gaugeData" :options="gaugeOptions"></chartist>
            </div>
            <div class="column">
              <chartist class="lines-bars" :type="'pie'" :data="donutData" :options="donutOptions"></chartist>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Chartist from '../../ui/Chartist'

export default {
  components: {
    Chartist
  },

  data () {
    return {
      series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
      ],
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      linesOptions: {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      },

      pieData: {
        series: [5, 3, 4]
      },
      pieOptions: {
        chartPadding: 30,
        labelOffset: 60,
        labelDirection: 'explode',
        labelInterpolationFnc (value) {
          return value
        }
      },

      gaugeData: {
        series: [20, 10, 30, 40]
      },
      gaugeOptions: {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        total: 200,
        showLabel: true
      },

      donutData: {
        series: [10, 20, 50, 20, 5, 50, 15],
        labels: [1, 2, 3, 4, 5, 6, 7]
      },
      donutOptions: {
        donut: true
      }
    }
  },

  computed: {
    linesData () {
      return {
        labels: this.labels,
        series: this.series
      }
    }
  },

  created () {
    setInterval(() => {
      // https://vuejs.org/guide/list.html#Mutation-Methods
      this.series.unshift(this.series.pop())
    }, 1597)
  }
}
</script>

<style scoped>
.lines-bars {
  height: 240px;
}
</style>
