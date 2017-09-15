<template>
    <div class="cover" @click="close">
        <div class="content" @click.stop>
            <div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
    props: {
        store: {
            default: ''
        }
    },
    computed: {
        currentCategory() {
            return this.store.state.categories.currentCategory;
        },
        fileHierarchy() {
            return this.store.state.files.fileHierarchy;
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
        this.store.dispatch('files/getFileHierarchy', this.currentCategory._id);
    },
    methods: {
        close() {
            this.$destroy();
            document.body.removeChild(this.$el);
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