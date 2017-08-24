// 页面入口，路由配置
import 'font-awesome-webpack';
import 'src/less/base.less';
import Vue from 'vue';
import router from 'src/javascript/router/router';
// import store from 'src/javascript/store';

new Vue({
    delimiters: ['{', '}'],
    el: '#_main',
    template: '<router-view></router-view>',
    router,
    // store
});
