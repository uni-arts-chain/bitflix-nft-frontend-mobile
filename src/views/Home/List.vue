
<template>
    <div
        class="list"
    >
        <div class="container">
            <div class="item" @click="goNFT(item.id)" v-for="(item, index) in listData" :key="index" >
                <img class="top" src="@/assets/images/border-arrow-top.png" />
                <img class="bottom" src="@/assets/images/border-arrow-bottom.png" />
                <div class="cover">
                    <AdaptiveView :nft="item" class="coverImg" :isResponsive="true" :isPreview="true" />
                </div>
                <div class="title">{{item.title }}</div>
                <div class="common-name webkit-ellipsis-2">
                    {{item.des}}
                    </div>
                <div class="price">
                    {{item.st}}
                </div>
            </div>
            <div class="item" >
                <img class="top" src="@/assets/images/border-arrow-top.png" />
                <img class="bottom" src="@/assets/images/border-arrow-bottom.png" />
                <div class="more" @click="goMarket">MORE ></div>
            </div>
        </div>
    </div>
</template>
<script>
import AdaptiveView from "@/components/AdaptiveView";
export default {
    name: "list",
    components: {
        AdaptiveView,
    },
    data() {
        return {
            list: []
        };
    },
    computed: {
        listData() {
            return this.list.filter((v, i) => i < 7);
        },
    },
    mounted() {
        this.requestData();
    },
    methods: {
        requestData() {
            this.isLoading = true;
            this.$http
                .globalGetPopArts({})
                .then((res) => {
                    this.list = res;
                    this.isLoading = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.isLoading = false;
                    this.$toast.fail(err.head && err.head.msg);
                });
        },
        goNFT(id) {
            this.$router.push("/marketplaceDetail/" + id);
        },
        goMarket() {
            this.$router.push("/marketplaceSearch");
        },
    }
};
</script>
<style lang="scss" scoped>
.list {
    min-height: 400px;
    background-image: url(~@/assets/images/home-bg2.png);
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 60px;
}
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width:95%;
    margin: 0 auto;
}
.item:nth-child(4n) {
    margin-right: 0;
}
.item {
    // height: 383px;
    width: 48%;
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
    .top {
        position: absolute;
        top: 0;
        left: 0;
        width: 25px;
        height: 25px;
    }
    .bottom {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 25px;
        height: 25px;
    }
    .cover {
        width: 100%;
        height: 175px;
        background-image: url(~@/assets/images/img-bg.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-top: 12px;
        margin-left: 16px;
        padding-top: 8px;
        padding-right: 20px;
        padding-bottom: 8px;
        display: flex;
        align-items:center;
    }
    .coverImg{
        width:100%;
        display: block;
        object-fit: contain;
    }
    .title {
        padding-left: 16px;
        font-size: 18px;
        font-family: "Montserrat-Bold";
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        white-space: nowrap;
        color: #ffffff;
        line-height: 33px;
        margin-bottom: 8px;
    }
    .set-name {
        padding-left: 16px;
        font-size: 14px;
        font-family: "Montserrat-Regular";
        font-weight: 800;
        text-align: left;
        color: #ffffff;
        line-height: 14px;
    }
    .common-name {
        padding-left: 16px;
        font-size: 14px;
        font-family: "Montserrat-Regular";
        font-weight: 800;
        text-align: left;
        color: #a0a2a5;
        line-height: 25px;
        min-height: 25px;
        overflow: hidden;
        display: block;
        width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 14px;
        // display: none;
    }
    .price {
        padding-left: 16px;
        font-size: 14px;
        font-family: "Montserrat-Regular";
        font-weight: 800;
        text-align: left;
        color: #ffffff;
        line-height: 25px;
    }
    .more {
        height: 100%;
        font-size: 18px;
        font-family: "Montserrat-Bold";
        text-align: center;
        color: #ffffff;
        line-height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
}
</style>
