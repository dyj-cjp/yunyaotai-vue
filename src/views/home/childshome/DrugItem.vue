<template>
  <div class="drug-item" @click='itemclick'>
      <img class='drug_list_img' :src="item.img1">
      <div class="drug_list_text">
          <div class="drug_list_text_info">{{item.info}}</div>
          <div class="drug_list_text_sell">
              <span class="price">￥{{item.price}}</span>
              <span class="count">{{item.used}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        itemclick(){
            // console.log(this.item.id);
            this.$router.push('/detail/'+this.item.id);
        }
    }
}
</script>

<style>
    .drug-item{
  width:170px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1.5px 1.5px 2.5px rgba(0,0,0,.03);
  margin-top:10px;
}
.drug_list_text_info{
    width:160px;
  font-size:14px;
  /* display: -webkit-box; */
  /* -webkit-box-orient: vertical; */
  white-space: nowrap;
  /* -webkit-line-clamp: 2;   */
  overflow: hidden;
  text-overflow:ellipsis;
  margin:5px;
}
.drug_list_img{
  width:170px;
  height:170px;
}
.drug_list_text_sell{
  padding:2.5px;
}
.price{
  color:red;
  font-size:20px;
}
.count{
    width:70px;
    display:inline-block;
  font-size:8px;
  margin-left:7.5px;
  /* width:75px; */
    white-space: nowrap;
 
  overflow: hidden;
  text-overflow:ellipsis;
}
</style>