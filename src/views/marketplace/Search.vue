<template>
    <div class="marketplace-search-page">
        <div class="search">
            <div class="top-title">MARKETPLACE</div>
            <div class="search-container">
                <div class="search-content">
                    <input
                        class="search-input"
                        placeholder="Search Actor, Director, Movie, Genre"
                        v-model="searchVal"
                    />
                </div>
                <div class="start-button" @click="requestSeach">SEARCH</div>
            </div>
            <div class="filter-container">
                <div class="input-container">
                    <el-select
                            class="select-input custom-input"
                            clearable
                            v-model="selectTag"
                            placeholder="Select"
                    >
                        <el-option
                                v-for="item in tags"
                                :key="item.id"
                                :label="item.title"
                                :value="item.id"
                        ></el-option>
                    </el-select>
                    <!-- <div class="v-br"></div>
                    <div class="search-icon-con">
                        <img class="search-icon" src="@/assets/images/marketplace/search@2x.png" />
                    </div>-->
                </div>
                <div class="input-container">
                    <el-select
                        class="select-input custom-input"
                        clearable
                        v-model="selectFilter"
                        placeholder="Select"
                    >
                        <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.title"
                            :value="item.id"
                        ></el-option>
                    </el-select>
                    <!-- <div class="v-br"></div>
                    <div class="search-icon-con">
                        <img class="search-icon" src="@/assets/images/marketplace/search@2x.png" />
                    </div>-->
                </div>

                <!-- <div class="filters" @click="requestSeach">FILTERS</div> -->

             <div class="dom1">
                 <span class="sort-by">SORT BY</span>

                 <div class="input-container" style="width:60%;">
                     <el-select
                             class="select-input custom-input"
                             clearable
                             v-model="selectSorter"
                             placeholder="Select"
                     >
                         <el-option
                                 v-for="item in sorts"
                                 :key="item.id"
                                 :label="item.title"
                                 :value="item.id"
                         ></el-option>
                     </el-select>
                     <!-- <div class="v-br"></div>
                     <div class="search-icon-con">
                         <img class="search-icon" src="@/assets/images/marketplace/search@2x.png" />
                     </div>-->
                 </div>
                 <div class="msg">
                     <img src="../../assets/images/msg.png" alt="">
                 </div>
             </div>

        </div>
            <div class="card-cate-group">
                <div class="card-cate-item" v-for="(v, i) in list" :key="i" @click="goDetail(v)" >
                    <ActionMovie
                            :title="v.art_type.toUpperCase() + ' NFT'"
                            :coverUrl="v.img_main_file1.url"
                            :coinUrl="getNFTCoinLogo(v)"
                    />
                    <div class="text">
                        <p class="p1">{{ v.name }}</p>
                        <p class="des">{{ v.series }}</p>
                        <p class="p2">{{ v.price | priceFixed }} USDT</p>
                    </div>
                </div>
            </div>
            <div
                class="pagination"
                v-if="!isLoading && this.currentPage > 1 && this.list.length > 0"
            >
                <icon-svg
                    @click="prev"
                    :disabled="currentPage <= 1"
                    icon-class="left"
                    :class="{ disabled: currentPage <= 1 }"
                />
                <icon-svg
                    @click="next"
                    :disabled="currentPage >= totalPage"
                    style="transform: rotateZ(180deg)"
                    :class="{ disabled: currentPage >= totalPage }"
                    icon-class="left"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ActionMovie from "@/components/ActionMovie";
import STAR_LOGO from "@/assets/images/cate-coin1.png";
import MOVIE_LOGO from "@/assets/images/cate-coin2.png";
import ACTIVIST_LOGO from "@/assets/images/cate-coin3.png";
import MUSIC_LOGO from "@/assets/images/cate-coin4.png";
import TROHPY_LOGO from "@/assets/images/cate-coin5.png";
import { Select, Option } from "element-ui";

