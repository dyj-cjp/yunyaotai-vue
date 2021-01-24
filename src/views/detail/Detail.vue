<template>
  <div id="detail">
    <div class="wrap_body"></div>
    <nav-bar class="detail-bar">
      <div slot="left" class='backItem' @click='backHome'>
        <img  class="backItemImg" src="../../assets/userhomeimgs/back.png">
      </div>
      <div slot="center">
        <div class="txt">药品详情</div>
      </div>
    </nav-bar>

    <div class="top">
      <div class="titleBar">
        <div class="title_text" :class="{'active':flag==1}" @click='toSwiper'>商品</div>
        <div class="title_text" :class="{'active':flag==2}" @click='toInfo'>详情</div>
        <div class="title_text" :class="{'active':flag==3}" @click='toComment'>评价</div>
      </div>
    </div>

    <scroll class='detail-scroll' :probeType='3' 
      :pullUpLoad='true' :scrolly='true' :scrollx='false' ref='scroll' @contentScroll="contentScroll">
          <detail-swiper :topimages="imgList" @imgloaded='imgload' ></detail-swiper>

    <div class="purchase">
      <div class="purchase_left">
        <div class="drugname">{{ drugDetail.name }}</div>
        <div class="restnumber">
          仅剩{{ drugDetail.restcount }}盒，限购{{ drugDetail.tosell }}盒/人
        </div>
      </div>
      <div class="price">￥{{ drugDetail.price }}</div>
    </div>

    <div class="info" id='info' ref='info'>
      <div class='infoList'>
        <span class='info-left'>【功用】</span>
        <span class='info-right'>{{info}}</span>
      </div>
      <div class='infoList'>
        <span class='info-left'>【用法用量】</span>
        <span class='info-right'>{{used}}</span>
      </div>
      <div class='infoList'>
        <span class='info-left'>【有效期】</span>
        <span class='info-right'>{{storageMonth}}个月</span>
      </div>
      <div class='infoList'>
        <span class='info-left'>【生产日期】</span>
        <span class='info-right'>{{productTime}}</span>
      </div>
    </div>



    <div class='comment' id='comment' ref='comment'>
      <div class='commen_title'>
        <span class='main'>评价</span>
        <span class='num'>({{commentNumber}})</span>
      </div>

      <div class="list" v-for="(item,index) in commentList" :key="index">
        <div class='user'>
          <img class='faceurl' :src="item.faceurl">
          <span class='nick'>{{item.nickname}}</span>
          <span class="time">{{item.time}}</span>
        </div>
        <div class="comment_detail">
          <span class="comment_text">{{item.detail}}</span>
        </div>
      </div>
    </div>
    </scroll>

    <div class='bottom'>
      <div class="message" @click="toadminMessage">
        <img class="message_img" src="../../assets/userhomeimgs/message.png">
        <span class="message_text">留言</span>
      </div>
      <div class="purchaseBtn" @click="openBuy">
        <span class="purchase_text">购买</span>
      </div>
    </div>

    <div class="buyToast" v-if="showBuy">
      <div class="gray">
      </div>
      <div class="buyPage">
        <div class="buyPageTop">
          <img class="pic" :src='drugDetail.img'>
          <span class="dollar">￥{{drugDetail.price}}</span>
          <img class="delete" src='../../assets/buy/delete.png' @click="closeBuy">
        </div>
        <div class="buyPageMiddle">
          <span class="middleText">购买数量</span>
          <span class="storage">库存{{drugDetail.storageNumber}}件</span>
          <div class="buyCount">
            <img class="add" @click="addNumber" src='../../assets/buy/add.png'>
            <div class="account">{{number}}</div>
            <img class="sub" @click="subNumber" src="../../assets/buy/sub.png">
          </div>
        </div>
        <div class="buyPageBottom" @click="buyDrug">
          <span>确认</span>
        </div>
      </div>
    </div>

    <div class="toast" v-if="showToast">
      <span>购买成功</span>
    </div>
  </div>
</template>

