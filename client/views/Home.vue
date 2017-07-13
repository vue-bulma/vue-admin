<template>
  <div>
    <!-- <schedule></schedule> -->
    <exam-done></exam-done>
    <proce-done></proce-done>
  </div>
</template>

<script>

  import Schedule from './schedule/Schedule'
  import ExamDone from './exam/Done'
  import ProceDone from './proce/Done'

  export default {
    name: 'Home',
    components: {
      Schedule,
      ExamDone,
      ProceDone
    }
  }
</script>

<style lang="scss" scoped>
</style>
