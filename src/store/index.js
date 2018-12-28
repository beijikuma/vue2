import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

const state = {
    listArr : [{
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
    ],
    

}

const getters = {
    listArr:state => state.listArr,
    nowEdit:state => state.listArr[0],
     // 返回store中的值
    activeNoteText:state => state.nowEdit,
}

const actions = {
    addFile:function({commit}){
        commit('add_file')
    },
    deleteFile:function({commit},item){
        commit('delete_file',item)
    },
    setNowActive:function({commit},item){
        commit('set_active',item)
    },
    markFile:function({commit},item){
        commit('mark_file',item)
    },
    editNote: function ({commit},e) {
        var text=e.target.value;
        commit('set_text',text);
        var time=getTime();
        commit('set_time',time);
    },
    editTitle:function({commit},e){
        var text=e.target.value;
        commit('set_title',text);
    }
}
const mutations = {
    mutations: {
        //添加一个笔记
        add_file: function (state) {
          var temp = {
            title: '这里是标题',
            edit: '',
            text: '',
            mark: false
          };
          state.listArr.push(temp);
          state.nowEdit = temp;
        },
        //设置为active
        set_active (state, note)
        {
          state.nowEdit = note;
        },
        //设置笔记内容
        set_text(state, text)
        {
          state.nowEdit.text = text;
        },
        //设置编辑时间
        set_time(state, time)
        {
          state.nowEdit.edit = time;
        },
        //删除一个笔记
        delete_file: function (state, item) {
          for (var i = 0, len = state.listArr.length; i < len; i++) {
            if (state.listArr[i] == item) {
              if (state.listArr[i] == state.nowEdit) {
                state.nowEdit = state.listArr[0];
              }
              state.listArr.splice(i, 1);
              break;
            }
     
          }
        },
        //标记一个笔记
        mark_file: function (state, item) {
          item.mark = !item.mark;
     
        },
        //设置笔记标题
        set_title: function (state, text) {
          state.nowEdit.title = text;
     
        }
    }
}
export default{
      state,
      getters,
      actions,
      mutations,
}