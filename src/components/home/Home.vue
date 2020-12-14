<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      :style="{height:'100vh' ,position:'fixed'}"
 
    >
       <!-- <div class="logo" />  -->
      <vue-avatar class= "logo" :username="'Tracey'" :src="require('@/assets/tracey.png')"></vue-avatar>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">

         <a-menu-item  class="menu-items" key="1" :style="{ backgroundColor:'rgb(236, 98, 98)'}" >
          <router-link to="#" v-scroll-to="'#components-layout-demo-responsive'">
          <a-icon type="home" />
          <span class="nav-text">Home</span>
          </router-link>
        </a-menu-item>

        <a-menu-item  class="menu-items" key="2" >
          <router-link to="#" v-scroll-to="'#section-four'">
          <a-icon type="project" />
          <span class="nav-text">Projects</span>
          </router-link>
        </a-menu-item>


        <a-menu-item  class="menu-items" key="3">
          <router-link to="#" v-scroll-to="'#section-two'"> 
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
          <router-link  to="#" v-scroll-to="'#section-three'"> 
            <a-icon type="mail" />
            <span class="nav-text">
              Email
            </span>
          </router-link>
        </a-menu-item>

      </a-menu>
    </a-layout-sider>
    <a-layout class="no-padding" :style="{paddingLeft:'200px',display:'flex' ,justify:'space-inbetween'}">
      <a-layout-content :style="{ margin: '0 16px 0' }">
        <div :style="{ background: '#fff', minHeight: '360px' }">
           <div   class="backGround"  :style ="productStyle">
              <p :style="{textAlign:'right',paddingTop:'0.5%',paddingRight:'5%'}">+86 17664037679</p>
               <a-row>
               <a-col :span="12" :push="12" class="cover-text">
      
                  <p v-if="isMorning">Good morning!</p>
                  <p v-if="isAfternoon">Good afternoon!</p>
                  <p v-if="isEvening">Good evening!</p>
                  <h3>Hie , I'm Tracey</h3>
                  <h1>Web  developer</h1>

                  <router-link to="#" v-scroll-to="'#section-two'">
                  <a-icon type="down-circle"  class="down-button"/>
                  </router-link>
                </a-col>

                
        </a-row>
               
        </div>