export default {
    name: "MarketplaceSearch",
    components: {
         ActionMovie,
        [Select.name]: Select,
        [Option.name]: Option,
    },
    data() {
        return {
            isLoading: false,
            searchVal: this.$route.query.keyword ? this.$route.query.keyword : "",
            selectFilter: "",
            selectSorter: "",
            selectTag: "",
            options: [],
            sorts: [],
            tags: [],
            list: [],
            perPage: 30,
            currentPage: 1,
            total_count: 0,
        };
    },
    mounted() {
        this.setFilter();
        this.requestFilter();
        this.requestSort();
        this.requestTag();
        this.requestSeach();
    },
    computed: {
        totalPage() {
            return Math.ceil(this.total_count / this.perPage);
        },
    },
    methods: {
        setFilter() {
            this.selectFilter = this.$route.query.art_type;
            this.selectSorter = this.$route.query.sort_type;
            this.selectTag = this.$route.query.tags
                ? this.$route.query.tags.split(",").map((v) => parseInt(v))
                : "";
        },
        replace() {
            let path = "/marketplaceSearch";
            if (this.searchVal) {
                path += "?keyword=" + encodeURIComponent(this.searchVal);
            }
            if (this.selectFilter) {
                path += "?art_type=" + encodeURIComponent(this.selectFilter);
            }
            if (this.selectSorter) {
                path += "?sort_type=" + encodeURIComponent(this.selectSorter);
            }
            if (this.selectTag && this.selectTag.length > 0) {
                path += "?tags=" + encodeURIComponent(this.selectTag.join(","));
            }
            if (path != this.$route.path + "?keyword=" + this.$route.query.keyword) {
                this.$router.replace(path);
            }
        },
        requestSeach() {
            let params = {
                sort_type: "create_lth",
                per_page: this.perPage,
                page: this.currentPage,
            };
            if (this.selectFilter) {
                params.art_type = this.selectFilter;
            }
            if (this.selectSorter) {
                params.sort_type = this.selectSorter;
            }
            if (this.selectTag && this.selectTag.length > 0) {
                params.tag_group_ids = this.selectTag.join(",");
                this.replace();
            }
            if (this.searchVal) {
                params.keyword = this.searchVal;
                this.replace();
            }
            this.list = [];
            this.isLoading = true;
            this.$http
                .globalGetMarketList(params)
                .then((res) => {
                    this.list = res.list;
                    this.total = res.total_count;
                    this.isLoading = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.isLoading = false;
                    this.$toast.fail(err.head && err.head.msg);
                });
        },
        requestFilter() {
            this.$http
                .globalGetFilterCate({})
                .then((res) => {
                    this.options = [
                        {
                            id: "",
                            title: "Default",
                        },
                    ].concat(res);
                })
                .catch((err) => {
                    console.log(err);
                    this.$toast.fail(err.head && err.head.msg);
                });
        },
        requestTag() {
            this.$http
                .globalGetTagGroup({})
                .then((res) => {
                    this.tags = res;
                })
                .catch((err) => {
                    console.log(err);
                    this.$toast.fail(err.head && err.head.msg);
                });
        },
        requestSort() {
            this.$http
                .globalGetSortCate({})
                .then((res) => {
                    this.sorts = [
                        {
                            id: "",
                            title: "Default",
                        },
                    ].concat(res);
                })
                .catch((err) => {
                    console.log(err);
                    this.$toast.fail(err.head && err.head.msg);
                });
        },
        goDetail(item) {
            this.$router.push("/marketplaceDetail/" + item.id);
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
        next() {
            if (this.currentPage < this.totalPage) {
                this.currentPage++;
                this.requestSeach();
            }
        },
        prev() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.requestSeach();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.search {
    width:90%;
    margin: 30px auto;
}
.top-title {
    font-size: 20px;
    font-family: Montserrat-ExtraBold, Montserrat;
    // font-weight: ExtraBold;
    font-weight: bolder;
    color: #ffffff;
}
.search-container {
    width:100%;
    margin: 30px auto;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search-content {
        width: 100%;
        display: flex;
        align-items: center;
        height: 100%;
        background-color: #000000;
        .search-input {
            flex: 1;
            background-color: transparent;
            border: none;
            outline: none;
            text-indent: 10px;
            color: #ffffff;
            height: 100%;
            width:70%;
            font-family: Montserrat-SemiBold, Montserra;
        }
        .search-text {
            font-size: 12px;
            font-family: Montserrat-Medium, Montserrat;
            // font-weight: 500;
            color: #ffffff;
            letter-spacing: 1px;
            border-bottom: 2px solid #ffffff;
            padding-bottom: 4px;
        }
    }
    .start-button {
        // margin-left: 23px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        background: linear-gradient(to right, #ba45c8, #2b6bd2);
        cursor: pointer;
        // text-align: center;
        font-size: 12px;
        font-family: Montserrat-Medium, Montserrat;
        // font-weight: 500;
        color: #ffffff;
        // line-height: 30px;
        letter-spacing: 1px;
    }
}
.filter-container {
    width: 100%;
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .input-container {
        width: 48%;
        /* border: 1px solid rgba(255,255,255,.5); */
        outline: none;
    }
    .tag-container {
        width: 48%;
        border: 1px solid rgba(255,255,255,.5);
        outline: none;
        .select-input ::v-deep .el-tag.el-tag--info {
            color: black;
        }
        .select-input ::v-deep .el-tag__close.el-icon-close:hover {
            background-color: black;
        }
        .select-input ::v-deep .el-tag__close.el-icon-close {
            background-color: black;
        }
    }
    .input-container,
    .tag-container {
        .select-input {
            font-family: Montserrat-SemiBold, Montserra;
            flex: 1;
            background-color: transparent;
            color: #ffffff;
            height: 100%;
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
    .filters {
        width: 133px;
        height: 100%;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff;
        font-size: 12px;
        font-family: Montserrat-Medium, Montserrat;
        // font-weight: 500;
        color: #ffffff;
        letter-spacing: 1px;
    }
    .sort-by {
        // width: 60px;
        font-size: 12px;
        // line-height: 42px;
        font-family: Montserrat-Medium, Montserrat;
        // font-weight: 500;
        color: #ffffff;
        letter-spacing: 1px;
    }
    .select-container {
        width: 60%;
        border:1px solid rgba(255,255,255,.5);
    }
    .more-btn {
        height: 100%;
        width: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff;
    }
}
.list-container {
    margin-top: 80px;
}

.custom-input ::v-deep .el-input__inner {
    background-color: transparent;
    color: white;
}
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 40px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    .svg-icon {
        margin: 0 50px;
        cursor: pointer;
    }
    .svg-icon.disabled {
        cursor: not-allowed;
        opacity: 0.4;
    }
}
.dom1{
    width:100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
    .msg{
        width:15%;
        border:1px solid rgba(255,255,255,.5);
        height:33px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        img{
            width:25px;
            object-fit: contain;
        }
    }
.card-cate-group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width:100%;
    margin: 30px auto;
}
.card-cate-item {
    width: 48%;
    padding: 10px 0;
    display: flex;
    min-height: 290px;
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

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 40px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    .svg-icon {
        margin: 0 50px;
        cursor: pointer;
    }
    .svg-icon.disabled {
        cursor: not-allowed;
        opacity: 0.4;
    }
}
</style>
