<template>
    <div class="m-home">
        <breadcrumb />
        <ul class="list">
            <li v-for="file in files">
                <a v-if="file.type === 'folder'" class="item" :href="calcLink(file._id)">
                    <div class="img folderImage"></div>
                    <p class="f-tac f-toe">{{file.name}}</p>
                </a>
                <a v-if="file.type === 'file'" class="item">
                    <div class="img fileImage"></div>
                    <p class="f-tac f-toe">{{file.name}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import breadcrumb from './components/breadcrumb';
import { mapState } from 'vuex';

export default {
    name: 'home',
    components: {
        breadcrumb
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
        }
    }
};
</script>

<style scoped lang='less'>
.list {
    display: flex;
    flex-wrap: wrap;
}
.item {
    display: block;
    width: 122px;
    height: 127px;
    flex: 1 0 0;
    margin-right: 10px;
    border: 1px solid transparent;
    cursor: pointer;
    color: #555;
    &:hover {
        border: 1px solid #e5e5e5;
        border-radius: 2px;
        background: #f3f4f5;
    }
}
.img {
    width: 80px;
    height: 80px;
    margin: 6px 21px 0 21px;
}
.fileImage {
    background: url(~root/res/images/file.png) no-repeat;
}
.folderImage {
    background: url(~root/res/images/folder.png) no-repeat;
}
</style>