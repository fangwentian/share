<template>
    <div class="m-breadcrumb">
        <template v-for="(item, index) in totalBreadcrumb">
            <template v-if="index !== (totalBreadcrumb.length - 1)">
                <a :href='calcLink(item._id)' class="link">{{item.name}}</a>
                <span class="arrow">&gt;</span>
            </template>
            <template v-else>
                <span>{{item.name}}</span>
            </template>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'breadcrumb',
    computed: {
        ...mapState('files', [
            'breadcrumb'
        ]),
        ...mapState('categories', [
            'currentCategory'
        ]),
        totalBreadcrumb() {
            return [this.currentCategory].concat(this.breadcrumb.reverse());
        }
    },
    methods: {
        calcLink(folderId) {
            let withoutQuery = location.href.split('?')[0];
            if (['1', '2', '3'].indexOf(`${folderId}`) === -1) {
                return `${withoutQuery}?folderId=${folderId}`;
            }
            return withoutQuery;
        }
    }
};
</script>

<style scoped lang='less'>
.m-breadcrumb {
    padding: 5px 20px 10px 20px;
    color: #555;
    font-size: 13px;
}
.arrow {
    margin: 0 6px;
}
.link {
    color: #6886aa;
}
</style>