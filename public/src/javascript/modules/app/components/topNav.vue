<template>
    <header>
        <div class="container">
            <router-link to="/" exact>考拉文档</router-link>
            <div class="f-fr" @click.stop="toggleSearch">
                <div class="expand" v-if="isShowSearch" @click.stop>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type="text" class="search" placeholder="输入文件名搜索">
                </div>
                <div class="collapse" v-else>
                    <i class="fa fa-search" aria-hidden="true"></i>搜索
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'topNav',
    data() {
        return {
            isShowSearch: false
        };
    },
    created() {
        document.addEventListener('click', () => {
            this.isShowSearch = false;
        });
    },
    methods: {
        toggleSearch() {
            this.isShowSearch = !this.isShowSearch;
        }
    }
};
</script>

<style lang="less" scoped>
header {
    background-color: #fff;
    color: rgb(51, 51, 51);
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    font-weight: bold;
    margin-bottom: 10px;
    box-shadow: 0 2px 3px 0 rgba(50,50,50,.1);
}
.container {
    width: 1136px;
    margin: 0 auto;
    padding-right: 100px;
    a {
        font-size: 20px;
        font-weight: normal;
    }
}
.collapse {
    font-weight: normal;
    color: #333;
    cursor: pointer;
    i {
        font-size: 16px;
        margin-right: 6px;
        position: relative;
        top: 1px;
    }
}
.search {
    width: 100%;
    height: 24px;
    padding: 1px 23px 4px 25px;
    text-indent: 2px;
    line-height: normal;
    font-size: 12px;
    color: #000;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #666;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
    display: block;
    vertical-align: middle;
    background-color: #fff;
    outline: none;
}
.expand {
    width: 325px;
    position: relative;
    margin-top: 15px;
    animation: expand .3s ease;
    i {
        position: absolute;
        font-size: 16px;
        top: 1px;
        left: 0;
        margin: 0;
        padding: 0;
    }
}
@keyframes expand {
    from {width: 50px}
    to {width: 325px}
}
</style>
