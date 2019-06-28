<template>
  <div id="BlogList">
    <el-tabs v-model="activeName" tab-position="left" type="card" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first"><ListContent topictype="all"></ListContent></el-tab-pane>
    <el-tab-pane label="精华" name="second"><ListContent  topictype="good"></ListContent></el-tab-pane>
    <el-tab-pane label="分享" name="third"><ListContent  topictype="share"></ListContent></el-tab-pane>
    <el-tab-pane label="回答" name="fourth"><ListContent  topictype="ask"></ListContent></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ListContent from './ListContent'

export default {
  name: 'BlogList',
  data() {
      return {
        activeName: 'first'
      };
  },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
   },
   components: {
       ListContent
   }
}
</script>

<style scoped>




</style>

