import Vue from 'vue'
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router';
import Home from "@/components/home/Home.vue";


Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path:"",component:Home,name:"home"},
  
      ],
      mode:'history'

})
