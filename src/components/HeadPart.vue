<template>
  <div id="ccHead">
    <el-button type="info" icon="el-icon-edit" circle @click="addFile" style="float:right;margin-right:60px;"></el-button>
  </div>
</template>
<script>
import {mapState,mapSmapGetters,mapActions,mapMutations} from 'vuex'
  export default {
    name:'HeadPart',
    methods: {
      addFile:function(){
        this.$store.commit('add_file');
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
</style>