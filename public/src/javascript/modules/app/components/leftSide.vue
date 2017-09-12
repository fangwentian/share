<template>
    <div>
        <div class="f-pr" :class='{disable: isDisabled}'>
            <a href="javascript:;" class="new" @click.stop="showOperations">新建</a>
            <ul class="operations" v-if="isShowOperations">
                <li @click="addFile"><i class="fa fa-upload" aria-hidden="true"></i>导入文件</li>
                <li @click="addFolder"><i class="fa fa-folder" aria-hidden="true"></i>文件夹</li>
            </ul>
        </div>
        <ul class="classification">
            <router-link v-for="item in categories" :to="item.route" tag="li" :key="item.id"><i class="fa" :class="item.icon" aria-hidden="true"></i>{{item.name}}</router-link>
        </ul>
    </div>
</template>
<script>
import UploadModal from 'jsComp/uploadModal';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            isShowOperations: false
        };
    },
    computed: {
        ...mapState('categories', [
            'categories',
            'currentCategory',
            'currentFolder'
        ]),
        isDisabled() {
            return this.$route.path === '/search';
        }
    },
    created() {
        document.addEventListener('click', () => {
            this.isShowOperations = false;
        });
    },
    methods: {
        showOperations() {
            this.isShowOperations = !this.isShowOperations;
        },
        addFile() {
            let self = this;
            let accept;
            if (this.currentCategory._id === 1) {
                accept = 'application/pdf';
            } else if (this.currentCategory._id === 2) {
                accept = 'image/png,image/jpeg';
            } else {
                accept = '';
            }
            new UploadModal({
                propsData: {
                    accept,
                    store: self.$store
                }
            });
        },
        addFolder() {
            const self = this;
            this.$prompt('请输入文件夹名称', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /^.+$/,
                inputErrorMessage: '名称不能为空'
            }).then(({ value }) => {
                self.$store.dispatch('files/addFolder',
                    {
                        name: value,
                        type: 'folder',
                        parent: self.currentFolder,
                        children: [],
                    }
                ).then(() => {
                    this.$message({
                        message: `新建文件夹"${value}"成功！`
                    });
                }).catch(() => {

                });
            }).catch(() => {
                console.log('cancled');
            });
        }
    }
};
</script>
<style scoped lang="less">
.disable {
    .new {
        pointer-events: none;
        background-color: #ccced0;
    }
}
.new {
    width: 80px;
    display: block;
    height: 28px;
    background-color: #41464b;
    color: #fff;
    text-align: center;
    line-height: 28px;
}
@keyframes position {
    0% {transform: translate3d(0, -5px, 0);}
    100% {transform: translateY(0, 0, 0);}
}

.operations {
    width: 135px;
    margin-top: 5px;
    border: solid 1px #ddd;
    padding: 13px 0 13px 0;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .1);
    position: absolute;
    background: #fff;
    z-index: 1;
    animation: position .2s linear;
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
            color: #93a2b1;
            font-size: 16px;
            vertical-align: middle;
            position: relative;
            top: -1px;
        }
    }
}

.classification {
    margin-top: 30px;
    li {
        height: 30px;
        margin-bottom: 10px;
        cursor: pointer;
        color: #6d6d6d;
    }
    i {
        margin-right: 13px;
        font-size: 16px;
        vertical-align: middle;
        position: relative;
        top: -2px;
    }
}
.classification .router-link-active {
    color: #000;
    font-weight: bold;
}
</style>