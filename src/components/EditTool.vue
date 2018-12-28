<template>
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
  export default {
    computed: {
      // 返回store中的值
      activeNoteText () {
        return this.$store.state.nowEdit;
      }
    },
    methods: {
      editNote: function (e) {
        var text=e.target.value;
        this.$store.commit('set_text',text);
        var time=getTime();
        this.$store.commit('set_time',time);
      },
      editTitle:function(e){
        var text=e.target.value;
        this.$store.commit('set_title',text);
      }
    }
  }
</script>

<style scoped>
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