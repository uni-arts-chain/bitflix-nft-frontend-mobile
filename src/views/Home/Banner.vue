
<template>
    <div class="banner">
        <div class="wrapper-video">
            <video id="marketplaceVideo"
                   ref="video"
                   width="100%"
                   height="auto"
                   :src="videoUrl"
                   poster=""
                   autoplay
                   muted
                   loop></video>
        </div>
        <button class="start-button" @click="goMarketplace">COLLECT MOVIE NFTS - CONNECT WITH STARS</button>
    </div>
</template>
<script>
// import AdaptiveVideo from "@/components/AdaptiveVideo";
import BannerMp4 from "@/assets/video/banner-mp4.mp4";
export default {
    name: "banner",
    components: {
        // AdaptiveVideo,
    },
    data() {
        return {
            BannerMp4,
            videoUrl: BannerMp4,
        };
    },
    methods: {
        goMarketplace() {
            this.$router.push("/marketplace");
        },
    },
};
</script>
<style lang="scss" scoped>
.banner {
    width: 100%;
    color: white;
    overflow: hidden;
    position: relative;
}
.second-title {
    font-size: 52px;
    font-family: "Montserrat-Bold";
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    line-height: 92px;
}
.desc {
    font-size: 13px;
    font-family: "Montserrat-Regular";
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    line-height: 20px;
    position: absolute;
    left:5%;
    bottom:22%;
    width:90%;
    transform: scale(.9);
}
.start-button {
  position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom:5%;
    min-width: 345px;
    max-width: 92%;
    background: linear-gradient(to right, #ba45c8, #2b6bd2);
    height: 30px;
    cursor: pointer;
    text-align: center;
    font-size: 12px;
    font-family: "Montserrat-Bold";
    text-align: center;
    color: #ffffff;
    line-height: 30px;
    letter-spacing: 1px;
    z-index: 2;
}
.wrapper-video {
    background-color: black;
    width: 100%;
    video {
        width: 100%;
        vertical-align: middle;
        object-fit: cover;
    }
    img{
        width: 100%;
    }
}
</style>
