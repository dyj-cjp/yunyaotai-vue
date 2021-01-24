<template>
  <div class="drug-container">
      <drug-item v-for="(item,index) in drugs" :key="index" :item="item"></drug-item>
  </div>
</template>

<script>
import DrugItem from './DrugItem'
export default {
    props:{
        drugs:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        DrugItem
    }
}
</script>

<style>
    .drug-container{
  width:352px;
  margin:0 auto;
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
}
</style>