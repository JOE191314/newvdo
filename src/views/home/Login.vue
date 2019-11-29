<template>
  <div id="login">
    <div class="index_body">
      <!-- 登录 -->
      <div class="loginBox on">
        <div class="log"><img src="~assets/images/login/login1.png" alt=""></div>
        <div class="p">
          <div class="tit" @click="">登录</div>
          <div class="text">还没有账号，立即 <span>注册</span></div>
        </div>
        <div class="input">
          <div class="mailbox">
            <img src="~assets/images/login/loginMail.png" alt="">
            <input type="text" placeholder="请输入你的电邮">
          </div>
          <div class="Password">
            <img src="~assets/images/login/LOCK.png" alt="" class="lock">
            <input type="Password" placeholder="请输入你的密码">
            <img src="~assets/images/login/passwrordOpen.png" alt="" class="passwrordType">
            <!-- <img src="~assets/images/login/passwrordClose.png" alt=""> -->
          </div>
        </div>
        <button class="login_submit">登录</button>
        <div class="forgetPassword">忘记密码</div>
      </div>
      
      <!-- 注册 -->
      <div class="registerBox on">
        <div class="log"><img src="~assets/images/login/login3.png" alt=""></div>
        <h1>注册</h1>
        <div class="registerForm">
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
        </div>
        <button class="password_submit">创建我的账户</button>
        <div class="registrationTerms">
          <input type="checkbox">
          <div class="p">同意 <span>《注册条款》</span></div>
        </div>
        <div class="backlogin">返回登录</div>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      loginWay: true,
    }
  }
}
</script>

<style scoped>
/* 登录 */
.index_body.loginBox.on{display: none}
.index_body.registerBox.on{display: none}
.index_body{width: 100%;height: 1462px;background: rgba(0,0,0,.8);position: absolute;left: 0;top: 0;z-index: 100;}
.loginBox{width: 323px;height: 476px;background: #fff;border-radius: 10px;margin: 260px auto 0 auto;position: relative;padding: 105px 54px 0 54px;}
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
.loginBox .input .Password .passwrordType{position: absolute;right: 18px;top: 16px;width: 23px;height: 16px;}
.loginBox .login_submit{width: 215px;height: 53px;border-radius: 26px;margin: 0 auto 30px auto;font-size: 22px;color: #fff;text-align: center;line-height: 53px;display: block;background:  #3cdfa5;border: none;outline: none;}
.loginBox .forgetPassword{font-size: 16px;color: #7f7f7f;text-align: center;}
/* 注册 */
.registerBox{width: 323px;height: 476px;background: #fff;border-radius: 10px;margin: 260px auto 0 auto;position: relative;padding: 105px 54px 0 54px;}
.registerBox .log{position: absolute;top: -102px;left: 31%;width: 159px;height: 189px;}
.registerBox .log img{display: block;width: 100%;height: 100%;}
.registerBox h1{font-size: 30px;color: #3cdfa5;margin: 0 0 0 10px;font-weight: normal;}
.registerBox .registerForm{margin: 32px 0 0 0;}
.registerBox .registerForm .mailbox{width: 323px;height: 45px;border: 1px solid #ccc;position: relative;border-radius: 8px;}
.registerBox .registerForm .mailbox img{width: 16px;height: 19px;position: absolute;left: 16px;top: 14px}
.registerBox .registerForm .mailbox input{width: 275px;height: 100%;display: block;border:none;outline: none;overflow: hidden;padding: 0 0 0 48px;border-radius: 8px;color: #333;font-size: 16px;}
.registerBox .registerForm .checking{margin-top: 25px;overflow: hidden;clear: both;}
.registerBox .registerForm .checking input{float: left;width: 160px;height: 46px;border: 1px solid #ccc;border-radius: 8px;line-height: 46px;color: #333;text-align: center;outline: none;}
.registerBox .registerForm .checking button{float: right;font-size: 16px;color: #9a9a9a;text-align: center;line-height: 45px;height: 45px;width: 143px;background: #d2d2d2;font-size: 13px;border-radius: 23px;border: none}
.registerBox .registerForm .Password{width: 323px;height: 45px;border: 1px solid #ccc;border-radius: 8px;position: relative;margin-top: 25px;}
.registerBox .registerForm .Password .lock{position: absolute;left: 16px;top: 12px;width: 17px;height: 20px;}
.registerBox .registerForm .Password input{width: 275px;height: 100%;display: block;border:none;outline: none;overflow: hidden;padding: 0 0 0 48px;border-radius: 8px;color: #333;font-size: 16px;}
.registerBox .registerForm .Password .passwrordType{position: absolute;right: 18px;top: 16px;width: 23px;height: 16px;}
.registerBox .password_submit{width: 215px;height: 53px;border-radius: 26px;margin: 32px auto 33px auto;font-size: 22px;color: #fff;text-align: center;line-height: 53px;display: block;background:  #3cdfa5;border: none;outline: none;}
.registerBox .registrationTerms{width: 125px;height: 22px;margin: 0 auto 20px auto;}
.registerBox .registrationTerms input{width: 20px;height: 20px;background: #3cdfa5;float: left;outline: none;border-radius: 50%;border:none;}
.registerBox .registrationTerms .p{font-size: 12px;color: #7f7f7f;float: right;}
.registerBox .registrationTerms .p span{color: #3686ff;}
.registerBox .backlogin{font-size: 16px;color: #7f7f7f;text-align: center;}
</style>