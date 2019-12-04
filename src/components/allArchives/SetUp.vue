<template>
  <div id="archives">
    <div class="content">
        <!-- 个人资料 -->
        <div class="con1">
          <ul>
            <li>
              <div class="left"><div class="h1"><h1>个人资料</h1></div></div>
              <div class="right"><div class="btn bg"  @click="keepSetUp">保存</div></div>
            </li>
            <li>
              <div class="left"><div class="h1">姓名</div>
                <input type="text" v-model.lazy="useName" v-if="inputUseName">
                <span v-else ref="domUseName">{{ useName }}</span>
              </div>
              <div class="right">
                <div class="btn border" @click="inputUseName=!inputUseName" v-if="!inputUseName">编辑</div>
                <div class="btn bg" @click="inputUseName=!inputUseName" v-else>保存</div>
              </div>
            </li>
            <li>
              <div class="left"><div class="h1">性别</div>
              <div class="male" @click="showSex=!showSex">
                <img src="~assets/images/archives_img/CIRCLE2.png" alt="" v-if="showSex">
                <img src="~assets/images/archives_img/CIRCLE1.png" alt=""  v-else>
                <em>男</em>
              </div>
              <div class="girl" @click="showSex=!showSex">
                <img src="~assets/images/archives_img/CIRCLE2.png" alt="" v-if="!showSex">
                <img src="~assets/images/archives_img/CIRCLE1.png" alt="" v-else>
                <em>女</em>
              </div>
            </div>
              <!-- <div class="right"><div class="btn border">编辑</div></div> -->
            </li>
            <li>
              <div class="left"><div class="h1">生日</div>
                <input type="text" v-model="birthday" v-if="inputBirthday">
                <span v-else ref="domBirthday">{{ birthday }}</span>
              </div>
              <div class="right">
                  <div class="btn border"  @click="inputBirthday=!inputBirthday" v-if="!inputBirthday">编辑</div>
                  <div class="btn bg"  @click="inputBirthday=!inputBirthday" v-else>保存</div>
              </div>
            </li>
            <li>
              <div class="left"><div class="h1">学习目的</div>
                <input type="text" v-model="purpose" v-if="inputpurpose">
                <span v-else ref="dompurpose">{{ purpose }}</span>
              </div>
              <div class="right">
                <div class="btn border"  @click="inputpurpose=!inputpurpose" v-if="!inputpurpose">编辑</div>
                  <div class="btn bg"  @click="inputpurpose=!inputpurpose" v-else>保存</div>
              </div>
            </li>
            <li>
              <div class="left"><div class="h1">个性签名</div>
                <input type="text" v-model="signName" v-if="inputsignName">
                <span v-else ref="domSignName">{{ signName }}</span>
              </div>
              <div class="right">
                <div class="btn border"  @click="inputsignName=!inputsignName" v-if="!inputsignName">编辑</div>
                  <div class="btn bg"  @click="inputsignName=!inputsignName" v-else>保存</div>
              </div>
            </li>
            <li>
              <div class="left">
                <div class="h1">Identify code 解锁</div>
                <input type="text" placeholder="请输入Identify code，解锁题库">
            </div>
              <div class="right"><div class="btn bg">解锁</div></div>
            </li>
          
          </ul>
        </div>
        <!-- 修改密码 -->
        <dl>
          <dt><div class="h2">修改密码</div>
            <div class="btnBg" @click="changePassword=!changePassword" v-if="!changePassword">编辑</div>
            <div class="btn" @click="changePassword=!changePassword" v-else>保存</div>
            
          </dt>
          <dd v-show="changePassword"><div>请输入密码</div><input type="text"></dd>
          <dd v-show="changePassword"><div>请输入新密码</div><input type="password"></dd>
          <dd v-show="changePassword"><div>再次确认新密码</div><input type="password"></dd>
        </dl>
        <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import config from "@/config/index.js"
