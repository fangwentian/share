import Vue from 'vue';
import Router from 'vue-router';
import App from 'jsModules/app/app';
import Home from 'jsModules/home/home';

Vue.use(Router);

export default new Router({
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
