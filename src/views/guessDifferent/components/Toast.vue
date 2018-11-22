<template>
    <div class="toast-page">
        <div
            class="title"
            :style="{'backgroundImage': `url(${info.titlePic})`}">
        </div>
        <p class="text">{{info.text}}</p>
        <img :src="levelInfo.overPic" alt="" class="pic">
        <div
            class="next"
            @click="$emit('next', info.type)"
            :style="{'backgroundImage': `url(${info.btnPic})`}">
        </div>
        <!-- <div class="weixin" v-if="weixin" @click="weixin=false"></div> -->
    </div>
</template>

<script>

export default {
    props: ['levelInfo', 'status'],
    data() {
        return {
            // weixin: false
        };
    },
    computed: {
        info() {
            let obj = {};
            if (this.status === 'pass') {
                obj = {
                    type: 'content',
                    titlePic: 'static/image/guessDifferent/img_success.png',
                    text: '眼疾手快，一看就是老司机，少年我们走，去下一关。',
                    btnPic: 'static/image/guessDifferent/btn_continue.png'
                };
            }
            else {
                obj = {
                    type: 'align',
                    titlePic: 'static/image/guessDifferent/img_fail.png',
                    text: '少年差点功夫，下面的知识点，也许会有帮助。',
                    btnPic: 'static/image/guessDifferent/btn_agin.png'
                };
            }
            return obj;
        }
    }
    // methods: {
    //     share() {
    //         if (this.$bridge.isApp) {
    //             this.$bridge.share({
    //                 title: '鉴宝师养成计划',
    //                 desc: '如果你天赋异禀，如果你兰质蕙心，如果你颖悟绝伦，皆可免试入门。',
    //                 link: `${location.origin}/h5/guessdifferent`,
    //                 imgUrl: 'https://h5.ywbjchina.com/h5/web/img/guessDifferent/index_bg.png'
    //             });
    //         }
    //         else {
    //             this.weixin = true;
    //         }
    //     }
    // }
};
</script>

<style lang="stylus" scoped>
.toast-page
    position fixed
    top 0
    left 0
    size 100%
    background url('../assets/img/game_bg.png') 0 0/100% 100% repeat
    padding 0 .54rem
    display flex
    flex-direction column
    justify-content center
    .pic
        width 100%
        margin-bottom .71rem
    // .btns
    //     size 100% .88rem
    //     background 0 0/100% 100% repeat
    //     display flex
    //     justify-content center
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
        // .agin
        //     background-image url('../assets/img/btn_agin.png')
        // .share
        //     margin-left .4rem
        //     // background-image url('../assets/img/btn_share.png')
        // .continue
        //     background-image url('../assets/img/btn_continue.png')
    // .weixin
    //     size 100%
    //     position absolute
    //     top 0
    //     left 0
    //     background rgba(0,0,0,0.7) url('../assets/img/weixin.png') right 0/4.78rem 1.82rem no-repeat
</style>
