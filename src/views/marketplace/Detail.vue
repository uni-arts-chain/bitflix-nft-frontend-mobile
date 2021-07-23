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
            <AdaptiveView width="100%" height="100%" :nft="info" />
          </div>
          <!--                    <div class="zoom-btn" @click="showImage">-->
          <!--                        <img src="@/assets/images/marketplace/zoom@2x.png" />-->
          <!--                    </div>-->
        </div>
        <div class="desc-con">
          <div class="title">
            {{ info.name }}
          </div>
          <!-- <div class="sub-title" style="margin-top: 8px">To</div>
                    <div class="sub-title">be added</div>
                    <div class="sub-title"># /35000+</div>-->
          <div class="info-con">
            <div>
              <div class="label">Transaction</div>
              <div class="label">number</div>
            </div>
            <div>
              <div class="label2">{{ info.trades_count }}</div>
              <div class="label" style="text-align: center">
                Time
              </div>
            </div>
          </div>
          <div class="price-con">
            {{ info.price | priceFixed }}
            <span class="price-unit">{{ info.currency_code ? info.currency_code.toUpperCase() : "USDT" }}</span>
            <!-- <div class="price-desc">Top Sale</div> -->
          </div>
          <div class="buy-btn" :disabled="isOwner || !isSelling" v-loading="isPurchasing || isApproving" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.7)" @click="buy">
            {{ isOwner ? "MINE" : isSelling ? "BUY" : "Unpurchasable".toUpperCase() }}
          </div>
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
            <div class="hash-text">NFT HASH : {{ info.tx_hash }}</div>
            <div class="hash-icon-con" @click="copy(info.tx_hash)">
              <img class="hash-icon" src="@/assets/images/marketplace/hash@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="expand-con">
        <div class="expand">
          <div class="expand-text">COLLECTIBLE DETAILS</div>
          <img class="expand-icon" @click="toogleDetails" src="@/assets/images/marketplace/up-icon@2x.png" />
        </div>
        <transition name="fade">
          <div v-show="showDetails">
            <div class="detail-desc">
              {{ info.details }}
            </div>
            <!-- <div class="base-set"></div> -->
          </div>
        </transition>
      </div>
      <div class="more-moments">
        <div class="more-moments-title">MORE MOMENTS</div>
        <div class="card-cate-group">
          <div class="card-cate-item" v-for="(v, i) in momentList" :key="i" @click="goNFT(v.id)">
            <ActionMovie :title="v.art_type.toUpperCase() + ' NFT'" :coverUrl="v.img_main_file1.url" :coinUrl="getNFTCoinLogo(v)" />
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
  import AdaptiveView from "@/components/AdaptiveView";
  import config from "@/config/network";
  import ERC20 from "@/plugins/contracts/Erc20";
  import MarketPlace from "@/plugins/contracts/MarketPlace";
  import { BigNumber } from "bignumber.js";
  import STAR_LOGO from "@/assets/images/cate-coin1.png";
  import MOVIE_LOGO from "@/assets/images/cate-coin2.png";
  import ACTIVIST_LOGO from "@/assets/images/cate-coin3.png";
  import MUSIC_LOGO from "@/assets/images/cate-coin4.png";
  import TROHPY_LOGO from "@/assets/images/cate-coin5.png";
  import Resell from "@/plugins/contracts/Resell";

  export default {
    name: "MarketplaceDetail",
    components: {
      ActionMovie,
      AdaptiveView,
    },
    data() {
      return {
        showDetails: true,
        showHistorys: true,
        isMuted: true,
        id: this.$route.params.id,
        isLoading: false,
        isMomentLoading: false,
        info: {
          property_url: "",
        },
        momentList: [],
        ERC20: {},
        MarketPlace: {},
        isPurchasing: false,
        isApproving: false,
        allowance: new BigNumber(0),
      };
    },
    mounted() {
      if (this.connectedAccount) {
        this.init();
      }
    },
    watch: {
      isLogin(value) {
        if (value) {
          this.requestSimilarData();
        }
      },
      connectedAccount(value) {
        if (value) {
          this.init();
        }
      },
    },
    computed: {
      isLogin() {
        return this.$store.state.user.info.token;
      },
      connectedAccount() {
        return this.$wallet.connectedAccount;
      },
      isApproved() {
        return new BigNumber(this.allowance).gte(9999999);
      },
      isOwner() {
        return this.info.is_owner;
      },
      isSelling() {
        return this.info.offer_state == "selling";
      },
    },
    methods: {
      goback() {
        history.go(-1);
      },
      toogleDetails() {
        this.showDetails = !this.showDetails;
      },
      toogleHistorys() {
        this.showHistorys = !this.showHistorys;
      },
      goNFT(id) {
        this.$router.push("/marketplaceDetail/" + id);
      },
      copy(str) {
        this.$copy(str);
        this.$toast.success("Copied");
      },
      requestSimilarData() {
        this.isMomentLoading = true;
        this.$http
          .userGetArtSimilar({})
          .then((res) => {
            this.isMomentLoading = false;
            this.momentList = res.list;
          })
          .catch((err) => {
            this.isMomentLoading = false;
            console.log(err);
            this.$toast.fail(err.head && err.head.msg);
          });
      },
      getNFTCoinLogo(item) {
        let coin = "";
        switch (item.art_type) {
          case "movie":
            coin = MOVIE_LOGO;
            break;
          case "star":
            coin = STAR_LOGO;
            break;
          case "activist":
            coin = ACTIVIST_LOGO;
            break;
          case "music":
            coin = MUSIC_LOGO;
            break;
          case "trohpy":
            coin = TROHPY_LOGO;
            break;
        }
        return coin;
      },
      async init() {
        this.isLoading = true;
        this.$http
          .globalGetArtInfo(
            {},
            {
              id: this.id,
            }
          )
          .then(async (res) => {
            this.isLoading = false;
            this.info = res;

            let token = config.tokens.find((v) => v.symbol.toLowerCase() == this.info.currency_code.toLowerCase());

            this.ERC20 = new ERC20(token.address, token.symbol, token.decimals);

            this.allowance = (await this.ERC20.allowance(this.connectedAccount, config.contracts.MarketPlace)).toNumber();
            this.MarketPlace = new MarketPlace();
          })
          .catch((err) => {
            this.isLoading = false;
            console.log(err);
            this.$toast.fail(err.head && err.head.msg);
          });
        if (this.isLogin) {
          this.requestSimilarData();
        }
      },
      async buy() {
        if (this.isOwner || !this.isSelling || this.isApproving || this.isPurchasing) return;
        if (!this.connectedAccount || !this.isLogin) {
          this.$router.push("/login?back=" + encodeURIComponent(this.$route.path));
          return;
        }
        if (!this.isApproved || this.$route.query.type === "resell") {
          await this.approve();
        } else {
          await this.buyItem();
        }
      },
      async buyItem() {
        let mk;
        // 取marketplace合约
        if (this.info.market_level === "primary") mk = this.MarketPlace;
        // 取OtcMarketPlace合约
        else if (this.info.market_level === "otc") mk = Resell;
        else return this.$notify.error("contract is null");

        this.isPurchasing = true;
        console.log("allowance: ", this.allowance);
        console.log("account: ", this.connectedAccount);
        console.log("Offer ID: ", this.info.offer_id);
        mk.buyItem(this.connectedAccount, this.info.offer_id, (err, txHash) => {
          if (err) {
            console.log(err);
          }
          if (txHash) {
            console.log(txHash);
            this.isPurchasing = false;
            this.$toast.success(txHash);
            this.init();
          }
          this.isApproving = false;
        })
          .then((receipt) => {
            console.log("receipt: ", receipt);
          })
          .catch((err) => {
            console.log(err);
            this.isPurchasing = false;
            this.$toast.fail((err.head && err.head.msg) || (err.message && err.message));
          });
      },
      async approve() {
        this.isApproving = true;
        let contract;
        // 取marketplace合约
        if (this.info.market_level === "primary") contract = config.contracts.MarketPlace;
        // 取OtcMarketPlace合约
        else if (this.info.market_level === "otc") contract = config.contracts.OtcMarketPlace;
        else return this.$notify.error("contract is null");
        console.log(this.connectedAccount, contract);
        this.ERC20.approveMax(this.connectedAccount, contract, async (err, txHash) => {
          if (err) {
            console.log(err);
          }
          if (txHash) {
            console.log(txHash);
          }
          this.isApproving = false;
        })
          .then(async (receipt) => {
            console.log("receipt: ", receipt);
            this.allowance = (await this.ERC20.allowance(this.connectedAccount, contract)).toNumber();
            this.buyItem();
          })
          .catch((err) => {
            console.log(err);
            this.isApproving = false;
            this.$toast.fail((err.head && err.head.msg) || err.message || (err.data && err.data.message));
          });
      },
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
    width: 90%;
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
    margin: 0 auto;
    .detail-container {
      width: 100%;
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
        video {
          width: 100%;
          height: 100%;
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
      width: 50%;
      font-size: 20px;
      font-family: Montserrat-ExtraBold, Montserrat;
      font-weight: bolder;
      color: #ffffff;
      position: relative;
      word-break: break-word;
      padding-left: 15px;
      margin-bottom: 80px;
      &::before {
        height: 100px;
        width: 2px;
        background-color: #c9caca;
        position: absolute;
        left: 0;
        top: 0;
        content: "";
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
      margin-top: 40px;
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
    .buy-btn[disabled] {
      background: #666;
      opacity: 0.7;
      cursor: not-allowed;
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
    width: 100%;
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
    .text {
      width: 100%;
      transform: scale(0.8);
      overflow-wrap: anywhere;
      p {
        color: white;
        font-family: "Montserrat-Medium";
      }
      .p1 {
        font-family: "Montserrat-Bold";
      }
      .des {
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
