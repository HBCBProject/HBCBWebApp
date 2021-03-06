import Vue from "vue";
import VueRouter from "vue-router";
 
Vue.use(VueRouter);
 
import App from "./App.vue";
import Homepage from "./Components/Homepage"
 
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Homepage
        }
    ]
});
 
const app = new Vue({
    el: '#app',
    components: { App },
    router
})