<template>
  <a-layout id="components-layout-demo-fixed-sider" >
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div  />
       <!--<a-avatar class= "logo" src="./assets/tracey.png" />-->
       <vue-avatar class= "logo" :username="'Tracey'" :src="require('@/assets/tracey.png')"></vue-avatar>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
        <a-menu-item key="1">
          <a-icon type="project" />
          <span class="nav-text">Projects</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="user" />
          <span class="nav-text">About</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="phone" />
          <span class="nav-text">Contacts</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="twitter" />
          <span class="nav-text">twitter</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="facebook" />
          <span class="nav-text">facebook</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="instagram" />
          <span class="nav-text">instagram</span>
        </a-menu-item>
        <a-menu-item key="8">
          <a-icon type="linkedin" />
          <span class="nav-text">LinkedIn</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }"  />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px',
                       background: 'grey', 
                       textAlign: 'center',
                       backgroundImage: 'url(' + require('@/assets/tracey.png') + ')',
                       backgroundPosition: 'center center',
                       backgroundSize:'cover',
                       height:'100vh'}">
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


<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  margin: 16px;

}
image{
  background-image: url('~@/assets/logo.png');
}

</style>
