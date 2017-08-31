<template>
    <div>
        <div class="f-pr">
            <a href="javascript:;" class="new">新建</a>
            <ul class="operations">
                <li><i class="fa fa-upload icon" aria-hidden="true"></i>导入文件</li>
                <li><i class="fa fa-folder icon" aria-hidden="true"></i>文件夹</li>
            </ul>
        </div>
        <ul class="classification">
            <li>电子书</li>
            <li>照片</li>
            <li>其他文件</li>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped lang="less">
.new {
    width: 80px;
    display: block;
    height: 28px;
    background-color: #41464b;
    color: #fff;
    text-align: center;
    line-height: 28px;
}
.operations {
    display: none;
    width: 135px;
    margin-top: 5px;
    border: solid 1px #ddd;
    padding: 13px 0 13px 0;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.1);
    position: absolute;
    background: #fff;
    li {
        height: 36px;
        line-height: 36px;
        cursor: pointer;
        padding: 0 12px 0 20px;
        &:hover {
            background-color: #f5f5f5;
        }
        i {
            margin-right: 12px;
        }
    }
    .icon {
        color: #93a2b1;
        font-size: 16px;
        vertical-align: middle;
        position: relative;
        top: -1px;
    }
}


</style>