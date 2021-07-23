<template>
  <div class="mynft-page">
    <div class="list-content">
      <div class="list-title-con">
        <BaseTitle>MY NFT</BaseTitle>
        <div class="display-name">{{ connectedAccount }}</div>
      </div>

      <ActionMovieList :is-approving="isApproving" @resellOrCancelItem="resellOrCancelItem" :item-id="itemId" :list="cardList" class="list" @onMovieClick="goDetail" />
    </div>
    <div v-if="isShow" class="dialog">
      <div class="close" @click="isShow = false">
        <i class="el-icon-close"></i>
      </div>
      <div class="nr">
        <div class="item">Sale price</div>
        <div class="item2">
          <input type="text" v-model="itemPrice">
          <p>USDT/Share</p>
        </div>
      </div>
      <div class="btn" @click="resellItem">Sell</div>
    </div>
  </div>
</template>

<script>
  import BaseTitle from "@/components/BaseTitle";
  import ActionMovieList from "@/components/ActionMovieList";
  import Resell from "@/plugins/contracts/Resell";
  import config from "@/config/network";
  import Erc721 from "@/plugins/contracts/Erc721";
  import { toBN } from "web3-utils";
  import BigNumber from "bignumber.js";

  export default {
    name: "mynft",
    components: {
      BaseTitle,
      ActionMovieList,

    },
    data: () => ({
      isLoading: false,
      isApproving: false,
      cardList: [],
      isShow:false,
      itemId:null,
      itemPrice:null,
      selectItem:null,
    }),
    computed: {
      connectedAccount() {
        return this.$wallet.connectedAccount;
      },
    },
    created() {
      this.requestCardData(1, 30);
    },
    methods: {
      goDetail() {
        this.$router.push("/nftdetail");
      },
      requestCardData(page, per_page) {
        this.$http.userOwnArts({ page, per_page }).then((res) => {
          this.cardList = res.list;
        });
      },
      async resellOrCancelItem(item, bool) {
        this.itemId = item.token_id;
        this.itemPrice = item.price;
        this.selectItem = item
        if (bool) {
          this.isShow = true;
          // await this.resellItem(item);
        } else {
          await this.cancelItem(item);
        }
        this.requestCardData(1, 30);
      },

      async cancelItem(item) {
        this.isApproving = true;
        await Resell.closeOffer(this.connectedAccount, item.offer_id, async (err, txHash) => {
          if (err) {
            console.log(err);
          }
          if (txHash) {
            console.log(txHash);
            this.isApproving = false;
            this.$toast.success(txHash);
          }
        })
          .then(async (receipt) => {
            this.isApproving = false;
            console.log("receipt: ", receipt);
          })
          .catch((err) => {
            console.log(err);
            this.$notify.error(
              (err.head && err.head.msg) || err.message || (err.data && err.data.message)
            );
          });
      },
      async resellItem() {
        const item = this.selectItem
        const reg = /^[0-9]+(.[0-9]+)?$/;
        if (!reg.test(this.itemPrice)) {
          throw new Error("输入有误");
        }
        this.isShow = false;
        this.isApproving = true;
        let nftToken = config.nfts.BitflixNFT;
        let unitToken = config.tokens.find((v) => {
          const symbol = v.symbol?.toUpperCase();
          const itemSymbols = item.currency_code?.toUpperCase();
          if (symbol && itemSymbols && symbol === itemSymbols) {
            return true;
          }
        });
        let OtcMarketPlaceAddress = config.contracts.OtcMarketPlace;
        let erc721 = new Erc721(nftToken.address, nftToken.symbol);
        // 在合约erc721上授权我钱包内的token_id可以被市场合约操作
        erc721
          .approve(
            this.connectedAccount,
            OtcMarketPlaceAddress,
            item.token_id,
            async (err, txHash) => {
              if (err) {
                console.log(err);
              }
              if (txHash) {
                // this.$notify.success(txHash);
                console.log(txHash);
              }
            }
          )
          .then(async (receipt) => {
            console.log("receipt: ", receipt);
            let price = toBN(new BigNumber(this.itemPrice).shiftedBy(unitToken.decimals));
            await Resell.createOffer(
              this.connectedAccount,
              item.token_id,
              price,
              async (err, txHash) => {
                if (err) {
                  console.log(err);
                }
                if (txHash) {
                  this.isApproving = false;
                  console.log(txHash);
                  this.$toast.success(txHash);
                }
              }
            )
              .then(async (receipt) => {
                console.log("receipt: ", receipt);
              })
              .catch((err) => {
                this.isApproving = false;
                console.log(err);
                this.$notify.error(
                  (err.head && err.head.msg) ||
                  err.message ||
                  (err.data && err.data.message)
                );
              });
          })
          .catch((err) => {
            console.log(err);
            this.isApproving = false;
            this.$notify.error(
              (err.head && err.head.msg) || err.message || (err.data && err.data.message)
            );
          });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .mynft-page {
    margin-top: 30px;
    width: 100%;
  }
  .list-content {
    margin-top: 60px;
    width: 95%;
    margin: 0 auto;
    .list-title-con {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .display-name {
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
    width: 95%;
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


  .dialog {
    width: 90%;
    left: 5%;
    position: fixed;
    left: 5%;
    top: 20%;
    background-color: black;
    padding: 20px 5%;
    z-index: 100;

    .close {
      text-align: right;
      color: white;
      font-size: 20px;
    }

    .nr {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;

      .item {
        width: 48%;
        color: white;
        margin-bottom: 20px;
      }

      .item2 {
        width: 48%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;

        input {
          background: transparent;
          border: none;
          outline: none;
          border-bottom: 1px solid white;
          width: 80px;
          color: white;
        }

        p {
          color: white;
        }
      }
    }

    .btn {
      cursor: pointer;
      width: 60%;
      margin: 20px auto;
      border: 1px solid white;
      border-radius: 20px;
      color: white;
      padding: 10px 0;
      text-align: center;
    }
  }
</style>
