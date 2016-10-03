<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h4 class="title">Pie</h4>
          <div ref="pie"></div>
        </article>
      </div>
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h4 class="title">Doughnut</h4>
          <div ref="doughnut"></div>
        </article>
      </div>
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h4 class="title">Polar</h4>
          <div ref="polar"></div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Map</h4>
          <div ref="map"></div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h4 class="title">Histogram</h4>
          <div ref="histogram"></div>
        </article>
      </div>
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h4 class="title">Line</h4>
          <div ref="line"></div>
        </article>
      </div>
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h4 class="title">Bar</h4>
          <div ref="bar"></div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Plotly from 'plotly.js'

export default {

  created () {
    this.fetchData()
  },

  mounted () {
    Plotly.plot(
      this.$refs.pie,
      [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
      }],
      {
        margin: { t: 0, l: 0, b: 0, r: 0 }
      }
    )

    Plotly.plot(
      this.$refs.doughnut,
      [{
        values: [16, 15, 12, 6, 5, 4, 42],
        labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
        domain: {
          x: [0, 0.48]
        },
        name: 'GHG Emissions',
        hoverinfo: 'label+percent+name',
        hole: 0.4,
        type: 'pie'
      }],
      {
        margin: { t: 0, l: 0, b: 0, r: 0 }
      }
    )

    Plotly.plot(
      this.$refs.polar,
      [
        {
          r: [1, 0.995, 0.978, 0.951, 0.914, 0.866, 0.809, 0.743, 0.669, 0.588, 0.5, 0.407, 0.309, 0.208, 0.105, 0, 0.105, 0.208, 0.309, 0.407, 0.5, 0.588, 0.669, 0.743, 0.809, 0.866, 0.914, 0.951, 0.978, 0.995, 1, 0.995, 0.978, 0.951, 0.914, 0.866, 0.809, 0.743, 0.669, 0.588, 0.5, 0.407, 0.309, 0.208, 0.105, 0, 0.105, 0.208, 0.309, 0.407, 0.5, 0.588, 0.669, 0.743, 0.809, 0.866, 0.914, 0.951, 0.978, 0.995, 1],
          t: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258, 264, 270, 276, 282, 288, 294, 300, 306, 312, 318, 324, 330, 336, 342, 348, 354, 360],
          mode: 'lines',
          name: 'Figure8',
          marker: {
            color: 'none',
            line: {color: 'peru'}
          },
          type: 'scatter'
        },
        {
          r: [1, 0.997, 0.989, 0.976, 0.957, 0.933, 0.905, 0.872, 0.835, 0.794, 0.75, 0.703, 0.655, 0.604, 0.552, 0.5, 0.448, 0.396, 0.345, 0.297, 0.25, 0.206, 0.165, 0.128, 0.095, 0.067, 0.043, 0.024, 0.011, 0.003, 0, 0.003, 0.011, 0.024, 0.043, 0.067, 0.095, 0.128, 0.165, 0.206, 0.25, 0.297, 0.345, 0.396, 0.448, 0.5, 0.552, 0.604, 0.655, 0.703, 0.75, 0.794, 0.835, 0.872, 0.905, 0.933, 0.957, 0.976, 0.989, 0.997, 1],
          t: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258, 264, 270, 276, 282, 288, 294, 300, 306, 312, 318, 324, 330, 336, 342, 348, 354, 360],
          mode: 'lines',
          name: 'Cardioid',
          marker: {
            color: 'none',
            line: {color: 'darkviolet'}
          },
          type: 'scatter'
        },
        {
          r: [1, 0.996, 0.984, 0.963, 0.935, 0.9, 0.857, 0.807, 0.752, 0.691, 0.625, 0.555, 0.482, 0.406, 0.328, 0.25, 0.172, 0.094, 0.018, 0.055, 0.125, 0.191, 0.252, 0.307, 0.357, 0.4, 0.435, 0.463, 0.484, 0.496, 0.5, 0.496, 0.484, 0.463, 0.435, 0.4, 0.357, 0.307, 0.252, 0.191, 0.125, 0.055, 0.018, 0.094, 0.172, 0.25, 0.328, 0.406, 0.482, 0.555, 0.625, 0.691, 0.752, 0.807, 0.857, 0.9, 0.935, 0.963, 0.984, 0.996, 1],
          t: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258, 264, 270, 276, 282, 288, 294, 300, 306, 312, 318, 324, 330, 336, 342, 348, 354, 360],
          mode: 'lines',
          name: 'Hypercardioid',
          marker: {
            color: 'none',
            line: {color: 'deepskyblue'}
          },
          type: 'scatter'
        },
        {
          r: [1, 0.998, 0.993, 0.985, 0.974, 0.96, 0.943, 0.923, 0.901, 0.876, 0.85, 0.822, 0.793, 0.762, 0.731, 0.7, 0.669, 0.638, 0.607, 0.578, 0.55, 0.524, 0.499, 0.477, 0.457, 0.44, 0.426, 0.415, 0.407, 0.402, 0.4, 0.402, 0.407, 0.415, 0.426, 0.44, 0.457, 0.477, 0.499, 0.524, 0.55, 0.578, 0.607, 0.638, 0.669, 0.7, 0.731, 0.762, 0.793, 0.822, 0.85, 0.876, 0.901, 0.923, 0.943, 0.96, 0.974, 0.985, 0.993, 0.998, 1],
          t: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258, 264, 270, 276, 282, 288, 294, 300, 306, 312, 318, 324, 330, 336, 342, 348, 354, 360],
          mode: 'lines',
          name: 'Subcardioid',
          marker: {
            color: 'none',
            line: {color: 'orangered'}
          },
          type: 'scatter'
        },
        {
          r: [1, 0.997, 0.986, 0.969, 0.946, 0.916, 0.88, 0.838, 0.792, 0.74, 0.685, 0.626, 0.565, 0.501, 0.436, 0.37, 0.304, 0.239, 0.175, 0.114, 0.055, 0, 0.052, 0.098, 0.14, 0.176, 0.206, 0.229, 0.246, 0.257, 0.26, 0.257, 0.246, 0.229, 0.206, 0.176, 0.14, 0.098, 0.052, 0, 0.055, 0.114, 0.175, 0.239, 0.304, 0.37, 0.436, 0.501, 0.565, 0.626, 0.685, 0.74, 0.792, 0.838, 0.88, 0.916, 0.946, 0.969, 0.986, 0.997, 1],
          t: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258, 264, 270, 276, 282, 288, 294, 300, 306, 312, 318, 324, 330, 336, 342, 348, 354, 360],
          mode: 'lines',
          name: 'Supercardioid',
          marker: {
            color: 'none',
            line: {color: 'green'}
          },
          type: 'scatter'
        }
      ],
      {
        title: 'Mic Patterns',
        font: {
          family: 'Arial, sans-serif;',
          size: 12,
          color: '#000'
        },
        showlegend: true,
        width: 350,
        margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 0,
          pad: 0
        },
        paper_bgcolor: 'rgb(255, 255, 255)',
        plot_bgcolor: 'rgb(255, 255, 255)',
        orientation: -90
      }
    )

    var x0 = []
    var x1 = []
    for (var i = 0; i < 500; i++) {
      x0[i] = Math.random()
      x1[i] = Math.random() + 1
    }

    Plotly.plot(
      this.$refs.histogram,
      [{
        x: x0,
        histnorm: 'count',
        name: 'control',
        autobinx: false,
        xbins: {
          start: -3.2,
          end: 2.8,
          size: 0.2
        },
        marker: {
          color: 'fuchsia',
          line: {
            color: 'grey',
            width: 0
          },
          opacity: 0.75
        },
        type: 'histogram'
      }, {
        x: x1,
        name: 'experimental',
        autobinx: false,
        xbins: {
          start: -1.8,
          end: 4.2,
          size: 0.2
        },
        marker: {color: 'rgb(255, 217, 102)'},
        opacity: 0.75,
        type: 'histogram'
      }],
      {
        title: 'Sampled Results',
        xaxis: {title: 'Value'},
        yaxis: {title: 'Count'},
        barmode: 'overlay',
        bargap: 0.25,
        bargroupgap: 0.3,
        margin: { t: 0, l: 0, b: 0, r: 0 }
      }
    )

    Plotly.plot(
      this.$refs.line,
      [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
      }],
      {
        margin: { t: 0, l: 0, b: 0, r: 0 }
      }
    )

    Plotly.plot(
      this.$refs.bar,
      [{
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar'
      },
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [12, 18, 29],
        name: 'LA Zoo',
        type: 'bar'
      }],
      {
        barmode: 'group',
        margin: { t: 0, l: 0, b: 0, r: 0 }
      }
    )
  },

  data () {
    return {
      rows: []
    }
  },

  methods: {
    fetchData () {
      Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv', (err, rows) => {
        if (err) {
          rows = []
        }
        this.rows = rows
        this.drawMap()
      })
    },

    drawMap () {
      let rows = this.rows
      function unpack (rows, key) {
        return rows.map(row => row[key])
      }

      var cityName = unpack(rows, 'name')
      var cityPop = unpack(rows, 'pop')
      var cityLat = unpack(rows, 'lat')
      var cityLon = unpack(rows, 'lon')
      var citySize = []
      var hoverText = []
      var scale = 50000

      for (let i = 0; i < cityPop.length; i++) {
        var currentSize = cityPop[i] / scale
        var currentText = cityName[i] + ' pop: ' + cityPop[i]
        citySize.push(currentSize)
        hoverText.push(currentText)
      }

      var data = [{
        type: 'scattergeo',
        locationmode: 'USA-states',
        lat: cityLat,
        lon: cityLon,
        hoverinfo: 'text',
        text: hoverText,
        marker: {
          size: citySize,
          line: {
            color: 'black',
            width: 2
          }
        }
      }]

      var layout = {
        title: '2014 US City Populations',
        showlegend: false,
        margin: { t: 0, l: 0, b: 0, r: 0 },
        geo: {
          scope: 'usa',
          projection: {
            type: 'albers usa'
          },
          showland: true,
          landcolor: 'rgb(217, 217, 217)',
          subunitwidth: 1,
          countrywidth: 1,
          subunitcolor: 'rgb(255,255,255)',
          countrycolor: 'rgb(255,255,255)'
        }
      }

      Plotly.plot(this.$refs.map, data, layout, { showLink: false })
    }
  }
}
</script>

<style scoped>
.js-plotly-plot {
  max-width: 100%;
}
</style>
