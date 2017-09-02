import 'font-awesome-webpack';
import 'src/less/base.less';
import Vue from 'vue';
import router from 'src/javascript/router/router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import store from 'src/javascript/store';

Vue.use(ElementUI);

new Vue({
    delimiters: ['{', '}'],
    el: '#_main',
    template: '<router-view></router-view>',
    router,
    store
});
