<template>
  <div id="Blog" v-if="!(blogdata==null)">
      <div class="blog_info">
          <div class="b_title">
              <el-tag v-if="blogdata.tab == 'ask'">问题</el-tag>
              <el-tag v-else-if="blogdata.tab == 'share'">分享</el-tag>
              <el-tag v-else-if="blogdata.tab == 'job'">招聘</el-tag>
              <el-tag v-else-if="blogdata.tab == 'good'">精品</el-tag>
              <el-tag v-else>未知</el-tag>
              <h1>{{blogdata.title}}</h1>
          </div>
          <div class="souce_blog">
              <span>发布于：{{$moment(blogdata.last_reply_at).format("YYYY-MM-DD")}}</span>
              <span>作者: {{blogdata.author.loginname}}</span>
              <span>浏览次数: {{blogdata.visit_count}}</span>
          </div>
          <hr/>

          <div class="blog-content" v-html="this.blogdata.content">
          </div>
          <BlogReply :replie_data=this.blogdata></BlogReply>

      </div>
      <div class="autor_info">
         <div class="autor">
             <Author :author_id=this.blogdata.author.loginname></Author>

         </div>


      </div>


  </div>
</template>

<script>
import {getBlog} from '../CnodejsDate'
import BlogReply from './BlogReply'
import Author from './Author'
export default {
  name: 'Blog',
  data() {
      return {
          blogid:null,
          blogdata:null
      }
  }
  ,
  components:{
      BlogReply,Author
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
       getBlog(this.$route.query.id).then( response => {
         console.log(response.data.data);
         this.blogdata = response.data.data;
       })
       .catch(function (error) {
         console.log(error); 
       }); 
    // console.log(this.$route.path);
    }
}




}
</script>

<style>
.blog-content a{
    color: rgb(97, 166, 245);
    text-decoration: none;
}

.blog-content img{
    width: 80%;
}


</style>

<style scoped>
.blog_info {
    width: 80% ;
    float: left;
    background-color: white;
    
}

.autor_info {
    width: 18% ;
    float: right;
    background-color: white;
    box-shadow: 1px 1px 12px rgb(230, 228, 228);
    
}


.blog_info .b_title{
    display: flex;
    justify-content: flex-start;

    align-items: center;
    margin-left: 2rem;
}

.blog_info .b_title h1 {
    font-size: 1.4rem;
    margin-left: 2rem;
    padding: 10px;
}

.blog_info .souce_blog {
    margin-left: 2rem;
    font-size: 0.8rem;
}

.blog_info .souce_blog span{
    margin: 0 1rem 0 1rem;
    color: darkgray;
}
.blog_info hr {
    margin: 10px auto 10px auto;
    color: rgb(254, 254, 254);
    width: 96%;
}

.blog-content {
    margin: 14px 2px 2px 14px;
    padding: 14px;
    color: rgb(77, 75, 75);
    line-height: 1.8;
}



</style>

