<template lang="html">
  <div class="">
    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        <article class="tile is-child box">
        <h1 class="title"></h1>
        <div class="block">

          <div class="control is-grouped">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Expanded and Grouped">
            </p>
            <p class="control">
              <a class="button is-info">
                Search
              </a>
            </p>
          </div>


          <label class="label">Message</label>
          <p class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </p>

        </div>
      </article>
     </div>
   </div>
  </div>
</template>

<script>
  export default {
    name: 'Record'
  }
</script>

<style lang="scss">
</style>