<script>
import { getDrugDetail, getDrugComment,addBuyDrug } from "../../network/drugdetail";
import NavBar from "../../components/common/navbar/NavBar";
import DetailSwiper from "./childdetail/DetailSwiper";
import Scroll from '../../components/common/scroll/Scroll'
import axios from 'axios'
export default {
  name:'Detail',
  components: {
    NavBar,
    DetailSwiper,
    Scroll
  },
  data() {
    return {
      iid: null,
      imgList: [],
      drugDetail: {},
      drugInfo: [],
      commentNumber: 0,
      commentList: [],
      info: null,
      used: null,
      storageMonth: null,
      productTime: null,
      flag:1,
      infoY:null,
      commentY:null,
      number:1,
      showBuy:false,
      showToast:false,
    };
  },
  methods:{
    toSwiper(){
      this.flag=1;
      this.$refs.scroll.ScrollTo(0,0)
    },
    toInfo(){
      this.flag=2;
      this.$refs.scroll.ScrollTo(0,-this.infoY)
    },
    toComment(){
      this.flag=3;
      this.$refs.scroll.ScrollTo(0,-this.commentY)
    },
    contentScroll(position){
      // console.log(position);
      const positiony=-position.y;
      if(positiony<this.infoY){
        this.flag=1;
      }else if(positiony<this.commentY){
        this.flag=2;
      }else{
        this.flag=3;
      }
    },
    imgload(){
            this.infoY=this.$refs.info.offsetTop;
      this.commentY=this.$refs.comment.offsetTop;
      // console.log(this.infoY,this.commentY);
    },
    closeBuy(){
      this.showBuy=false
    },
    openBuy(){
      this.showBuy=true
    },
    addNumber(){
      this.number++
    },
    subNumber(){
      this.number--
      if(this.number<0){
        this.number=0
      }
    },
    buyDrug(){
      var userid=8;
      var drugid=this.$route.params.id;
      // let postData={
      //   userid:userid,
      //   drugid:drugid
      // }
      // axios({
      //   url:'/api/purchase',
      //   method:'post',
      //   data:postData
      // }).then(res=>{
      //   console.log(res);
      // })

      addBuyDrug(userid,drugid).then(res=>{
        console.log(res);
        this.showToast=true;
        setTimeout(()=>{
          this.showToast=false
        },1500)
      })
    },
    backHome(){
      this.$router.back();
    },
    toadminMessage(){
      this.$router.push('/toadmin');
    }
  },
  created() {
    this.iid = this.$route.params.id;
    getDrugDetail(this.iid).then((res) => {
      console.log(res);
      var imglist = [];
      if (res.img1 != null) {
        var img = {};
        img.url = res.img1;
        imglist.push(img);
      }
      if (res.img2 != null) {
        var img = {};
        img.url = res.img2;
        imglist.push(img);
      }
      if (res.img3 != null) {
        var img = {};
        img.url = res.img3;
        imglist.push(img);
      }
      if (res.img4 != null) {
        var img = {};
        img.url = res.img4;
        imglist.push(img);
      }
      if (res.img5 != null) {
        var img = {};
        img.url = res.img5;
        imglist.push(img);
      }

      var obj = {};
      obj.name = res.name;
      obj.restcount = res.storageNumber;
      obj.tosell = res.limitNumber;
      obj.price = res.price;
      obj.img = res.img1;
      obj.storageNumber = res.storageNumber;

      this.imgList = imglist;
      this.drugDetail = obj;
      this.info = res.info;
      this.used = res.used;
      this.storageMonth = res.storageMonth;
      this.productTime = res.productTime;
      console.log(this.imgList);
    });
    getDrugComment(this.iid, 0, 100).then((res) => {
      console.log(res);
      var obj = {};
      var list = [];
      for (var i = 0; i < res.content.length; i++) {
        obj.faceurl = res.content[i].from.faceimg;
        obj.nickname = res.content[i].from.name;
        obj.detail = res.content[i].message;
        obj.time = res.content[i].time;
        list.push(obj);
      }
      this.commentList = list;
      this.commentNumber = res.content.length;
    });

    // this.$nextTick(()=>{
    //   this.infoY=this.$refs.info.offsetTop;
    //   this.commentY=this.$refs.comment.offsetTop;
    //   console.log(this.infoY,this.commentY);
    // })
  },
};
</script>

