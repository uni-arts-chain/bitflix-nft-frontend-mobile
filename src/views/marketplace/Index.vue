<template>
    <div class="marketplace-page">
        <div class="top-container">
            <div class="top-title">EXPLORE MARKETPLACE</div>
            <div class="search-container">
                <input
                    class="search-input"
                    placeholder="Search by Actor, Director, Movie title and genre, and NFT type"
                    v-model="searchVal"
                />
                <div class="v-br"></div>
                <div class="search-icon-con" >
                    <img
                        class="search-icon"
                        width="16px"
                        src="@/assets/images/marketplace/search.png"
                    />
                </div>
            </div>
        </div>

        <div class="mList">
            <div class="mt">
                <BaseTitle>SEARCH BY MOVIE AND GENRE</BaseTitle>
            </div>
            <div class="allItems">
                <div class="item" v-for="(item,index) in mList" :key="index" @click="goDetail">
                    <div class="pic">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="text">
                         <p class="p1">{{item.title}}</p>
                        <p class="p2">{{item.t2}}</p>
                        <p class="p3">{{item.price}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="actor">
            <div class="at">
                <BaseTitle>SEARCH BY ACTOR AND DIRECTOR</BaseTitle>
            </div>
            <div class="allItems">
                   <div  class="item" v-for="(item,index) in aList" :key="index" @click="goDetail">
                       <img :src="item.img" alt="">
                       <div class="text">
                           <BaseTitle ft="12" height="3">{{item.name}}</BaseTitle>
                       </div>
                   </div>
            </div>
        </div>


        <div class="latest-container">
            <div class="latest-content">
                <div class="latest-title-con">
                    <BaseTitle>SEARCH BY NFT TYPE</BaseTitle>
                </div>
                <div class="card-cate-group">
                    <div class="card-cate-item" >
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
            <div class="latest-content">
                <div class="latest-title-con">
                    <BaseTitle>LATEST LASTINGS</BaseTitle>
                </div>
                <div class="card-cate-group">
                    <div class="card-cate-item" >
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
        <div style="position: relative; height: 100px;margin-bottom: 30px;width:100%;">
            <img class="line3" src="@/assets/images/packs-line3@2x.png" />
        </div>
    </div>
</template>

<script>
import BaseTitle from "@/components/BaseTitle";
import ActionMovie from "@/components/ActionMovie";

export default {
    name: "Marketplace",
    components: {
        BaseTitle,
        ActionMovie
    },
    data() {
        return {
            searchVal: "",
            isMovieLoading: false,
            isActorLoading: false,
            isTypeLoading: false,
            isLastLoading: false,
            nftList: [],
            latestList: [],
            aList:[
                {
                    img:require('../../assets/images/people.png'),
                    name:'SNFT_BAS RUTTEN 1'
                },
                {
                    img:require('../../assets/images/people.png'),
                    name:'SNFT_BAS RUTTEN 1'
                },
                {
                    img:require('../../assets/images/people.png'),
                    name:'SNFT_BAS RUTTEN 1'
                },
                {
                    img:require('../../assets/images/people.png'),
                    name:'SNFT_BAS RUTTEN 1'
                }
            ],
            mList:[
                {
                    img:require('@/assets/images/m.png'),
                    title:'NFT AMBASSADOR_MICHAEL BISPING',
                    t2:'Contains 5 Moments',
                    price:' Price: 1000.0 USDT '
                },
                {
                    img:require('@/assets/images/m.png'),
                    title:'NFT AMBASSADOR_MICHAEL BISPING',
                    t2:'Contains 5 Moments',
                    price:' Price: 1000.0 USDT '
                },
                {
                    img:require('@/assets/images/m.png'),
                    title:'NFT AMBASSADOR_MICHAEL BISPING',
                    t2:'Contains 5 Moments',
                    price:' Price: 1000.0 USDT '
                }
            ]
        };
    },
    methods:{
        goDetail(){
            this.$router.push("/marketplaceDetail/1");
        }
    }
};
</script>

<style lang="scss" scoped>
.line {
    pointer-events: none;
    position: absolute;
    // bottom: -202px;
    bottom: 85px;
    width: 100%;
    left: 0;
    z-index: 0;
}
.line2 {
    pointer-events: none;
    position: absolute;
    // bottom: -540px;
    bottom: -150px;
    width: 100%;
    left: 0;
    z-index: 0;
}
.line3 {
    width:100%;
    display: block;
    object-fit: cover;
}

.top-container {
    height: 283px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .top-title {
        font-size: 20px;
        font-family: Montserrat-ExtraBold, Montserrat-Bold, Montserrat;
        // font-weight: ExtraBold;
        font-weight: bolder;
        color: #ffffff;
    }
    .search-container {
        width: 90%;
        margin: 30px auto;
        height: 39px;
        border: 2px solid #ffffff;
        display: flex;
        align-items: center;
        .search-input {
            flex: 1;
            background-color: transparent;
            padding-left: 20px;
            color: #ffffff;
            height: 100%;
            font-family: Montserrat-SemiBold, Montserra;
        }
        .v-br {
            width: 2px;
            height: 22px;
            background-color: #ffffff;
        }
        .search-icon-con {
            cursor: pointer;
            width: 33px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .search-icon {
                max-width: 100%;
            }
        }
    }
}
.mList{
    background: #142336;
    width:100%;
    padding: 40px 0;
    .mt{
        width:90%;
        margin: 0 auto;
    }
    .allItems{
        width:90%;
        margin: 0 auto;
        .item{
            width:100%;
            background: url("/@/assets/images/b.png") no-repeat;
            background-size: cover;
            padding: 10px 2.5%;
            margin-top: 20px;
            .pic{
                img{
                    width:100%;
                    display: block;
                    object-fit: cover;
                }
            }
            .text{
                text-align: center;
                width:90%;
                margin: 10px auto;
                .p1,.p3{
                    color:white;
                    font-family:'Montserrat-Bold';
                    font-size: 14px;
                }
                .p2{
                    color:#B2B3B7;
                    font-family: "Montserrat-Regular";
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 10px;
                    &::before{
                        content:'';
                        width:50%;
                        background-color: #B2B3B7;
                        display: block;
                        height:2px;
                        margin: 20px 0;
                    }
                }
            }
        }
    }
}
.actor{
    background: #060c17;
    width:100%;
    padding: 40px 0;
    .at{
        width:90%;
        margin: 0 auto;
    }
    .allItems{
        width:90%;
        margin: 30px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item{
            width:48%;
            position: relative;
            margin-bottom:10px;
            img{
                width:100%;
                display: block;
                object-fit: cover;
                border-radius: 10px;
            }
            .text{
                position: absolute;
                left:5%;
                bottom:5%;
                width:90%;
            }
        }
    }
}

.latest-container {
    padding-top: 83px;
    background: #0d1c33;
    width:90%;
    margin: 0 auto;
    .latest-content {
        width: 100%;
        margin: auto;
        margin-bottom: 40px;
        .latest-title-con {
            display: flex;
            justify-content: space-between;
            .more-btn {
                height: 28px;
                cursor: pointer;
                border-bottom: 2px solid #ffffff;
                font-size: 19px;
                font-family: Montserrat-Medium, Montserrat;
                // font-weight: 500;
                color: #ffffff;
            }
        }
    }
    .latest-content:last-child{
        margin-bottom: 0;
    }
}
.card-cate-group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width:100%;
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
