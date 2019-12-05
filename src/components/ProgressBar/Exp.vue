<template>
  <!-- <div>i am a cmp {{ msg }}</div> -->
  <div>
    <!-- <h2>线性进度条 --- 百分比外显</h2> -->
    <!-- <d-progress :percentage="80" status="success" /> -->
    <!-- <d-progress :percentage="0" :show-text="false"/>
    <d-progress :percentage="50" color="orange" />
    <d-progress :percentage="40" status="exception" /> -->

    <d-progress :stroke-width="22" :percentage="60"  :text-inside="true"/>
    <!-- <br />
    <h2>线性进度条 --- 百分比内显</h2>
    <d-progress :stroke-width="18" :percentage="0" :text-inside="true"/>
    <d-progress :stroke-width="18" :percentage="60" status="success" :text-inside="true"/>
    <d-progress :stroke-width="18" :percentage="80" status="exception" :text-inside="true"/> -->


  </div>
</template>

<script>
import DProgress from './Progress';

export default {
  components: {
    DProgress
  },
  data () {
    return {
      msg: 'hello world'
    }
  }
}
</script>

<style>
/* div {
  background-color: red;
} */
</style>