<div  id ="section-two">
       
     <a-row> 
      <a-col :span="24">
        <!-- <h1 class= "about">START FROM THIS TEMPLATE!</h1> -->
         <a-divider orientation="center" >
         <h1 class= "about">About me</h1>
         </a-divider> 
        <h4 class = "about_me">Hello ! I'm Tracey , a Web developer intrested in both back and 
            front end.Formal studying at Ocean University of China majoring in Computer Science 
           has equipped me with creativity and passion needed to participate confidently in various
           projects.I have worked on various projects with languages like javascript ,html and css,
          php and mysql database ,frameworks like vue , laravel and hosting platforms like github.
          I love designing and building websites constantly adding new skills to my wheelhouse. 
        </h4> 
      </a-col>
    </a-row> 
  

 <a-row >
   <a-col :span="15" :push="9">
    <a-row type="flex">
        <a-divider orientation="center">
         Biography
        </a-divider>
      <a-col :span="11">
        <h4><b>Birthday:</b>14 September 1998</h4>
        <h4><b>Phone:</b>+86 17664037679</h4>
        <h4><b>City:</b>Laoshan,Shangdong,China</h4>
      </a-col>
      <a-col :span="11">
        <h4><b>Age:</b>22</h4>
        <h4><b>Freelance:</b>Available</h4>
        <h4><b>Degree:</b>Bachelor's in Computer Science</h4>
      </a-col>

      
        <a-col :span="22">
        <a-divider orientation="center">
         Skills
        </a-divider>
        <a-row type="flex">
        <a-col flex="50px"> <h4 :style ="{textAlign:'right' ,marginTop:'24%',marginRight:'5%'}"> <b>Html:</b> </h4> </a-col>
        <a-col flex="auto"><a-progress :percent="95" :style ="{marginTop:'2.5%'}"  :line-height="8"></a-progress></a-col>
        </a-row>

         <a-row type="flex">
        <a-col flex="50px"> <h4 :style ="{textAlign:'right' ,marginTop:'24%'}"> <b>CSS:</b> </h4> </a-col>
        <a-col flex="auto"><a-progress :percent="90" :style ="{marginTop:'2.5%'}"  :line-height="8"></a-progress></a-col>
        </a-row>
        
        <a-row type="flex">
        <a-col flex="50px"> <h4 :style ="{textAlign:'right' ,marginTop:'24%'}"> <b>Vue:</b> </h4> </a-col>
        <a-col flex="auto"><a-progress :percent="75" :style ="{marginTop:'2.5%'}" :line-height="8"></a-progress></a-col>
        </a-row>
        
          <a-row type="flex">
        <a-col flex="50px"> <h4 :style ="{textAlign:'right' ,marginTop:'24%'}"> <b>JScript:</b> </h4> </a-col>
        <a-col flex="auto"><a-progress :percent="70" :style ="{marginTop:'3%'}" :line-height="8"></a-progress></a-col>
        </a-row>

        <a-row type="flex">
        <a-col flex="50px"> <h4 :style ="{textAlign:'right' ,marginTop:'24%'}"> <b>php:</b> </h4> </a-col>
        <a-col flex="auto"><a-progress :percent="65" :style ="{marginTop:'2.5%'}"  :line-height="8"></a-progress></a-col>
        </a-row>
      </a-col> 
  </a-row>
    </a-col>
      <a-col :span="9" :pull="15" >
         <img :src="require('@/assets/traceyy.jpg')" alt="Tracey" :style="{inlineSize:'90%'}" >
    </a-col>
  </a-row>
  
  <a-row type="flex"   >
    <a-divider orientation="center" >
         <h1 class= "about">Services</h1>
         </a-divider> 


  <a-col :span="8"  >
    <a-card hoverable  :style="{marginLeft:'5%'}">
     <a-icon type="ant-design" class="service_icon"/>
    <a-card-meta >
      <template  slot="description">
      <h1 :style="{color:'black' ,fontSize:'1.5em',marginTop:'5%'}">Web Design</h1>

      <h4 class="about_me"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. </h4>
      </template>
    </a-card-meta>
  </a-card>
    </a-col>

    
  <a-col :span="8"  >
    <a-card hoverable :style="{marginLeft:'5%'}">
   <a-icon type="code" class="service_icon"/>
    <a-card-meta >
      <template  slot="description">
      <h1 :style="{color:'black' ,fontSize:'1.5em',marginTop:'5%'}">Web Development</h1>
      <h4 class="about_me"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. </h4>
      </template>
    </a-card-meta>
  </a-card>
    </a-col>

    
  <a-col :span="8"  >
    <a-card hoverable :style="{marginLeft:'5%',marginRight:'5%'}" >
    <a-icon type="desktop" class="service_icon"/>
    <a-card-meta >
      <template  slot="description">
      <h1 :style="{color:'black' ,fontSize:'1.5em',marginTop:'5%'}">Responsive Design</h1>
      <h4 class="about_me"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Facilis dolorum dolorem soluta quidem expedita aperiam aliquid. </h4>
      </template>
    </a-card-meta>
  </a-card>
    </a-col>
    
  <a-col :span="24" >
<a-col :span="8">
    <a-card hoverable :style="{backgroundColor: 'rgb(236, 98, 98 ,0.3)',marginLeft:'5%',marginTop:'5%'}" >
    <a-icon type="smile" class="service_icon"/>
    <a-card-meta >
      <template  slot="description">
      <h1 :style="{color:'black' ,fontSize:'1.5em',marginTop:'5%'}">450</h1>
      <h1 :style="{color:'black' ,fontSize:'1.5em'}">Total clients</h1>
      </template>
    </a-card-meta>
  </a-card>
</a-col>

<a-col :span="8">
    <a-card hoverable :style="{backgroundColor: 'rgb(236, 98, 98 ,0.3)',marginLeft:'5%',marginTop:'5%'}" >
   <a-icon type="calendar" class="service_icon"/>
    <a-card-meta >
      <template  slot="description">
      <h1 :style="{color:'black' ,fontSize:'1.5em',marginTop:'5%'}">3</h1>
      <h1 :style="{color:'black' ,fontSize:'1.5em'}">Experience years</h1>
      </template>
    </a-card-meta>
  </a-card>
</a-col>

<a-col :span="8">
    <a-card hoverable :style="{backgroundColor: 'rgb(236, 98, 98 ,0.3)',marginLeft:'5%',marginRight:'5%',marginTop:'5%'}" >
    <a-icon type="bar-chart" class="service_icon"/>
    <a-card-meta >
      <template  slot="description">
      <h1 :style="{color:'black' ,fontSize:'1.5em',marginTop:'5%'}">10</h1>
      <h1 :style="{color:'black' ,fontSize:'1.5em'}">Works completed</h1>
      </template>
    </a-card-meta>
  </a-card>
</a-col>

    </a-col>
  </a-row>



