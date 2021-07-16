<template>
    <div class="email-page">
        <div class="email-content">
            <span class="back-btn" @click="goBack">&lt; BACK</span>
            <el-form
                class="email"
                ref="form"
                :model="form"
                label-width="120px"
                :rules="rules"
                @submit.prevent.native
                label-position="top"
            >
                <el-form-item label prop="email">
                    <template v-slot:label>
                        <label class="label">EMAIL:</label>
                    </template>
                    <input
                        type="text"
                        class="input"
                        placeholder="Please enter email address"
                    />
                </el-form-item>
                <el-form-item label prop="code" style="margin-top:30px">
                    <template v-slot:label>
                        <label class="label">CODE:</label>
                    </template>
                    <input
                        class="input"
                        type="text"
                        placeholder="Please enter the verification code"
                    />
                </el-form-item>
                <button class="button">Send</button>
                <button @click="goWallet" class="connect">Connect</button>
            </el-form>
        </div>
        <div class="line">
                <img src="../assets/images/line.png" alt="">
            </div>
    </div>
</template>

<script>
import { Form, FormItem } from "element-ui";

export default {
    name: "Email",
    components: {
        [FormItem.name]: FormItem,
        [Form.name]: Form,
    },
    data() {
        return {
            form: {},
            rules: {},
        };
    },
    methods: {
        goBack() {
            this.$router.push("/signup");
        },
        goWallet() {
            this.$router.push("/wallet");
        },
    },
};
</script>

<style lang="scss" scoped>
.email-page {
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
.email-content {
   margin-top: 60px;
    width: 90%;
    margin:0  auto;
    .back-btn {
        cursor: pointer;
        font-size: 17px;
           font-family: Montserrat-SemiBold, Montserra;
        color: #ffffff;
    }
    .email {
        margin-top: 30px;
        color: #ffffff;
        .label {
            font-size: 18px;
            color: #ffffff;
            top: 2px;
            position: relative;
        }
        .input {
            font-size: 14px;
            font-weight: 600;
            padding: 10px 0px;
            background-color: transparent;
            width: 100%;
            border-bottom: 2px solid #c9caca;
            font-family: Montserrat-SemiBold, Montserra;
            margin-top: 10px;
        }
        .button {
            margin-top: 40px;
            padding: 8px 40px;
            background-color: #0da4f5;
            border-radius: 20px;
            font-family: "Montserrat-Bold";
        }

        .connect {
            margin-top: 80px;
            cursor: pointer;
            border-radius: 30px;
            font-family: "Montserrat-Bold";
            font-size: 16px;
            font-weight: 500;
            padding: 15px 0;
            width: 100%;
            background: linear-gradient(to right, #ba45c8, #2b6bd2);
        }
    }
}
</style>
