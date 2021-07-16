<template>
    <div class="mynft-page">
        <div class="list-content">
            <div class="list-title-con">
                <BaseTitle>MY NFT</BaseTitle>
                <div class="display-name">yin**ang@amazon.com</div>
            </div>

            <div class="card-cate-group">
               <div class="card-cate-item" @click="goDetail" >
                <ActionMovie
                    title="STAR NFT"
                    :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                    :coinUrl="`${require('@/assets/images/cate-coin1.png')}`"
                />
                <div class="text"> 
<p class="p1">KHEM BIRCH</p>
<p class="des">IntroductionIntroductionIntr Introduction......</p>
<p class="p2">1200 USDT</p>
                </div>
            </div>
                <div class="card-cate-item">
                    <ActionMovie
                            title="STAR NFT"
                            :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                            :coinUrl="`${require('@/assets/images/cate-coin1.png')}`"
                    />
                    <div class="text">
                        <p class="p1">KHEM BIRCH</p>
                        <p class="des">IntroductionIntroductionIntr Introduction......</p>
                        <p class="p2">1200 USDT</p>
                    </div>
                </div>
                <div class="card-cate-item">
                    <ActionMovie
                            title="STAR NFT"
                            :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                            :coinUrl="`${require('@/assets/images/cate-coin1.png')}`"
                    />
                    <div class="text">
                        <p class="p1">KHEM BIRCH</p>
                        <p class="des">IntroductionIntroductionIntr Introduction......</p>
                        <p class="p2">1200 USDT</p>
                    </div>
                </div>
                <div class="card-cate-item">
                    <ActionMovie
                            title="STAR NFT"
                            :coverUrl="`${require('@/assets/images/action-cover@2x.png')}`"
                            :coinUrl="`${require('@/assets/images/cate-coin1.png')}`"
                    />
                    <div class="text">
                        <p class="p1">KHEM BIRCH</p>
                        <p class="des">IntroductionIntroductionIntr Introduction......</p>
                        <p class="p2">1200 USDT</p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
import BaseTitle from "@/components/BaseTitle";
import ActionMovie from "@/components/ActionMovie";
export default {
    name: "mynft",
    data(){
        return{
list:[
    {
        img:require('../../assets/images/action-cover@2x.png')
    }
]
        }
    },
    components: {
        BaseTitle,
        ActionMovie
    },
    methods: {
        goDetail() {
            this.$router.push("/nftdetail");
        },
    },
};
</script>

<style lang="scss" scoped>
.mynft-page {
    margin-top: 30px;
    width:100%;
}
.list-content {
    margin-top: 60px;
    width: 95%;
    margin:0 auto;
    .list-title-con {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .display-name {
            font-size: 16px;
            font-family: Montserrat-Medium, Montserrat;
            color: #c9caca;
        }
    }
    .list {
        margin-top: 77px;
    }
}
.card-cate-group {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    flex-wrap: wrap;
    width:95%;
    margin: 0 auto;
}
.card-cate-item {
    width: 48%;
    padding: 10px 0;
    display: flex;
    height: 350px;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    .text{
        width:100%;
        transform: scale(.8);
        overflow-wrap: anywhere;
        p{
            color:white;
                 font-family: "Montserrat-Medium";
        }
        .p1{
            font-family:"Montserrat-Bold";
        }
        .des{
            margin: 20px 0;
        }
    }
    .action-movie {
        width: 100%;
        height: 100%;
        font-size: 19px;
        margin-top: 23px;
        margin-bottom: 30px;
    }
}
</style>
