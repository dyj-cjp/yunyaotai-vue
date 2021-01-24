<template>
  <div id="mainswiper">
    <swiper class="swiper-out">
      <swiper-item class="swiper-item">
        <img src="../../../assets/userhomeimgs/lunbo1.png" />
      </swiper-item>
      <swiper-item class="swiper-item">
        <img src="../../../assets/userhomeimgs/lunbo2.png" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
export default {
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
    #mainswiper{
        width:352px;
        height:167.5px;
        margin:0 auto;
        margin-top:22px;
        border-radius:5px;
        overflow:hidden;
        box-shadow:2.5px 2.5px 2.5px rgba(0,0,0,.2);
    }
    .swiper-out{
        height:167.5px;
    }
    .swiper-item img{
        width:352px;
        height:167.5px;
    }
</style>