<template>
  <div class="projects">
    <a-divider orientation="left">
    Smart Home System
    </a-divider>
     <a-row>
      <a-col :span="15" :push="9">
        col-18 col-push-6
      </a-col>
      <a-col :span="9" :pull="15">
        <img :src="require('@/assets/system.png')" alt="Smart Home System" >
      </a-col>
    </a-row>

     <a-divider orientation="left">
      My portifolio App
    </a-divider>
    <a-row>
      <a-col :span="15" :push="9">
        col-18 col-push-6
      </a-col>
      <a-col :span="9" :pull="15">
          <img :src="require('@/assets/myp.png')" alt="My Portifolio" >
      </a-col>
    </a-row>


     <a-divider orientation="left">
      Stackoverflow App
    </a-divider>
    <a-row>
      <a-col :span="15" :push="9">
        col-18 col-push-6
      </a-col>
      <a-col :span="9" :pull="15">
       <img :src="require('@/assets/overflow.png')" alt="Stackoverflow Clone" >
      </a-col>
    </a-row>


     <a-divider orientation="left">
      Icecream App
    </a-divider>
     <a-row>
      <a-col :span="15" :push="9">
        col-18 col-push-6
      </a-col>
      <a-col :span="9" :pull="15">
        <img :src="require('@/assets/ice.png')" alt="Icecream App">
      </a-col>
    </a-row>

   
  </div>
</template>

<style scoped>
.projects{

    margin-left:5%;
    margin-right: 5%;
}

img{
    width: 100%;

}
</style>
