<template>
  <div id="app">
    
     <router-view >
       <Home/>
    </router-view>
   
  </div>
</template>

<script>
import Home from './components/home/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  padding:0;
  margin:0;
}
</style>
