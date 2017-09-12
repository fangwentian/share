import Vue from 'vue';
import Router from 'vue-router';
import App from 'jsModules/app/app';
import Home from 'jsModules/home/home';
import store from '../store/';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '',
            component: App,
            children: [
                {
                    path: '',
                    redirect: '/books'
                },
                {
                    path: 'books',
                    component: Home
                },
                {
                    path: 'photos',
                    component: Home
                },
                {
                    path: 'otherfiles',
                    component: Home
                },
                {
                    path: 'search',
                    component: Home
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    // 设置当前的分类，电子书/照片/其他文件
    store.dispatch('categories/setCurrentCategory', { fullPath: to.fullPath });

    // 设置当前的folderId
    let folderId = to.query.folderId || '';
    store.dispatch('categories/setCurrentFolder', { folderId });

    if (to.path === '/search') {
        let keyWords = to.query.keyWords || '';
        // 搜索的情况下，获取搜索结果
        store.dispatch('files/searchFileList', keyWords);
    } else {
        // 获取当前的filelist
        store.dispatch('files/getFileList', store.state.categories.currentFolder);

        // 获取面包屑
        store.dispatch('files/getBreadcrumb', store.state.categories.currentFolder);
    }
    
    next();
});

export default router;
