<template>
  <div class="main">
      <div class="index_videoList">
      <ul>
        <li>
          <a href="#">
            <div class="img">
              <img src="/images/videolistbg.png" alt="">
              <div class="time">19:52</div>
            </div>
            <div class="p">
              <div class="video_name">Foreigners in Hong Kong - </div>
              <div class="text">
                <span class="date">2019-10-16 11:38:12</span>
                <span class="views">101 views</span>
              </div>
            </div>
          </a>
        </li><li>
          <a href="#">
            <div class="img">
              <img src="/images/videolistbg.png" alt="">
              <div class="time">19:52</div>
            </div>
            <div class="p">
              <div class="video_name">Foreigners in Hong Kong - Julian</div>
              <div class="text">
                <span class="date">2019-10-16 11:38:12</span>
                <span class="views">101 views</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="img">
              <img src="/images/videolistbg.png" alt="">
              <div class="time">19:52</div>
            </div>
            <div class="p">
              <div class="video_name">Foreigners in Hong Kong - Julian</div>
              <div class="text">
                <span class="date">2019-10-16 11:38:12</span>
                <span class="views">101 views</span>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="img">
              <img src="/images/videolistbg.png" alt="">
              <div class="time">19:52</div>
            </div>
            <div class="p">
              <div class="video_name">Foreigners in Hong Kong - Julian</div>
              <div class="text">
                <span class="date">2019-10-16 11:38:12</span>
                <span class="views">101 views</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="clear"></div>
    </div>
    <page @handleCurrentChange="handleCurrentChange" :pageSize="pages.limit" :count="pages.count" ></page>
  </div>
</template>

<script>
 import Page from 'common/Page'
export default {
  components: {
    Page
  },
  data(){
    return {

    }
  },
  methods: {

  },
}
</script>

<style scoped>
.index_videoList{margin: 48px 0 0 54px;float: left;width: 1024px;height: 880px;overflow: hidden;}
.index_videoList ul{float: left;}
.index_videoList ul li{float: left;margin: 0 24px 44px 0;width: 270px;height: 260px;border: 1px solid #eaeaea;}
.index_videoList ul li a{float: left;width: 270px;height: 260px;}
.index_videoList ul li a .img{height: 153px;width: 270px;overflow: hidden;position: relative;}
.index_videoList ul li a .img img{width: 100%;height: 100%;}
.index_videoList ul li a .img .time{position: absolute;right: 15px;bottom: 9px;width: 54px;height: 18px;color: #424134;line-height: 18px;border-radius: 5px;color: #fff;font-size: 12px;background: 
  #424134;text-align: center;}
.index_videoList ul li a .p{border-top: 6px solid #f04e4e;}
.index_videoList ul li a .p .video_name{height:52px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;padding: 0 20px;width: 230px;;font-size: 18px;color: #31364c;line-height: 24px;margin: 12px 0 0 0;}
.index_videoList ul li a .p .text{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 15px;color: #858585;margin: 8px 0 0 0;line-height: 26px;border-top: 1px solid #f5f5f5;height: 26px;padding: 0 20px;width: 230px;}
.index_videoList ul li a .p .text .date{margin: 0 12px 0 0;float: left;}
.index_videoList ul li a .p .text .views{float: left;}
</style>