<template>
    <div class="cover" @click="close">
        <div class="content" @click.stop>
            <div class="head">
                <i class="fa fa-arrow-left" aria-hidden="true" @click="back()"></i>
                <span>移动文件</span>
            </div>
            <ul class="fileList">
                <li v-for="(item, index) in fileList" :class="{ clickable: item.type === 'folder' }" @click="subFolder(item, index)">
                    <div v-if="item.type === 'folder'" class="folderImage fileImg"></div>
                    <div v-else class="commonfile fileImg"></div>
                    <div>{{item.name}}</div>
                    <i v-if="item.type === 'folder'" class="fa fa-angle-right" aria-hidden="true"></i>
                </li>
            </ul>
            <div class="foot f-tar">
                <el-button type="primary" @click="confirm">移动到当前文件夹</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
    props: {
        store: {
            default: '',
            file: null
        }
    },
    computed: {
        currentCategory() {
            return this.store.state.categories.currentCategory;
        },
        fileHierarchy() {
            return this.store.state.files.fileHierarchy;
        },
        fileList() {
            return this.path.reduce((curent, next) => {
                return curent[next];
            }, this.fileHierarchy);
        }
    },
    data() {
        return {
            path: []
        };
    },
    created() {
        this.$mount();
        document.body.appendChild(this.$el);
        this.store.dispatch('files/getFileHierarchy', this.currentCategory._id);
    },
    methods: {
        close() {
            this.$destroy();
            document.body.removeChild(this.$el);
        },
        subFolder(folder, index) {
            if (folder.type !== 'folder') {
                return false;
            }
            this.path = this.path.concat([index, 'children']);
        },
        back() {
            this.path = this.path.slice(0, this.path.length - 2);
        },
        confirm() {

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
    display: block; width: 480px;
    transform: translate3d(0, 0, 0);
    padding: 0 30px 15px 30px;
    background-color: #fff;
    border-radius: 3px;
    animation: position .2s linear;
    color: #333;
}
@keyframes position {
    0% {transform: translate3d(0, -30px, 0);}
    100% {transform: translate3d(0, 0, 0);}
}
.head {
    height: 60px;
    text-align: left;
    line-height: 63px;
    font-size: 16px;
    font-weight: bold;
    color: #444;
    border-bottom: solid 1px #ddd;
    i {
        margin-right: 10px;
        cursor: pointer;
    }
}
.fileList {
    padding: 10px 0;
    li {
        height: 45px;
        line-height: 45px;
        position: relative;
        border-radius: 2px;
        padding: 0 5px;
        div {
            display: inline-block;
        }
        i {
            line-height: 45px;
            position: absolute;
            right: 5px; top: 0;
            font-size: 15px;
        }
    }
    .fileImg {
        width: 26px;
        height: 26px;
        position: relative;
        top: 9px;
        margin-right: 12px;
    }
}
.commonfile, .folderImage {
    background-size: 170px 70px;
}
.commonfile {
    background: url(~root/res/images/file_icons.png) no-repeat 0 0;
}
.folderImage {
    background: url(~root/res/images/file_icons.png) no-repeat -52px 0;
}
.clickable {
    cursor: pointer;
    &:hover {
        background-color: #f5f2f2;
    }
}


</style>