<template>
     <div class='wrapper' ref='aa'>
         <div class='content'>
             <slot></slot>
         </div>
     </div>
</template>

<script>
import Bscroll from "better-scroll"
export default {
    props:{
        probeType:{
            type:Number,
            default(){
                return 0;
            }
        },
        pullUpLoad:{
            type:Boolean,
            default(){
                return false;
            }
        },
        scrollx:{
            type:Boolean,
            default(){
                return false;
            }
        },
        scrolly:{
            type:Boolean,
            default(){
                return true;
            }
        }
    },
 data () {
 return {
     scroll:null
 }
 },
 methods: {
     ScrollTo(x,y,time=300){
         this.scroll&&this.scroll.scrollTo(x,y,time);
     },
     finishPullup(){
         this.scroll&&this.scroll.finishPullUp();
     },
     Refresh(){
         console.log('---');
         this.scroll&&this.scroll.refresh();
     }
 },
 mounted(){
     this.scroll=new Bscroll(this.$refs.aa,{
         scrollX:this.scrollx,
         scrollY:this.scrolly,
         click:true,
         probeType:this.probeType,
         pullUpLoad:this.pullUpLoad
     }),
    this.scroll&& this.scroll.on('scroll',(position)=>{
        //  console.log(position);
         this.$emit('contentScroll',position);
     }),
     this.scroll&&this.scroll.on('pullingUp',()=>{
         this.$emit('pullingUp');
     })
 },
 components: {

 }
}
</script>

<style>

</style>
