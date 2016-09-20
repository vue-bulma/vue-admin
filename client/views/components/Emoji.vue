<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Filters: toShort</h1>
          <p>{{ 'Hello world! 😄' | emoji('toShort') }}</p>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Filters: shortnameToImage</h1>
          <p>{{ 'Hello world! :smile:' | emoji('shortnameToImage') }}</p>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Filters: unicodeToImage</h1>
          <p>{{ 'Hello world! 😄' | emoji('unicodeToImage') }}</p>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Filters: toImage</h1>
          <p>{{ 'Hello world! 😄 :smile:' | emoji }}</p>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Emoji Component</h1>
          <emoji-icon class="e1a-smile"></emoji-icon>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { EmojiIcon, filter } from 'vue-bulma-emoji'

Vue.use(filter)

export default {
  components: {
    EmojiIcon
  }
}
</script>

<style lang="scss" scoped>
.column {
  margin: 25px auto;
}

img.emojione {
  height: 24px;
}

.button {
  width: 100%;
}

.tooltip {
  display: inherit;
}
</style>
