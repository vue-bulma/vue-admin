<template>
  <div class="box">
    <h1 class="title">Your powerful, rich text editor.</h1>
    <h2 class="subtitle"><a href="http://quilljs.com">http://quilljs.com</a></h2>
    <quill :options="{ theme: 'snow' }">
      <h2>One Ring to Rule Them All</h2>
      <p><a href="http://en.wikipedia.org/wiki/One_Ring">http://en.wikipedia.org/wiki/One_Ring</a></p>
      <p><br/></p>
      <p>Three Rings for the <em>Elven-kings</em> under the sky,</p>
      <p>Seven for the <u>Dwarf-lords</u><span> in halls of stone</span>,</p>
      <p>Nine for <u>Mortal Men</u>, doomed to die,</p>
      <p>One for the <u>Dark Lord</u> on his dark throne.</p>
      <p><br/></p>
      <p>In the Land of Mordor where the Shadows lie.</p>
      <p>One Ring to <strong>rule</strong> them all, One Ring to <strong>find</strong> them,</p>
      <p>One Ring to <strong>bring</strong> them all and in the darkness <strong>bind</strong> them.</p>
      <p>In the Land of Mordor where the Shadows lie.</p>
    </quill>
  </div>
</template>

<script>
import Quill from 'vue-bulma-quill'

export default {
  components: {
    Quill
  }
}
</script>

<style lang="styl">
@import "~quill/assets/snow"
</style>
