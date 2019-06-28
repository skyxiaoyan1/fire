<template>
  <div id="BlogReply">
      <p class="count">回复: {{this.replie_data.reply_count}}</p>
      <div class="bar" v-for="(reply,ranks)  in (this.replie_data.replies)">
          <router-link :to='{path: "/AuthorDetails/", query:{id:reply.author.loginname}}'>
          <img class="respondent_pic" :src="reply.author.avatar_url" alt="头像">
          </router-link>
          <span class="rank">{{++ranks}}楼</span>
          <router-link :to='{path: "/AuthorDetails/", query:{id:reply.author.loginname}}'>
          <span class="respondent">{{reply.author.loginname}}</span>
          </router-link>
          <span>{{$moment(reply.create_at).format("YYYY-MM-DD")}}</span>
          <div class="reply_content" v-html="reply.content">

          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'BlogReply',
  props: ["replie_data"]
  ,
  created: function(){
      console.log(this.replie_data);
  }
}
</script>
<style>
#BlogReply .reply_content a{
    color: rgb(26, 226, 159);
    text-decoration: none;
}
#BlogReply .reply_content img{
    width: 90%;
    height: 90%;
}
</style>


<style scoped>
.count {
    margin: 10px;
    padding: 10px;
    font-weight:bold;

}

.bar {
    margin: 10px;
    padding: 10px;
    border: 1px solid rgb(226, 222, 222);
    box-shadow: 2px 2px 4px #c5c3c3;
}
.bar .respondent_pic{
    width: 50px;
    height: 50px;
    border-radius: 4px;
    float: left;
}
.bar div{
    padding: 10px 10px 10px 70px;
}
.bar .rank{
    padding: 10px 10px 10px 20px;
}
.bar .respondent {
    color: aqua;
}
.bar .respondent , .bar .respondent+span{
    padding: 10px;
}
.bar a {
    text-decoration: none;
}
</style>
