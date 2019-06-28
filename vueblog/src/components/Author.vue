<template>
  <div id="Author"  v-if="!(author_data==null)">

      <div>
          <span>作者</span>
      </div>
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
  name: 'Author',
  props: ["author_id"],
  data() {
      return {
          author_data:null
      }
  }
  ,
  created: function(){
      console.log(this.author_id);
      getAuthor(this.author_id).then( response => {
         console.log(response.data.data.avatar_url);
         this.author_data = response.data.data;
       })
       .catch(function (error) {
         console.log(error);
       });
      
  }
}
</script>

<style scoped>
#Author{
    padding: 20px;
}
#Author img{
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin: 10px 10px 10px 0;
}
.login_name{ 
    color: rgb(11, 236, 225);

}
#Author .github-name {
    padding: 10px 10px 10px 0;
}
#Author hr{
    color: rgb(235, 233, 233);
}
.dynamic {
    margin: 30px 4px 4px 4px;
    
}
.dynamic-topics {
    padding: 4px;
}
a{
    color: gray;
    text-decoration: none;
    font-size: 0.8em;
}


</style>

