<template>
  <div id="CnodeHeader">
    <div class="topbar"> 
        
        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo">
        <div class="top_menu">
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li @click="aboutPrj">关于</li>
            </ul>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'CnodeHeader',
  methods: {
      aboutPrj() {
          var info = "<strong> 本项目是利用vue 和cnodejs的后台做的练手项目<br/> 作者张根健</strong> "
          var info_title = " cnodejs 项目 "
          this.$alert(info, info_title, {
          dangerouslyUseHTMLString: true
        });//容易导致 XSS 攻击。 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的 
          
      }
  }
}
</script>


<style scoped>
#CnodeHeader {
    height: 3.8rem;
}
.topbar{
    background-color: darkslategray;
    height: 3.8rem;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
}

.topbar img {
    width: 10rem;
    height: 3.8rem;
    margin-left: 5rem;
    float: left;
}

.top_menu {
   float: left;
   margin-left: 900px;
}

.top_menu ul {
    height: 1.5rem;
    margin: 1rem 0 1rem 0 ;

}


.top_menu li {
    float: left;
    color: aliceblue;
    width: 3rem;
    height: 1.5rem;
    text-align: center;
    padding: auto 1rem auto 1rem;
    margin: auto 0 auto 0 ;
    cursor: pointer;

}
.top_menu li a{ 
    color: rgb(207, 207, 207);
    text-decoration: none;
}

.top_menu li{ 
    color: rgb(207, 207, 207);
    text-decoration: none;
}
.top_menu li:hover,.top_menu li a:hover { 
    color: rgb(255, 255, 255);
    text-decoration: none;
}





</style>
