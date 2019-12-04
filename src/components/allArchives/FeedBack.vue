<template>
  <div class="Feedcontent">
      <!-- 个人资料 -->
      <div class="tips">视频问题<br/>
          请详细说明视频在什么情况下出现的问题，出现什么问题和有什么问题的视频标题。
      </div>
        <div class="h3">反馈内容（不能为空）</div>
        <textarea style="resize:none"></textarea>
        <div class="h3">上传附件（辅助说明）</div>
        <ul>
          <!-- <input type="file" name="file" class="file" @change="uploadImg">
          <li><img src="~assets/images/archives_img/feek (2).png" alt=""></li>
          <li><img src="~assets/images/archives_img/feek (2).png" alt=""></li>
          <li><img src="~assets/images/archives_img/feek (2).png" alt=""></li>
          <li><img src="~assets/images/archives_img/feek (2).png" alt=""></li>
          <li><img src="~assets/images/archives_img/feek (2).png" alt=""></li>
          <li ><img src="~assets/images/archives_img/feek (1).png" alt=""@click="uploadImg" ref="file"></li> -->
          <el-upload
          :action="uploadUrl"
          list-type="picture-card"
          :on-success="handleSuccess"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        </ul>

      <div class="h3">联系方式（方便我们尽快为您解决问题）</div>
      <input type="text" placeholder="Email/手机">   
      <div class="clear"></div>
      <div class="setbtn">发送</div>
  </div>
</template>

<script>
import config from "@/config/index.js"
export default {
  data() {
      return {
        uploadUrl:config.weburl+'/feedback/upload/img',
        dialogImageUrl: '',
        dialogVisible: false,
        imgFile:[]//上传附件（辅助说明）
      };
    },
  methods: {
    // uploadImg(){
    //   // alert("uploadImg");
    //   var formData = new window.FormData()
    //   formData.append('file', document.querySelector('input[name=file]').files[0]);
    //   var options = {  // 设置axios的参数
    //      url: config.weburl+'/feedback/upload/img',
    //      data: formData,
    //      method: 'post',
    //      headers: { 
    //       'Content-Type': 'multipart/form-data'
    //       }
    //   }
    //   this.axios(options).then(res=>{
    //     console.log(res.data.data.fileUrl);
    //   })
    // },
    handleSuccess(response, file, fileList){
      console.log("imgfile:"+response.data.fileUrl);
      this.imgFile.push(response.data.fileUrl);
      // console.log("imgFile.push:"+this.imgFile[0]);
      // for(var i=0;i<this.imgFile.length;i++){
      //   console.log("imgFile["+i+"]:"+this.imgFile[i]);
      // }
      console.log(this.imgFile);

    },
    handleRemove(file, fileList) {
        // console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}
</script>

<style scoped>

.Feedcontent{margin: 38px 0 0 102px;box-shadow: 0 0 2px 2px rgba(100,100,100,0.2);float: left;width: 1024px;height: 915px;}
.Feedcontent .tips{width: 984px;height: 65px;background: #f3f3f3;font-size: 18px;color: #7c7c7c;line-height: 24px;padding: 23px 0 0 40px;overflow: hidden;}
/* .Feedcontent .boxOne{margin: 0 0 0 42px;width: 100%;} */
.Feedcontent .h3{width: 100%;height: 86px;line-height: 90px;font-size: 20px;color: #333;float: left;margin: 0 0 0 42px;}
.Feedcontent textarea{width:927px ;height: 213px;background: #f8f8f8;float: left;margin: 0 0 0 42px;font-size: 14px;color: #666;line-height: 20px;overflow: hidden;}
.Feedcontent ul{float: left;margin: 0 0 0 42px;}
.Feedcontent ul li{width: 108px;height: 108px;margin: 0 32px 0 0;overflow: hidden;float: left;}
.Feedcontent ul li img{width: 100%;height: 100%;}
.Feedcontent input{float: left;width: 907px;height: 48px;background: #f8f8f8;line-height: 48px;margin: 0 0 0 42px;font-size: 16px;border: none;outline: none;padding: 0 0 0 20px;}
.Feedcontent .setbtn{width: 615px;height: 55px;background: #71efbb;line-height: 55px;color: #fff;font-size: 28px;text-align: center;margin: 65px auto 0 auto;border-radius: 26px;}
</style>