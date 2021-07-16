<template>
    <div>
        <div class="page-title" :style="{fontSize:ft+'px'}">
            <slot></slot>
        </div>
        <div class="short-line" :style="{height:height+'px'}"></div>
    </div>
</template>

<script>
export default {
    name: "BaseTitle",
    props:['ft','height']
};
</script>

<style lang="scss" scoped>
.page-title {
    font-size: 18px;
    font-family: "Montserrat-Bold";
    color: #ffffff;
}
.short-line {
    width: 38px;
    height: 6px;
    margin-top: 10px;
    background-color: #ffffff;
}
</style>
