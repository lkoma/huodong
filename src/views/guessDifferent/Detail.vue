<template>
    <div class="page">
        <img :src="this.base64" alt="" class="pic_template">
        <img :src="`/h5/web/img/guessDifferent/${name}_finish.png`" alt="" class="pic">
        <div class="share" @click="share"></div>
        <p class="text" v-if="$bridge.isWeixin">长按保存图片</p>
        <div class="weixin" v-if="weixin" @click="weixin=false"></div>
        <div class="temp" ref="imgTemplate" :style="{
            backgroundImage: `url(/h5/web/img/guessDifferent/${name}_pic_template.png)`
        }">
            <p class="time">
                {{year}}
                <span class="date">{{date}}</span>
            </p>
        </div>
    </div>
</template>

<script>
// import wxShare from '@utils/wxShare';
// import html2canvas from 'html2canvas';

export default {
    data() {
        return {
            weixin: false,
            name: 'xian',
            base64: '',
            year: '',
            date: ''
        };
    },
    methods: {
        share() {
            if (this.$bridge.isApp) {
                this.$bridge.share({
                    title: '鉴宝师养成计划',
                    desc: '如果你天赋异禀，如果你兰质蕙心，如果你颖悟绝伦，皆可免试入门。',
                    link: `${location.origin}/h5/guessdifferent`,
                    imgUrl: 'https://h5.ywbjchina.com/h5/web/img/guessDifferent/index_bg.png'
                });
            }
            else {
                this.weixin = true;
            }
        }
    },
    mounted() {
        const dateNames = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
        const d = new Date();
        const date = d.getDate();
        const month = (d.getMonth() + 1);
        const dateSingle = dateNames[date % 10];
        const dateTen = dateNames[(date - (date % 10)) / 10];
        const monthSingle = dateNames[month % 10];
        const monthTen = dateNames[(month - (month % 10)) / 10];
        this.year = new Date().getFullYear();
        this.date = `${monthTen ? `${monthTen === '一' ? '' : monthTen}十` : monthTen}${monthSingle}月${dateTen ? `${dateTen === '一' ? '' : dateTen}十` : dateTen}${dateSingle}日`;

        // html2canvas(this.$refs.imgTemplate, {
        //     scale: 1,
        //     logging: false,
        //     useCORS: true
        // }).then(c => {
        //     this.base64 = c.toDataURL('image/png', 1);
        // });
        // wxShare({
        //     title: '鉴宝师养成计划',
        //     desc: '如果你天赋异禀，如果你兰质蕙心，如果你颖悟绝伦，皆可免试入门。',
        //     link: `${location.origin}/h5/guessdifferent`,
        //     imgUrl: 'https://h5.ywbjchina.com/h5/web/img/guessDifferent/index_bg.png'
        // });
    }
};
</script>

<style lang="stylus" scoped>
.page
    position fixed
    top 0
    left 0
    width 100%
    min-height 100%
    background url('./assets/img/game_bg.png') 0 0/100% 100% repeat
    padding 1.45rem .54rem 1rem
    overflow hidden
    .pic_template
        position fixed
        size 100%
        top 0
        left 0
        z-index 10
        opacity 0
    .pic
        display block
        width 100%
        margin-bottom .71rem
    .text
        font-size .22rem
        color #e3e3e3
        text-align center
    .share
        size 2.5rem 1.1rem
        margin 0 auto
        background 0 0/100% 100% no-repeat
        // background-image url('./assets/img/share.png')
        position relative
        z-index 11
    .weixin
        size 100%
        position absolute
        top 0
        left 0
        background rgba(0,0,0,0.7) url('./assets/img/weixin.png') right 0/4.78rem 1.82rem no-repeat
        z-index 11
    .temp
        size 750px 1129px
        position absolute
        bottom -1129px
        background-size 100% 100%
        background-repeat no-repeat
        background-position 0 0
        .time
            position absolute
            bottom 130px
            left 80px
            font-size 40px
            font-weight 900
            color #e5dbc9
            text-indent 25px
            .date
                display block
                font-size 25px
                font-weight normal
                color #69513d
                padding 15px 40px
                text-indent 0px
                background url('./assets/img/time_bg.png') 0 0/100% 100% repeat
    // .btns
    //     size 100% .88rem
    //     background 0 0/100% 100% repeat
    //     display flex
    //     justify-content center
    //     .btn
    //         size 2.26rem .88rem
    //         background 0 0/100% 100% no-repeat
    //     .agin
    //         background-image url('../assets/img/btn_agin.png')
    //     .share
    //         margin-left .4rem
    //         background-image url('../assets/img/btn_share.png')
    //     .continue
    //         background-image url('../assets/img/btn_continue.png')
</style>
