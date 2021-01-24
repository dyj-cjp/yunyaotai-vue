<template>
    <div id="main-tabar">
        <ta-bar>
            <tab-bar-item path='/home'>
                <img slot="item-icon" src='../../../assets/mine/shouye.png'>
                <img slot='item-icon-active' src="../../../assets/userhomeimgs/indexcopy.png">
                <div slot='item-text'>首页</div>
            </tab-bar-item>
            <tab-bar-item path='/profile'>
                <img slot='item-icon' src="../../../assets/userhomeimgs/mine.png">
                <img slot='item-icon-active' src='../../../assets/mine/myactive.png'>
                <div slot='item-text'>我的</div>
            </tab-bar-item>

        </ta-bar>
    </div>
  
</template>

<script>
import TaBar from '../../common/tabbar/TaBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
export default {
    name:'MainTabar',
    components:{
        TaBar,
        TabBarItem
    }
}
</script>

<style>

</style>