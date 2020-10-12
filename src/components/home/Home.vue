<template>
  <a-layout id="components-layout-demo-fixed-sider" >
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div  />
       <!--<a-avatar class= "logo" src="./assets/tracey.png" />-->
       <vue-avatar class= "logo" :username="'Tracey'" :src="require('@/assets/tracey.png')"></vue-avatar>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item  class="menu-items" key="1">
          <a-icon type="project" />
          <span class="nav-text">Projects</span>
        </a-menu-item>
        <a-menu-item class="menu-items" key="2">
          <a-icon type="user" />
          <span class="nav-text">About</span>
        </a-menu-item>
        <a-menu-item class="menu-items" key="3">
          <a-icon type="phone" />
          <span class="nav-text">Contacts</span>
        </a-menu-item>
     
        <a-menu-item class="menu-items" key="4">
        <a :href="'https://twitter.com/Tracey02189951?s=09'">
          <a-icon type="twitter" />
          <span class="nav-text">twitter</span>
        </a>
          </a-menu-item>
       
        <a-menu-item class="menu-items" key="5">
          <a :href="'https://www.facebook.com/tafadzwa.taruvinga.5872'">
              <a-icon type="facebook" />
              <span class="nav-text">facebook</span>
          </a>
        </a-menu-item>

        <a-menu-item class="menu-items" key="6">
          <a :href="'https://www.instagram.com/tracey.1416'">
              <a-icon type="instagram" />
              <span class="nav-text">instagram</span>
          </a>
        </a-menu-item>

        <a-menu-item  class="menu-items" key="7">

           <a :href="'https://www.linkedin.com/in/tafadzwa-tracey-taruvinga-1507731b3'">
              <a-icon type="linkedin" />
              <span class="nav-text">LinkedIn</span>
          </a>
        </a-menu-item>

        <a-menu-item class="menu-items" key="8">
          <a :href = "'#'">
          <a-icon type="mail" />
          <span class="nav-text">Email</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }"  />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px',
                       background: 'grey', 
                       textAlign: 'center',
          
                      /*backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('require('@/assets/tracey.png')')`,*/
                       backgroundImage: 'url(' + require('@/assets/tracey.png') + ')',
                       backgroundPosition: 'center center',
                       backgroundSize:'cover',
                       height:'100vh'}"
                       >
          ...
          <br />
          Really
          <br />...<br />...<br />...<br />
          long
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />
          content
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
 
 computed: {
      backgroundImage(url) {
        let overlay = 'linear-gradient(270deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))';
        return 'background-image:'+ overlay +' , url(' + url + ');';
      }
    }

}

</script>

<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  margin: 16px;

}

 .menu-items {
 text-align: left;
 }

 
</style>