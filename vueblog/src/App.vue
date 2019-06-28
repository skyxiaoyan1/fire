<template>
  <div id="app">
    <CnodeHeader></CnodeHeader>
    <div class="cnode_bg"></div>
    
    <MainView></MainView>
    
    
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'

import CnodeHeader from './components/CnodeHeader'
import MainView from './components/MainView'
export default {
  name: 'App',
  components: {
    CnodeHeader,MainView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}

body { overflow-y: scroll; }

</style>

<style scoped>
.cnode_bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgb(236, 234, 234);
}
</style>


