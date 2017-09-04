<template>
    <footer>
        <p>友情链接：</p>
        <ul>
            <li><a href="">考拉短链</a></li>
            <li><a href="">考拉NOS</a></li>
            <li><a href="">NEK-UI</a></li>
        </ul>
    </footer>
</template>
<script>
export default {
    name: 'BottomInfo',
};
</script>
<style scoped lang="less">
footer {
    background-color: #333;
    color: #fff;
}
ul {
    display: flex;
}
li {
    flex: 1 0 0;
    a {
        color: #fff;
    }
}
</style>