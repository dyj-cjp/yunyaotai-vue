<template>
  <div id="home">
    <div class="bgc-img">
      <img src="../../assets/userhomeimgs/bgc.png" />
    </div>
    <div class="wrap-body"></div>
    <nav-bar class="home-bar">
      <div slot="center">
        <div class="txt">云药台</div>
      </div>
    </nav-bar>
    <!-- <scroll class='home-scroll' :probeType='3' 
      :pullUpLoad='true' :scrolly='true' :scrollx='false'> -->
    <search></search>
    <main-swiper></main-swiper>
    <head-entrance></head-entrance>
    <drug-container :drugs='drugList' ></drug-container>
    <!-- </scroll> -->
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import Search from "../../components/common/searchInput/Search";
import MainSwiper from './childshome/MainSwiper';
import HeadEntrance from '../../components/content/headEntrance/HeadEntrance';
import {getHomeDrugs} from '../../network/home';
import DrugContainer from "./childshome/DrugContainer"
import Scroll from '../../components/common/scroll/Scroll'
export default {
  data(){
    return {
      drugList:[]
    }
  },
  components: {
    NavBar,
    Search,
    MainSwiper,
    HeadEntrance,
    DrugContainer,
    Scroll
  },
  created(){
    getHomeDrugs(0,100).then(res=>{
      console.log(res);
      this.drugList=res.content;
    })
  }
};
</script>

<style scoped>
.home-scroll{
  position:absolute;
        left:0;
        right:0;
        bottom:49px;
        top:44px;
        /* height:4000px; */
}
#home {
  padding-top: 44px;
  position: relative;
}
.bgc-img {
  width: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
}
.bgc-img img {
  width: 100%;
}
.wrap-body {
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
  position: fixed;
  top: 0;
  z-index: -11;
}
.home-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  color: #ffffff;
  font-weight: bold;
  background-color: #5bc1c2;
}
</style>