export default {
  porps: {

  },
  data(){
    return {
      showSex: true,//显示男
      useName: '',//用户名
      inputUseName: false,//编辑用户名
      birthday: '',//生日
      inputBirthday: false,//编辑生日
      purpose: '',//学习简介
      inputpurpose: false,//学习简介编辑
      signName: '',//修改签名
      inputsignName: false,//修改签名编辑
      changePassword: false,
      useInfor: {},
      innerHTML:'',
    }
  },
  methods: {
    keepSetUp(){
      console.log(this.$refs.domBirthday.innerHTML)
      this.useInfor = {
        "birthday": (this.$refs.domBirthday.innerHTML),
        "id": "2098",
        "introduction": (this.$refs.domSignName.innerHTML),
        "nickname": (this.$refs.domUseName.innerHTML),
        "purpose": (this.$refs.dompurpose.innerHTML),
        "sex": (this.showSex? '男': '女')
      }
      // config.weburl+'/user/sendRetrieveCode?'+'username='+this.username
      this.axios.post(config.weburl+'/me/saveInformation',this.useInfor).then(res=>{
        console.log(res)
      })
    }
  },
  computed: {
    
  },
  mounted(){
   //http:106.52.102.224:9084/app/me/saveInformation
   
  }
}
</script>

<style scoped>
.radio{width: 20px;height: 20px;background: #53d2ac;display: block;}

.content{margin: 38px 0 0 102px;box-shadow: 0 0 2px 2px rgba(100,100,100,0.2);float: left;width: 1024px;height: auto;}
.content .con1{width: 1024px;height: 555px;border-bottom: 33px solid #f5f5f5;overflow: hidden;}
.content .con1 ul{float: left;}
.content .con1 ul li{width: 955px;border-bottom: 1px solid #f5f5f5;height: 79px;padding: 0 35px;}
.content .con1 ul li .left{float: left;line-height: 79px;}
.content .con1 ul li .left .h1{font-size: 16px;font-weight: 700;color: #333;float: left;width: 88px;height: 100%;}
.content .con1 ul li .left .h1 h1{font-size: 18px;font-weight: 700;color: #333;}
.content .con1 ul li .left span{font-size: 14px;color: #666;float: left;}
.content .con1 ul li .left input{float: left;width: 700px;height: 79px;line-height: 79px;}
.content .con1 ul li .left .male{float: left;}
.content .con1 ul li .left .male img{float: left;width: 25px;height: 24px;margin: 27px 16px 0 53px;}
.content .con1 ul li .left .male em{float: left;font-size: 16px;color: #6d6d6d;}
.content .con1 ul li .left .girl{float: left;margin: 0 16px 0 93px;}
.content .con1 ul li .left .girl img{float: left;width: 25px;height: 24px;margin: 27px 16px 0 0;}
.content .con1 ul li .left .girl em{float: left;font-size: 16px;color: #6d6d6d;}
.content .con1 ul li .left input{float: left;width: 417px;height: 38px;border: 1px solid #6d6d6d;
padding: 0 0 0 10px;line-height: 38px;color: #6d6d6d;margin: 23px 0 0 0;}
.content .con1 ul li .right{float: right;}
.content .con1 ul li .right .btn{width: 120px;height: 30px;border-radius: 16px;font-size: 16px;color: #fff;line-height: 30px;text-align: center;margin: 20px 0 0 0;cursor: pointer;}
.content .con1 ul li .right .btn.bg{background: #53d2ac;}
.content .con1 ul li .right .btn.border{border: 1px solid #53d2ac;color: #53d2ac; }
.content dl{float: left;}
.content dl dt{width: 955px;border-bottom: 1px solid #f5f5f5;height: 65px;padding: 0 35px;font-size: 16px;color: #333333;float: left;;}
.content dl dt .btn{width: 120px;height: 30px;border-radius: 16px;font-size: 16px;color: #fff;line-height: 30px;text-align: center;margin: 20px 0 0 0;background: #53d2ac;float: right;cursor: pointer;}
.content dl dt .btnBg{border: 1px solid #53d2ac;width: 120px;height: 30px;border-radius: 16px;font-size: 16px;color: #53d2ac;line-height: 30px;text-align: center;margin: 20px 0 0 0;;float: right; cursor: pointer;}
.content dl dt .h2{font-size: 18px;color: #333;line-height: 79px;float: left;font-weight: 700;}
.content dl dd div{width: 137px;float: left;font-size: 16px;color: #333;line-height: 79px;}
.content dl dd{width: 974px;border-bottom: 1px solid #f5f5f5;height: 76px;padding: 0 35px;float: left;}
.content dl dd input{float: left;margin: 17px 0 0 0;width: 390px;height: 35px;
  background: #f6f6f6;border: 1px solid #dedede;line-height: 35px;padding: 10px 0 0 0;}

</style>