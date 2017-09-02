<template>
    <header>
        <div class="container">
            <router-link to="/" exact>考拉文档</router-link>
            <div class="f-fr">
                
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'topNav',
}
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
    a {
        font-size: 20px;
        font-weight: normal;
    }
}

</style>
