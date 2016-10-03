<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h1 class="title">Sugarcoated rating.</h1>
          <h2 class="subtitle">Accessible to everyone.</h2>
          <div class="block styles-box">
            <form>
              <rating :items="items" legend="Default star rating:"></rating>
            </form>
            <form>
              <rating kind="slot" :items="items" legend="Slot machine rating:" :value="1"></rating>
            </form>
            <form>
              <rating kind="grow" :items="items" legend="Growing star rating:" :value="2"></rating>
            </form>
            <form>
              <rating kind="growRotate" :items="items" legend="Growing & rotating star rating:" :value="3"></rating>
            </form>
            <form>
              <rating kind="fade" :items="items" legend="Fading star rating:" :value="4"></rating>
            </form>
            <form>
              <rating kind="checkmark" :items="items" legend="Checkmark rating:" :value="5"></rating>
            </form>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h1 class="title">Dynamics</h1>
          <div class="block">
            <form>
              <rating :items="items" legend="Default star rating:" :value="value" @change="update"></rating>
            </form>
            <p>
              {{ value }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from 'vue-bulma-rating'

export default {
  components: {
    Rating
  },

  data () {
    return {
      value: 3,
      items: [
        {
          title: '5 Stars',
          value: 5
        },
        {
          title: '4 Stars',
          value: 4
        },
        {
          title: '3 Stars',
          value: 3
        },
        {
          title: '2 Stars',
          value: 2
        },
        {
          title: '1 Star',
          value: 1
        }
      ]
    }
  },

  methods: {
    update (val) {
      this.value = val
    }
  }

}
</script>

<style lang="scss" scoped>
.button {
  margin: 5px 0 0;
}
p {
  margin-bottom: 20px;
}
</style>
