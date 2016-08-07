<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
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

    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Material Design Icons</h1>
        <h3 class="subtitle">
          <a href="http://google.github.io/material-design-icons/">More Examples</a>
        </h3>
        <div class="content">
          <p>
            <i class="material-icons">face</i>
          </p>
          <p>
            <i class="material-icons md-18">face</i> 18px
          </p>
          <p>
            <i class="material-icons md-24">face</i> 24px
          </p>
          <p>
            <i class="material-icons md-36">face</i> 36px
          </p>
          <p>
            <i class="material-icons md-48">face</i> 48px
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<style>
@import "~material-design-icons/iconfont/material-icons.css";

/* Rules for sizing the icon. */
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

/* Rules for using icons as black on a light background. */
.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

/* Rules for using icons as white on a dark background. */
.material-icons.md-light { color: rgba(255, 255, 255, 1); }
.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }
</style>
