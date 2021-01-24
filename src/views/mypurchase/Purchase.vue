<template>
  <div id="purchase" v-if='reFresh'>
    <div class="wrap_body"></div>
    <nav-bar class="toadmin-bar">
      <div slot="left" class="backItem" @click="backprofile">
        <img class="backItemImg" src="../../assets/userhomeimgs/back.png" />
      </div>
      <div slot="center">
        <div class="txt">我的购买</div>
      </div>
    </nav-bar>

    <div class="title">
      <div class="already" @click="showDrug">
        <span class="already_text">已评价</span>
        <div class="slide" v-if="showslide"></div>
      </div>
      <div class="nomark" @click="showComment">
        <span class="nomark_text">未评价</span>
        <div class="noslide" v-if="shownoslide"></div>
      </div>
    </div>

    <div class="drug" v-if="showdrug">
      <div class="drugList" v-for="(item, index) in druglist" :key="index">
        <img class="drugListImg" :src="item.drug.img1" />
        <div class="text_info">
          <div class="text_intro">{{ item.drug.info }}</div>
          <div class="text_count">{{ item.drug.used }}</div>
          <div class="text_price">
            {{ item.drug.price }}
            <img src="../../assets/mine/deletered.png" class="deleteimg" @click="deleteComment(index)" />
          </div>
        </div>
      </div>
    </div>

    <div class="comment" v-if="showcomment">
      <div class="drugList" v-for="(item, index) in druglist" :key="index">
        <img class="drugListImg" :src="item.drug.img1" />
        <div class="text_info">
          <div class="text_intro">{{ item.drug.info }}</div>
          <div @click="toSendMessage(index)">
            <span class="sendmessage">去评价</span>
          </div>
          <div class="text_price">{{item.drug.price}}</div>
        </div>
      </div>
    </div>


    <div class="showMessage" v-if="showMessage">
      <div class="gray"></div>
      <div class="container_wrap">
        <div class="top">
          <span class="top_text">对药品{{drugname}}评价</span>
          <img class="top_img" src="../../assets/buy/delete.png" @click="closeMessage">
        </div>
        <div class="bottom">
          <input class="input" placeholder="请输入留言内容" v-model="message">
          <div class="send" @click="todrugmessage">
            <span class="send_text">发送</span>
          </div>
        </div>
      </div>
    </div>
    <div class="toast" v-if="showToast">
      <span>发送成功</span>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import { getRemarkDrug,getNomarkDrug,sendMessage,update,deleteComment } from "../../network/mypurchase";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      shownoslide: false,
      druglist: null,
      showdrug:true,
      showcomment:false,
      showslide:true,
      showMessage:false,
      drugname:null,
      showToast:false,
      message:null,
      drugid:null,
      id:null,
      commentid:null,
      reFresh:true
    };
  },
  created() {
    getRemarkDrug(0, 100).then((res) => {
      var that = this;
      console.log(res);
      that.druglist = res.content;
    });
  },
  methods:{
    showDrug(){
      this.showdrug=true;
      this.showcomment=false;
      this.shownoslide=false;
      this.showslide=true;
          getRemarkDrug(0, 100).then((res) => {
      var that = this;
      console.log(res);
      that.druglist = res.content;
    });
    },
    showComment(){
      this.showcomment=true;
      this.showdrug=false;
      this.shownoslide=true;
      this.showslide=false;
          getNomarkDrug(0, 100).then((res) => {
      var that = this;
      console.log(res);
      that.druglist = res.content;
    });
    },
    toSendMessage(index){
      this.showMessage=true;
      this.drugid=this.druglist[index].drug.id;
      this.id=this.druglist[index].id
      console.log(this.druglist[index]);
      console.log(this.drugid);
      console.log(this.id);
      this.drugname=this.druglist[index].drug.name;
    },
    closeMessage(){
      this.showMessage=false
    },
    todrugmessage(){
      sendMessage(8,this.drugid,this.message).then(res=>{
        console.log(res);
        this.showToast=true;
        this.showMessage=false;
        setTimeout(()=>{
          this.showToast=false;
        },1500)
        update(this.id).then(res=>{
          console.log(res);
          console.log(this.$router)
          // this.$router.go(0)
          // location.reload();
          this.reFresh=false;
          this.$nextTick(()=>{
                getRemarkDrug(0, 100).then((res) => {
      var that = this;
      console.log(res);
      that.druglist = res.content;
                  this.reFresh=true;
                  this.showdrug=true;
                  this.showcomment=false;
                  this.showslide=true;
                  this.shownoslide=false;
    });

          })
        })
      })
    },
    backprofile(){
      this.$router.replace('/profile');
    },
    deleteComment(index){
      console.log(this.druglist[index]);
      this.commentid=this.druglist[index].id;
      deleteComment(this.commentid).then(res=>{
        console.log(res);
        // this.$router.go(0);
        // location.reload();
                  this.reFresh=false;
          this.$nextTick(()=>{
                getRemarkDrug(0, 100).then((res) => {
      var that = this;
      console.log(res);
      that.druglist = res.content;
                  this.reFresh=true;
                  this.showdrug=true;
                  this.showcomment=false;
                  this.showslide=true;
                  this.shownoslide=false;
    });

          })
      })
    }
  }
};
</script>

