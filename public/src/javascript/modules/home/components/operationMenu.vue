<template>
    <div class="m-operationMenu">
        <ul class="wrap">
            <li class="f-toe f-pr" @click.stop>
                <input type="text" class="rename" v-model="fileName">
                <!-- <i class="fa fa-check confirm" aria-hidden="true"></i> -->
            </li>
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
    data() {
        return {
            fileName: this.file.name
        };
    },
    created() {
        let self = this;
        document.addEventListener('click', self.eventlistener);
    },
    methods: {
        eventlistener() {
            let self = this;
            if (`${this.fileName}` !== `${this.file.name}`) {
                this.$store.dispatch('files/rename', { file: this.file, newName: this.fileName }).then((res) => {
                    if (res) {
                        this.$message({
                            type: 'success',
                            message: '修改名称成功!'
                        });
                    }
                });
            }
            document.removeEventListener('click', self.eventlistener);
        },
        deleteFile() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$store.dispatch('files/deleteFile', this.file)
                    .then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    });
            }).catch(() => {

            });
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
        left: 50%;
        margin-left: -4px;
    }
    li {
        height: 36px;
        line-height: 36px;
        padding: 0 10px;
        &:not(:first-child) {
            cursor: pointer;
        }
        i {
            margin-right: 8px;
            font-size: 14px;
        }
        &:not(:first-child):hover {
            background-color: #eee;
        }
    }
}
.rename {
    display: block;
    height: 35px;
    line-height: 20px;
    padding: 3px 9px 3px 9px;
    margin-right: 0;
    width: 100%;
    border-radius: 2px;
    border: 1px solid #e5e5e5;
    box-shadow: inset 0 1px 3px 0 #e5e5e5;
    font-size: 12px;
    color: #555;
    vertical-align: middle;
    background-color: #fff;
    background-image: none;
    outline: none;
}
.confirm {
    cursor: pointer;
    position: absolute;
    color: #1ebe8b;
    font-size: 18px;
    top: 0;
    right: 10px;
    line-height: 35px;
    margin-right: 0 !important;
    width: 20px;
}

</style>