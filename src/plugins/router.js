import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/index";
import { ROUTER_DEFAULT_CONFIG } from "@/config/index";
import { routeFrom, routeTo } from "@/interceptors/router";



Vue.use(VueRouter);

const router = new VueRouter({
    ...ROUTER_DEFAULT_CONFIG,
    routes: routes,
});

router.beforeEach((from, to, next) => {
    routeFrom(from, to);
    next();
});
router.afterEach((from, to) => {
    routeTo(from, to);
});

export default router;
