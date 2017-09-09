<template>
    <div class="m-home">
        <breadcrumb />
        <ul class="list">
            <li v-for="(file, index) in files" :key="index">
                <a v-if="file.type === 'folder'" class="item" :href="calcLink(file._id)">
                    <div class="fileImg folderImage"></div>
                    <p class="f-tac f-toe">{{file.name}}</p>
                </a>
                <a v-if="file.type === 'file'" class="item" :href="file.url" target="_blank">
                    <!-- 电子书pdf -->
                    <div v-if="getSuffix(file.url) == 'pdf'" class="fileImg" :class="getSuffix(file.url)"></div>
                    <!-- 照片 -->
                    <img v-else-if="isImageFile(file.url)" :src="file.url" class="photo">
                    <!-- 其他文件 -->
                    <div v-else class="fileImg commonfile"></div>
                    <p class="f-tac f-toe">{{file.name}}</p>
                </a>
                <span class="setting" @click.stop="operation(file)"><i class="fa fa-cog" aria-hidden="true"></i></span>
                <template v-if="file.isShowMenu">
                    <operationMenu />
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import breadcrumb from './components/breadcrumb';
import operationMenu from './components/operationMenu';

export default {
    name: 'home',
    components: {
        breadcrumb,
        operationMenu
    },
    computed: {
        ...mapState('files', [
            'files'
        ]),
        ...mapState('categories', [
            'currentCategory',
            'currentFolder'
        ]),
    },
    methods: {
        calcLink(folderId) {
            let withoutQuery = location.href.split('?')[0];
            return `${withoutQuery}?folderId=${folderId}`;
        },
        getSuffix(url) {
            return url.slice(url.lastIndexOf('.') + 1);
        },
        isImageFile(url) {
            return ~['png', 'jpg'].indexOf(this.getSuffix(url));
        },
        hideAllMenu() {
            this.files.forEach((file) => {
                file.isShowMenu = false;
            });
        },
        operation(file) {
            this.hideAllMenu();
            file.isShowMenu = true;
        }
    }
};
</script>

<style scoped lang='less'>
.list {
    display: flex;
    flex-wrap: wrap;
    li {
        margin-right: 10px;
        position: relative;
        border: 1px solid transparent;
        cursor: pointer;
        &:hover {
            border: 1px solid #e5e5e5;
            border-radius: 2px;
            background: #f3f4f5;
            .setting {
                display: block;
            }
        }
    }
}
.item {
    display: block;
    width: 122px;
    height: 127px;
    flex: 1 0 0;
    color: #555;
    p {
        padding: 0 5px;
        margin:  7px 0 10px 0;
    }
}
.fileImg {
    width: 80px;
    height: 80px;
    margin: 6px 21px 0 21px;
}
.photo {
    width: 80px;
    height: 80px;
    display: block;
    margin: 6px 21px 0 21px;
}
.setting {
    display: none;
    position: absolute;
    color: #666;
    right: 2px;
    bottom: 2px;
    height: 24px;
    line-height: 24px;
    width: 24px;
    text-align: center;
    cursor: pointer;
}

.commonfile {
    background: url(~root/res/images/file.png) no-repeat;
}
.pdf {
    background: url(~root/res/images/pdf.png) no-repeat;
}
.folderImage {
    background: url(~root/res/images/folder.png) no-repeat;
}
</style>