<template>
  <div id="archives">
    <ComHead></ComHead>
    <keep-alive><PersonalSNavigation @tabControl="tabControls"></PersonalSNavigation></keep-alive>
    <keep-alive><Ranking v-show="showTab==1"></Ranking></keep-alive>
    <keep-alive><MyData v-show="showTab==2"></MyData></keep-alive>
    <keep-alive><NewWords v-show="showTab==3"></NewWords></keep-alive>
    <keep-alive><ErrorBook v-show="showTab==4"></ErrorBook></keep-alive>
    <keep-alive><Collection v-show="showTab==5"></Collection></keep-alive>
    <keep-alive><Vip v-show="showTab == 6"></Vip></keep-alive>
    <keep-alive><SetUp v-show="showTab==7"></SetUp></keep-alive>
    <keep-alive><FeedBack v-show="showTab==8"></FeedBack></keep-alive>
    <keep-alive><ComFoot></ComFoot></keep-alive>

  </div>
</template>

<script>
import PersonalSNavigation from 'components/PersonalSNavigation'
import Collection from 'components/allArchives/Collection'
import ErrorBook from 'components/allArchives/ErrorBook'
import FeedBack from 'components/allArchives/FeedBack'
import MyData from 'components/allArchives/MyData'
import NewWords from 'components/allArchives/NewWords'
import Ranking from 'components/allArchives/Ranking'
import SetUp from 'components/allArchives/SetUp'
import Vip from 'components/allArchives/Vip'
import ComHead from 'common/ComHead'
import ComFoot from 'common/ComFoot'
import localstorage from "@/tool/localstorage.js"

export default {
  components: {
    PersonalSNavigation,
    Collection,
    ErrorBook,
    FeedBack,
    MyData,
    NewWords,
    Ranking,
    SetUp,
    Vip,
    ComHead,
    ComFoot,
  },
  data(){
    return {
      showTab:7,
      num: '',
    }
  },
  methods: {
    tabControls (num) {
      console.log(num)
      this.showTab = num;
      console.log(this.showTab)
    },
  },
  beforeCreate(){
    //判断登录状态
    var loginDataUseId=localstorage.get("loginDataUseId");
    //如果loginDataUseId不存在，则表示当前不在登录状态，跳转至首页
    if(!loginDataUseId){
      this.$router.push({path:"/"});
    }
  }
}
</script>

<style scoped>


.content{margin: 38px 0 0 102px;box-shadow: 0 0 2px 2px rgba(100,100,100,0.2);float: left;width: 1024px;height: 887px;}
.content .con1{width: 1024px;height: 555px;border-bottom: 33px solid #f5f5f5;overflow: hidden;}
.content .con1 ul{float: left;}
.content .con1 ul li{width: 955px;border-bottom: 1px solid #f5f5f5;height: 79px;padding: 0 35px;}
.content .con1 ul li .left{float: left;line-height: 79px;}
.content .con1 ul li .left .h1{font-size: 16px;font-weight: 700;color: #333;float: left;width: 88px;height: 100%;}
.content .con1 ul li .left .h1 h1{font-size: 18px;font-weight: 700;color: #333;}
.content .con1 ul li .left span{font-size: 14px;color: #666;float: left;}
.content .con1 ul li .left .male{float: left;}
.content .con1 ul li .left .male img{float: left;width: 25px;height: 24px;margin: 27px 16px 0 53px;}
.content .con1 ul li .left .male em{float: left;font-size: 16px;color: #6d6d6d;}
.content .con1 ul li .left .girl{float: left;margin: 0 16px 0 93px;}
.content .con1 ul li .left .girl img{float: left;width: 25px;height: 24px;margin: 27px 16px 0 0;}
.content .con1 ul li .left .girl em{float: left;font-size: 16px;color: #6d6d6d;}
.content .con1 ul li .left input{float: left;width: 417px;height: 38px;border: 1px solid #6d6d6d;
padding: 0 0 0 10px;line-height: 38px;color: #6d6d6d;margin: 23px 0 0 0;}
.content .con1 ul li .right{float: right;}
.content .con1 ul li .right .btn{width: 120px;height: 30px;border-radius: 16px;font-size: 16px;color: #fff;line-height: 30px;text-align: center;margin: 20px 0 0 0;}
.content .con1 ul li .right .btn.bg{background: #53d2ac;}
.content .con1 ul li .right .btn.border{border: 1px solid #53d2ac;color: #53d2ac; }
.content dl{float: left;}
.content dl dt{width: 955px;border-bottom: 1px solid #f5f5f5;height: 65px;padding: 0 35px;font-size: 16px;color: #333333;float: left;;}
.content dl dt .btn{width: 120px;height: 30px;border-radius: 16px;font-size: 16px;color: #fff;line-height: 30px;text-align: center;margin: 20px 0 0 0;background: #53d2ac;float: right;}
.content dl dt .h2{font-size: 18px;color: #333;line-height: 79px;float: left;font-weight: 700;}
.content dl dd div{width: 137px;float: left;font-size: 16px;color: #333;line-height: 79px;}
.content dl dd{width: 974px;border-bottom: 1px solid #f5f5f5;height: 76px;padding: 0 35px;float: left;}
.content dl dd input{float: left;margin: 17px 0 0 0;width: 390px;height: 35px;
  background: #f6f6f6;border: 1px solid #dedede;line-height: 35px;padding: 10px 0 0 0;}

</style>