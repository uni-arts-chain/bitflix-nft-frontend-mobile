<template>
    <div class="detail-page">
        <div class="detail">
            <span class="back-btn" @click="goback">&lt; BACK</span>
            <div class="detail-container">
                <div class="poster-con">
                    <!-- <div class="poster-time">
                        <span class="time">MAR 15 2021</span>
                    </div>-->
                    <div class="poster-image">
                        <!-- <img src="@/assets/images/reward/collect1@2x.png" /> -->
                        <div class="video-con">
                            <video
                                    id="marketplaceVideo"
                                    ref="video"
                                    width="442"
                                    height="296"
                                    :src="videoUrl"
                                    poster="@/assets/images/reward/collect1@2x.png"
                                    autoplay
                                    muted
                                    controls
                                    controlslist="nodownload"
                            ></video>
                            <!-- <div class="mute-control" @click="controlMute">开</div> -->
                        </div>
                    </div>
                    <!--                    <div class="zoom-btn" @click="showImage">-->
                    <!--                        <img src="@/assets/images/marketplace/zoom@2x.png" />-->
                    <!--                    </div>-->
                </div>
                <div class="desc-con">
                    <div class="title">GORDON<br>
                        HAYWARD</div>
                    <!-- <div class="sub-title" style="margin-top: 8px">To</div>
                    <div class="sub-title">be added</div>
                    <div class="sub-title"># /35000+</div>-->
                    <div class="info-con">
                        <div>
                            <div class="label">Transzction</div>
                            <div class="label">number</div>
                        </div>
                        <div>
                            <div class="label2">2076</div>
                            <div class="label" style="text-align: center">
                                Time
                            </div>
                        </div>
                    </div>
                    <div class="price-con">
                        199.00
                        <span class="price-unit">USDT</span>
                        <!-- <div class="price-desc">Top Sale</div> -->
                    </div>
                    <div class="buy-btn" @click="transfer">BUY</div>
                    <!-- <div class="share-con">
                        <div class="share-btn">BUYING AVAILABLE</div>
                        <div class="share-icon-con">
                            <img
                                class="search-icon"
                                src="@/assets/images/marketplace/share@2x.png"
                            />
                        </div>
                    </div>-->
                    <div class="hash-con">
                        <div class="hash-text">
                            NFT HASH :
                            fe48302kfh4indjrk3jufqp2020383nkdh20383nkdh20383nkdh20383nkdh
                        </div>
                        <div class="hash-icon-con">
                            <img
                                    class="hash-icon"
                                    src="@/assets/images/marketplace/hash@2x.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="expand-con">
                <div class="expand">
                    <div class="expand-text">COLLECTIBLE DETAILS</div>
                    <img
                            class="expand-icon"
                            @click="toogleDetails"
                            src="@/assets/images/marketplace/up-icon@2x.png"
                    />
                </div>
                <transition name="fade">
                    <div v-show="showDetails">
                        <div class="detail-desc">
                            Contested or not, Gordon Hayward is going to take
                            the ball toContested or not, Contested or not,
                            Gordon Hayward is going to take the ball to Gordon
                            Hayward going to take is going to take the ball to
                            going to take is going to take the ball to
                        </div>
                        <!-- <div class="base-set"></div> -->
                    </div>
                </transition>
            </div>
            <div class="more-moments">
                <div class="more-moments-title">MORE MOMENTS</div>
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
    </div>
</template>

<script>
import ActionMovie from "@/components/ActionMovie";
import Mp4 from "@/assets/video/banner-mp4.mp4";

export default {
    name: "MarketplaceDetail",
    components: {
        ActionMovie,
    },
    data() {
        return {
            showDetails: true,
            showHistorys: true,
            videoUrl: Mp4,
            isMuted: true,
            id: this.$route.params.id,
            isLoading: false,
            isMomentLoading: false,
            info: {
                property_url: "",
            },
            momentList: [],
        };
    },
};
</script>

