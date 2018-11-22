<template>
    <div class="page">
        <Recommend/>
        <img class="museum" :src="`/static/image/guessDifferent/${name}_main.png`" alt="">
        <div class="btn" @click="next"></div>
    </div>
</template>

<script>
// import wxShare from '@utils/wxShare';
import Recommend from './components/Recommend';

export default {
    components: { Recommend },
    data() {
        return {
            name: 'xian'
        };
    },
    methods: {
        next() {
            this.$emit('changeBgAudio', 'gamebgm');
            this.$router.push('/guessdifferent/level');
        }
    },
    mounted() {
        this.$emit('changeBgAudio', 'bgm');
        // wxShare({
        //     title: '鉴宝师养成计划',
        //     desc: '如果你天赋异禀，如果你兰质蕙心，如果你颖悟绝伦，皆可免试入门。',
        //     link: `${location.origin}/h5/guessdifferent`,
        //     imgUrl: 'https://h5.ywbjchina.com/h5/web/img/guessDifferent/index_bg.png'
        // }, () => {
        //     this.$emit('changeBgAudio', 'bgm');
        // });
    }
};
</script>

<style lang="stylus" scoped>
.page
    size 100%
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    background url('./assets/img/toast.png') 0 0/100% 100% no-repeat
    .museum
        display block
        size 5.5rem 7.31rem
    .btn
        size 3.86rem 1.39rem
        background url('./assets/img/btn_play.png') 0 0/100% 100% no-repeat
</style>
