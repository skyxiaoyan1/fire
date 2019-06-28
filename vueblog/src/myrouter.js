import BlogList from './components/BlogList'
import Blog from './components/Blog'
import AuthorDetails from './components/AuthorDetails'

//导入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: BlogList},
    { path: '/Blog', component: Blog},
    { path: '/AuthorDetails', component: AuthorDetails}
  ];

const router = new VueRouter({
   routes
});

export default router
  