<template>
  <div id="game">
    <com-head></com-head>
    <div class="text">game</div>
  </div>
</template>

<script>
import ComHead from 'common/ComHead'
export default {
  components: {
    ComHead
  }
}
</script>

<style scoped>
.text{font-size: 40px;text-align: center;line-height: 50px}
</style>