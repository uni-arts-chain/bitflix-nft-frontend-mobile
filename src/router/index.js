// import { NODE_ENV } from "@/config";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home/Index.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import(/* webpackChunkName: "session" */ "@/views/Session/Login.vue"),
    },
    {
        path: "/nftdetail",
        name: "nftdetail",
        component: () => import(/* webpackChunkName: "nftdetail" */ "@/views/myNFT/Detail"),
    },
    {
        path: "/mynft",
        name: "mynft",
        component: () => import(/* webpackChunkName: "myNFT" */ "@/views/myNFT/Index"),
    },
    {
        path: "/questions",
        name: "questions",
        component: () => import(/* webpackChunkName: "questions" */ "@/views/questions/Index"),
    },
    {
        path: "/qmenu",
        name: "qmenu",
        component: () => import(/* webpackChunkName: "questions" */ "@/views/questions/qmenu"),
    },
    {
        path: "/email",
        name: "email",
        component: () => import(/* webpackChunkName: "email" */ "@/views/Email"),
    },
    {
        path: "/marketplace",
        name: "marketplace",
        component: () => import(/* webpackChunkName: "marketplace" */ "@/views/marketplace/Index"),
    },
    {
        path: "/resell",
        name: "resell",
        component: () => import(/* webpackChunkName: "resell" */ "@/views/resell/Index"),
    },
    {
        path: "/marketplaceSearch",
        name: "marketplaceSearch",
        component: () =>
            import(/* webpackChunkName: "marketplaceSearch" */ "@/views/marketplace/Search"),
    },
    // {
    //     path: "/marketplaceSearchList",
    //     name: "marketplaceSearchList",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "marketplaceSearchList" */ "@/views/marketplace/SearchList"
    //         ),
    // },
    {
        path: "/marketplaceDetail/:id",
        name: "marketplaceDetail",
        component: () =>
            import(/* webpackChunkName: "marketplaceDetail" */ "@/views/marketplace/Detail"),
    },
    {
        path: "/lockup",
        name: "lockup",
        component: () => import(/* webpackChunkName: "lockup" */ "@/views/lockupBFX/Index"),
    },
    {
        path: "/lockupRecord",
        name: "lockupRecord",
        component: () => import(/* webpackChunkName: "lockupRecord" */ "@/views/lockupBFX/Record"),
    },
    {
        path: "/wallet",
        name: "wallet",
        component: () => import(/* webpackChunkName: "wallet" */ "@/views/Wallet"),
    },
];

// if (NODE_ENV !== "production" || window.NODE_CONFIG.env === "development") {
//     routes.push({
//         path: "/faucet",
//         name: "Faucet",
//         component: () =>
//             import(
//                 /* webpackChunkName: "Session" */ "@/views/Session/Faucet.vue"
//             ),
//     });
// }
export default routes;
