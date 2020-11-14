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
        <h4><a-icon type="right" :style="{color:' rgb(236, 98, 98)',marginRight:'2%'}" /><b>Birthday:</b>14 September 1998</h4>
        <h4><a-icon type="right" :style="{color:'rgb(236, 98, 98)',marginRight:'2%'}" /><b>Phone:</b>+86 176 6403 7679</h4>
        <h4><a-icon type="right" :style="{color:'rgb(236, 98, 98)',marginRight:'2%'}" /><b>City:</b>Laoshan,Shangdong,China</h4>
      </a-col>
      <a-col :span="12">
        <h4><a-icon type="right" :style="{color:'rgb(236, 98, 98)',marginRight:'2%'}" /><b>Age:</b>22</h4>
        <h4><a-icon type="right" :style="{color:' rgb(236, 98, 98)',marginRight:'2%'}" /><b>Degree:</b>Bachelor's</h4>
        <h4><a-icon type="right" :style="{color:' rgb(236, 98, 98)',marginRight:'2%'}" /><b>Freelance:</b>Available</h4>
      </a-col>

        <a-col :span="24">

        </a-col>

    </a-row>
      </a-col>
      <a-col :span="9" :pull="15">
       <img :src="require('@/assets/traceyy.jpg')" alt="Tracey" >
      </a-col>
    </a-row>
  </div>
</template>

<style  scoped>
.about_heading{
    font-size: 2em;
    text-align: left;
    color: black;
    margin: 2% 5%;
     border-bottom: 2px solid rgb(236, 98, 98);  /*#1890ff */
    width: 6%;

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
   border-bottom: 2px solid rgb(236, 98, 98);
   text-align: center;
   margin-right: 35%;
   margin-left: 35%;
   width: auto;
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