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
var listArr = [{
  title: 'window.history',
  edit: '2018-6-15 12:05:00',
  text: '（1）back()、go()、forward()可以改变网站的浏览器url的状态，同时如果调用这几个方法的话会触发事件popState，子啊浏览器中点击相关的按钮也会触发该事件window.history.length可以返回历史浏览列表中的url的个数。' +
  '（2）H5中新增的方法：' +
  'pushState(state,title,url)，将某个浏览的url保存到history中，但是不会触发事件popstate' +
  'replaceState(state,title,url)，将指定的url替换当前的url但是也不会触发popstate事件',
  mark: true
},
  {
    title: '示例',
    edit: '2018-6-17 10:35:12',
    text: '这里也有一些内容在这里呢！',
    mark: false
  }
];
export default {
    name:'EDIT2',
    data(){
        return{
            listArr : listArr,
            nowEdit : listArr[0],
        }
    },
    computed:{
        activeNoteText () {
            return this.nowEdit
        }
    },
    methods: {
      addFile:function(){
        var temp = {
            title: '这里是标题',
            edit: '',
            text: '',
            mark: false
          };
          this.listArr.push(temp);
          this.nowEdit = temp;
        },
        setNowActive:function(item){
            this.nowEdit = item;
        },
        deleteFile:function(item){
            for (var i = 0, len = this.listArr.length; i < len; i++) {
            if (this.listArr[i] == item) {
              if (this.listArr[i] == this.nowEdit) {
                this.nowEdit = this.listArr[0];
              }
              this.listArr.splice(i, 1);
              break;
            }
            }
        },
        markFile:function(item){
            item.mark = !item.mark;
        },
        editNote: function (e) {
            var text=e.target.value;
            this.nowEdit.text = text;
            var time=getTime();
            this.nowEdit.edit = time;
        },
        editTitle:function(e){
            var text=e.target.value;
            this.nowEdit.title = text;
        },
    },
    filters: {
      subInfor: function (value) {
          if(value.length&&value.length<50)
              return value;
          else
              return value.substring(0,50)+'...';
        }
    }
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
    top: 120px;
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
    left:359px;
    position: absolute;
    top: 120px;
    bottom: 0px;
    right:0px;
  }
  #ccEdit
  {
    width: 95%;
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
