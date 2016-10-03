<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Options</h1>
          <div class="block">
            <button class="button">Button</button>
            <button class="button is-white">White</button>
            <button class="button is-light">Light</button>
            <button class="button is-dark">Dark</button>
            <button class="button is-black">Black</button>
            <button class="button is-link">Link</button>
          </div>
          <div class="block">
            <button class="button is-primary">Primary</button>
            <button class="button is-info">Info</button>
            <button class="button is-success">Success</button>
            <button class="button is-warning">Warning</button>
            <button class="button is-danger">Danger</button>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Sizes</h1>
          <a class="button is-small">Small</a>
          <a class="button">Normal</a>
          <a class="button is-medium">Medium</a>
          <a class="button is-large">Large</a>
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
          <div class="block">
            <h2 class="subtitle">Outlined</h2>
            <a class="button is-outlined">Outlined</a>
            <a class="button is-primary is-outlined">Outlined</a>
            <a class="button is-info is-outlined">Outlined</a>
            <a class="button is-success is-outlined">Outlined</a>
            <a class="button is-danger is-outlined">Outlined</a>
          </div>
          <h2 class="subtitle">Inverted (the text color becomes the background color, and vice-versa)</h2>
          <div class="notification is-primary">
            <a class="button is-primary is-inverted">Inverted</a>
            <a class="button is-info is-inverted">Inverted</a>
            <a class="button is-success is-inverted">Inverted</a>
            <a class="button is-danger is-inverted">Inverted</a>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">States</h1>
          <div class="columns">
            <div class="column">
              <h2 class="subtitle">Loading</h2>
              <a class="button is-loading">Loading</a>
              <a class="button is-primary is-loading">Loading</a>
              <a class="button is-info is-loading">Loading</a>
              <a class="button is-success is-loading">Loading</a>
              <a class="button is-warning is-loading">Loading</a>
              <a class="button is-danger is-loading">Loading</a>
            </div>
            <div class="column">
              <h2 class="subtitle">Active</h2>
              <a class="button is-active">Active</a>
              <a class="button is-primary is-active">Active</a>
              <a class="button is-info is-active">Active</a>
              <a class="button is-success is-active">Active</a>
              <a class="button is-warning is-active">Active</a>
              <a class="button is-danger is-active">Active</a>
            </div>
            <div class="column">
              <h2 class="subtitle">Disabled</h2>
              <a class="button is-disabled">Disabled</a>
              <a class="button is-primary is-disabled">Disabled</a>
              <a class="button is-info is-disabled">Disabled</a>
              <a class="button is-success is-disabled">Disabled</a>
              <a class="button is-warning is-disabled">Disabled</a>
              <a class="button is-danger is-disabled">Disabled</a>
            </div>
            <div class="column">
              <h2 class="subtitle">With Font Awesome icons</h2>
              <a class="button">
                <span class="icon">
                  <i class="fa fa-github"></i>
                </span>
                <span>GitHub</span>
              </a>
              <a class="button is-primary">
                <span class="icon">
                  <i class="fa fa-twitter"></i>
                </span>
                <span>Twitter</span>
              </a>
              <a class="button is-success">
                <span class="icon">
                  <i class="fa fa-check"></i>
                </span>
                <span>Save</span>
              </a>
              <a class="button is-danger">
                <span>Delete</span>
                <span class="icon">
                  <i class="fa fa-times"></i>
                </span>
              </a>
              <a class="button is-danger is-outlined">
                <span class="icon">
                  <i class="fa fa-times"></i>
                </span>
                <span>Delete</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Button group</h1>
          <h2 class="subtitle">If you want to group buttons together, use the is-grouped modifier on the control container:</h2>
          <div class="control is-grouped">
            <p class="control">
              <a class="button is-primary">
                Save changes
              </a>
            </p>
            <p class="control">
              <a class="button">
                Cancel
              </a>
            </p>
            <p class="control">
              <a class="button is-danger">
                Delete post
              </a>
            </p>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Button addons</h1>
          <h2 class="subtitle">If you want to use buttons as addons, use the has-addons modifier on the control container:</h2>
          <p class="control has-addons">
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-align-left"></i>
              </span>
              <span>Left</span>
            </a>
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-align-center"></i>
              </span>
              <span>Center</span>
            </a>
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-align-right"></i>
              </span>
              <span>Right</span>
            </a>
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.button {
  margin: 5px 0 0;
}
</style>
