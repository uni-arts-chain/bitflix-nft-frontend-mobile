<template>
    <div class="record-page">
        <div class="record-content">
            <span class="back-btn" @click="goBack">&lt; BACK</span>
            <div
                class="record-list"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0)"
            >
                <div class="record" v-for="record in records" :key="record.id">
                    <div>
                        <div class="lab">Time</div>
                        <div class="val">
                            {{ record.time  }}
                        </div>
                    </div>
                    <div>
                        <div class="lab">Number</div>
                        <div class="val">{{ record.amount }} BFX</div>
                    </div>
                    <div
                        class="btn"
                    >
                     Unlock
                    </div>
                </div>
            </div>
        </div>
          <div class="line">
                <img src="../../assets/images/line.png" alt="">
            </div>
    </div>
</template>

<script>


export default {
    name: "record",
    data() {
        return {
        records:[
            {
                time:'2020-08.30',
                amount:80000
            },
             {
                time:'2020-08.30',
                amount:80000
            },
             {
                time:'2020-08.30',
                amount:80000
            },
             {
                time:'2020-08.30',
                amount:80000
            },
             {
                time:'2020-08.30',
                amount:80000
            }
        ]
        };
    }
};
</script>

<style lang="scss" scoped>
.record-page {
  margin-top: 60px;
    width:100%;
}
.line{
    width:100%;
    img{
        width:100%;
        display: block;
        object-fit: cover;
    }
}
.record-content {
    width: 90%;
    margin:0  auto;
    .back-btn {
        cursor: pointer;
        font-size: 17px;
        font-family: Montserrat-SemiBold, Montserrat;
        // font-weight: R;
        color: #ffffff;
    }
    .record-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        .record {
            margin-top: 20px;
            width: 95%;
            height: 110px;
            padding: 0px 2.5%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #c9caca;
            border-radius: 5px;
            color: #ffffff;
            background-color: #0c3061;
            text-align: center;
            .lab {
                font-family: Montserrat-SemiBold, Montserra;
                font-weight: 500;
                font-size: 15px;
            }
            .val {
                margin-top: 10px;
                font-family: Montserrat-SemiBold, Montserra;
                font-size: 13px;
            }
            .btn {
                cursor: pointer;
                border-radius: 20px;
                // font-family: Montserrat-SemiBold, Montserra;
                font-family: "Montserrat-Bold";
                font-size: 14px;
                padding: 8px 32px;
                background: linear-gradient(to right, #ba45c8, #2b6bd2);
            }
            .btn.disabled {
                cursor: not-allowed;
                opacity: 0.7;
                background: linear-gradient(to right, #444444, #444444);
            }
        }
    }
}
.record-content ::v-deep .el-loading-mask {
    font-size: 24px;
}
</style>
