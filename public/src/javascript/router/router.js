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
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    store.dispatch('categories/setCurrentCategory', { fullPath: to.fullPath });
    next();
});

export default router;
