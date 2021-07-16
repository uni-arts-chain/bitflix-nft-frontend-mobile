<template>
    <footer>
        <div class="container v-br">
            <img src="../../assets/images/topLogo.png" alt="">
            <span class="desc">Power by UniArts Networks</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footerbar"
};
</script>

<style lang="scss" scoped>
footer {
    background: transparent;
}
.container {
    height: 89px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.v-br {
    border-top: 2px solid #c9caca;
}
img{
    width:40px;
    object-fit: contain;
}
.desc {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-left: 10px;
    // border-top: 2px solid white;
    font-size: 15px;
    font-family: "Montserrat-Regular";
    font-weight: 800;
    text-align: center;
    color: #ffffff;
    letter-spacing: 0px;
}
</style>
