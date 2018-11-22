<template>
    <div class="body">
        <transition name="fade" mode="out-in">
            <router-view class="page" id="app"></router-view>
        </transition>
        <transition name="fade" mode="out-in">
            <div class="go-home" @click="goHome"v-if="showBackBtn"></div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showBackBtn: false
        };
    },
    watch: {
        $route(to) {
            const path = to.path;
            if (path === '/huaguang') {
                this.showBackBtn = false;
            }
            else {
                this.showBackBtn = true;
            }
        }
    },
    methods: {
        goHome() {
            this.$router.push('/huaguang');
        }
    }
};
</script>
<style lang="stylus">
.fade-enter-active, .fade-leave-active
    transition opacity .3s
.fade-enter, .fade-leave-to
    opacity 0
html, body
        width 100%
        height 100%
        min-height 100%
        padding 0
    *,
    *:before,
    *:after
        box-sizing border-box
    input:focus,
    textarea:focus,
    button
        outline: none !important;
    .body
        size 100%
        #app
            font-family "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
            -webkit-font-smoothing antialiased
            -moz-osx-font-smoothing grayscale
            min-height 100%
            height 100%
        .page
            min-height 100%
            width 100%
            position relative
            font-size 14px
            color #545c64
        .go-home
            size .36rem 1rem
            position fixed
            top 50%
            left 0
            transform translateY(-50%)
            background url('./assets/images/back_icon.png') 0 0/100% 100% no-repeat
            &:after
                content '〈'
                display inline-block
                color #fff
                font-size .4rem
                position absolute
                top 50%
                left -.12rem
                transform translateY(-50%)
        // .back
        //     position fixed
        //     top 50%
        //     left 0
        //     transform translate3d(-1rem, -50%, 0)
        //     transition all .5s
        //     z-index 100
        //     &.active
        //         transform translate3d(0, -50%, 0)
        //     .back-icon
        //         size .36rem 1rem
        //         background url('./assets/images/back_icon.png') 0 0/100% 100% no-repeat
        //         position relative
        //         float left
        //         &:after
        //             content '〉'
        //             display inline-block
        //             color #fff
        //             font-size .4rem
        //             position absolute
        //             top 50%
        //             left .1rem
        //             transform translateY(-50%) rotateX(0)
        //         &.active
        //             &:after
        //                 left -.1rem
        //                 transform translateY(-50%) rotateY(180deg)
        //     .home-icon
        //         size 1rem
        //         background #4a6ad8 url('./assets/images/home-icon.png') center/50% 50% no-repeat
        //         float left
</style>
