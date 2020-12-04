<template>
  <div class="projects">
    <a-divider orientation="left">
    Smart Home System
    </a-divider>
     <a-row>
      <a-col :span="15" :push="9" class= "project_content">
         <a href="https://github.com/Tafadzwa-tracey/smartHomeSystem"><b>-</b> https://github.com/Tafadzwa-tracey/smartHomeSystem</a>
        <h4> <b>-</b>  Build this project using python ,javascript,html and css</h4>
        <h4><b>-</b> The project mainly focuses on multithreading</h4>
        <h4><b>-</b> Users get the experience to control smart home devices while away</h4>
        <h4><b>-</b> Devices can automatically turn on and the sweeping robot off while at home</h4>
        <h4><b>-</b> While users are away they can set an alarm for the sweeping robot to work</h4>
      </a-col>
      <a-col :span="9" :pull="15">
        <img :src="require('@/assets/system.png')" alt="Smart Home System" >
      </a-col>
    </a-row>

     <a-divider orientation="left">
      My portifolio App
    </a-divider>
    <a-row>
      <a-col :span="15" :push="9" class= "project_content" >
        <a href="https://github.com/Tafadzwa-tracey/Tracey-portifolio"><b>-</b> https://github.com/Tafadzwa-tracey/Tracey-portifolio</a>
        <h4> <b>-</b>  Build this project using vue.js ,javascript,html and css</h4>
        <h4><b>-</b> The project mainly focuses on my personal portifolio</h4>
        <h4><b>-</b> Users can see all my social networks and work progress </h4>
        <h4><b>-</b> Also used Ant Design Vue as an extended library</h4>
      </a-col>
      <a-col :span="9" :pull="15">
          <img :src="require('@/assets/myp.png')" alt="My Portifolio" >
      </a-col>
    </a-row>


     <a-divider orientation="left">
      Stackoverflow App
    </a-divider>
    <a-row>
      <a-col :span="15" :push="9" class= "project_content">
         <a href="https://github.com/Tafadzwa-tracey/laravel_stackoverflow_clone"><b>-</b>https://github.com/Tafadzwa-tracey/laravel_stackoverflow_clone</a>
        <h4><b>-</b> Build this project's front-end with using laravel  ,javascript,html and css</h4>
        <h4><b>-</b> Build the back-end databases using php</h4>
        <h4><b>-</b> The project mainly focuses on building a clone of stackoverflow</h4>
        <h4><b>-</b> The user have the experience to add , ask ,reply and comment questions</h4>
        <h4><b>-</b> Users can get notifications for the treanding questions</h4>
        <h4><b>-</b> Users can also get a rating for their contributions </h4>
        
      </a-col>
      <a-col :span="9" :pull="15">
       <img :src="require('@/assets/overflow.png')" alt="Stackoverflow Clone" >
      </a-col>
    </a-row>


     <a-divider orientation="left">
      Icecream App
    </a-divider>
     <a-row>
      <a-col :span="15" :push="9" class= "project_content">
          <a href=" https://github.com/Tafadzwa-tracey/icecream-app"><b>-</b> https://github.com/Tafadzwa-tracey/icecream-app</a>
        <h4> <b>-</b>One of the first projects I build using javascript ,css and html</h4>
        <h4><b>-</b> Users order icecream and customize their packaging styles and flavors</h4>
        <h4><b>-</b> Users get experience to mix their prefered flavours  </h4>
        <h4><b>-</b> They also can pick prefered time and dates for delivery </h4>
        
      </a-col>
      <a-col :span="9" :pull="15">
        <img :src="require('@/assets/ice.png')" alt="Icecream App">
      </a-col>
    </a-row>


     <a-layout-footer>
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
   
  </div>
</template>

  <script>
export default {
  name:'app',
 data() {
   return{
      
     formItemLayout: {
        labelCol: {
          xs: { span: 10},//24
          sm: { span: 6 },//8
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

   methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
   },

}

</script>

<style scoped>
.projects{

    margin-left:5%;
    margin-right: 5%;
}

img{
   inline-size: 100%;

}

img:hover {
        transform: scale(1.01);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
       
      }

.project_content{
  text-align: left;
  line-height:2em ;
  padding-left:10%;
  font-size: 1.2em;
 

}
</style>
