<template>
  <div id='profile'>
      <div class="bgc-img">
      <img src="../../assets/userhomeimgs/bgc.png" />
    </div>
    <div class="wrap-body"></div>
    <nav-bar class="home-bar">
      <div slot="center">
        <div class="txt">云药台</div>
      </div>
    </nav-bar>

    <div class='nickbgc'>
      <div class='addimg'>
        <img class='faceimg' :src='faceimg'>
      </div>
      <div class='nickname'>小椰</div>
    </div>

    <div class='list'>
      <div class='purchase' @click="toMyPurchase">
        <img class='purchase_img' src='../../assets/mine/coln1.png'>
        <span class='purchase_text'>我的购买</span>
        <img class='purchase_right' src='../../assets/mine/right.png'>
      </div>

      <div class='comment' @click="toMyComment">
        <img class='comment_img' src='../../assets/mine/coln2.png'>
        <span class='comment_text'>我的评价</span>
        <img class='purchase_right' src='../../assets/mine/right.png'>
      </div>

      <div class='message' @click="toMyMessage">
        <img class='message_img' src='../../assets/mine/coln3.png'>
        <span class='message_text'>我的留言</span>
        <img class='purchase_right' src='../../assets/mine/right.png'>
      </div>

      <div class='message' @click="toMyMessage">
        <img class='message_img' src='../../assets/mine/coln3.png'>
        <span class='message_text'>我的留言</span>
        <img class='purchase_right' src='../../assets/mine/right.png'>
      </div>

            <div class='message' @click="toMyMessage">
        <img class='message_img' src='../../assets/mine/coln3.png'>
        <span class='message_text'>develop分支</span>
        <img class='purchase_right' src='../../assets/mine/right.png'>
      </div>
    </div>
    <!-- action="/api/file/upload" -->
    <!-- <el-upload
      action="123"
      :on-success="uploadSuccess"
      :before-upload="beforeUpload"
      :http-request="upload"
    >
      <el-button size='small' type="primary">点击上传</el-button>
    </el-upload> -->
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
// import axios from 'axios'
export default {
  data(){
    return {
      userMessage:null,
      faceimg:"http://172.81.245.195:8888/group1/M00/00/02/rFH1w2AJph6AbsbyAAB1kzaVUvg41.jfif"
    }
  },
  components:{
    NavBar
  },
  methods:{
    // uploadSuccess(){
    //   console.log(res);
    // },
    // beforeUpload(file){
    //   console.log(file);
      // var formData=new FormData();
      // formData.append('',file.name);
      // var file=formData;
      // axios.get('/api/file/upload').then((res)=>{
      //   console.log(res);
      // })
    // },
    // upload(item){
    //   console.log(item);
    //   let _this=this;
    //   let formData=new FormData();
    //   formData.append("File",item.file);
    //   axios.get({
    //     url:'/api/file/upload',
    //     params:formData
    //   }).then(res=>{
    //     console.log(res);
    //   })

    // }
    toMyPurchase(){
      this.$router.push('/tomypurchase')
    },
    toMyComment(){
      this.$router.push('/mycomment')
    },
    toMyMessage(){
      this.$router.replace('/mymessage')
    }
  }
}
</script>

<style scoped>
#profile{
  padding-top:44px;
  position:relative;
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




.nickbgc{
  width: 274.5px;
  height: 150.5px;
  background: #ffffff;
  border-radius: 30px;
  margin:0 auto;
  margin-top:60px;
  margin-bottom:15px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:relative;
}
.nickname{
  font-size:15px;
  color: #3e3e3e;
  font-weight: bold;
  margin-top:2.5px;
  position:absolute;
  top:80%;
  transform: translate(0,-70%);
}
.addimg{
  width:77px;
  height:77px;
  background-color: rgba(0,0,0,.2);
  border-radius:50%;
  overflow:hidden;
  position:absolute;
  top:50%;
  transform: translate(0,-60%);
}
.faceimg{
  width:77px;
  height:77px;
}
.list{
  width:304px;
  height:140px;
  border-radius:7.5px;
  background-color: #fff;
  margin:0 auto;
  padding:15px;
  font-size:15px;
  color:#3e3e3e;
}
.purchase{
  width:275px;
  height:40px;
  line-height:40px;
  border-bottom:1px solid rgba(0,0,0,.3);
  position:relative;
}
.comment{
  width:275px;
  height:40px;
  line-height:40px;
  border-bottom:1px solid rgba(0,0,0,.3);
  position:relative;
}
.message{
  width:275px;
  height:40px;
  line-height:40px;
  position:relative;
}
.purchase_img{
  width:17.5px;
  height:17.5px;
  vertical-align: middle;
  margin-right:25px;
}
.comment_img{
  width:17.5px;
  height:17.5px;
  vertical-align: middle;
  margin-right:25px;
}
.message_img{
  width:17.5px;
  height:17.5px;
  vertical-align: middle;
  margin-right:25px;
  margin-bottom:5px;
}
.purchase_right{
  width:15px;
  height:15px;
  position:absolute;
  right:10px;
  top:12.5px;
}
</style>