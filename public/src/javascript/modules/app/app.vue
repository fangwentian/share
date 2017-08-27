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
        <BottomInfo />
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
.contentWrap {
    display: flex;
}
.wrap {
    min-height: calc(~"100vh - 50px");
}
.leftSide {
    width: 260px;
    padding-right: 10px;
}
.mainArea {
    flex: 1 0 0;
}

</style>
