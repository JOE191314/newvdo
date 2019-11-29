<template>
  <div class="g_head">
    <div class="wrap w1200">
      <div class="logo">
       <router-link tag="a" to="/home"><img src="~assets/images/index_logo.png" alt=""></router-link>
      </div>
      <div class="search">
        <img src="~assets/images/index_search.png" alt="">
        <input type="text" v-model="keyword" @keyup="keywordChange">
      </div>
      <div class="nav">
        <ul>
          <router-link tag="li" to="/home">Videos</router-link>
          <router-link tag="li" to="/pandaChallenge">Panda Challenge</router-link>
          <router-link tag="li" to="/game">Game</router-link>
          <router-link tag="li" to="/about">About</router-link>
        </ul>
      </div>
      <!-- 登录 -->
      <div class="login">
        <img src="~assets/images/index_login.png" alt="">
        <p><el-button type="text" @click="dialogVisibleLogin = true">Log In</el-button></p>
      </div>
      <!-- 语言控制 -->
      <div class="language">
        <span class="en">EN</span><em>|</em>
        <span class="numerous">繁</span><em>|</em>
        <span class="simple">简</span>
      </div>
      <div class="clear"></div>
    </div>

    <!-- 登录弹窗 -->
     <el-dialog :visible.sync="dialogVisibleLogin" :lock-scroll="true" :center="true" :show-close="false" :top="'0'" width="0%" >
  <div class="loginBox on">
        <div class="log"><img src="~assets/images/login/login1.png" alt=""></div>
        <div class="p">
          <div class="tit" >登录</div>
          <div class="text">还没有账号，立即 <span><el-button type="text" @click="dialogVisibleLogin = false;dialogVisibleRegister=true">&nbsp;注册</el-button></span></div>
        </div>
        <div class="input">
          <div class="mailbox">
            <img src="~assets/images/login/loginMail.png" alt="">
            <input type="text" placeholder="请输入你的电邮">
          </div>
          <div class="Password">
            <img src="~assets/images/login/LOCK.png" alt="" class="lock">
            <input type="Password" placeholder="请输入你的密码" v-if="loginshow" v-model="loginPwd">
            <input type="text" placeholder="请输入你的密码" v-else v-model="loginPwd">
            <img src="~assets/images/login/passwrordOpen.png" alt="" class="passwrordType"v-if="loginshow" @click="loginshow=!loginshow">
            <img src="~assets/images/login/passwrordClose.png" alt=""class="passwrordType"v-else  @click="loginshow=!loginshow">
          </div>
        </div>
        <button class="login_submit">登录</button>
        <div class="forgetPassword"><el-button type="text" @click="dialogVisiblePassword = true;dialogVisibleLogin=false">忘记密码</el-button></div>
      </div>
    </el-dialog>
    
    <!-- 注册弹窗 -->
    <el-dialog :visible.sync="dialogVisibleRegister" :lock-scroll="true" :center="true" :show-close="false" :top="'0'" width="0">
      <div class="registerBox on">
        <div class="log"><img src="~assets/images/login/login3.png" alt=""></div>
        <h1>注册</h1>
        <div class="registerForm">
            <div class="mailbox">
                <img src="~assets/images/login/loginMail.png" alt="">
                <input type="text" placeholder="请输入你的电邮" v-model="email">
              </div>
          <div class="checking">
            <input type="text" placeholder="请输入验证码">
            <button :class="{changeColor: right_email}" :disabled="!right_email" @click="getCode">{{computeTime ? `已发送(${computeTime})` : '发送验证码至邮箱'}}</button>
          </div>
          <div class="Password">
              <img src="~assets/images/login/LOCK.png" alt="" class="lock">
              <input type="Password" placeholder="请输入你的密码" v-if="showPwd" v-model="pwd">
              <input type="text" placeholder="请输入你的密码" v-else v-model="pwd">
              <img src="~assets/images/login/passwrordOpen.png" alt="" class="passwrordType" @click="showPwd=!showPwd" v-if="showPwd">
              <img src="~assets/images/login/passwrordClose.png" alt="" class="passwrordType" v-else @click="showPwd=!showPwd">
          </div>
        </div>
        <div class="password_submit"><el-button type="text" @click="dialogVisibleRegisterSuccessful = true;dialogVisibleRegister=false" class="changeColor">创建我的账户</el-button></div>
        <div class="registrationTerms">
          <input type="checkbox">
          <div class="p">同意 <span>《注册条款》</span></div>
        </div>
        <div class="backlogin"><el-button type="text" @click="dialogVisibleLogin = true;dialogVisibleRegister=false">返回登录</el-button></div>
      </div>
      </el-dialog>
  <!-- 忘记密码 -->
  <el-dialog :visible.sync="dialogVisiblePassword" :lock-scroll="true" :center="true" :show-close="false" :top="'0'" width="0%">
    <div class="passwordBox">
      <h1>找回密码</h1>
      <div class="form">
          <div class="mailbox">
              <img src="~assets/images/login/loginMail.png" alt="">
              <input type="text" placeholder="请输入你的电邮">
            </div>
        <div class="checking">
          <input type="text" placeholder="请输入验证码">
          <button>发送验证码至邮箱</button>
        </div>
        <div class="Password">
            <img src="~assets/images/login/LOCK.png" alt="" class="lock">
            <input type="Password" placeholder="请输入你的密码">
            <img src="~assets/images/login/passwrordOpen.png" alt="" class="passwrordType">
            <!-- <img src="~assets/images/login/passwrordClose.png" alt=""> -->
        </div>
        <div class="Password">
            <img src="~assets/images/login/LOCK.png" alt="" class="lock">
            <input type="Password" placeholder="请输入你的密码">
            <img src="~assets/images/login/passwrordOpen.png" alt="" class="passwrordType">
            <!-- <img src="~assets/images/login/passwrordClose.png" alt=""> -->
        </div>
      </div>
      <p class="tips">6-16位，包含数字、字母、特殊符号</p>
      <button class="password_submit">登录</button>
      <div class="backlogin"><el-button type="text" @click="dialogVisibleLogin = true;dialogVisiblePassword=false">返回登录</el-button></div>
    </div>
    </el-dialog>
    <!-- 注册成功 -->
     <el-dialog :visible.sync="dialogVisibleRegisterSuccessful" :lock-scroll="true" :center="true" :show-close="false" :top="'0'" width="0%">
      <div class="registerSuccess">
        <h1>注册成功</h1>
        <div class="img">
          <img src="~assets/images/login/login2.png" alt="">
          <button class="successbtn"><el-button type="text" @click="dialogVisibleLogin = true;dialogVisibleRegisterSuccessful=false"class="changeColor">去登录</el-button></button>
        </div>
      </div>
    </el-dialog>
  </div>
 
