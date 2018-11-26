<template>
    <transition name="fade" mode="out-in">
        <div class="main" v-show="vrShow">
            <div class="loading" v-show="loading"></div>
            <div id="gameContainer" class="game-container" v-show="!loading"></div>
            <div class="go-home" @click="hide"></div>
        </div>
    </transition>
</template>

<script>

export default {
    data() {
        return {
            VR: null,
            loading: true,
            vrShow: false
        };
    },
    mounted() {
        const that = this;
        this.VR = window.UnityLoader.instantiate(
            'gameContainer',
            'static/vr/Build/webgl.json',
            {
                onProgress(a, progress) {
                    if (progress >= 1) {
                        that.loading = false;
                        window.aaa += 1;
                    }
                }
            }
        );
    },
    methods: {
        show() {
            this.vrShow = true;
            this.VR.SendMessage('webglHandler', 'ShowModel', 'qing_hua_he_xie_wen_ling_kou_pan');
            this.VR.SendMessage('webglHandler', 'Active', '1');
        },
        hide() {
            this.VR.SendMessage('webglHandler', 'Active', '0');
            this.VR.SendMessage('webglHandler', 'ShowModel', '');
            this.vrShow = false;
            console.log('隐藏了');
        }
    }
};
</script>
<style lang='stylus' scoped>
.fade-enter-active, .fade-leave-active
    transition opacity .3s
.fade-enter, .fade-leave-to
    opacity 0
@keyframes load
    0%
        transform translate(-50%, -50%) rotateZ(0)
    100%
        transform translate(-50%, -50%) rotateZ(360deg)
.main
    position fixed
    left 0
    top 0
    size 100%
    background rgb(0,0,0)
    z-index 1000
    .loading
        size 1rem
        background url('../assets/image/loading.png') 0 0/100% 100% no-repeat
        animation load 2s linear infinite
        position absolute
        top 50%
        left 50%
        transform-origin center
        transform translate(-50%, -50%)
    .game-container
        size 100% 70%
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
    .go-home
        size .36rem 1rem
        opacity .5
        position fixed
        top 50%
        left 0
        transform translateY(-50%)
        background url('../../../assets/images/back_icon.png') 0 0/100% 100% no-repeat
        &:after
            content '〈'
            display inline-block
            color #fff
            font-size .4rem
            position absolute
            top 50%
            left -.12rem
            transform translateY(-50%)
</style>
