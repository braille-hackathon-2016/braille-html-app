import Vue from 'vue'
import VueRouter from 'vue-router';
import IndexView from './views/IndexView.vue';
require("./style/main.scss");

Vue.use(VueRouter);

var store = require("./store.js");
var server = require("./server.js");
var wss = server.wss;

store.server = server;

var App = Vue.extend({
    data() {
        return {
            store
        }
    }
});

var router = new VueRouter();

router.map({
    "/": {
        component: IndexView,
        props: ["store"]
    },
});

router.start(App, "#game");