import { setLocalStore, getLocalStore, removeLocalStore } from "@/plugins/storage";
import http from "@/plugins/http";
import Wallet from "@/plugins/wallet";

export default {
    namespaced: true,
    state: {
        // connectedAccount: "",
        // isConnected: false,
        // balance: "",
        // provider: {},
        info: Object.assign(
            {},
            JSON.parse(
                getLocalStore("user_token") || '{ "token": "", "expire_at": "", "address": "" }'
            )
        ),
    },
    mutations: {
        // SET_ACCOUNT(state, wallet) {
        //     state.connectedAccount = wallet.connectedAddress;
        //     // state.balance = wallet.balance;
        //     // state.provider = wallet.provider;
        // },
        // SET_IS_CONNECTED(state, status) {
        //     state.isConnected = status;
        // },
        SET_INFO(state, info) {
            state.info = info;
        },
    },
    actions: {
        async ConnectWallet({ dispatch }) {
            await Wallet.connect();
            dispatch("InitWallet");
        },
        async InitWallet() {
            await Wallet.init();
            // commit("SET_ACCOUNT", Wallet);
            // commit("SET_IS_CONNECTED", true);
        },
        GetInfo({ commit }) {
            http.userGetInfo({}).then((info) => {
                let tokens = {
                    token: info.token,
                    expire_at: info.expire_at,
                    address: info.address,
                };
                setLocalStore("user_token", tokens);
                commit("SET_INFO", info);
            });
        },
        SetInfo({ commit }, info) {
            let tokens = {
                token: info.token,
                expire_at: info.expire_at,
                address: info.address,
            };
            setLocalStore("user_token", tokens);
            commit("SET_INFO", info);
        },
        Quit({ commit, state }) {
            if (state.info.token) {
                http.userLogout({})
                    .then(() => {
                        removeLocalStore("user_token");
                        commit("SET_INFO", {
                            token: "",
                            expire_at: "",
                            address: "",
                        });
                    })
                    .catch(() => {
                        removeLocalStore("user_token");
                        commit("SET_INFO", {
                            token: "",
                            expire_at: "",
                            address: "",
                        });
                    });
            }
        },
    },
};
