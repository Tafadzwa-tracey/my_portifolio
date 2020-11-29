import Vue from 'vue'
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router';
import Home from "@/components/home/Home.vue";
import Mail from "@/components/menu/Mail.vue";
import Projects from "@/components/menu/Projects.vue";
import About from "@/components/menu/About.vue";



Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path:"/",component:Home,name:"home"},
        {path:'/mail',component:Mail,name:"mail"},
        {path:'/projects',component:Projects,name:"projects"},
        {path:'/about',component:About,name:"about"},
  
      ],
      mode:'hash'

})