<style lang="scss" scoped>
    .back-btn {
        cursor: pointer;
        font-size: 17px;
        font-family: Adobe Heiti Std, Adobe Heiti Std-R;
        // font-weight: R;
        color: #ffffff;
    }
    .detail-page {
        width:90%;
        margin: 30px auto;
        .fade-enter-active,
        .fade-leave-active {
            transition: opacity 0.5s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
        }
    }
    .detail {
        width: 100%;
        margin:0 auto;
        .detail-container {
            width:100%;
        }
    }
    .poster-con {
        width: 100%;
        display: flex;
        flex-direction: column;
        .poster-time {
            // width: 11px;
            font-size: 15px;
            font-family: Montserrat-SemiBold, Montserra;
            // font-weight: SemiBold;
            color: #c9caca;
            line-height: 15px;
            letter-spacing: -1px;
            display: flex;
            justify-content: flex-end;
            .time {
                transform: rotateZ(-90deg) translateX(-50%) translateY(100%);
            }
        }
        .poster-image {
            width: 100%;
            height: 200px;
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            .video-con {
                position: relative;
                video{
                    width:100%;
                    height:100%;
                    object-fit: contain;
                }
                .mute-control {
                    position: absolute;
                    right: 10px;
                    bottom: 30px;
                    color: #ffffff;
                }
            }
        }
        .zoom-btn {
            cursor: pointer;
            margin-top: 100px;
            width: 23px;
            height: 23px;
            align-self: flex-end;
            margin-right: 50px;
            img {
                width: 23px;
                height: auto;
            }
        }
    }
    .v-br {
        height: 167px;
        width: 2px;
        background-color: #c9caca;
        align-self: flex-start;
    }
    .desc-con {
        width: 100%;
        align-self: flex-start;
        margin-top: 30px;
        .title {
            font-size: 20px;
            font-family: Montserrat-ExtraBold, Montserrat;
            font-weight: bolder;
            color: #ffffff;
            position: relative;
            padding-left: 15px;
            margin-bottom: 80px;
            &::before{
                height: 100px;
                width: 2px;
                background-color: #c9caca;
                position: absolute;
                left:0;
                top:0;
                content:'';
                display: block;
            }
        }
        .sub-title {
            font-size: 21px;
            font-family: Montserrat-Light, Montserrat;
            // font-weight: 300;
            color: #c9caca;
            line-height: 25px;
            letter-spacing: -1px;
        }
        .info-con {
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 15px;
            border-bottom: 2px solid #c9caca;
            .label {
                margin-top: 4px;
                font-size: 15px;
                font-family: Montserrat-Light, Montserrat;
                // font-weight: 300;
                color: #dcdddd;
                line-height: 15px;
                // letter-spacing: -1px;
            }
            .label2 {
                font-size: 21px;
                font-family: Montserrat-ExtraBold, Montserrat;
                // font-weight: ExtraBold;
                font-weight: bolder;
                color: #ffffff;
                line-height: 16px;
                letter-spacing: -1px;
            }
        }
        .price-con {
            margin-top:40px;
            font-size: 32px;
            // font-family: Montserrat-ExtraBold, Montserrat;
            font-family: Montserrat-Bold;
            // font-weight: ExtraBold;
            // font-weight: bolder;
            color: #ffffff;
            letter-spacing: -1px;
            .price-unit {
                font-size: 13px;
                font-family: Montserrat-Regular, Montserrat;
                font-weight: 400;
                color: #c9caca;
                position: relative;
                top: -4px;
            }
            .price-desc {
                margin-top: 2px;
                font-size: 14px;
                font-family: Montserrat-Light, Montserrat;
                // font-weight: 300;
                color: #dcdddd;
                line-height: 14px;
                letter-spacing: -1px;
            }
        }
        .buy-btn {
            cursor: pointer;
            margin-top: 30px;
            background: linear-gradient(to right, #ba45c8, #2b6bd2);
            line-height: 47px;
            font-size: 16px;
            // font-family: Montserrat-ExtraBold, Montserrat;
            font-family: Montserrat-Bold;
            font-weight: 700;
            text-align: center;
            color: #ffffff;
            letter-spacing: 1px;
        }

        .hash-con {
            margin-top: 19px;
            display: flex;
            align-items: center;
            .hash-text {
                flex: 1;
                font-size: 14px;
                font-family: Montserrat-Light, Montserrat;
                // font-weight: 300;
                color: #ffffff;
                line-height: 14px;
                letter-spacing: -1px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .hash-icon-con {
                cursor: pointer;
                width: 47px;
                height: 40px;
                margin-left: 12px;
                border: 2px solid #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                .hash-icon {
                    height: 23px;
                    width: auto;
                }
            }
        }
    }

    .expand-con {
        .expand {
            margin-top: 30px;
            height: 60px;
            background-color: #000000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 22px;
            padding-right: 25px;
            .expand-text {
                font-size: 20px;
                font-family: Montserrat-ExtraBold, Montserrat;
                // font-weight: ExtraBold;
                font-weight: bolder;
                color: #ffffff;
            }
            .expand-icon {
                cursor: pointer;
                width: 15px;
                // height: 16px;
            }
        }
        .detail-desc {
            margin-top: 24px;
            font-size: 14px;
            font-family: Montserrat-Regular, Montserrat;
            // font-weight: 400;
            color: #c9caca;
            line-height: 21px;
            // letter-spacing: -1px;
        }
    }

.more-moments {
    margin-top: 70px;
    .more-moments-title {
        font-size: 20px;
        font-family: Montserrat-Bold, Montserrat;
        // font-weight: 700;
        color: #ffffff;
        line-height: 26px;
    }
    .more-moments-list {
        margin-top: 80px;
    }
}
    .card-cate-group {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width:100%;
        margin: 20px auto 0 auto;
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
