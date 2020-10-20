import Vue from 'vue'
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router';
import Home from "@/components/home/Home.vue";
import Mail from "@/components/home/Mail.vue";



Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path:"",component:Home,name:"home"},
        {path:'/mail',component:Mail,name:"mail"}
  
      ],
      mode:'history'

})
