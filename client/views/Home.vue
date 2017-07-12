<template>
  <div>
    <!-- <schedule></schedule> -->
    <exam-done></exam-done>
  </div>
</template>

<script>

  import Schedule from './schedule/Schedule'
  import ExamDone from './exam/Done'

  export default {
    name: 'Home',
    components: {
      Schedule,
      ExamDone
    }
  }
</script>

<style lang="scss" scoped>
</style>
