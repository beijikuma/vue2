<template>
    <div id="edit">
        <div id="ccHead">
            <el-button type="info" icon="el-icon-edit" circle @click="addFile" style="float:left;margin-left:100px;margin-top:5px;"></el-button>
        </div>
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
                    <el-button type="info" icon="el-icon-delete" circle @click="deleteFile(item)"></el-button>
                    <el-button type="info" icon="el-icon-star-off" circle @click="markFile(item)"></el-button>
                </div>
            </div>
            </div>
        </li>
        </ul>
        </div>
        <div id="ccContainer">
        <div class="mytitle">
            <input type="text" class="ccTitle"
            :value="activeNoteText.title"
            @input="editTitle"/>
        </div>
        <textarea id="ccEdit"
            :value="activeNoteText.text"
            @input="editNote">
        </textarea>
        </div>
    </div>
</template>

<script>
import {mapState,mapSmapGetters,mapActions,mapMutations, mapGetters} from 'vuex'
function getTime()
  {
    var date=new Date();
    var year=date.getFullYear(); //获取当前年份
    var mon=date.getMonth()+1; //获取当前月份
    var da=date.getDate(); //获取当前日
    var day=date.getDay(); //获取当前星期几
    var h=date.getHours(); //获取小时
    var m=date.getMinutes(); //获取分钟
    var s=date.getSeconds(); //获取秒
    return year+'-'+mon+'-'+da+' '+h+':'+m+':'+s;
  }
export default {
    name:'edit',
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(['addFile,deleteFile,etNowActive,markFile,editNote,editTitle'])
    },
    computed:{
        ...mapGetters(['listArr,nowEdit,activeNoteText'])
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
   #ccHead{
     background-color:rgb(187, 200, 201);
     color:whitesmoke;
     height:50px;
     font-size:20px;
     line-height:50px;
     padding-left:25px;
     margin-bottom: 10px;
   }
  #addFile
  {
    height:50px;
    line-height:50px;
    float:right;
    margin-right:100px;
  }
    #myLeft
  {
    left: 0px;
    width: 350px;
    position: absolute;
    top: 78px;
    left: 9px;
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
  #ccContainer{
    left:350px;
    position: absolute;
    top: 50px;
    bottom: 0px;
    right:0px;
  }
  #ccEdit
  {
    width: 100%;
    height:100%;
    border: none;
    outline: none;
    border-radius: 0;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.42857143;
    color: #555;
    padding-top:5px;
  }
  .mytitle
  {
    padding-left:10px;
    font-size: 1.8em;
    line-height: 1.8em;
    color: #0d3349;
  }
  .ccTitle
  {
    width: auto;
    border: none;
    outline: none;
  }
</style>
