import Vue from "vue";
import VueRouter from "vue-router";
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueRouter);

import App from "./App.vue";
import Homepage from "./Components/Homepage"
import equipe from "./Components/equipe"
const router = new VueRouter({
    mode: "history",
    routes: [{
        path: "/",
        name: "home",
        component: Homepage
    }, {
        path: "/equipe",
        name: "equipe",
        component: equipe
    },
    {
        path: "/Boutique",
        name: "Boutique",
        component: Boutique
    }]
});

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router
})
