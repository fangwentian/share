<template>
    <div class="cover" @click="close">
        <div class="content" @click.stop>
            <div>
                <el-upload class="upload-demo" drag action="/upload" multiple :file-list="list" :accept="accept" :before-upload="check" :on-success="uploaded">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传 <b>{{accept == '' ? '任意': accept}}</b> 类型文件</div>
                </el-upload>
                <div class="f-tac buttonWrap">
                    <el-button @click="close">取消</el-button>
                    <el-button type="primary" @click="confirm">确定</el-button>
                </div>
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
        },
        store: {
            default: ''
        }
    },
    data() {
        return {
            list: [],
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
            if (this.accept) {
                let fileType = file.type;
                let res = this.accept.split(',').indexOf(`${fileType}`) !== -1;
                if (!res) {
                    this.$message({
                        message: '文件类型错误',
                        type: 'warning'
                    });
                    return false;
                }
            }
            return true;
        },
        uploaded(response, file, list) {
            this.fileList.push({
                name: response.name,
                url: response.url,
                type: 'file',
                parent: this.store.state.categories.currentFolder,
                fileType: file.raw.type
            });
        },
        confirm() {
            let self = this;
            this.store && this.store.dispatch('files/addFile', this.fileList).then(() => {
                self.close();
            });
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
    animation: opacity .2s linear;
}
@keyframes opacity {
    0% {background-color: rgba(0, 0, 0, 0);}
    100% {background-color: rgba(0, 0, 0, 0.5);}
}
.content {
    display: block;
    transform: translate3d(0, 0, 0);
    padding: 40px 30px 20px 30px;
    background-color: #fff;
    border-radius: 3px;
    animation: position .2s linear;
}
@keyframes position {
    0% {transform: translate3d(0, -30px, 0);}
    100% {transform: translate3d(0, 0, 0);}
}
.confirm, .cancel {
    height: 35px;
    line-height: 35px;
    text-align: center;
    display: inline-block;
    width: 60px;
    border-radius: 3px;
}
.confirm {
    background-color: #E31436
}
.cancel {
    background-color: #fff;
}
.buttonWrap {
    margin-top: 20px;
}
</style>