<template>
    <div class="cover">
        This is a modal.
    </div>
</template>

<script>
    export default {
        name: 'BaseModal',
        created() {
            this.inject
        }
    }

</script>

<style scoped lang="less">
.cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
}

</style>