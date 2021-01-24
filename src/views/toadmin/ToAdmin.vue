<template>
  <div id="toadmin">
    <div class="wrap_body"></div>
    <nav-bar class="toadmin-bar">
      <div slot="left" class="backItem" @click="backDetail">
        <img class="backItemImg" src="../../assets/userhomeimgs/back.png" />
      </div>
      <div slot="center">
        <div class="txt">留言</div>
      </div>
    </nav-bar>

    <div class='title'>
        <span class="title_text">已有管理员</span>
    </div>

    <div class="list" v-for="(item,index) in adminList" :key="index" @click="admintag(index)">
        <img class="faceurl" :src="item.faceimg">
        <span class="list_nick">{{item.name}}</span>
        <span class="list_info">{{item.info}}</span>
        <span class="messages">留言</span>
    </div>

    <div class="showMessage" v-if="showMessage">
      <div class="gray">
      </div>
      <div class="container_wrap">
        <div class="top">
          <span class="top_text">向{{nickname}}留言</span>
          <img class="top_img" src="../../assets/buy/delete.png" @click="hideMessage">
        </div>
        <div class="bottom">
          <input class="input" placeholder="请输入留言内容" v-model="inputmessage">
          <div class="send" @click="sendMessage">
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
import NavBar from '../../components/common/navbar/NavBar'
import {sendMessage} from '../../network/toadmin'
export default {
    name:'ToAdmin',
    components:{
        NavBar,
    },
    data(){
        return {
            adminList:[
              {
                id:1,
                info:'天冷记得注意保暖',
                name:'小C',
                faceimg:"http://172.81.245.195:8888/group1/M00/00/01/rFH1w1_KcleAf6M9AACjKkAsIqA527.jpg"
              },
              {
                id:2,
                info:'好爱深夜',
                name:'拒绝再玩',
                faceimg:"http://172.81.245.195:8888/group1/M00/00/01/rFH1w1_M8BKAD62nAAB1kzaVUvg67.jfif"
              }
            ],
            showMessage:false,
            showToast:false,
            nickname:null,
            inputmessage:null,
            currentadmin:null,
        }
    },
    created(){
        // getAllAdmin(0,100).then((res)=>{
        //     console.log(res);
        // })
    },
    methods:{
      admintag(index){
        // console.log(index);
        this.showMessage=true;
        this.nickname=this.adminList[index].name;
        this.currentadmin=this.adminList[index].id;
      },
      hideMessage(){
        this.showMessage=false;
      },
      sendMessage(){
        var message=this.inputmessage;
        console.log(message);
        if(message!==null){
          sendMessage(8,this.currentadmin,message).then(res=>{
            console.log(res);
            this.showToast=true;
            setTimeout(()=>{
              this.showToast=false;
            },1500);
          })
        }
      },
      backDetail(){
        this.$router.back();
      }
    }
};
</script>

<style>
#toadmin{
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
.toadmin-bar {
  background-color: #5bc1c2;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
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

.title{
  width:100%;
  height:75px;
  line-height:75px;
  padding:0 17.5px;
  background-color: #fff;
}

.list{
  width:100%;
  height:65px;
  margin:10px 0;
  padding:0 17.5px;
  background-color: #fff;
  line-height:65px;
  border-radius:20px;
  position:relative;
}
.faceurl{
  width:50px;
  height:50px;
  vertical-align:middle;
  border-radius:50%;
}
.list_nick{
  font-weight:600;
  font-size:20px;
  margin-left:10px;
}
.list_info{
  font-size:17.5px;
  margin-left:25px;
  margin-right:50px;
}

.messages{
  position:absolute;
  right:25px;
  color:#0914f4;
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
  height:75.5px;
  line-height:75.5px;
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