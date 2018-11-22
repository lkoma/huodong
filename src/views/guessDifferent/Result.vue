<template>
    <div class="toast-page">
        <div
            class="title"
            :style="{'backgroundImage': 'url(static/image/guessDifferent/img_success.png)'}">
        </div>
        <p class="text">少年你通过了南海博物馆鉴宝特训，特发此证！</p>
        <img src="static/image/guessDifferent/info_certifi.png" alt="" class="pic">
        <div
            class="next"
            @click="next"
            :style="{'backgroundImage': 'url(static/image/guessDifferent/btn_back.png)'}">
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
        };
    },
    methods: {
        next() {
            this.$router.push('/huaguang');
        }
    }
};
</script>

<style lang="stylus" scoped>
.toast-page
    position fixed
    top 0
    left 0
    size 100%
    background url('./assets/img/game_bg.png') 0 0/100% 100% repeat
    padding 0 .54rem
    display flex
    flex-direction column
    justify-content center
    .pic
        width 100%
        margin-bottom .71rem
    .title
        size 3.13rem .7rem
        background 0 0/100% 100% no-repeat
        margin 0 auto
    .next
        size 1.87rem .34rem
        background 0 0/100% 100% no-repeat
        margin 0 auto
    .text
        width 4.28rem
        font-size .26rem
        line-height .5rem
        color #fff
        margin .1rem auto .8rem
        text-align center
</style>
