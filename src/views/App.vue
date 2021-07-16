<template>
  <div id="app">
     <Navbar class="navbar" :show="show" @toggle="getValue"  />
      <main class="main">
            <router-view />
        </main>
      <Footer class="footer" />
      <div class="menu" v-show="show">
          <!-- <router-link to="/wallet">wallet</router-link> -->
          <router-link to="/mynft">MY NFT</router-link>
<!--          <router-link to="/questions">QUESTIONS</router-link>-->
<!--          <router-link to="/qmenu">QUESTIONS-MENU</router-link>-->
          <router-link to="/marketplace">MARKETPLACE</router-link>
<!--          <router-link to="/lockup">LOCK UP BFX</router-link>-->
          <router-link to="/email">EMAIL</router-link>
      </div>
  </div>
</template>

<script>
import Navbar from "@/views/Layout/Navbar.vue";
import Footer from "@/views/Layout/Footer.vue";

export default {
  name: 'App',
    data(){
             return{
                 show:false
             }
    },
    components: { Navbar, Footer },
    watch:{
        '$route.path':function(){
            this.show=false
        }
    },
    methods:{
        getValue(v){
            this.show=v
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";

#app {
    // text-align: center;
    color: #020202;
    min-height: 100%;
    background: #0c1e33;
    display: flex;
    flex-direction: column;
    position: relative;
}
.menu{
    position: fixed;
    left:0;
    top:80px;
    width:100%;
    height:calc(100vh - 80px);
    z-index: 100;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a{
        display: block;
        width:100%;
        text-align: center;
        margin-bottom: 15px;
        font-family:"Montserrat-Medium" ;
        text-transform: uppercase;
    }
}
.navbar,
.footer {
    flex: 0 0 auto;
}

.main {
    flex: 1 0 auto;
}
.el-input__inner{
    height:30px !important;
    text-indent: 10px;
}
    .el-select-dropdown__list{
        background-color: white !important;
    }
</style>
