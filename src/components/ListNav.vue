<template>
<div class="wrap w1230">
    <div class="list_nav">
      <div class="name">
        <span class="srot">SORT BY:</span>
        <span @click="type(-1)" :class="num==-1?'active':''">Recommendations</span>
        <span  @click="type(1)" :class="num==1?'active':''">News</span>
        <span  @click="type(2)" :class="num==2?'active':''">Campus</span>
        <span  @click="type(3)" :class="num==3?'active':''">STEM</span>
        <span  @click="type(4)" :class="num==4?'active':''">Culture</span>
        <span  @click="type(5)" :class="num==5?'active':''">Workplace</span>
        <span  @click="type(6)" :class="num==6?'active':''">Entertainment</span>
      </div>
      <div class="all" @click="handleClick">
        <!-- <div class="ALLs">ALL</div>
        <div class="img"></div>
          <div class="allBox" v-show="show">
            <div class="All box" @click="hanldLeve(1, $event)" :class="numLeve==1?'bg':''">ALL
              <img src="~assets/images/levelcheck_21.png" alt="" v-show="numLeve==1">
            </div>
            <div class="Basic box" @click="hanldLeve(2 ,$event)" :class="numLeve==2?'bg':''">Basic
              <img src="~assets/images/levelcheck_21.png" alt="" v-show="numLeve==2">
            </div>
            <div class="Intermediate box" @click="hanldLeve(3 ,$event)" :class="numLeve==3?'bg':''">Intermediate
              <img src="~assets/images/levelcheck_21.png" alt="" v-show="numLeve==3">
            </div>
            <div class="Advanced box" @click="hanldLeve(4, $event)" :class="numLeve==4?'bg':''">Advanced
              <img src="~assets/images/levelcheck_21.png" alt="" v-show="numLeve==4">
            </div>
              
          </div> -->
          <el-select class="bg" v-model="value" @change="changeLevel" placeholder="请选择">
            <el-option
              v-for="item in options"
              
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </div>
      <div class="clear"></div>
    </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      num: 1,
      show: false,
      numLeve: '',
      options: [{
          value: '0',
          label: 'ALL'
        }, {
          value: '3',
          label: 'ABasicLL'
        }, {
          value: '2',
          label: 'Intermediate'
        }, {
          value: '1',
          label: 'Advanced'
        }],
        value: 'ALL'
    }
  },
  methods: {
    // 分类型
    type(num){
      this.num = num
      // console.log(this.num)
      this.$emit('hanldType', num);
    },
    // 分难度
    // hanldLeve(numLeve, $event){
    //   this.numLeve = numLeve
    //   console.log(this.numLeve)
    //   event.stopPropagation()
    //   this.$emit('hanldLeve', numLeve);
    // },
    // 显示隐藏分难度下拉框
    handleClick(){
      console.log('a')
      this.show = !this.show
    },
    changeLevel(val){
      // alert(val);
      this.$emit('hanldLevel', val);
    }
  }
}
</script>

<style scoped>
.wrap.w1230{z-index: 9;}
.list_nav{height: 68px;line-height: 68px;z-index: 9;margin: 0 0px 20px 0;}
.list_nav .name{float: left;}
.list_nav .name span{float: left;font-size: 14px;color: #31364c;margin: 0 14px;cursor: pointer;}
.list_nav .name span.active{border-top: 7px solid #48ffbe;line-height: 54px;color: #48ffbe}
.list_nav .name span.srot{margin: 0 6px 0 0;color: #cdcfd7;font-weight: 700;}
.list_nav .all{float: right;width: 159px;height: 44px;position: relative;margin: 0px 0 0 0;position: relative;cursor: pointer;}
.list_nav .all .ALLs{width: 100%;height: 100%;text-align: center;line-height: 44px;font-size: 12px;font-weight: 700;color: #333;}
.list_nav .all .img{width: 0px;height: 0px;border: 10px solid #7f7f7f;border-left-color:transparent ; border-top-color:#7f7f7f; border-bottom-color:transparent; border-right-color:transparent ;position: absolute;top: 19px;right: 13px;}
.list_nav .all .allBox{float: left;width: 159px;font-size: 14px;color: #8a8a8a; outline: none;border-radius: 2px;height: 164px;box-shadow: 0 0 1px 1px rgba(100,100,100,0.1);position: absolute;left: 0;bottom: -165px }
.list_nav .all .allBox .box{width: 156px;height: 42px;text-align: center;z-index: 9;line-height: 49px;font-size: 12px;cursor: pointer;background: #fff;}
.list_nav .all .box.All{border-left: 4px solid #c9c9c9;position: relative;color: #c9c9c9}

.list_nav .all .box.Basic{border-left: 4px solid #5ad798; position: relative; color: #5ad798}
.list_nav .all .box.Intermediate{border-left: 4px solid #56b9f0; position: relative; color: #56b9f0}
.list_nav .all .box.Advanced{border-left: 4px solid #f04e4e; position: relative; color: #f04e4e}
.list_nav .all .allBox .box.bg{background: #f0f0f0;}
.list_nav .all .allBox .box img{position: absolute;top: 20px;right: 16px;z-index: 10;}
/* .Basic:hover,
.Intermediate:hover,
.Advanced:hover,
.All:hover{background: #f0f0f0;} */
 /* .bg.el-select .el-input__inner:focus{border-color:#3cdfa5}
 .bg.el-select .el-input__inner{border-color:red;} */
 /* .bg.el-select */
</style>
<style>
.bg.el-select{ height:50px;}
 .bg.el-select .el-input__inner:focus{border-color:#3cdfa5}
 .bg.el-select .el-input__inner{border-color:#dedede;}
 .el-select-dropdown__item.selected{color: #3cdfa5;}
</style>