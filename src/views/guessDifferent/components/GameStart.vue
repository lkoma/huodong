<template>
    <transition name="fade">
        <div class="mask" v-show="visible">
            <div class="popup"></div>
            <button class="btn" @click="next"></button>
        </div>
    </transition>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            visible: false
        };
    },
    mounted() {
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
        },
        next() {
            this.$emit('changeBgAudio', 'gamebgm');
            this.$router.push('/guessdifferent/level');
        }
    }
};
</script>
<style lang='stylus' scoped>
.fade-enter-active, .fade-leave-active
    transition opacity .3s
.fade-enter, .fade-leave-to
    opacity 0
.mask
    size 100%
    position fixed
    top 0
    background-color rgba(0,0,0,.7)
    .popup
        size 6.22rem 9.16rem
        background url('../assets/img/theme_nanhai.png')
        background-size 100% 100%
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
    .btn
        size 1.87rem .34rem
        background url('../assets/img/btn_start.png')
        background-size 100% 100%
        position absolute
        bottom 7.5%
        left 50%
        transform translateX(-50%)
        z-index 500
</style>
