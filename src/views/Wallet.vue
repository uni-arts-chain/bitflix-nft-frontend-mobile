<template>
    <div class="wallet-page">
        <div class="wallet-content">
            <span class="back-btn" @click="goBack">&lt; BACK</span>
            <div class="wallet-list" @click="goHome">
                <div class="wallet" v-for="wallet in wallets" :key="wallet.id">
                    <img class="wallet-icon" :src="wallet.icon" />
                    <span class="wallet-name">{{ wallet.name }}</span>
                </div>
            </div>
            <div class="line">
                <img src="../assets/images/line.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import WalletIcon from "@/assets/images/wallet-icon.png";
export default {
    name: "Wallet",
    data() {
        return {
            wallets: [
                {
                    icon: WalletIcon,
                    name: "Metamask",
                    id: 1,
                },
                {
                    icon: WalletIcon,
                    name: "Trezor",
                    id: 2,
                },
                {
                    icon: WalletIcon,
                    name: "Ledger",
                    id: 3,
                },
                {
                    icon: WalletIcon,
                    name: "Coinbase",
                    id: 4,
                },
                {
                    icon: WalletIcon,
                    name: "WalletrConnect",
                    id: 5,
                },
                {
                    icon: WalletIcon,
                    name: "Portis",
                    id: 6,
                },
            ],
        };
    },
    methods: {
        goBack() {
            this.$router.push("/email");
        },
        goHome() {
            this.$router.push("/");
        },
    },
};
</script>

<style lang="scss" scoped>
.wallet-page {
    margin-top: 60px;
    width:100%;
}
.line{
    width:100%;
    img{
        width:100%;
        display: block;
        object-fit: cover;
    }
}
.wallet-content {
    margin-top: 60px;
    width: 90%;
    margin:0  auto;
    color: #ffffff;
    .back-btn {
        cursor: pointer;
        font-size: 17px;
        font-family: Montserrat-SemiBold, Montserra;
        // font-weight: R;
        color: #ffffff;
    }
    .wallet-title {
        margin-top: 60px;
        font-family: "Montserrat-Bold";
        font-size: 36px;
        font-weight: 600;
        text-align: center;
    }
    .wallet-list {
        width:90%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 40px auto;
        .wallet {
            cursor: pointer;
            border-radius: 10px;
            width: 30%;
            margin-top: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #15131e;
            padding: 20px 0;
            .wallet-icon {
                width: 40px;
                height: 40px;
                display: block;
                object-fit: contain;
            }
            .wallet-name {
                font-family: Montserrat-SemiBold, Montserra;
                margin-top: 10px;
                font-size: 12px;
                transform: scale(0.8);
            }
        }
    }
}
</style>
