<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">One</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Two</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Three</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title"><i class="fa fa-android"></i></p>
          <p class="subtitle">3453</p>
        </article>
      </div>
    </div>


    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Table Responsive</h4>
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow">
              <thead>
              <tr>
                <th></th>
                <th>Open source projects</th>
                <th>Year started</th>
                <th colspan="3">Links</th>
              </tr>
              </thead>
              <tfoot>
              <tr>
                <th></th>
                <th>Open source projects</th>
                <th>Year started</th>
                <th colspan="3">Links</th>
              </tr>
              </tfoot>
              <tbody>
              <tr>
                <td class="is-icon">
                  <i class="fa fa-android"></i>
                </td>
                <td>
                  <a href="#">Android</a>
                </td>
                <td>
                  2003
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-github"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-globe"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="is-icon">
                  <i class="fa fa-firefox"></i>
                </td>
                <td>
                  <a href="#">Firefox</a>
                </td>
                <td>
                  2003
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-github"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-globe"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="is-icon">
                  <i class="fa fa-linux"></i>
                </td>
                <td>
                  <a href="#">Linux</a>
                </td>
                <td>
                  2003
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-github"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-globe"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="is-icon">
                  <i class="fa fa-wordpress"></i>
                </td>
                <td>
                  <a href="#">WordPress</a>
                </td>
                <td>
                  2003
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-github"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-globe"></i>
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Five</h4>
          <div class="content">
            <chart :type="'doughnut'" :data="chartData"></chart>
          </div>
        </article>
      </div>
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Six</h4>
          <div class="content">
            <chart :type="'pie'" :data="chartData"></chart>
          </div>
        </article>
      </div>
    </div>


  </div>
</template>

<script>
import Chart from 'vue-bulma-chartjs'

export default {
  components: {
    Chart
  },

  data () {
    return {
      data: [300, 50, 100]
    }
  },

  computed: {
    chartData () {
      return {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          data: this.data,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
      }
    }
  },

  mounted () {
    setInterval(() => {
      // https://github.com/vuejs/vue/issues/2873
      // Array.prototype.$set/$remove deprecated (use Vue.set or Array.prototype.splice instead)
      this.data.forEach((item, i) => {
        this.data.splice(i, 1, Math.ceil(Math.random() * 1000))
      })
    }, 100000)
  }
}
</script>

<style lang="scss" scoped>
  .table-responsive {
    display: block;
    width: 100%;
    min-height: .01%;
    overflow-x: auto;
  }
  .subtitle {
    text-align: right;
  }
</style>
