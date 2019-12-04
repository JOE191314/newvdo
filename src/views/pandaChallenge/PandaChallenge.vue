<template>
  <div id="videos"style="margin:0;padding:0;overflow:hidden" scroll="no">
    <com-head></com-head>
    <tit :title="'HOME > Videos> D-Campus> Foreigners in Hong Kong - Oliver'"></tit>
    <div class="wrap">
    <iframe  name="kkkk" src="" width="100%" height="100%" marginwidth="1" marginheight="1"    scrolling="yes" frameborder="0">甲方负责h5部份</iframe>
    </div>
    <!-- <com-foot></com-foot>   -->
  </div>
</template>

<script>
  import ComHead from 'common/ComHead'
  import Tit from 'common/Tit'
  import ComFoot from 'common/ComFoot'
  import config from "@/config/index.js"
  

export default {
  name:"videos",
  components: {
    ComHead,
    Tit,
    ComFoot,
  },
  
}
</script>

<style scoped>
.wrap{background: lightblue;}
iframe{margin: 0;padding: 0;width: 100%;height: 800px;background: lightblue;}
</style>