<template>
  <div id="myLeft">
     <ul>
       <li class="myli" v-for="(item,index) in listArr" :class="{'myactive':nowEdit===item}" v-bind:key="index">
         <div class="myitem">
           <div @click="setNowActive(item)">
             <div  class="ccTitle">{{item.title}}</div>
             <p class="content">
               {{item.text | subInfor}}
             </p>
           </div>
           <div class="myinfor">
              <span style="color: #86aee8;">最后编辑于：</span><span style="color: #86aee8;" class="date">{{item.edit}}</span>
             <div style="float:right">
               <i class="glyphicon glyphicon glyphicon-trash myicon"
                  @click="deleteFile(item)"></i>
               <i class="glyphicon glyphicon-star myicon"
                  :class="{mystart:item.mark}"
                  @click="markFile(item)"></i>
             </div>
           </div>
         </div>
       </li>
     </ul>
  </div>
</template>

<script>
  export default {
    computed: {
    // 返回store中的值
      dataList () {
          return this.$store.state.listArr;
      },
      nowEdit(){
          return this.$store.state.nowEdit;
      },
    },
    methods: {
      setNowActive:function(item){
        this.$store.commit('set_active',item);
      },
      deleteFile:function(item){
        this.$store.commit('delete_file',item);
      },
      markFile:function(item){
        this.$store.commit('mark_file',item);
      }
    },
    filters: {
      subInfor: function (value) {
          if(value.length&&value.length<50)
              return value;
          else
              return value.substring(0,50)+'...';
      }
    },
  }
</script>
 
<style scoped>
  #myLeft
  {
    left: 0px;
    width: 350px;
    position: absolute;
    top: 50px;
    bottom: 0px;
    background-color: #fcfcfc;
    overflow-y: auto;
  }
  ul
  {
   list-style: none;
    padding:0;
  }
  .myitem
  {
    height:110px;
    border-bottom: 1px solid #cccccc;
  }
  .mystart
  {
    color:#F7AE4F;
    font-size:20px;
  }
  .content
  {
    font-size: 14px;
    line-height: 1.57142857;
    color: #999;
    height:40px;
    overflow: hidden;
  }
  .myinfor
  {
    font-size: 12px;
    color: #6b6b6b;
  }
  .myli:hover
  {
    background-color: antiquewhite;
  }
  .ccTitle
  {
    margin-bottom: 8px;
    font-size: 20px;
    line-height: 28px;
    color: #3d3d3d;
    font-weight: bold;
    padding-left:5px;
  }
  .myli.myactive
  {
    color: #fff;
    background-color: #dae4e1;
 
  }
  .myicon
  {
    font-size:16px;
    margin-right:10px;
  }
  .myicon:hover
  {
    color:#428bca;
  }
 
 
</style>