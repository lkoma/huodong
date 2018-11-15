<template>
   <div class="huaguang">
       <div class="boat"></div>
       <div class="bottom-wave"></div>
       <div class="top-wave"></div>
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
            src="static/image/huaguang/wave.mp3"
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
                { name: 'jb' },
                { name: 'zt' }
            ],
            bottomBtns: [
                { name: 'vr' },
                { name: 'glb' }
            ]
        };
    },
    mounted() {
    },
    methods: {
        clickHandle() {
            // this.$refs.bgm.play();
        }
    }
};
</script>
<style lang="stylus" scoped>
@keyframes boat
    0%
        top 100px
        left 126px
        transform rotate3d(0,0,1,0deg)
    50%
        top 80px
        left 80px
        transform rotate3d(0,0,1,4deg)
    100%
        top 100px
        left 126px
        transform rotate3d(0,0,1,0deg)
@keyframes wave-bottom
    0%
        left 0
    50%
        left -50px
    100%
        left 0
@keyframes wave-top
    0%
        right -180px
    50%
        right -4px
    100%
        right -180px
@keyframes btn1
  0%
        transform translate(0)
  20%
        transform translate(-2px, 2px)
  40%
        transform translate(-2px, -2px)
  60%
        transform translate(2px, 2px)
  80%
        transform translate(2px, -2px)
  100%
        transform translate(0)
@keyframes btn2
  0%
        transform translate(0)
  20%
        transform translate(2px, -2px)
  40%
        transform translate(2px, 2px)
  60%
        transform translate(-2px, -2px)
  80%
        transform translate(-2px, 2px)
  100%
        transform translate(0)
.huaguang
    size 100%
    background url('./assets/image/bg.png')
    background-size 100% 100%
    font-size 30px
    position relative
    overflow hidden
    .boat
        size 875px 1080px
        background url('./assets/image/boat.png')
        position absolute
        top 100px
        left 80px
        animation boat 6s infinite
        z-index 3
    .bottom-wave
        size 1080px 557px
        background url('./assets/image/wave_01.png')
        background-size 100% 100%
        position absolute
        bottom -128px
        left 0
        animation wave-bottom 6s infinite
        z-index 2
    .top-wave
        size 643px 335px
        background url('./assets/image/wave_02.png')
        background-size 100% 100%
        position absolute
        bottom -18px
        right -180px
        animation wave-top 6s infinite
        z-index 5
    .btns
        size 100% 380px
        position absolute
        left 0
        bottom 0
        z-index 6
        padding 0 56px
        .top-btns
            display flex
            justify-content space-around
            li
                size 189px 111px
                background-size 100% 100%
                &:nth-child(1)
                    background-image url('./assets/image/xs_01.png')
                    &:active
                        background-image url('./assets/image/xs_02.png')
                &:nth-child(2)
                    background-image url('./assets/image/jb_01.png')
                    &:active
                        background-image url('./assets/image/jb_02.png')
                &:nth-child(3)
                    background-image url('./assets/image/zt_01.png')
                    &:active
                        background-image url('./assets/image/zt_02.png')
                &:nth-of-type(odd)
                    animation btn1 3s linear infinite both
                &:nth-of-type(even)
                    animation btn2 3s linear infinite both
        .bottom-btns
            display flex
            justify-content space-around
            padding 0 74px
            margin-top 28px
            li
                size 189px 111px
                background-size 100% 100%
                &:nth-child(1)
                    background-image url('./assets/image/vr_01.png')
                    &:active
                        background-image url('./assets/image/vr_02.png')
                &:nth-child(2)
                    background-image url('./assets/image/glb_01.png')
                    &:active
                        background-image url('./assets/image/glb_02.png')
                &:nth-of-type(odd)
                    animation btn1 3s linear infinite both
                &:nth-of-type(even)
                    animation btn2 3s linear infinite both
</style>