</template>

<script>
 import config from "@/config/index.js"
 import { MessageBox } from 'element-ui';

export default {
  data(){
    return {
      keyword: '',
      dialogVisibleLogin: false,
      dialogVisibleRegister: false,
      dialogVisibleRegisterSuccessful: false,
      dialogVisiblePassword: false,
      email: '',
      computeTime: 0,
      showPwd: false,
      pwd: '',
      loginshow: false,
      loginPwd: '',
      // searchList:[1,2] ,//没有数据
      // x: 1
    }
  },
  created(){
    // this.message()
  },
  methods: {
    keywordChange(){
      // alert(keyword);
      console.log("keyword:"+this.keyword);
      this.$emit('keywordChange', this.keyword);
    },
    getCode(){
      // alert(1)
      if(!this.computeTime){
        this.computeTime = 60
        const intervalId = setInterval(() => {
        this.computeTime--
          if(this.computeTime <= 0){
            clearInterval(intervalId)
          }
        },1000)
      }
    }
  },
   
  // watch: {
  //   message:{
  //     handler (newValue) {
  //     // console.log(value)
  //     this.axios.get(config.weburl+'/videos/searchTitle/'+newValue).then((res)=>{
  //       var message = res.data.message
  //       if(message){
  //         // console.log(res.data.data)
  //         this.searchList = res.data.data
  //         console.log(this.searchList)//有数据 
  //       }
  //     })
  //   },
  //   deep: true,
  //   immediate: true
  // }
  // },
  computed: {
    right_email(){
      return /^1\d{10}$/.test(this.email);/*邮箱不区分大小写*/
      
    }
  }
}
</script>

