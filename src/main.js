import Vue from "vue";
import App from "@/views/App.vue";
import router from "@/plugins/router";
import store from "@/store/index";
import inject from "@/inject/index";
import "@/filters";
import UaParser from "ua-parser-js";
import { PcLocation } from "@/config";

import "@/assets/styles/reset.scss";

const up = new UaParser();
up.setUA(window.navigator.userAgent);
if (up.getDevice().type === "pc") {
    window.location.href = PcLocation;
}


Vue.config.productionTip = false;

Vue.use(inject);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");