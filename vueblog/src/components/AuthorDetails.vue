<template>
  <div id="AuthorDetails"  v-if="!(author_data==null)">
      <h3>用户详细</h3>
      <div>
          <router-link :to='{path: "/AuthorDetails/", query:{id:author_data.loginname}}'>
          <img :src="author_data.avatar_url" alt="作者头像">
          </router-link>
          <router-link :to='{path: "/AuthorDetails/", query:{id:author_data.loginname}}'>
          <span class="login_name">{{author_data.loginname}}</span>
          </router-link>
      </div>
      <span>积分:{{author_data.score}}</span>
      <p class="github-name">github:{{author_data.githubUsername}}</p>

      <hr/>
      <div class="dynamic">
          <div  class="dynamic-title">作者最近话题</div>
          <div  class="dynamic-topics" v-for="topic in author_data.recent_topics">
              <router-link :to='{path: "/Blog/", query:{id:topic.id}}'>{{topic.title}}</router-link>
              <!-- <a href="#">{{topic.title}}</a> -->
          </div>
      </div>

      <div class="dynamic">
          <div class="dynamic-title">作者最近回复</div>
          <div class="dynamic-topics" v-for="reply in author_data.recent_replies">
              <router-link :to='{path: "/Blog/", query:{id:reply.id}}'>{{reply.title}}</router-link>
          </div>
      </div>
  </div>

  
</template>

<script>
import {getAuthor} from '../CnodejsDate'
export default {
  name: 'AuthorDetails',
  props: ["author_id"],
  data() {
      return {
          author_data:null
      }
  }
  ,
  created: function(){
      this.pullData();

  },
  watch: {
      '$route':'pullData'
  },
  methods: {
    pullData(){
       getAuthor(this.$route.query.id).then( response => {
         console.log(response.data.data);
         this.author_data = response.data.data;
       })
       .catch(function (error) {
         console.log(error); 
       }); 
    // console.log(this.$route.path);
    }
  }
}
</script>

<style scoped>
#AuthorDetails{
    padding: 20px;
}
#AuthorDetails img{
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin: 10px 10px 10px 0;
}
.login_name{ 
    color: rgb(11, 236, 225);

}
#AuthorDetails .github-name {
    padding: 10px 10px 10px 0;
}
#AuthorDetails hr{
    color: rgb(235, 233, 233);
}
.dynamic {
    margin: 30px 4px 4px 4px;
    
}
.dynamic-topics {
    padding: 4px;
}
a{
    color: #42b993;
    text-decoration: none;
    font-size: 0.8em;
}
</style>

