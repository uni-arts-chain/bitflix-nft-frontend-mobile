
<template>
    <div class="cate">
        <div class="desc-img">
<img src="../../assets/images/select1.png" alt="">
        </div>
        <div class="card-cate-group container">
            <div class="card-cate-item" @click="goMarketplaceDetail('star')">
                <ActionMovie
                    title="STAR NFT"
                    :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin1.png')}`"
                />
                <span>STAR</span>
            </div>
            <div class="card-cate-item" @click="goMarketplaceDetail('movie')">
                <ActionMovie
                    title="MOVIE NFT"
                    :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin2.png')}`"
                />
                <span>MOVIE</span>
            </div>
            <div class="card-cate-item" @click="goMarketplaceDetail('music')">
                <ActionMovie
                    title="MUISC NFT"
                    :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin4.png')}`"
                />
                <span>MUISC</span>
            </div>
            <div class="card-cate-item" @click="goMarketplaceDetail('activist')">
                <ActionMovie
                    title="ACTIVIST NFT"
                    :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin3.png')}`"
                />
                <span>ACTIVIST</span>
            </div>
            <div class="card-cate-item" @click="goMarketplaceDetail('trophy')">
                <ActionMovie
                    title="TROPHY NFT"
                    :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin5.png')}`"
                />
                <span>TROPHY</span>
            </div>
        </div>
    </div>
</template>
<script>
import ActionMovie from "@/components/ActionMovie";
export default {
    name: "cate",
    components: {
        ActionMovie,
    },
    data() {
        return {};
    },
    methods: {
        goPacks() {
            this.$router.push("/packs");
        },
        goMarketplace() {
            this.$router.push("/marketplace");
        },
        goLockUp() {
            this.$router.push("/lockup");
        },
        goMarketplaceDetail(artType) {
            this.$router.push("/marketplaceSearch?art_type=" + artType);
        },
    },
};
</script>
<style lang="scss" scoped>
.cate {
    background-image: url(~@/assets/images/home-bg1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // min-height: 1000px;
}
.cate-top {
    margin: 0 auto;
    width: 1088px;
    height: 361px;
    background-image: url(~@/assets/images/cate.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: none;
    align-items: center;
    justify-content: space-between;
}
.cate-item {
    cursor: pointer;
    width: 36%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    > div {
        font-size: 17px;
        font-family: "Montserrat-Bold";
        text-align: left;
        margin-bottom: 10px;
    }
    .item-title2 {
        font-size: 36px;
        margin-bottom: 28px;
    }
    > img {
        width: 78px;
    }
}
.desc-title {
    margin-bottom: 52px;
    text {
        font-size: 29px;
        font-family: "Montserrat-Bold";
        text-align: left;
        color: #ffffff;
        line-height: 51px;
        letter-spacing: 3px;
    }
}
.desc-img{
    width:100%;
    margin: 30px auto;
    img{
        width:80%;
        display: block;
        margin: 0 auto;
        object-fit: contain;
    }
}
.card-cate-group {
    height: 328px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
}
.card-cate-group.container {
   width:100%;
   overflow-x: scroll;
   overflow-y: hidden;
}
.card-cate-item {
    width: 300px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    background-image: url(~@/assets/images/card-bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top: 23px;
    > span {
        font-size: 20px;
        font-family: "Montserrat-Medium";
        text-align: left;
        color: #ffffff;
        line-height: 61px;
        letter-spacing: 0px;
        margin-bottom: 15px;
    }
    .action-movie {
        width: 170px;
        height: 100%;
        font-size: 19px;
        margin-top: 23px;
        margin-bottom: 30px;
    }
}
</style>
