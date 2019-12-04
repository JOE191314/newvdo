<template>
  <div class="archives_subnav">
    <div class="tit">
      <div class="useinfoBoxOne">
        <div class="img"><img src="/images/" alt=""></div>
        <div class="useNameBox">
          <div class="useName">panda chan</div>
          <div class="useNameText">username@gmail.com</div>
          <img src="~assets/images/archives_img/icon-arrow.png" alt="">
        </div>
      </div>
      <div class="useinfoBoxTwo">
        <div class="text">EXP</div>
        <div class="expimg"><img src="~assets/images/archives_img/exp1.png" alt=""></div>
      </div>
      <div class="useinfoBoxThree">
        <div class="vipimg">vip4</div>
        <div class="date">会员有效期至：2019/09/09 </div>
      </div>
    </div>
    <ul>
      <li  @click="tabControl(1)"  :class="num==1?'active':''"><img src="~assets/images/archives_img/archivesico (1).png" alt=""><span>排行榜</span></li>
      <li  @click="tabControl(2)"  :class="num==2?'active':''"><img src="~assets/images/archives_img/archivesico (2).png" alt=""><span>我的数据</span></li>
      <li  @click="tabControl(3)"  :class="num==3?'active':''"><img src="~assets/images/archives_img/archivesico (3).png" alt=""><span>生词本</span></li>
      <li  @click="tabControl(4)"  :class="num==4?'active':''"><img src="~assets/images/archives_img/archivesico (4).png" alt=""><span>错题本</span></li>
      <li  @click="tabControl(5)"  :class="num==5?'active':''"><img src="~assets/images/archives_img/archivesico (5).png" alt=""><span>我的收藏</span></li>
      <li  @click="tabControl(6)"  :class="num==6?'active':''"><img src="~assets/images/archives_img/archivesico (6).png" alt=""><span>会员充值</span></li>
      <li  @click="tabControl(7)"  :class="num==7?'active':''"><img src="~assets/images/archives_img/archivesico (7).png" alt=""><span>个人设置</span></li>
      <li  @click="tabControl(8)"  :class="num==8?'active':''"><img src="~assets/images/archives_img/archivesico (8).png" alt=""><span>问题反馈</span></li>
    </ul>
    <div class="loginout"><img src="~assets/images/archives_img/loginout.png" alt=""><span>退出登录</span></div>
    <div class="clear"></div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      num: 7
    }
  },
   methods: {
    tabControl (num) {
      this.num = num;
      // console.log(num)
      this.$emit('tabControl', num);
      // this.obj.a = 100;
    }
  }
}
</script>

<style scoped>
.archives_subnav{width: 344px;height: 994px;background: #53d2ac;float: left;}
.archives_subnav .tit{float: left;padding: 40px 0 0 20px;}
.archives_subnav .tit .useinfoBoxOne{float: left;}
.archives_subnav .tit .useinfoBoxOne .img{width: 70px;height: 70px;overflow: hidden;background: #ebebeb;float: left;border-radius: 50%;}
.archives_subnav .tit .useinfoBoxOne .img img{width: 100%;height: 100%;float: left;}
.archives_subnav .tit .useinfoBoxOne .useNameBox{float: left;margin: 0 0 0 37px;width: 186px;height: 68px;position: relative;}
.archives_subnav .tit .useinfoBoxOne .useNameBox .useName{font-size: 24px;color: #fff;margin: 9px 0;}
.archives_subnav .tit .useinfoBoxOne .useNameBox .useNameText{font-size: 14px;color: #34353c;}
.archives_subnav .tit .useinfoBoxOne .useNameBox img{width: 11px;height: 6px;position: absolute;right: 0;bottom: 5px;}
.archives_subnav .tit .useinfoBoxTwo{margin: 24px 0 0 0;float: left;}
.archives_subnav .tit .useinfoBoxTwo .text{font-size: 17px;color: #000;float: left;margin: 0 30px 0 10px;}
.archives_subnav .tit .useinfoBoxTwo .expimg{width: 232px;height: 22px;background: #fff;border-radius: 10px;float: left;}
.archives_subnav .tit .useinfoBoxTwo .expimg img{margin: 6px 0 0 4px;}
.archives_subnav .tit .useinfoBoxThree{margin: 15px 0 0 0;float: left;}
.archives_subnav .tit .useinfoBoxThree .vipimg{width: 52px;height: 19px;background: url(~assets/images/archives_img/vipbg.png)no-repeat;font-size: 16px;color: #fff;line-height: 19px;text-align: center;float: left;}
.archives_subnav .tit .useinfoBoxThree .date{font-size: 15px;line-height: 19px;height: 19px;width: 200px;overflow: hidden;margin: 0 0 0 22px;float: left;color: #fff;}
.archives_subnav ul{float: left;width: 100%;margin: 50px 0 0 0;}
.archives_subnav ul li{float: left;width: 324px;vertical-align: middle;height: 72px;padding: 0 0 0 20px;cursor: pointer;}
.archives_subnav ul li.active{background: #24aa81;border-right: 9px solid #6bffd2;width: 315px;}
.archives_subnav ul li img{float: left;margin: 18px 30px 0 0;width: 33px;height: 38px;}
.archives_subnav ul li span{float: left;font-size: 20px;color: #fff;line-height: 72px;}
.archives_subnav .loginout{float: left;margin: 113px 0 0 0;}
.archives_subnav .loginout img{width: 22px;height: 22px;float: left;margin: 0 30px 0 0;}
.archives_subnav .loginout span{font-size: 20px;color: #fff;float: left;height: 22px;line-height: 22px;}
</style>