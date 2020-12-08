<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
 
    >
       <!-- <div class="logo" />  -->
      <vue-avatar class= "logo" :username="'Tracey'" :src="require('@/assets/tracey.png')"></vue-avatar>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">


        <a-menu-item  class="menu-items" key="1" :style="{ backgroundColor:'rgb(236, 98, 98)'}" >
           <router-link  to ="/projects"> 
          <a-icon type="project" />
          <span class="nav-text">Projects</span>
          </router-link>
        </a-menu-item>


        <a-menu-item  class="menu-items" key="2">
          <router-link  to ="/about"> 
          <a-icon type="user" />
          <span class="nav-text">About</span>
           </router-link>
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
    <a-layout>
      <a-layout-content :style="{ margin: '0 16px 0' }">
        <div :style="{ background: '#fff', minHeight: '360px' }">
           <div   class="backGround"  :style ="productStyle">
              <p :style="{textAlign:'right',paddingTop:'0.5%',paddingRight:'5%'}">+86 17664037679</p>
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
         <div>
    <a-row>
      <a-col :span="24">
        <h1 class= "about">START FROM THIS TEMPLATE!</h1>
        <h4 class = "about_me">Hello ! I'm Tracey , a Web developer intrested in both back and
           front end.Formal studying at Ocean University of China majoring in Computer Science 
           has equipped me with creativity and passion needed to participate confidently in various
           projects.I have worked on various projects with languages like javascript ,html and css,
          php and mysql database ,frameworks like vue , laravel and hosting platforms like github.
          I love designing and building websites constantly adding new skills to my wheelhouse.
          Below are my projects !!!!!
        </h4>
      </a-col>
    </a-row>

  </div>
    <a-row type = "flex" justify = "space-inbetween" :style="{marginTop:'3%'}">
     
    

       <a-col :span="11">
        <a-divider orientation="center">
         Smart Home System
        </a-divider>
        <img :src="require('@/assets/system.png')" alt="Smart Home System" >
      </a-col>

      <a-col :span="11">
        <a-divider orientation="center">
         Stackoverflow Clone
        </a-divider>
        <img :src="require('@/assets/overflow.png')" alt="Stackoverflow Clone">
      </a-col>

      <a-col :span="11">
      <a-divider orientation="center">
         My Portifolio
        </a-divider>
        <img :src="require('@/assets/myp.png')" alt="My Portifolio">
      </a-col>
      

       <a-col :span="11">
        <a-divider orientation="center">
        Icecream App
        </a-divider>
        <img :src="require('@/assets/ice.png')" alt="Icecream App" >
      </a-col>

      </a-row>
      </div>
        </div>
      </a-layout-content>

      <a-layout-footer style="textAlign: center">
         <div id = "section-three" >
    <a-form :form="form" @submit="handleSubmit">

       <a-form-item v-bind="formItemLayout"  label="Username" >
        <a-input   :style="{backgroundColor:'white'}"
          v-decorator="[
            'username',
            {
              rules: [{ required: true, message: 'Username is required!' }],
            },
          ]"
        />
      </a-form-item>

    <a-form-item v-bind="formItemLayout" label="E-mail">
      <a-input  :style="{backgroundColor:'white'}"
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          },
        ]"
      />
    </a-form-item>


       <a-form-item v-bind="formItemLayout" label= "Text-area">
        <a-textarea placeholder="Basic usage" :rows="4"   :style="{backgroundColor:'white'}" />
       </a-form-item>

      <a-form-item   v-bind="formItemLayout">
     <a-button type="primary" html-type="submit"  onclick="location.href='mailto:tafadzwatracey@gmail.com';">
        Submit
      </a-button>
       </a-form-item>
       
    </a-form>
    </div>
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
 
     formItemLayout: {
        labelCol: {
          xs: { span: 10},//24
          sm: { span: 6},//8
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
   }
    
},


computed: { // will be re-computed when the image property changes
  productStyle () {
     var overlay = 'linear-gradient(to top left ,rgba(225,0,0,0.5),rgba(255,0,0,0.5) 50% ,rgba(12,10,54,0.5) 50%,rgba(12,10,54,0.5)40%)';
      return 'background-image:'+ overlay +' , url(' + require('@/assets/traceyy.jpg') + ') , url(' + require('@/assets/white.jpg') + ');';
    },

  },

   methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
   }

}

</script>

<style scoped>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

 .menu-items {
 text-align: left;
 }
 .alayout{
   margin-left:200px;
 }

.backGround{
  background-repeat: no-repeat , no-repeat;
  background-position:50% 100%;
  background-position: right ,left ;
  height:100vh;
}



.cover-text {
  text-align: start;
  position:absolute;
  top: 40%;
  left:60%; 
  padding: 5%; 
  transform: translate(-10%, -10%);

}


p {
  font-size: 1.2em;
  padding: 5%;
  padding-top: 0px;
  padding-left: 0px;
  color: white;

}

h3 {
  font-size: 2em;
  color: white;
}


h1{
  font-size: 3.5em;
  color: white;

}

h4{
  font-size: 1.2em;
}

.down-button{
    margin: 20%;
    margin-left: -10%;
    position: -ms-page;
    color: aliceblue;
    font-size:4em;
 }

#section-two{
 background-position: auto;
 background-color:#fff;
 overflow:hidden;
}

img{
 
  margin-right: 10%;
  margin-left: 10%;
  padding: 5%;
  inline-size: 100%;

}

img:hover {
        transform: scale(1.01);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
       
      }

.img_labels{
 
  margin-top:15%;

}

.about{
  color:black;
  text-align: left;
  font-size: 1.5em;
  text-align: center;
  border: 2px solid rgb(236, 98, 98);
  border-radius: 10px;
  width:40%;
  height:auto;
  color : rgb(236, 98, 98);
  margin-left: 25%;
  margin-top: 3%;
  margin-bottom: 3%;
}

.about_me{
  color:black;
  text-align:justify;
  font-size: 1.2em;
  margin-left: 5%;
  margin-right: 7%;
}


@media (max-width: 360px) {
      .cover-text {
        left: 20% !important;
      }
      .down-button{
        margin-left:30%  !important;
      }
     
    }

</style>