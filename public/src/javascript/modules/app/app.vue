<template>
    <div class="m-app">
        <div class="wrap">
            <TopNav :navType='navType'/>
            <div class="contentWrap">
                <aside class="leftSide">
                    <LeftSide />
                </aside>
                <div class="mainArea">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <!-- <BottomInfo /> -->
    </div>
</template>

<script>
import TopNav from './components/topNav';
import LeftSide from './components/leftSide';
import BottomInfo from './components/bottomInfo';
export default {
    name: 'app',
    components: {
        TopNav,
        BottomInfo,
        LeftSide
    },
    data() {
        return {
            navType: 'home'
        }
    }
}
</script>

<style scoped lang="less">
.m-app {
    background-color: #f7f7f7;
}
.contentWrap {
    display: flex;
    width: 1136px;
    margin: 35px auto 0  auto;
}
.wrap {
    min-height: 100vh;
}
.leftSide {
    width: 100px;
    margin-right: 70px;
}
.mainArea {
    flex: 1 0 0;
}

</style>
