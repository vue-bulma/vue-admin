<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent is-6">
      <article class="tile is-child box">
        <h1 class="title">Font Awesome</h1>
        <h3 class="subtitle">
          <a href="http://fontawesome.io/examples/">More Examples</a>
        </h3>
        <div class="content">
          <p>
            <i class="fa fa-camera-retro"></i>
          </p>
          <p>
            <i class="fa fa-camera-retro fa-lg"></i> fa-lg
          </p>
          <p>
            <i class="fa fa-camera-retro fa-2x"></i> fa-2x
          </p>
          <p>
            <i class="fa fa-camera-retro fa-3x"></i> fa-3x
          </p>
          <p>
            <i class="fa fa-camera-retro fa-4x"></i> fa-4x
          </p>
          <p>
            <i class="fa fa-camera-retro fa-5x"></i> fa-5x
          </p>
        </div>
      </article>
    </div>

    <div class="tile is-parent is-6">
      <article class="tile is-child box">
        <h1 class="title">Material Design Icons</h1>
        <h3 class="subtitle">
          <a href="https://materialdesignicons.com">More Examples</a>
        </h3>
        <div class="content">
          <p>
            <i class="mdi mdi-face"></i>
          </p>
          <p>
            <i class="mdi mdi-face mdi-18px"></i> mdi-18px
          </p>
          <p>
            <i class="mdi mdi-face mdi-24px"></i> mdi-24px
          </p>
          <p>
            <i class="mdi mdi-face mdi-36px"></i> mdi-36px
          </p>
          <p>
            <i class="mdi mdi-face mdi-48px"></i> mdi-48px
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="scss">
$mdi-font-path: '~mdi/fonts/';
@import "~mdi/scss/materialdesignicons.scss";
</style>
