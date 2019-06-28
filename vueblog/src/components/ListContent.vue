<template>
  <div class="ListContent">
      <ul>
          <li class="topiccontent" v-for='topic in this.topics' >
              <img class="u_pic" :src="topic.author.avatar_url" alt="用户头像">
              <span class="top_cont">
                  <em>{{topic.reply_count}}</em>/<em>{{topic.visit_count}}</em>
              </span>

              <el-tag v-if="topic.tab == 'ask'">问题</el-tag>
              <el-tag v-else-if="topic.tab == 'share'">分享</el-tag>
              <el-tag v-else-if="topic.tab == 'job'">招聘</el-tag>
              <el-tag v-else-if="topic.tab == 'good'">精品</el-tag>
              <el-tag v-else>未知</el-tag>

              <router-link :to='{path: "/Blog/", query:{id:topic.id}}'><h5 class="topic_title">{{topic.title}}</h5></router-link>
              <span class="topic_time">{{$moment(topic.last_reply_at).format("YYYY-MM-DD")}}</span>     
          </li>
      </ul>
      <el-pagination background layout="prev, pager, next" @current-change="curPage" :total="1000"></el-pagination>

  </div>
</template>

<script>
import { getTitles } from '../CnodejsDate';
export default {
  name: 'ListContent',
  props: ["topictype"],
  data () {
    return {
      topics: null,
      axiosdata: {
        page: 1,
        limit: 12,
        tab: this.topictype
      }
    };
  },

  created: function (){
     this.pullBlogList(this.axiosdata)
  }
  ,
  methods:{
      curPage(e){
        console.log('ddddd');
          console.log(e);//--- 点击所在的页面，从 1 开始算起
          this.axiosdata.page=e;
          this.pullBlogList(this.axiosdata);
         // this.backTop();
          
      },
      pullBlogList(data){
              //axios请求参数 limit为条数。tab为话题种类
         var data = this.axiosdata;
         getTitles(data).then( response => {
         console.log(response);
         this.topics = response.data.data;
         }).catch(function (error) {
           console.log(error);
         });

      },
      backTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
      }
  }


}
</script>

<style>
.topiccontent .el-tag {
    height: 22px;
    line-height: 22px;

}
</style>


<style scoped>

.topiccontent{
    display: flex;
    align-items: center;
    height: 4rem;
    justify-content: flex-start;
}
.topiccontent a{
    text-decoration-line: none;
}
.topiccontent img {
    width: 30px;
    height: 30px;
    border-radius: 6px;
}

.topiccontent .topic_title{
    margin-left: 20px;
    margin-right:auto;
    width: 40rem;
    color: rgb(39, 38, 38);
}
.topic_time {
    margin-right: 30px;
}

.top_cont{
    margin: auto 16px auto 16px;
    width: 60px;
}


 .topiccontent em:first-child {
    color: rgb(71, 70, 71);

}
.topiccontent em:last-child {
    color: grey;
    font-size: 0.8rem;
}



</style>