<style scoped>
.detail-scroll{
  position:absolute;
  top:94px;
  bottom:44px;
  left:0;
  right:0;
  z-index:-1;
}
#detail{
  position:relative;
  z-index:9;
}
.wrap_body {
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
  position: fixed;
  top: 0;
  z-index: -11;
}
.detail-bar {
  background-color: #5bc1c2;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}
.top {
  /* width: 375px; */
  width:100%;
  background-color: #fff;
}
.title_text {
  font-size: 20px;
  color: #030303;
}
.active{
  color:#094daa;
}
.backItem{
  position:relative;
  height:44px;
}
.backItemImg{
  width:20px;
  height:25px;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}

.titleBar {
  width: 250px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.purchase {
  display: flex;
  background-color: #fff;
  padding: 7.5px;
  border-radius: 0 0 17.5px 17.5px;
}
.purchase_left {
  flex: 2;
}
.drugname {
  font-size: 20px;
}
.restnumber {
  font-size: 13px;
  color: #4c4a4a;
  margin-top: 5px;
}
.price {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ed0909;
  font-size: 24px;
}


.info{
  padding:17.5px;
  background-color: #fff;
  margin:10px 0;
  border-radius: 17.5px;
}
.infoList{
  margin-top:7.5px;
}
.info-left{
  font-size:16px;
  font-weight:600;
}
.info-right{
  font-size:16px;
}


.comment{
  padding:10px;
  background-color: #fff;
  border-radius: 17.5px;
}
.comment_title{
  border-bottom:1px solid rgba(0,0,0,.2);
  padding:10px;
}
.list{
  border-bottom:1px solid rgba(0,0,0,.2);
  padding-bottom:5px;
}
.main{
  font-size:20px;
  font-weight: 600;
}
.num{
  font-size:15px;
  margin-left:5px;
}
.user{
  margin:10px 0;
  position:relative;
}
.faceurl{
  width:50px;
  height:50px;
  vertical-align: middle;
  border-radius: 50%;
}
.nick{
  margin-left:15px;
  font-weight: 600;
}
.time{
  position: absolute;
  top:50%;
  transform: translate(0,-50%);
  right:10px;
}
.comment_detail{
  height:30px;
  line-height:30px;
  font-size:18px;
}


.bottom{
  width:100%;
  height:44px;
  background-color: #fff;
  position:fixed;
  bottom:0;
  display:flex;
  padding:0 10px;
  align-items: center;
  border-top:1px solid rgba(0,0,0,.2);
}
.message{
  flex:1;
  height:43px;
  background-color:#0d75cd;
  border-radius:26.5px;
  display:flex;
  align-items: center;
  justify-content: center;
}
.purchaseBtn{
  height:43px;
  flex:1;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #e0122b;
  color:#ffffff;
  font-size:20px;
  border-radius:26.5px;
}
.message_img{
  width:40px;
  height:40px;
}



.buyToast{
  width:100%;
  height:100vh;
  position:fixed;
  top:0;
  z-index:11;
}
.gray{
  width:100%;
  height:18.139430vh;
  background-color:rgba(0,0,0,.5);
}
.buyPage{
  width:100%;
  height:81.86057vh;
  background-color: #fff;
}
.buyPageTop{
  padding:7.5px;
  position:relative;
  border-bottom: 0.5px solid rgba(0,0,0,.2);
  margin-bottom: 5px;
}
.pic{
  width:150px;
  height:150px;
  vertical-align:middle;
}
.dollar{
  color:#f50c0c;
  margin-left:15px;
}
.delete{
  width:25px;
  height:25px;
  position:absolute;
  top:20px;
  right:15px;
}
.buyPageMiddle{
  padding:7.5px;
  display:flex;
  vertical-align: middle;
}
.middelText{
  flex:2;
  font-size:22px;
  font-weight: 600;
}
.storage{
  flex:2;
}
.buyCount{
  display:flex;
  margin-right:10px;
}
.add{
  width:27.5px;
  height:27.5px;
}
.account{
  margin:5px 5px;
}
.sub{
  width:27.5px;
  height:27.5px;
}
.buyPageBottom{
  width:300px;
  height:40px;
  background-color: red;
  border-radius:20px;
  position:fixed;
  bottom:9px;
  left:37.5px;
  text-align: center;
  line-height:40px;
  color:#ffffff;
  font-size:19px;
}


.toast{
  position:fixed;
  padding:5px;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background-color:rgba(0,0,0,.5);
  z-index:99;
  color:#ffffff;
}
</style>