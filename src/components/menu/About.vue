<template>
  <div >
    <a-row>
      <a-col :span="24" class="about_heading" >
       About
      </a-col>
    </a-row>
  

     <a-row>
    <a-col :span="22" class="text"  >
            Hello ! I'm Tracey , a Web developer intrested in both back and
           front end.Formal studying at Ocean University of China majoring in Computer Science 
           has equipped me with creativity and passion needed to participate confidently in various
           projects.I have worked on various projects with languages like javascript ,html and css,
          php and mysql database ,frameworks like vue , laravel and hosting platforms like github.
          I love designing and building websites constantly adding new skills to my wheelhouse.
      </a-col>
      <a-col :span="15" :push="9">
        <h1 class="text-heading">Web Developer</h1>
        <a-row>
      <a-col :span="12">
        <h4><b>Birthday:</b>14 September 1998</h4>
        <h4><b>Phone:</b>+86 176 6403 7679</h4>
        <h4><b>City:</b>Laoshan,Shangdong,China</h4>
      </a-col>
      <a-col :span="12">
        <h4><b>Age:</b>22</h4>
        <h4><b>Degree:</b>Bachelor's</h4>
        <h4><b>Freelance:</b>Available</h4>
      </a-col>


        <a-col :span="24">
        <h1 class="text-heading" >Skills</h1>
        <a-row type="flex">
        <a-col flex="50px"> <h4 :style ="{textAlign:'right' ,marginTop:'24%',marginRight:'5%'}"> <b>Html:</b> </h4> </a-col>
        <a-col flex="auto"><k-progress :percent="100" :style ="{marginTop:'2%'}"  :line-height="8"></k-progress></a-col>
        </a-row>

         <a-row type="flex">
        <a-col flex="50px"> <h4 :style ="{textAlign:'right' ,marginTop:'24%'}"> <b>CSS:</b> </h4> </a-col>
        <a-col flex="auto"><k-progress :percent="95" :style ="{marginTop:'2%'}"  :line-height="8"></k-progress></a-col>
        </a-row>
        
        <a-row type="flex">
        <a-col flex="50px"> <h4 :style ="{textAlign:'right' ,marginTop:'24%'}"> <b>Vue:</b> </h4> </a-col>
        <a-col flex="auto"><k-progress :percent="75" :style ="{marginTop:'2%'}" :line-height="8"></k-progress></a-col>
        </a-row>
        
          <a-row type="flex">
        <a-col flex="50px"> <h4 :style ="{textAlign:'right' ,marginTop:'24%'}"> <b>JScript:</b> </h4> </a-col>
        <a-col flex="auto"><k-progress :percent="70" :style ="{marginTop:'2%'}" :line-height="8"></k-progress></a-col>
        </a-row>

        <a-row type="flex">
        <a-col flex="50px"> <h4 :style ="{textAlign:'right' ,marginTop:'24%'}"> <b>php:</b> </h4> </a-col>
        <a-col flex="auto"><k-progress :percent="65" :style ="{marginTop:'2%'}"  :line-height="8"></k-progress></a-col>
        </a-row>

        </a-col> 

    </a-row>
      </a-col>
      <a-col :span="9" :pull="15">
       <img :src="require('@/assets/traceyy.jpg')" alt="Tracey" >
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
          xs: { span: 0},//24
          sm: { span: 2 },//8
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

<style  scoped>
.about_heading{
    font-size: 2em;
    text-align: left;
    color: black;
    margin: 2% 5%;
      border-bottom: 2px solid  rgb(236, 98, 98);  
    width: 4%; 

}

img{
 
  margin-right: 5%;
  margin-left: 10%;
  padding: 10px;
  inline-size: 50%

}
.text{
    text-align:justify;
    margin:2% 5%;
    font-size: 1.1em; 
    color: black;

}

.text-heading{
    /* border-bottom: 2px solid  rgb(236, 98, 98) ;  */
   text-align: center;
   margin-right: 40%;
   margin-left: 15%;
   
}
p{
    font-size: 1.1em;
    color: black;
}

h4{
    text-align:justify;
    font-size:1.1em ;
    padding: 2%;
}




</style>