<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box notification is-primary">
          <h1 class="title">Defaults: handle the touch</h1>
          <lory>
            <item>1</item>
            <item>2</item>
            <item>3</item>
            <item>4</item>
            <item>5</item>
            <item>6</item>
          </lory>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box notification is-warning">
          <h1 class="title">Enable mouse events</h1>
          <lory :options="{ enableMouseEvents: true }">
            <item>1</item>
            <item>2</item>
            <item>3</item>
            <item>4</item>
            <item>5</item>
            <item>6</item>
          </lory>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box notification is-info">
          <h1 class="title">Infinite</h1>
          <lory :options="{ enableMouseEvents: true, infinite: 1 }">
            <item>1</item>
            <item>2</item>
            <item>3</item>
            <item>4</item>
            <item>5</item>
            <item>6</item>
          </lory>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box notification is-danger">
          <h1 class="title">Rewind</h1>
          <lory class="js_rewind" :options="{ enableMouseEvents: true, infinite: 1, rewind: true }">
            <item>1</item>
            <item>2</item>
            <item>3</item>
            <item>4</item>
            <item>5</item>
            <item>6</item>
          </lory>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box notification is-primary">
          <h1 class="title">Width</h1>
          <lory class="js_rewind" :options="{ enableMouseEvents: true, infinite: 1, rewind: true }">
            <item style="width: 220px;">220</item>
            <item style="width: 190px;">190</item>
            <item style="width: 150px;">150</item>
            <item style="width: 130px;">130</item>
            <item style="width: 250px;">250</item>
            <item style="width: 180px;">180</item>
            <item style="width: 200px;">200</item>
            <item style="width: 140px;">140</item>
            <item style="width: 120px;">120</item>
            <item style="width: 240px;">240</item>
          </lory>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box notification is-warning">
          <h1 class="title">Multiple slides to scroll</h1>
          <lory class="columns is-mobile" :options="{ enableMouseEvents: true, infinite: 4, slidesToScroll: 4 }">
            <item class="column is-one-quarter-mobile is-3">1</item>
            <item class="column is-one-quarter-mobile is-3">2</item>
            <item class="column is-one-quarter-mobile is-3">3</item>
            <item class="column is-one-quarter-mobile is-3">4</item>
            <item class="column is-one-quarter-mobile is-3">5</item>
            <item class="column is-one-quarter-mobile is-3">6</item>
            <item class="column is-one-quarter-mobile is-3">7</item>
            <item class="column is-one-quarter-mobile is-3">8</item>
          </lory>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box notification is-info">
          <h1 class="title">Custom easings</h1>
          <lory class="columns is-mobile js_rewind" :options="{ enableMouseEvents: true, infinite: 4, slidesToScroll: 4, slideSpeed: 1000, ease: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)', rewind: true }">
            <item class="column is-one-quarter-mobile is-3">1</item>
            <item class="column is-one-quarter-mobile is-3">2</item>
            <item class="column is-one-quarter-mobile is-3">3</item>
            <item class="column is-one-quarter-mobile is-3">4</item>
            <item class="column is-one-quarter-mobile is-3">5</item>
            <item class="column is-one-quarter-mobile is-3">6</item>
            <item class="column is-one-quarter-mobile is-3">7</item>
            <item class="column is-one-quarter-mobile is-3">8</item>
          </lory>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box notification is-danger">
          <h1 class="title">Prev & Next</h1>
          <lory class="js_rewind" :options="{ enableMouseEvents: true, infinite: 1, rewind: true }">
            <item>1</item>
            <item>2</item>
            <item>3</item>
            <item>4</item>
            <item>5</item>
            <item>6</item>
            <prev slot="actions" color="#dbdbdb"></prev>
            <next slot="actions" color="#dbdbdb"></next>
          </lory>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { Lory, Item, Prev, Next } from 'vue-lory'

export default {
  components: {
    Lory,
    Item,
    Prev,
    Next
  }
}
</script>

<style lang="scss" scoped>
.slider {
  .frame li {
    height: 130px;
  }

  &.js_rewind {
    .frame li {
      color: #000;
      background: whitesmoke;
    }
  }
}
</style>
