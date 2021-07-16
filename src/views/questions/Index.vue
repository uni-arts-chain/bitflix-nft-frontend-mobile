<template>
    <div class="questions-page">
        <div class="questions">
            <div class="question question-top">
                <div class="question-left">
                    <div class="left-con">
                        <img
                            class="question-image"
                            src="@/assets/images/questions/image1@2x.png"
                        />
                    </div>
                </div>
                <div class="question-right">
                    <div class="right-con">
                        <div class="title">To be added</div>
                        <p class="desc">To be added</p>
                        <button class="start-button">
                            LEARN MORE ABOUT BITFLIX
                        </button>
                    </div>
                </div>
            </div>
            <div class="question question-odd">
                <div class="question-left">
                    <div class="left-con">
                        <div class="title">COLLECT EPIC BITFLIX MOMENTS</div>
                        <p class="desc">To be added</p>
                    </div>
                </div>
                <div class="question-right">
                    <div class="right-con">
                        <img
                            class="question-image"
                            src="@/assets/images/questions/image2@2x.png"
                        />
                    </div>
                </div>
                <img
                    class="line-set"
                    src="@/assets/images/packs-line-set@2x.png"
                />
            </div>
            <div class="question question-even">
                <img
                    class="line-set"
                    src="@/assets/images/packs-line-set_reverse@2x.png"
                />
                <div class="question-left">
                    <div class="left-con">
                        <img
                            class="question-image"
                            src="@/assets/images/questions/image3@2x.png"
                        />
                    </div>
                </div>
                <div class="question-right">
                    <div class="right-con">
                        <div class="title">CLASSIC MOVIE SCENES</div>
                        <p class="desc">To be added</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Questions",
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.questions-page {
    // margin-top: 80px;
    // margin-bottom: 157px;
}
.questions {
    .question {
        width:85%;
        position: relative;
        margin: 30px auto;
        .question-left,
        .question-right {
            width: 100%;
            z-index: 1;
        }
    }
    .question-top {
        .left-con {
          width:70%;
            img{
                width:100%;
                display: block;
                object-fit: contain;
            }
        }
        .right-con {
            width:100%;
        }
    }
    .question-odd {
        display: flex;
        flex-direction: column-reverse;
        .left-con {
            width:100%;
        }
        .right-con {
            width:100%;
        }
        .question-image {
            width:100%;
            display: block;
            object-fit: cover;
        }
    }
    .question-even {
        .left-con {
            width:100%;
        }
        .right-con {
            width:100%;
        }
        .question-image {
            width:100%;
            display: block;
            object-fit: cover;
        }
    }
}

.line-set {
    pointer-events: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

.title {
    font-size: 24px;
    font-family: Montserrat-ExtraBold, Montserrat;
    // font-weight: ExtraBold;
    font-weight: bolder;
    color: #ffffff;
    line-height: 30px;
    margin-top: 20px;
}

.desc {
    margin-top: 10px;
    font-size: 17px;
    font-family: "Montserrat-Regular";
    font-weight: 600;
    color: #ffffff;
    line-height: 30px;
}
.start-button {
    width: 100%;
    margin-top: 30px;
    background: linear-gradient(to right, #ba45c8, #2b6bd2);
    // width: 368px;
    height: 40px;
    cursor: pointer;
    text-align: center;
    font-size: 15px;
    font-family: "Montserrat-Bold";
    text-align: center;
    color: #ffffff;
    line-height: 30px;
    letter-spacing: 1px;
    position: relative;
    z-index: 2;
}
</style>
