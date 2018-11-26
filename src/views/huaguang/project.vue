<template>
    <div class="main">
        <div class="out-wrap">
            <div class="img-wrap" ref="imgWrap">
                <img :src="src" class="img" ref="img">
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
    components: {},
    data() {
        return {
            src: ''
        };
    },
    mounted() {
        const that = this;
        const img = new Image();
        img.src = 'static/image/huaguang/zhuanti_passage_img.png';
        img.onload = () => {
            that.src = img.src;
            setTimeout(() => {
                new BScroll(that.$refs.imgWrap);
            }, 200);
        };
    },
    methods: {
    }
};
</script>
<style lang='stylus' scoped>
.main
    background url('./assets/image/zhuanti_bg_img.png') 0 0/100% 100% no-repeat
    .out-wrap
        size 6rem 7.74rem
        position absolute
        top 22%
        left 50%
        transform translateX(-50%)
        overflow hidden
    .img-wrap
        size 102% 100%
        overflow-y scroll
    .img
        width 100%
</style>
