<template>
    <div class="lockup-page">
        <div class="lockup-content">
             <div>
        <div class="page-title">
            LOCK UP BFX
        </div>
        <div class="short-line"></div>
    </div>
            <div class="lockup">
                <div>
                    <p class="lockup-title">
                      Stake to receive USDT spending quota
                    </p>
                    <div class="input-wrapper">
                        <input class="input" v-model="amount" />
                        <!-- <span class="unit">{{ token.symbol }}</span> -->
                    </div>
                    <p class="desc desc-1">Balance: 0</p>
                    <p class="desc">Staked: 0</p>
                    <p class="desc">Spending Quota: $0</p>
                </div>
                <button
                    class="btn active btn-1"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.8)"
                >
                    Approve
                </button>
                <button class="btn btn-2" @click="goRecord">Lock up record</button>
            </div>
        </div>
          <div class="line">
                <img src="../../assets/images/line.png" alt="">
            </div>
    </div>
</template>

<script>
export default {
    name: "lockup",
    data() {
        return {
            amount:0
        };
    },
    methods:{
         goRecord() {
            this.$router.push("/lockupRecord");
        },
    }
};
</script>

<style lang="scss" scoped>
.lockup-page {
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
.page-title {
    font-size: 20px;
    font-family: "Montserrat-Bold";
    color: #ffffff;
}
.short-line {
    width: 38px;
    height: 6px;
    margin-top: 10px;
    background-color: #ffffff;
}
.lockup-content {
    margin-top: 60px;
    width: 90%;
    margin:0  auto;
    .lockup {
        color: #ffffff;
        margin-top: 90px;
        display: flex;
        flex-direction: column;
        .lockup-title {
            font-family: Montserrat-SemiBold, Montserrat;
            font-size: 16px;
        }
        .input-wrapper {
            margin-top: 16px;
            width: 100%;
            margin: 20px auto;
            height: 60px;
            border-radius: 10px;
            background-color: #ffffff;
            display: flex;
            padding: 10px 0;
            color: #000000;
            align-items: center;
            .input {
                flex: 1;
                font-size: 18px;
                      text-indent: 20px;
                font-family: Montserrat-SemiBold, Montserrat;
            }
            .unit {
                font-size: 18px;
                font-family: Montserrat-SemiBold, Montserrat;
            }
        }
        .desc {
            margin-top: 4px;
            line-height: 1.5;
            font-size: 15px;
            font-family: Montserrat-SemiBold, Montserrat;
        }
        .desc-1 {
            margin-top: 20px;
        }

        .btn {
            cursor: pointer;
            border-radius: 30px;
            font-family: Montserrat-SemiBold, Montserrat;
            font-size: 18px;
            overflow: hidden;
            padding: 10px 0;
            width: 80%;
            margin: 30px auto;
            background: transparent;

            &.active {
                background: linear-gradient(to right, #ba45c8, #2b6bd2);
                font-weight: 600;
            }
            &:hover {
                background: linear-gradient(to right, #ba45c8, #2b6bd2);
                font-weight: 600;
            }
            &.btn-1 {
                margin-top: 80px;
            }
            &.btn-2 {
                margin-top: 0;
            }
        }
    }
}
</style>
