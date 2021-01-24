<template>
    <swiper class="contentswiper">
        <swiper-item v-for="(item,index) in topimages" :key="index">
            <img :src="item.url" @load="imgloaded">
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper'
export default {
    props:{
        topimages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    data(){
        return {
            count:0
        }
    },
    methods:{
        imgloaded(){
            if(++this.count>=this.topimages.length){
                this.$emit('imgloaded');
            }
        }
    }
}
</script>

<style scoped>
    /* .contentswiper{
        height:350px;
        overflow:hidden;
    } */
    .contentswiper{
        background-color: #fff;
        height:380px;
    }
</style>