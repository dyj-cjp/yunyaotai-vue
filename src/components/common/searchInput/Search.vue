<template>
  <div id='search'>
      <div class="search">
          <img class="search_logo" src='../../../assets/userhomeimgs/search.png'>
          <input class="search_input" placeholder="请输入药品名称" placeholder-class="drug_search">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.search{
  position:relative;
  width:339.5px;
  height:30px;
  border-radius: 15px;
  background-color: #fff;
  margin-top:15px;
  margin-left:18px;
}
.search_input{
  width:287px;
  height:30px;
  border-radius:0 15px 15px 0;
  border:none;
  background-color: #fff;
  margin-left:52.5px;
  /* background-color: pink; */
}
.search_input::-webkit-input-placeholder{
  font-size:18px;
  opacity:0.8;
  color:#6f6e6e;
  font-family: STXihei Regular, STXihei Regular-Regular;
}
.search_logo{
  width:17.5px;
  height:17.5px;
  position:absolute;
  left:16px;
  top:50%;
  transform: translate(0,-50%);
}

</style>