<style>
#purchase {
  position: relative;
  z-index: 9;
}
.wrap_body {
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
  position: fixed;
  top: 0;
  z-index: -11;
}
.toadmin-bar {
  background-color: #5bc1c2;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}
.backItem {
  position: relative;
  height: 44px;
}
.backItemImg {
  width: 20px;
  height: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  height: 7.49625vh;
  width: 100%;
  display: flex;
  line-height: 7.49625vh;
  background-color: #fff;
}
.active {
  color: #0651fa;
}
.already {
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
.slide {
  width: 55px;
  height: 2px;
  background-color: #0651fa;
  margin: 0 auto;
}
.noslide {
  width: 55px;
  height: 2px;
  background-color: #0651fa;
  margin: 0 auto;
}
.nomark {
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.drugList {
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  background-color: #fff;
}
.drugListImg {
  flex: 1;
  height: 125px;
}
.text_info {
  flex: 2;
  padding: 10px;
  position: relative;
}
.text_intro {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  color: #000000;
  margin-top: 12.5px;
}
.text_count {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  color: #333232;
  margin-top: 12.5px;
  position: relative;
}

.text_price {
  font-size: 20px;
  margin-top: 15px;
  position: relative;
}
.deleteimg {
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 0px;
  right: 20px;
  z-index: 11;
}
.sendmessage{
  position:absolute;
  font-size:18px;
  color:#05baf6;
  right:0;
  margin-top:15px;
  margin-right:15px;
  z-index:11;
}



.showMessage{
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
.container_wrap{
  width:100%;
  height:81.86057vh;
  background-color: #fff;
}
.top{
  width:360px;
  height:75px;
  line-height:75px;
  padding:7.5px;
  position:relative;
}
.top_img{
  width:25px;
  height:25px;
  position:absolute;
  top:20px;
  right:15px;
}
.bottom{
  position:fixed;
  bottom:0;
  width:360px;
  padding:7.5px;
  height:35px;
  display:flex;
  justify-content:space-between;
  align-items: center;
}
.input{
  height:23px;
  background-color:#e4e1e0;
  margin-left:40px;
  border-radius:14px;
  padding:2.5px;
  padding-left:6px;
  font-size:15px;
}
.send{
  width:77px;
  height:26px;
  line-height:26px;
  opacity: 0.64;
background: #f8af06;
border-radius: 26px;
margin-right:40px;
text-align: center;
}
.send_text{
  color:#040404;
  font-size:15px;
}
.top_text{
  color: #050505;
  font-size:22px;
  font-weight: 500;
  margin-left:15px;
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