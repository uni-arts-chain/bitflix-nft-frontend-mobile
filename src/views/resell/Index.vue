<template>
  <div class="marketplace-page">
    <div class="top-container">
      <div class="top-title">EXPLORE MARKETPLACE</div>
      <div class="search-container">
        <input
          v-model="searchVal"
          class="search-input"
          placeholder="Search Actor, Director, Movie, Genre"
        />
        <div class="v-br"></div>
        <div class="search-icon-con" @click="goSearch">
          <img
            class="search-icon"
            src="@/assets/images/marketplace/search.png"
            width="16px"
          />
        </div>
      </div>
    </div>

    <div class="latest-container">
      <div class="latest-content">
        <div class="latest-title-con">
          <BaseTitle>SEARCH BY NFT TYPE</BaseTitle>
        </div>
        <div class="card-cate-group">
          <div v-for="(v, i) in nftList" :key="i" class="card-cate-item" @click="goDetail(v)">
            <action-movie
              :coverUrl="v.img_main_file1.url"
              :title="v.art_type.toUpperCase() + ' NFT'"
            />
            <div class="text">
              <p class="p1">{{ v.name }}</p>
              <p class="des">{{ v.series }}</p>
              <p class="p2">{{ v.price | priceFixed }} USDT</p>
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
      nftList: []
    };
  },
  mounted() {
    // this.requestMovieData("movie");
    this.requestNFTData();
    // this.requestStarData();
    // this.requestLatestData();
  },
  methods: {
    requestNFTData() {
      let params = {
        sort_type: "create_lth"
      };
      this.isTypeLoading = true;
      this.$http
        .globalGetResellList(params)
        .then((res) => {
          this.isTypeLoading = false;
          this.nftList = res.list.filter((v, i) => i < 8).reverse();
        })
        .catch((err) => {
          this.isTypeLoading = false;
          console.log(err);
          this.$notify.error(err.head && err.head.msg);
        });
    },
    goSearch() {
      let path = "/marketplaceSearch";
      let queryStr = "";
      if (this.searchVal) {
        queryStr += "?keyword=" + encodeURIComponent(this.searchVal);
      }
      console.log(path + queryStr);
      // this.$router.push(path + queryStr);
    },
    goDetail(item, isTag = false) {
      if (isTag) {
        console.log("/marketplaceSearch?tags=" + item.id);
        // this.$router.push("/marketplaceSearch?tags=" + item.id);
      } else {
        this.$router.push({ params: { type: "resell" }, path: "/marketplaceDetail/" + item.id });
      }
    },
    goSearchList() {
      console.log("/marketplaceSearch");
      // this.$router.push("/marketplaceSearch");
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
  width: 100%;
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

.mList {
  background: #142336;
  width: 100%;
  padding: 40px 0;

  .mt {
    width: 90%;
    margin: 0 auto;
  }

  .allItems {
    width: 90%;
    margin: 0 auto;

    .item {
      width: 100%;
      background: url("~@/assets/images/b.png") no-repeat;
      background-size: cover;
      padding: 10px 2.5%;
      margin-top: 20px;

      .pic {
        img {
          width: 100%;
          display: block;
          object-fit: cover;
        }
      }

      .text {
        text-align: center;
        width: 90%;
        margin: 10px auto;

        .p1, .p3 {
          color: white;
          font-family: 'Montserrat-Bold';
          font-size: 14px;
        }

        .p2 {
          color: #B2B3B7;
          font-family: "Montserrat-Regular";
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;

          &::before {
            content: '';
            width: 50%;
            background-color: #B2B3B7;
            display: block;
            height: 2px;
            margin: 20px 0;
          }
        }
      }
    }
  }
}

.actor {
  background: #060c17;
  width: 100%;
  padding: 40px 0;

  .at {
    width: 90%;
    margin: 0 auto;
  }

  .allItems {
    width: 90%;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      width: 48%;
      position: relative;
      margin-bottom: 10px;

      img {
        width: 100%;
        display: block;
        object-fit: cover;
        border-radius: 10px;
      }

      .text {
        position: absolute;
        left: 5%;
        bottom: 5%;
        width: 90%;
      }
    }
  }
}

.latest-container {
  padding-top: 83px;
  background: #0d1c33;
  width: 90%;
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

  .latest-content:last-child {
    margin-bottom: 0;
  }
}

.card-cate-group {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

.card-cate-item {
  width: 48%;
  padding: 10px 0;
  display: flex;
  min-height: 310px;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .text {
    width: 100%;
    transform: scale(.8);
    overflow-wrap: anywhere;

    p {
      color: white;
      font-family: "Montserrat-Medium";
    }

    .p1 {
      font-family: "Montserrat-Bold";
      height: 35px;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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
