<template>
    <div class="m-operationMenu">
        <ul class="wrap">
            <li @click="moveFile()"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>移动</li>
            <li @click="deleteFile()"><i class="fa fa-trash" aria-hidden="true"></i>删除</li>
        </ul>
    </div>
</template>

<script>
import MoveModal from 'jsComp/moveModal';

export default {
    name: 'operationMenu',
    props: ['file', 'currentFolder'],
    methods: {
        deleteFile() {
            this.$store.dispatch('files/deleteFile', this.file);
        },
        moveFile() {
            let self = this;
            let _modal = new MoveModal({
                propsData: {
                    store: self.$store,
                    file: self.file
                }
            });
            _modal.$on('move_success', () => {
                this.$store.dispatch('files/getFileList', this.currentFolder);
            });
        }
    }
};
</script>

<style scoped lang='less'>
.m-operationMenu {
    position: absolute;
    left: 0;
    top: calc(~"100% + 7px");
}
.wrap {
    box-shadow: 0 2px 8px 0 #ccc;
    left: 0;
    width: 220px;
    background: #fff;
    color: #7d7d7d;
    z-index: 100;
    cursor: default;
    border-radius: 3px;
    position: relative;
    padding: 8px 0;
    width: 150px;
    border: solid 1px #e6e5e5;
    &:before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        border-top: solid 1px #e6e5e5;
        border-left: solid 1px #e6e5e5;
        transform: rotate(45deg);
        position: absolute;
        background-color: #fff;
        top: -5px;
        right: 36px;
    }
    li {
        height: 36px;
        line-height: 36px;
        padding: 0 20px;
        cursor: pointer;
        i {
            margin-right: 8px;
            font-size: 14px;
        }
        &:hover {
            background-color: #eee;
        }
    }
}

</style>