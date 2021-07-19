<template>
  <div class="mynft-page">
    <div class="list-content">
      <div class="list-title-con">
        <BaseTitle>MY NFT</BaseTitle>
        <div class="display-name">{{ connectedAccount }}</div>
      </div>

      <ActionMovieList :list="cardList" class="list" @onMovieClick="goDetail" />
    </div>
  </div>
</template>

<script>
  import BaseTitle from "@/components/BaseTitle";
  import ActionMovieList from "@/components/ActionMovieList";

  export default {
    name: "mynft",
    components: {
      BaseTitle,
      ActionMovieList,
    },
    data: () => ({
      cardList: [],
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
</style>