<style scoped>
.g_head{width: 100%; height: 83px;background: #fafafa;}
.g_head .logo{float: left;margin: 20px 0 0 0;cursor: pointer;}
.g_head .logo a{float: left;}
.g_head .logo a img{float: left;width: 171px;height: 40px;}
.g_head .search{float: left;position: relative;width: 237px;height: 32px;margin: 27px 0 0 32px;}
.g_head .search img{position: absolute;top: 7px;left: 13px;}
.g_head .search input{width: 190px;height: 32px;border: 1px solid #c4c4c4;border-radius: 17px;font-size: 16px;color: #d0d0d0;padding: 0 0 0 47px;line-height: 32px;outline: none;background: #fff;}
.g_head .nav{float: left;margin: 0 0 0 30px;overflow: hidden;height: 83px;}
.g_head .nav ul{float: left;}
.g_head .nav ul li{float: left;padding: 0 9px;margin: 0 10px;line-height: 83px;font-size: 18px;color: #231815;cursor: pointer;}
.g_head .nav ul li.router-link-active{border-top: 7px solid #3cdfa5;line-height: 70px;color: #3cdfa5;}
.g_head .language{line-height: 83px;font-size: 18px;color: #5c5452;cursor: pointer;float: right;}
.g_head .language em{margin: 0 5px;}
.g_head .language .en{color: #45a25d;}
.g_head .language .numerous{color: #231815;}
.g_head .language .simple{color: #231815;}
.g_head .login{margin: 33px 0 0 40px;float: right;cursor: pointer;}
.g_head .login img{width: 11px;height: 17px;float: left;margin: 0 10px 0 0;}
.g_head .login p{font-size: 17px;color: #303030;float: left;margin: -10px 0 0 0;}


/* 登录 */
/* .index_body.loginBox.on{display: none}
.index_body.registerBox.on{display: none} */
/* 更改插件默认样式 */
.el-button--text {color: #3cdfa5;}
.index_body{width: 100%;height: 1462px;background: rgba(0,0,0,.8);position: absolute;left: 0;top: 0;z-index: 100;}
.loginBox{width: 323px;height: 480px;background: #fff;border-radius: 10px;margin: 60px 0 0 -230px;position: relative;padding: 105px 54px 0 54px;}
.loginBox .log{position: absolute;top: -102px;left: 31%;width: 168px;height: 185px;}
.loginBox .log img{display: block;width: 100%;height: 100%;}
.loginBox .p{margin: 0 0 35px 10px;}
.loginBox .p .tit{font-size: 30px;color: #3cdfa5;margin: 0 0 20px 0;}
.loginBox .p .text{font-size: 13px;color: #949494;}
.loginBox .p .text span{color: #3cdfa5;}
.loginBox .input{margin: 0 0 46px 0;}
.loginBox .input .mailbox{width: 323px;height: 45px;border: 1px solid #ccc;margin: 0 0 45px 0;position: relative;border-radius: 8px;}
.loginBox .input .mailbox img{width: 16px;height: 19px;position: absolute;left: 16px;top: 14px}
.loginBox .input .mailbox input{width: 275px;height: 100%;display: block;border:none;outline: none;overflow: hidden;padding: 0 0 0 48px;border-radius: 8px;color: #333;font-size: 16px;}
.loginBox .input .Password{width: 323px;height: 45px;border: 1px solid #ccc;border-radius: 8px;position: relative;}
.loginBox .input .Password .lock{position: absolute;left: 16px;top: 12px;width: 17px;height: 20px;}
.loginBox .input .Password input{width: 275px;height: 100%;display: block;border:none;outline: none;overflow: hidden;padding: 0 0 0 48px;border-radius: 8px;color: #333;font-size: 16px;}
.loginBox .input .Password .passwrordType{position: absolute;right: 18px;top: 16px;width: 24px;height: 16px;}
.loginBox .login_submit{width: 215px;height: 53px;border-radius: 26px;margin: 0 auto 30px auto;font-size: 22px;color: #fff;text-align: center;line-height: 53px;display: block;background:  #3cdfa5;border: none;outline: none;}
.loginBox .forgetPassword{font-size: 16px;color: #7f7f7f;text-align: center;}
/* 注册 */
.registerBox{width: 323px;height: 480px;background: #fff;border-radius: 10px;margin: 50px 0 0 -220px;position: relative;padding: 105px 54px 0 54px;}
.registerBox .log{position: absolute;top: -102px;left: 31%;width: 159px;height: 189px;}
.registerBox .log img{display: block;width: 100%;height: 100%;}
.registerBox h1{font-size: 30px;color: #3cdfa5;margin: 0 0 0 10px;font-weight: normal;}
.registerBox .registerForm{margin: 32px 0 0 0;}
.registerBox .registerForm .mailbox{width: 323px;height: 45px;border: 1px solid #ccc;position: relative;border-radius: 8px;}
.registerBox .registerForm .mailbox img{width: 16px;height: 19px;position: absolute;left: 16px;top: 14px}
.registerBox .registerForm .mailbox input{width: 275px;height: 100%;display: block;border:none;outline: none;overflow: hidden;padding: 0 0 0 48px;border-radius: 8px;color: #333;font-size: 16px;}
.registerBox .registerForm .checking{margin-top: 25px;overflow: hidden;clear: both;}
.registerBox .registerForm .checking input{float: left;width: 160px;height: 46px;border: 1px solid #ccc;border-radius: 8px;line-height: 46px;color: #333;text-align: center;outline: none;}
.registerBox .registerForm .checking button{float: right;font-size: 16px;color: #9a9a9a;text-align: center;line-height: 45px;height: 45px;width: 143px;background: #d2d2d2;font-size: 13px;border-radius: 23px;border: none;outline: none}
.registerBox .registerForm .checking .changeColor{color: #000;}
.registerBox .registerForm .Password{width: 323px;height: 45px;border: 1px solid #ccc;border-radius: 8px;position: relative;margin-top: 25px;}
.registerBox .registerForm .Password .lock{position: absolute;left: 16px;top: 12px;width: 17px;height: 20px;}
.registerBox .registerForm .Password input{width: 275px;height: 100%;display: block;border:none;outline: none;overflow: hidden;padding: 0 0 0 48px;border-radius: 8px;color: #333;font-size: 16px;}
.registerBox .registerForm .Password .passwrordType{position: absolute;right: 18px;top: 16px;width: 24px;height: 16px;}
.registerBox .password_submit{width: 215px;height: 53px;border-radius: 26px;margin: 32px auto 33px auto;font-size: 22px;color: #fff;text-align: center;line-height: 53px;display: block;background:  #3cdfa5;border: none;outline: none;}
.registerBox .password_submit .changeColor{color: #fff;font-size: 17px;}
.registerBox .registrationTerms{width: 125px;height: 22px;margin: 0 auto 20px auto;}
.registerBox .registrationTerms input{width: 20px;height: 20px;background: #3cdfa5;float: left;outline: none;border-radius: 50%;border:none;}
.registerBox .registrationTerms .p{font-size: 12px;color: #7f7f7f;float: right;}
.registerBox .registrationTerms .p span{color: #3686ff;}
.registerBox .backlogin{font-size: 16px;color: #7f7f7f;text-align: center;}
/* 忘记密码 */
 .passwordBox{width: 323px;height: 528px;background: #fff;border-radius: 10px;margin: 60px 0 0 -230px;position: relative;padding: 50px 54px 0 54px;}
 .passwordBox h1{font-size: 20px;color: #3cdfa5;font-weight: normal;}
 .passwordBox .form{margin: 32px 0 8px 0;}
 .passwordBox .form .mailbox{width: 323px;height: 45px;border: 1px solid #ccc;position: relative;border-radius: 8px;}
 .passwordBox .form .mailbox img{width: 16px;height: 19px;position: absolute;left: 16px;top: 14px}
 .passwordBox .form .mailbox input{width: 275px;height: 100%;display: block;border:none;outline: none;overflow: hidden;padding: 0 0 0 48px;border-radius: 8px;color: #333;font-size: 16px;}
 .passwordBox .form .checking{margin-top: 25px;overflow: hidden;clear: both;}
 .passwordBox .form .checking input{float: left;width: 160px;height: 46px;border: 1px solid #ccc;border-radius: 8px;line-height: 46px;color: #333;text-align: center;outline: none;}
 .passwordBox .form .checking button{float: right;font-size: 16px;color: #9a9a9a;text-align: center;line-height: 45px;height: 45px;width: 143px;background: #d2d2d2;font-size: 13px;border-radius: 23px;border: none}
 .passwordBox .form .Password{width: 323px;height: 45px;border: 1px solid #ccc;border-radius: 8px;position: relative;margin-top: 25px;}
 .passwordBox .form .Password .lock{position: absolute;left: 16px;top: 12px;width: 17px;height: 20px;}
 .passwordBox .form .Password input{width: 275px;height: 100%;display: block;border:none;outline: none;overflow: hidden;padding: 0 0 0 48px;border-radius: 8px;color: #333;font-size: 16px;}
 .passwordBox .form .Password .passwrordType{position: absolute;right: 18px;top: 16px;width: 23px;height: 16px;}
 .passwordBox .tips{font-size: 12px;color: #7f7f7f;margin: 0 0 0 50px;}
 .passwordBox .password_submit{width: 215px;height: 53px;border-radius: 26px;margin: 35px auto 25px auto;font-size: 22px;color: #fff;text-align: center;line-height: 53px;display: block;background:  #3cdfa5;border: none;outline: none;}
 .passwordBox .backlogin{font-size: 16px;color: #7f7f7f;text-align: center;}

 /* 注册成功 */
 .registerSuccess{width: 431px;height: 465px;background: #fff;border-radius: 10px;margin: 60px 0 0 -230px;position: relative;padding: 117px 0 0 0;}
 .registerSuccess h1{margin: 0 auto 117px auto;font-size: 40px;color: #3cdfa5;text-align: center;font-weight: 700;width: 100%;overflow: hidden;}
 .registerSuccess .img{margin: 0 auto;width: 236px;height: 141px;position: relative;}
 .registerSuccess .img img{display: block;width: 135px;height: 141px;margin: 0 auto;}
 .registerSuccess .successbtn{width: 236px;height: 59px;border-radius: 26px;margin: 0 auto -15px auto;font-size: 22px;color: #fff;text-align: center;line-height: 53px;display: block;background:  #3cdfa5;border: none;outline: none;position: absolute;left: 0;bottom: 0;}
 .registerSuccess .successbtn .changeColor{color: #fff;font-size: 17px;}
</style>