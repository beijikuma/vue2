import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import edit from '@/components/edit'
import EDIT2 from '@/components/EDIT2'
import HeadPart from '@/components/HeadPart'
import LeftTool from '@/components/LeftTool'
import EditTool from '@/components/EditTool'
import notexit from '@//components/notexit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/EDIT2',
      name: 'EDIT2',
      component: EDIT2
    },
    {
      path:'*',
      component:notexit
    }
  ]
})
