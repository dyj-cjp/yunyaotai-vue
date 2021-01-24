<template>
  <div id="mymessage" v-if="reFresh">
      <div class="wrap_body"></div>
    <nav-bar class="toadmin-bar">
      <div slot="left" class="backItem"  @click="backProfile">
        <img class="backItemImg" src="../../assets/userhomeimgs/back.png" />
      </div>
      <div slot="center">
        <div class="txt">我的留言</div>
      </div>
    </nav-bar>

    <div class="wrap"></div>
    <div class="title">
        <span class="title-text">所有留言</span>
    </div>

        <div class="listcon">
      <div class="commentdrug" v-for="(item, index) in adminlist" :key="index">
        <img class="drugimgs" :src="item.adminpic" />
        <span class="drugtext">{{ item.adminname }}</span>
        <span class="info">{{item.admininfo}}</span>
        <img
          class="more"
          src="../../assets/mine/more.png"
          v-if="item.index !== currenttag"
          @click="showmessage(index)"
        />
        <div class="commentList" v-if="item.index == currenttag">
          <div clas="nones">
            <span class="nickname">{{ item.username }}</span>
            <div class="details">
              <span class="message">{{ item.message }}</span>
            </div>
            <div class="rights">
              <div class="time">{{ item.time }}</div>
              <img class="delete" src="../../assets/mine/deletered.png" @click="deletecomment(index)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import {getAdmin,deleteSpeak} from '../../network/mymessage'
export default {
    components:{
        NavBar
    },
    methods:{
        backProfile(){
            this.$router.replace('/profile');
        },
            showmessage(index){
      this.currenttag=index+1;
    },
    //     deletecomment(index){
    // //   console.log(this.adminlist[index].id);
    //   deleteSpeak(this.druglist[index].id).then(res=>{
    //     console.log(res);
    //     // this.$router.go(0);
    //   })
    // },
    deletecomment(index){
        console.log(this.adminlist[index].id);
        var id=this.adminlist[index].id;
        deleteSpeak(id).then(res=>{
            console.log(res);
            // this.$router.go(0);
            // location.reload();
            this.reFresh=false;
            this.$nextTick(()=>{
                 getAdmin(8,0,100).then(res=>{
            console.log(res);
                    var adminlist=[];
        var obj={};
        for(var i=0;i<res.content.length;i++){
          obj={
            amminname:res.content[i].to.name,
            admininfo:res.content[i].to.info,
            index:i+1,
            username:res.content[i].from.name,
            userinfo:res.content[i].from.info,
            time:res.content[i].time,
            message:res.content[i].message,
            id:res.content[i].id,
            adminpic:res.content[i].to.faceimg,
            
          }
          adminlist.push(obj);
        }
        console.log(adminlist);
        this.adminlist=adminlist;
        this.reFresh=true;
        })
            })
        })
    }
    },
    data(){
        return {
            adminlist:null,
            currenttag:0,
            reFresh:true,
        }
    },
    created(){

    },
    activated(){
      console.log('activated');
              getAdmin(8,0,100).then(res=>{
            console.log(res);
                    var adminlist=[];
        var obj={};
        for(var i=0;i<res.content.length;i++){
          obj={
            amminname:res.content[i].to.name,
            admininfo:res.content[i].to.info,
            index:i+1,
            username:res.content[i].from.name,
            userinfo:res.content[i].from.info,
            time:res.content[i].time,
            message:res.content[i].message,
            id:res.content[i].id,
            adminpic:res.content[i].to.faceimg,
            
          }
          adminlist.push(obj);
        }
        console.log(adminlist);
        this.adminlist=adminlist;
        })
    }
}
</script>

<style>
    #mymessage{
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

.wrap{
  position:fixed;
  width:100%px;
  height:90.404797vh;
  background-color: rgb(248, 245, 245);
  z-index:-1;
  bottom:0;
}
.title{
  height:50px;
  line-height:50px;
  width:100%;
  background-color: #fff;
}
.title-text{
  margin-left:25px;
  font-weight:bold;
}
.commentdrug {
  width: 100%;
  padding: 0 7.5px;
  margin: 5px 0;
  background-color: #fff;
  border-radius: 15px;
  position: relative;
}
.drugtext {
  margin-left: 10px;
  font-size: 18px;
}
 .more {
  position: absolute;
  right: 10px;
  top: 50px;
}

.nickname {
  color: #383737;
  font-size: 15px;
}
.message {
  color: #383737;
  font-size: 15px;
}
.delete {
  width: 25px;
  height: 25px;
} 
 .nones {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 2.5px;
  position: relative;
}
.nickname {
  flex: 1.5;
  margin-top: 4px;
} 
.details {
  position:absolute;
  bottom:0;
  right:200px;
  /* margin-left: -20px; */
 } 
.rights {
  flex: 2;
  position:absolute;
  bottom:0;
  right:10px;
}
.time {
  color: #383737;
  font-size: 12px;
  margin-left: 40px;
  margin-top: 5px;
}
.delete {
  margin-left: 75px;
  width: 20px;
  height: 20px;
  margin-top: 2.5px;
}
.drugimgs{
  width:100px;
  height:100px;
  vertical-align: -webkit-baseline-middle;
}
.more{
  width:44px;
  height:8px;
} 
</style>