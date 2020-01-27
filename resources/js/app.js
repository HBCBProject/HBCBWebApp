import Vue from "vue";
import VueRouter from "vue-router";


import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueRouter);
Vue.use(VueMaterial)

import App from "./App.vue";
import Homepage from "./Components/Homepage"
import equipe from "./Components/equipe"
import Boutique from "./Components/Boutique"
import vieclub from "./Components/vie_du_club"

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
    }, {
        path: "/Vie_du_club",
        name: "vieduclub",
        component: vieclub
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
