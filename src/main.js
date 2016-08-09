import Vue from 'vue'
import VueRouter from 'vue-router';
import IndexView from './views/IndexView.vue';
require("./style/main.scss");

Vue.use(VueRouter);

var store = require("./store.js");

var App = Vue.extend({
    data() {
        return {
            store
        }
    }
});

setInterval(() => {
    store.time_taken++;
}, 1000);

var router = new VueRouter();

router.map({
    "/": {
        component: IndexView,
        props: ["store"]
    },
});

router.start(App, "#game");