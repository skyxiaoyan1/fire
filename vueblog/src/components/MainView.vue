<template>
  <div id="MainView">
      <div id="blogtopics"> 
          <router-view></router-view>
      </div>
  </div>
</template>

<script>

import BlogList from './BlogList'
import Blog from './Blog'

export default {
  name: 'MainView',
  components: {
    BlogList,Blog
  },
  
}
</script>


<style scoped>

#blogtopics {
    width: 80%;
    margin: 2rem auto 2rem auto;
    background-color: white;
}

</style>

