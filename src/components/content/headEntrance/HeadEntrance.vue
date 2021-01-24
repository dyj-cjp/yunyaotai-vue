<template>
  <div id='head-entrance'>
      <scroll class="head-scroll" :probeType='3' 
      :pullUpLoad='true' :scrollx='true' :scrolly='false' >
             <div class='scroll-view_X' v-for="(item,index) in entryIcon" :key="index">
            <img class="entrance-icon" :src='item.imgUrl'>
            <div class="entrance-text">
                {{item.title}}
            </div>
        </div>
      </scroll>
  </div>
</template>

<script>
import Scroll from '../../common/scroll/Scroll'
export default {
    data(){
        return {
            entryIcon:[
                {
        title:"心脑用药",
        tag:"tag1",
        imgUrl:require("../../../assets/userhomeimgs/icon1.png"),
        type:"c1"
      },
      {
        title:"清热解毒",
        tag:"tag2",
        imgUrl:require("../../../assets/userhomeimgs/icon2.png"),
        type:"c2"
      },
      {
        title:"儿科用药",
        tag:"tag3",
        imgUrl:require("../../../assets/userhomeimgs/icon3.png"),
        type:"c3"
      },
      {
        title:"胃肠用药",
        tag:"tag4",
        imgUrl:require("../../../assets/userhomeimgs/icon4.png"),
        type:"c4"
      },
      {
        title:"皮肤用药",
        tag:"tag5",
        imgUrl:require("../../../assets/userhomeimgs/icon8.png"),
        type:"c5"
      },
      {
        title:"补益安神",
        tag:"tag6",
        imgUrl:require("../../../assets/userhomeimgs/icon5.png"),
        type:"c6"
      },
      {
        title:"风湿骨痛",
        tag:"tag7",
        imgUrl:require("../../../assets/userhomeimgs/icon6.png"),
        type:"c7"
      },
      {
        title:"家用常备",
        tag:"tag8",
        imgUrl:require("../../../assets/userhomeimgs/icon7.png"),
        type:"c8"
      }
            ]
        }
    },
    components:{
        Scroll
    }

}
</script>

<style >
    #head-entrance{
        margin-top:15px;
        margin-bottom:15px;
    }
    .head-scroll{
        width:342px;
        white-space:nowrap;
        margin-right:-10px;
        margin:0 auto;
        background-color: #fff;
        border-radius:5px;
        padding:5px;
        box-shadow: 2.5px 2.5px 2.5px rgba(0,0,0,.1);
        overflow:hidden;
    }
    .head-scroll .content{
      width:620px;
    }
    .scroll-view_X{
        width:77.5px;
        display:inline-block;
        text-align:center;
    }
    .entrance-icon{
        width:65px;
        height:65px;
    }
    .entrance-text{
        font-size:15px;
        color:#000000;
    }
</style>