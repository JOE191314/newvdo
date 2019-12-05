<template>
  <div class="vipContent">
    <dl>
      <dt>开通对象:</dt>
      <dd><span>panda chan</span></dd>
      <dt>开通题库:</dt>
      <dd>
        <select name="" id="">
          <option value="">S1</option>
          <option value="">S2</option>
          <option value="">S3</option>
          <option value="">S4</option>
          <option value="">S5</option>
          <option value="">S6</option>
        </select>
      </dd>
      <dt>开通时长</dt>
      <dd>
        <div class="card" @click="handleClick(1)">
          <div class="nun">HK$</div>
          <div class="text">15</div>
          <div class="date"  :class="vipCard==1?'active':''">1个月</div>
        </div>
        <div class="card"  @click="handleClick(2)">
          <div class="nun">HK$</div>
          <div class="text">40</div>
          <div class="date"  :class="vipCard==2?'active':''">3个月</div>
        </div>
        <div class="card"  @click="handleClick(3)">
          <div class="nun">HK$</div>
          <div class="text">150</div>
          <div class="date" :class="vipCard==3?'active':''">12个月</div>
        </div>
      </dd>
      <dt>开通方式</dt>
      <dd>
        <div class="btn" @click="Payment(1)">
          <p>PayPal支付</p>
          <img src="~assets/images/archives_img/vip_btn_check.png" alt="" v-if="PaymentType==1">
          <img src="~assets/images/archives_img/vip_btn.png" alt="" v-else>
        </div>
        <div class="btn" @click="Payment(2)">
          <p>微信支付</p>
          <img src="~assets/images/archives_img/vip_btn_check.png" alt=""  v-if="PaymentType==2">
          <img src="~assets/images/archives_img/vip_btn.png" alt="" v-else>
        </div>
        <div class="btn" @click="Payment(3)">
          <p>VISA支付  </p>
          <img src="~assets/images/archives_img/vip_btn_check.png" alt=""  v-if="PaymentType==3">
          <img src="~assets/images/archives_img/vip_btn.png" alt="" v-else>
        </div>
        <div class="btn" @click="Payment(4)">
            <p>支付宝支付</p>
            <img src="~assets/images/archives_img/vip_btn_check.png" alt=""   v-if="PaymentType==4">
            <img src="~assets/images/archives_img/vip_btn.png" alt="" v-else>
          </div>
          <div class="btn" @click="Payment(5)">
            <p>银联支付</p>
            <img src="~assets/images/archives_img/vip_btn_check.png" alt=""  v-if="PaymentType==5">
            <img src="~assets/images/archives_img/vip_btn.png" alt="" v-else>
          </div>
          <div class="btn" @click="Payment(6)">
            <p>MasterCard</p>
            <img src="~assets/images/archives_img/vip_btn_check.png" alt=""  v-if="PaymentType==6">
            <img src="~assets/images/archives_img/vip_btn.png" alt="" v-else>
          </div>
      </dd>
    </dl>
    <div class="clear"></div>
    <button>立即开通</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      vipCard: 1,
      PaymentType: 1,
      }
    },
    methods: {
      handleClick(num){
        this.vipCard = num
    },
    Payment(type){
      this.PaymentType = type
    }
  }
}
</script>

<style scoped>
.vipContent{width: 986px;height: 853px;margin: 38px 0 0 102px;box-shadow: 0 0 2px 2px rgba(100,100,100,0.2);float: left;padding: 36px 0 0 38px;}
.vipContent dl{float: left;}
.vipContent dl dt{float: left;width: 130px;font-size: 20px;color: #565656;height: 42px;line-height: 42px;}
.vipContent dl dd{width: 800px;float: left;margin: 0 0 55px;}
.vipContent dl dd span{width: 800px;float: left;height: 42px;line-height: 42px;font-size: 20px;color: #565656;}
.vipContent dl dd select{width: 127px;height: 40px;float: left;border: 1px solid #cccccc;font-size: 24px;text-align: center;line-height: 40px;color: #666;outline: none}
.vipContent dl dd select option{color: #666;}
.vipContent dl dd .card{width: 185px;height: 130px;border: 2px solid #3cdfa5;border-radius: 8px;float: left;margin: 0 45px 0 0;position: relative;overflow: hidden;}
.vipContent dl dd .card .nun{font-size: 15px;color: #49e7a3;margin: 38px 0 0 45px;float: left;font-weight: 700;}
.vipContent dl dd .card .text{float: left;font-size: 32px;margin: 20px 0 0 15px;color: #49e7a3;font-weight: 700;}
.vipContent dl dd .card .date{width: 185px;border-top:  2px solid #3cdfa5;height: 42px;text-align: center;font-size: 14px;color: #49e7a3;text-align: center;line-height: 42px;position: absolute;left: 0;bottom: 0;background: #fff;}
.vipContent dl dd .card .active{background: #ecfff8;}
.vipContent dl dd .btn{width: 127px;height: 40px;float: left;position: relative;overflow: hidden;cursor: pointer;}
.vipContent dl dd .btn p{position: absolute;left: 0;top: 0;width: 127px;height: 40px;text-align: center;line-height: 40px;}
.vipContent dl dd .btn img{width: 127px;height: 40px;}
.vipContent button{width: 421px;height: 45px;background: #51e9a8;border-radius: 20px;font-size: 20px;color: #fff;text-align: center;line-height: 45px;margin: 180px 0 0 246px;border: none}
</style>