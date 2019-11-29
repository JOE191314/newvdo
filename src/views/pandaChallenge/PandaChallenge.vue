<template>
  <div id="videos">
    <com-head></com-head>
    <tit :title="'HOME > Videos> D-Campus> Foreigners in Hong Kong - Oliver'"></tit>
    <div class="wrap">
    <iframe src="http://www.baidu.com" width="100%" height="300">甲方负责h5部份</iframe>
    </div>
    <div class="wrap">相关视频</div>
    <com-foot></com-foot>  
  </div>
</template>

<script>
  // import { getHomeMultidata } from "network/home";
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
h5{text-align: center;width: 1440px;height: 917px;background: #def7ee;margin: 0 auto;margin-top: 16px;line-height: 620px;font-size: 50px}
</style>