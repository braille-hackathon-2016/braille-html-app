import Vue from 'vue'
import VueRouter from 'vue-router';
import IndexView from './views/IndexView.vue';
require("./style/main.scss");

Vue.use(VueRouter);

var App = Vue.extend({});

var router = new VueRouter();

router.map({
    "/": {
        component: IndexView
    },
});

router.start(App, "#game");