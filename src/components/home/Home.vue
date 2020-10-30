<template>
  <a-layout id="components-layout-demo-fixed-sider" >
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">

       <vue-avatar class= "logo" :username="'Tracey'" :src="require('@/assets/tracey.png')"></vue-avatar>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item class="menu-items" key="1" :style="{ backgroundColor: activeColor }" >
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
          <router-link  to ="/mail"> 
            <a-icon type="mail" />
            <span class="nav-text">
              Email
            </span>
          </router-link>
      
          

        </a-menu-item>

      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
     
      <a-layout-content :style="{ margin: '0 16px 0', overflow: 'initial' }">
        <div  class="backGround"  :style ="productStyle">
         
               <div class="cover-text">
                  <p v-if="isMorning">Good morning!</p>
                  <p v-if="isAfternoon">Good afternoon!</p>
                  <p v-if="isEvening">Good evening!</p>
                  <h3>Hie , I'm Tracey</h3>
                  <h1>Web  developer</h1>

                  <router-link to="#" v-scroll-to="'#section-two'">
                  <a-icon type="down-circle"  class="down-button"/>
                  </router-link>
                
             </div>
        </div>

        <div  id ="section-two">
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
 var hours = new Date().getHours();
export default {
  name:'app',
 data() {
   return{
       isMorning: hours < 12,
      isAfternoon: hours >= 12 && hours < 18,
      isEvening: hours >= 18,
      activeColor : 'red',
 
  
   }
    
},


computed: { // will be re-computed when the image property changes
  productStyle () {
     //var overlay = 'linear-gradient(180deg,rgba(12,10,54,0.2),rgba(225,0,0,0.2),rgba(255,0,0,0.3) ) ';
     //var overlay = 'linear-gradient(to bottom right ,rgba(12,10,54,0.5),rgba(12,10,54,0.6))' 
     //var overlay = 'linear-gradient(to bottom , rgba(255, 0, 0, 0.1), rgba(255,0,52,0.2),rgba(12, 10, 52, 0.3))';
     var overlay = 'linear-gradient(to top left ,rgba(225,0,0,0.2),rgba(255,0,0,0.5) 50% ,rgba(12,10,54,0.7) 50%,rgba(12,10,54,0.7))';
      return 'background-image:'+ overlay +' , url(' + require('@/assets/tracey.png') + ') ;';
    },


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

.backGround{
    background-position: center center;
    background-size:cover;
    height:100vh;
}

.cover-text {
  text-align: start;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-10%, -10%);

}

p {
  font-size: 15px;
  padding: 20px;
  padding-top: 0px;
  padding-left: 0px;
  background:linear-gradient(to bottom right ,white ,rgb(241, 144, 144)) ;
  background-color: white;
  background-clip:text;
   -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

h3 {
  font-size: 20px;
  color: white;
}


h1{
  font-size: 50px;
  color: white;

}

.down-button{
    margin: 50%;
    position: -ms-page;
    color: aliceblue;
    font-size:50px;
 }


</style>