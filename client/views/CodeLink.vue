<template>
  <div>
    <div class="tile">
      <a :href="codeURL">View Code</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['codeURL']
  }
</script>