<div id="section-four">
<a-row type = "flex" justify = "space-inbetween"  >
   <a-divider orientation="center" >
      <h1 class= "about">Projects</h1>
  </a-divider> 

 <a-col :span="12">
  <a-card hoverable  :style="{padding:'5%',marginLeft:'5%'}">
    <img
      slot="cover"
      alt="Smart Home System"
      :src="require('@/assets/system.png')" 
    />
    <template slot="actions" class="ant-card-actions">
      <a :href="'https://github.com/Tafadzwa-tracey/smartHomeSystem/'">
      <a-icon key="plus-circle" type="plus-circle" />
      </a>
      <a-icon key="edit" type="edit" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
    <a-card-meta title="Smart Home System" description="python,html,css">
     
    </a-card-meta>
  </a-card>
  </a-col>



     <a-col :span="12">
  <a-card hoverable :style="{padding:'1%' ,marginLeft:'5%',marginRight:'5%'}">
    <img
      slot="cover"
      alt="Stackoverflow Clone"
      :src="require('@/assets/overflow.png')" 
      :style="{inlineSize:'93%',marginLeft:'5%'}"
    />
    <template slot="actions" class="ant-card-actions">
        <a :href="'https://github.com/Tafadzwa-tracey/laravel_stackoverflow_clone/'">
      <a-icon key="plus-circle" type="plus-circle" />
      </a>
      <a-icon key="edit" type="edit" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
    <a-card-meta title="Stackoverflow Clone" description="laravel,php,css">
     
    </a-card-meta>
  </a-card>
  </a-col>

     <a-col :span="12">
  <a-card hoverable :style="{marginTop:'5%',padding:'5%',marginLeft:'5%'}">
    <img
      slot="cover"
      alt="My portifolio"
      :src="require('@/assets/myp.png')" 
      :style="{inlineSize:'94%'}"
    />
    <template slot="actions" class="ant-card-actions">
      <a :href="'https://tafadzwa-tracey.github.io/my_portifolio/'">
      <a-icon key="plus-circle" type="plus-circle" />
      </a>
      <a-icon key="edit" type="edit" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
    <a-card-meta title="My portifolio" description="vue,html,css">
     
    </a-card-meta>
  </a-card>
  </a-col>

  <a-col :span="12">
  <a-card hoverable :style="{marginTop:'5%',padding:'5%',marginLeft:'5%',marginRight:'5%'}">
    <img
      slot="cover"
      alt="Icecream App"
      :src="require('@/assets/ice.png')" 
      :style="{inlineSize:'100%'}" 
    />
    <template slot="actions" class="ant-card-actions">
       <a :href="'https://github.com/Tafadzwa-tracey/icecream-app/'">
      <a-icon key="plus-circle" type="plus-circle" />
      </a>
      <a-icon key="edit" type="edit" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
    <a-card-meta title="Icecream App" description="css,html,javascript">
     
    </a-card-meta>
  </a-card>
  </a-col>

      </a-row>
  </div>
      </div>
        </div>
      </a-layout-content>

      <a-layout-footer style="textAlign: center">
  <div id = "section-three" >
    <a-row type="flex">
    <a-divider>
      <h1 class="about">Contact me</h1>
    </a-divider>
    <a-col :span="12">
     
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
    </a-col>
    <a-col :span="12">
   
    <h4 class="about_me">Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. 
      Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</h4>
      <h4 class="about_me" > <a-icon type="environment" :style="{color:'#1890ff',marginRight:'2%'}"/>Laoshan ,Shandong Province China</h4>
      <h4 class="about_me"> <a-icon type="phone" :style="{color:'#1890ff',marginRight:'2%'}"/>+86 17664037679</h4>
      <h4 class="about_me"> <a-icon type="mail" :style="{color:'#1890ff',marginRight:'2%'}"/>tafadzwatracey@gmail.com</h4>
    </a-col>
    </a-row>
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
  // textlign(){
  //   var overlay =60-(60/this.windowWidth)*100 + "%"
  //   return 'left:'+overlay+'';
  // },

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
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
  margin: 30px;
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
  text-align: left;
  position:absolute;
  top: 40%;
  padding: 5%;
  transform:translate(-10%,10%); 
  

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
  text-align:justify;
  padding: 2%;
}

.down-button{
    margin: 30%;
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


img:hover {
        transform: scale(1.01);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
       
      }

.img_labels{
 
  margin-top:15%;

}

.service_icon{
  font-size:70px;
  color : rgb(236, 98, 98);
}

.about{
 
  font-size: 2em;
  
  
  /* border-radius: 10px;
  width:40%;
  height:auto; */
  color : rgb(236, 98, 98);
  margin-left: 5%;
  margin-top: 2%;
  margin-bottom: 0%; 
}

.about_me{
  color:black;
  text-align:justify;
  font-size: 1.2em;
  /* margin-left: 5%;
  margin-right: 7%; */
}


    
  

@media (max-width: 550px) {
     h1{
       font-size:2em;
     }
    h3{
      font-size:1.5em;
    }
    .cover-text{
      margin-top:30%;
      transform:translate(-10%,40%);
    }
    .no-padding{
      padding-left:0  !important;
      
      
      
    }
     
    } 

  


</style>