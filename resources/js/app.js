import Vue from "vue";
import VueRouter from "vue-router";
 
Vue.use(VueRouter);
 
import App from "./App.vue";
import Homepage from "./Components/Homepage"
import Boutique from "./Components/Boutique"

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Homepage
        },
        {
            path: "/Boutique",
            name: "Boutique",
            component: Boutique
        }
    ]
});
 
const app = new Vue({
    el: '#app',
    components: { App },
    router
})