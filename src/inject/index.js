import Wallet from "@/plugins/wallet";
import Icon from "@/plugins/icon";

import detect from "@/plugins/detect";
import http from "@/plugins/http";
import element from "@/plugins/element";
import vant from "@/plugins/vant";
import copy from "clipboard-copy";

export default {
    install: async (vue) => {
        vue.use(Icon);
        vue.use(element);
        vue.use(vant);
        vue.prototype.$browser = detect.browser;
        vue.prototype.$http = http;
        vue.prototype.$wallet = Wallet;
        vue.prototype.$copy = copy;
    },
};
