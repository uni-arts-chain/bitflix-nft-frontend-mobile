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
            <div class="transfer">
                <div class="close">
                    <img src="../../assets/images/close.png" alt="">
                </div>
                <input
                        class="dialog-input"
                        placeholder="Please enter address"
                />
                <div class="btn">
                    TRANSFER
                </div>
            </div>
            <el-dialog
                custom-class="custom-dialog"
                title
                :visible.sync="dialogVisible"
                width="35%"
                top="35vh"
            >
                <input
                    class="dialog-input"
                    placeholder="Please enter address"
                />
                <span slot="footer" class="dialog-footer">
                    <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
                    <div class="dialog-btn" @click="dialogVisible = false">
                        TRANSFER
                    </div>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import Mp4 from "@/assets/video/banner-mp4.mp4";
import { Dialog } from "element-ui";

export default {
    name: "MarketplaceDetail",
    components: {
        [Dialog.name]: Dialog,
    },
    data() {
        return {
            showDetails: true,
            showHistorys: true,
            videoUrl: Mp4,
            isMuted: true,
            dialogVisible: false,
        };
    },
    methods: {
        goback() {
            // this.$router.push("/");
            history.go(-1);
        },
        toogleDetails() {
            this.showDetails = !this.showDetails;
        },
        transfer() {
            this.dialogVisible = true;
        },
        showImage() {
            if (this.$refs.video) {
                this.$refs.video.requestFullscreen();
            }
        },
    },
};
</script>

<style lang="scss">
.custom-dialog {
    background-color: #14284d;
    .el-dialog__headerbtn {
        top: 10px;
        right: 10px;
    }
    .el-dialog__close {
        font-size: 20px;
        // font-weight: bolder;
        color: #fff;
    }
    .el-dialog__headerbtn:focus .el-dialog__close,
    .el-dialog__headerbtn:hover .el-dialog__close {
        color: #fff;
        font-weight: bolder;
    }
    .el-dialog__body {
        display: flex;
        justify-content: center;
    }
    .dialog-input {
        color: #ffffff;
        width: 500px;
        display: inline-block;
        margin: auto;
        border: 2px solid #818394;
        background-color: transparent;
        padding: 16px;
        font-size: 18px;
        font-family: "Montserrat-Bold";
    }
    .dialog-btn {
        margin: 40px auto 20px;
        text-align: center;
        color: #ffffff;
        width: 265px;
        background-color: #d43ed5;
        padding: 16px;
        font-size: 18px;
        font-family: "Montserrat-Bold";
    }
}
</style>

<style lang="scss" scoped>
.back-btn {
    cursor: pointer;
    font-size: 17px;
    font-family: Adobe Heiti Std, Adobe Heiti Std-R;
    // font-weight: R;
    color: #ffffff;
}
#marketplaceVideo {
    /* 全屏按钮 */
    // &::-webkit-media-controls-fullscreen-button {
    //     display: none;
    // }
    /* 播放按钮 */
    // &::-webkit-media-controls-play-button {
    //     display: none;
    // }
    /* 进度条 */
    &::-webkit-media-controls-timeline {
        display: none;
    }
    /* 观看的当前时间 */
    &::-webkit-media-controls-current-time-display {
        display: none;
    }
    /* 剩余时间 */
    &::-webkit-media-controls-time-remaining-display {
        display: none;
    }
    /* 音量按钮 */
    // &::-webkit-media-controls-mute-button {
    //     display: none;
    // }
    // &::-webkit-media-controls-toggle-closed-captions-button {
    //     display: none;
    // }
    /* 音量的控制条 */
    // &::-webkit-media-controls-volume-slider {
    //     display: none;
    // }
    /* 所有控件 */
    // &::-webkit-media-controls-enclosure {
    //     display: none;
    // }
}
.detail-page {
    width:90%;
    margin: 60px auto;
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
    .transfer{
        background-color: #14284D;
        width:100%;
        padding: 30px 5%;
        margin-top: 30px;
        .close{
            text-align: right;
            margin-bottom: 20px;
        }
        input{
            color: #ffffff;
            width: 100%;
            display: inline-block;
            margin: 0;
            text-indent: 10px;
            border: 2px solid #818394;
            background-color: transparent;
            padding: 10px 0;
            font-size: 14px;
            font-family: "Montserrat-Bold";
        }
        .btn{
            background-color: #D53ED5;
            width:60%;
            margin: 30px auto;
            color:white;
            text-align: center;
            padding: 10px 0;
            font-family: "Montserrat-Bold";
        }
    }
</style>
