<template>
    <div class="body">
        <!-- <transition name="fade" mode="out-in"> -->
        <transition :name="className">
            <router-view class="page" @showVr="showVr"></router-view>
        </transition>
        <!-- </transition> -->
        <transition name="fade" mode="out-in">
            <div class="go-home" @click="goHome"v-if="showBackBtn"></div>
        </transition>
        <vr ref="vr"></vr>
    </div>
</template>

<script>
import vr from '@views/huaguang/components/vr';

export default {
    components: {
        vr
    },
    data() {
        return {
            showBackBtn: false,
            className: 'rotate-in',
            routerHistory: []
        };
    },
    watch: {
        $route(to, from) {
            const path = to.path;
            if (path === '/huaguang') {
                this.showBackBtn = false;
            }
            else {
                this.showBackBtn = true;
            }

            if (!this.routerHistory.length) {
                this.className = 'rotate-in';
                this.routerHistory.push(from.path, to.path);
                return;
            }
            const index = this.routerHistory.indexOf(to.path);
            if (index !== -1) {
                this.className = 'rotate-out';
                this.routerHistory = this.routerHistory.slice(0, index + 1);
                return;
            }
            this.className = 'rotate-in';
            this.routerHistory.push(to.path);
        }
    },
    methods: {
        goHome() {
            this.$router.push('/huaguang');
        },
        showVr() {
            this.$refs.vr.show();
        }
    }
};
</script>
<style lang="stylus">
.rotate-in-enter
    transform translate3d(0, 100%, 0)
.rotate-in-enter-to
    transform translate3d(0, 0, 0)
.rotate-in-enter-active
    transition transform .8s
    position fixed !important
    top 0
    left 0
    z-index 2
.rotate-in-leave
    transform-origin center bottom
    transform translate3d(0, 0, 0) rotateX(0)
.rotate-in-leave-to
    transform-origin center bottom
    transform translate3d(0, -100%, 0) rotateX(80deg)
.rotate-in-leave-active
    transition transform .8s
    position fixed !important
    top 0
    left 0
    z-index 1
.rotate-out-enter
    transform-origin center bottom
    transform translate3d(0, -100%, 0) rotateX(80deg)
.rotate-out-enter-to
    transform-origin center bottom
    transform translate3d(0, 0, 0) rotateX(0)
.rotate-out-enter-active
    transition transform .8s
    position fixed !important
    top 0
    left 0
    z-index 2
.rotate-out-leave
    transform translate3d(0, 0, 0)
.rotate-out-leave-to
    transform translate3d(0, 100%, 0)
.rotate-out-leave-active
    transition transform .8s
    position fixed !important
    top 0
    left 0
    z-index 1
.fade-enter-active, .fade-leave-active
    transition opacity .3s
.fade-enter, .fade-leave-to
    opacity 0
html, body
        width 100%
        height 100%
        // min-height 100%
        overflow hidden
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
        perspective 1800px
        background #000
        #app
            font-family "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
            -webkit-font-smoothing antialiased
            -moz-osx-font-smoothing grayscale
            min-height 100%
            height 100%
        .page
            height 100%
            width 100%
            position relative
            font-size 14px
            color #545c64
        .go-home
            size .36rem 1rem
            opacity .5
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
</style>
