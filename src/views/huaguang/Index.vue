<template>
    <div class="huaguang">
        <div class="boat-wrap">
            <div class="boat"></div>
            <div class="bottom-wave"></div>
            <div class="top-wave"></div>
        </div>
        <div class="btns">
            <ul class="top-btns">
                <li
                    v-for="(item, index) in topBtns"
                    :key="index"
                    @click="clickHandle(item.name)">
                </li>
            </ul>
            <ul class="bottom-btns">
                <li
                    v-for="(item, index) in bottomBtns"
                    :key="index"
                    @click="clickHandle(item.name)">
                </li>
            </ul>
        </div>
        <audio
            src="static/media/huaguang/wave.mp3"
            ref="bgm"
            muted
            autoplay="autoplay"
            loop="loop"
            preload="auto">
        </audio>
    </div>
</template>

<script>

export default {
    data() {
        return {
            topBtns: [
                { name: 'xs' },
                { name: 'jb' }
            ],
            bottomBtns: [
                { name: 'vr' },
                { name: 'zt' }
            ],
            conf: {
                xs: '/novel',
                jb: '/guessdifferent',
                zt: '/project'
            }
        };
    },
    mounted() {
    },
    methods: {
        clickHandle(type) {
            this.$refs.bgm.play();
            this.$router.push(this.conf[type]);
        }
    }
};
</script>
<style lang="stylus" scoped>
@keyframes boat
    0%
        transform  translate3d(0) rotate3d(0,0,1,0deg)
    50%
        transform  translate3d(-0.46rem, -0.2rem, 0) rotate3d(0,0,1,3deg)
    100%
        transform  translate3d(0) rotate3d(0,0,1,0deg)
@keyframes wave-bottom
    0%
        transform translate3d(0,0,0)
    50%
        transform translate3d(-1rem,0,0)
    100%
        transform translate3d(0,0,0)
@keyframes wave-top
    0%
        transform translate3d(0,0,0)
    50%
        transform translate3d(1rem,0,0)
    100%
        transform translate3d(0,0,0)
@keyframes btn1
  0%
        transform translate3d(0)
  20%
        transform translate3d(-0.02rem, .02rem, 0)
  40%
        transform translate3d(-0.02rem, -0.02rem, 0)
  60%
        transform translate3d(.02rem, .02rem, 0)
  80%
        transform translate3d(.02rem, -0.02rem, 0)
  100%
        transform translate3d(0)
@keyframes btn2
  0%
        transform translate3d(0)
  20%
        transform translate3d(.02rem, -0.02rem, 0)
  40%
        transform translate3d(.02rem, .02rem, 0)
  60%
        transform translate3d(-0.02rem, -0.02rem, 0)
  80%
        transform translate3d(-0.02rem, .02rem, 0)
  100%
        transform translate3d(0)
.huaguang
    size 100%
    background url('./assets/image/bg.png')
    background-size 100% 100%
    position relative
    overflow hidden
    .boat-wrap
        size 100% 50rem
        position absolute
        bottom 0
        .boat
            size 8.36rem 10.32rem
            background url('./assets/image/boat.png')
            background-size 100% 100%
            position absolute
            right -2.15rem
            bottom 1.15rem
            animation boat 6s infinite
            z-index 3
        .bottom-wave
            size 9rem 4.64rem
            background url('./assets/image/wave_01.png')
            background-size 100% 100%
            position absolute
            bottom 0
            left 0
            animation wave-bottom 6s infinite
            z-index 2
        .top-wave
            size 9rem 5rem
            background url('./assets/image/wave_02.png')
            background-size 100% 100%
            position absolute
            bottom -0.4rem
            right -2rem
            animation wave-top 6s infinite
            z-index 5
    .btns
        size 100% 3.87rem
        position absolute
        left 0
        bottom 0
        z-index 6
        padding 0 .56rem
        z-index 10
        .top-btns
            display flex
            justify-content space-around
            li
                size 1.89rem 1.11rem
                background-size 100% 100%
                &:nth-child(1)
                    background-image url('./assets/image/xs_01.png')
                    &:active
                        background-image url('./assets/image/xs_02.png')
                &:nth-child(2)
                    background-image url('./assets/image/jb_01.png')
                    &:active
                        background-image url('./assets/image/jb_02.png')
                &:nth-of-type(odd)
                    animation btn1 3s linear infinite both
                &:nth-of-type(even)
                    animation btn2 3s linear infinite both
        .bottom-btns
            display flex
            justify-content space-around
            padding 0 .74rem
            margin-top .28rem
            li
                size 1.89rem 1.11rem
                background-size 100% 100%
                &:nth-child(1)
                    background-image url('./assets/image/vr_01.png')
                    &:active
                        background-image url('./assets/image/vr_02.png')
                &:nth-child(2)
                    background-image url('./assets/image/zt_01.png')
                    &:active
                        background-image url('./assets/image/zt_02.png')
                &:nth-of-type(odd)
                    animation btn1 3s linear infinite both
                &:nth-of-type(even)
                    animation btn2 3s linear infinite both
</style>
