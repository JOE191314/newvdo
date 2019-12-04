// 浏览器存储
export default{
  //设置存储变量
  set:function(key, val){
    window.localStorage.setItem(key,val);
  },
    // 获取存储变量
  get:function(key){
    var val=window.localStorage.getItem(key);
    return val;
  },
  //删除数据
  remove:function(key){
    window.localStorage.removeItem(key);
  },
  //清除所有的浏览器存储数据
  clear:function(){
    window.localStorage.clear();
  }
}