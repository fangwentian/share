<template>
    <div class="m-home">
        <breadcrumb/>
        <ul class="list">
            <li v-for="(file, index) in files" :key="file._id">
                <a v-if="file.type === 'folder'" class="item" :href="calcLink(file._id)">
                    <div class="fileImg folderImage"></div>
                    <p class="f-tac f-toe">{{file.name}}</p>
                </a>
                <a v-if="file.type === 'file'" class="item" :href="file.url" target="_blank">
                    <!-- 电子书pdf -->
                    <div v-if="convertFileType(file.fileType) == 'pdf'" class="fileImg pdf"></div>
                    <!-- 照片 -->
                    <img v-else-if="['jpg', 'png'].indexOf(convertFileType(file.fileType)) !== -1" :src="file.url" class="photo">
                    <!-- 其他文件 -->
                    <div v-else class="fileImg commonfile"></div>
                    <p class="f-tac f-toe">{{file.name}}</p>
                </a>
                <span class="setting" @click.stop="operation(file)"><i class="fa fa-cog" aria-hidden="true"></i></span>
                <operationMenu v-if="file.isShowMenu" :file="file"/>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import breadcrumb from './components/breadcrumb';
import operationMenu from './components/operationMenu';
import homeMixin from './homeMixin';

export default {
    name: 'home',
    components: {
        breadcrumb,
        operationMenu
    },
    mixins: [homeMixin],
    computed: {
        ...mapState('files', [
            'files'
        ]),
        ...mapState('categories', [
            'currentCategory',
            'currentFolder'
        ]),
    },
    created() {
        document.addEventListener('click', () => {
            this.$store.dispatch('files/hideAllMenu');
        });
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
        operation(file) {
            this.$store.dispatch('files/hideAllMenu');
            this.$store.dispatch('files/showMenu', file);
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
    width: 117px;
    text-align: right;
    cursor: pointer;
    padding: 0 7px;
    &:hover {
        color: #999;
    }
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