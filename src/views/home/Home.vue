<template>
  <div id="videos">
    <com-head ref="messageTitle" @keywordChange="keywordChange" ></com-head>
    <tit :title="'HOME > Videos'"></tit>
    <list-nav @hanldType="hanldType" @hanldLevel="hanldLevel"></list-nav>
    <video-list :video-lists="VideoLists"></video-list>
    <page @handleCurrentChange="handleCurrentChange" :pageSize="pages.limit" :count="pages.count" ></page>
    <com-foot></com-foot>  
  </div>
</template>

<script>
  // import { getHomeMultidata } from "network/home";
  import ComHead from 'common/ComHead'
  import Tit from 'common/Tit'
  import ListNav from 'components/ListNav'
  import VideoList from 'components/VideoList'
  import Page from 'common/Page'
  import ComFoot from 'common/ComFoot'
  import config from "@/config/index.js"
  import { debounce} from 'common/Utils'
  

export default {
  name:"videos",
  components: {
    ComHead,
    Tit,
    VideoList,
    Page,
    ComFoot,
    ListNav
  },
  
  data(){
    return {
      VideoLists: [],
      allVideoLists: [],
      pages: {
        pageNo: 1, limit: 12, //pageNo:第几页,limit:每页显示多少条
        count:0 //总页数
      },
      type:-1,//type -1推荐(默认) 1新闻 2校园 3科学 4文化 5职场 6娱乐
      // messageTitles:'',
      keyword:"",//搜索关键词
      level: '',//难度选择
    }
  },
  methods: {
    // 分页
    handleCurrentChange(val){
      // alert(val);
      this.pages.pageNo = val;
      this.keyword="";
      this.loadList();
    },
    // 搜索
    keywordChange(word){
      // alert(val);
      this.keyword=word;
      // debounce(this.loadList,500)
      this.cancelRequest();
      this.loadList();
      // console.log("videolist:"+keyword);
    },
    // 分类型
    hanldType(num){
        this.type = num;
        // alert(this.type);
        this.keyword="";
        this.loadList();
    },
    // 分难度等级
    hanldLevel(num){
      this.level = num;
      this.keyword="";
      this.loadList();
    },
     // 这下面配了一个取消终止的方法
    cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        },
    loadList(){
      var pageNo = this.pages.pageNo;
      var limit = this.pages.limit;
      var requestURL = config.weburl+'/videos/appPage/'+pageNo+'/'+limit;
      var that = this;
      //?type=1
      if(this.type!=-1){
        // 原地址+类型
        requestURL=requestURL+"?type="+this.type;
      }

      //难度
      if(this.type!=-1 && this.level){
        // 原地址+类型
        requestURL=requestURL+"&level="+this.level;
      }else if(this.level!=0){
        requestURL=requestURL+"?level="+this.level;
      }
      //keyword 搜索关键词
      if(this.keyword){
        requestURL=config.weburl+'/videos/searchTitle/'+this.keyword;
        // this.pages=1;
        // this.pages.count=1;
      }
      this.axios.get(requestURL,{
         // 这下面配了一个取消终止的方法
        cancelToken: new this.axios.CancelToken(function executor(c) {
                    that.source = c;
                })
      }).then(res=>{
        
        // console.log(this.allVideoLists)
        //keyword 搜索关键词
        if(this.keyword){
          // requestURL=config.weburl+'/videos/searchTitle/'+this.keyword;
          // this.pages=1;
          // this.pages.count=1;
          this.VideoLists=res.data.data;
          this.pages.count=this.VideoLists.length;
          this.pages.limit=this.VideoLists.length;
        }else{
          //常规浏览
          this.VideoLists = res.data.data.videoList;
          this.pages.count=res.data.data.count;
          this.pages.limit=12;
        }
      }).catch((err) => {
          if (this.axios.isCancel(err)) {
              console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
          } else {
              //handle error
              console.log(err);
          }
      })
    }
  },

  mounted(){
      this.loadList();
      // this.sortByType(-1);
      // this.messageTitle();
      // debounce(this.keywordChange,500)
  }
}
</script>

<style scoped>
.list_nav{height: 68px;line-height: 68px;}
.list_nav .name{float: left;}
.list_nav .name span{float: left;font-size: 14px;color: #31364c;margin: 0 14px;cursor: pointer;}
.list_nav .name span.active{border-top: 7px solid #48ffbe;line-height: 54px;color: #48ffbe}
.list_nav .name span.srot{margin: 0 6px 0 0;color: #cdcfd7;font-weight: 700;}
.list_nav .all{float: right;width: 120px;height: 44px;position: relative;margin: 15px 0 0 0;}
.list_nav .all select{float: left;width: 100%;height: 44px;font-size: 14px;color: #8a8a8a; outline: none;padding: 12px 20px;border: 1px solid #dedede;border-radius: 2px;;}
.list_nav .all select option{color: #666;text-align: center;}
</style>