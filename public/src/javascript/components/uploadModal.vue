<template>
    <div class="cover" @click="close">
        <div class="content" @click.stop>
            <div>
                <el-upload class="upload-demo" drag action="/upload" multiple :file-list="fileList" :accept="accept" :before-upload="check">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传 {{accept}} 类型文件</div>
                </el-upload>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
    props: {
        accept: {
            default: ''
        }
    },
    data() {
        return {
            fileList: []
        };
    },
    created() {
        this.$mount();
        document.body.appendChild(this.$el);
    },
    methods: {
        close() {
            this.$destroy();
            document.body.removeChild(this.$el);
        },
        check(file) {
            let fileType = file.type;
            let regx = new RegExp(this.accept);
            if (!regx.test(fileType)) {
                this.$message({
                    message: '文件类型错误',
                    type: 'warning'
                });
                return false;
            }
            return true;
        }
    }
});
</script>
<style scoped lang="less">
.cover {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    animation: opacity 0.2s linear;
}
@keyframes opacity {
    0% {background-color: rgba(0, 0, 0, 0);}
    100% {background-color: rgba(0, 0, 0, 0.5);}
}
.content {
    display: block;
    transform: translateY(0);
    padding: 40px 30px;
    background-color: #fff;
    border-radius: 3px;
    animation: position 0.2s linear;
}
@keyframes position {
    0% {transform: translateY(-30px);}
    100% {transform: translateY(0);}
}
</style>