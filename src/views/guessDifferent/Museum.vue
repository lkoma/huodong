<template>
    <div class="page">
        <transition name="fade">
            <div class="list" @click="animationend">
                <div class="main">
                    <div class="body"></div>
                    <div class="text">
                        <span
                            class="t"
                            v-for="(t,index) in text"
                            :key="index"
                            :style="tStyle(index)"
                            v-if="textShow">
                            {{t}}
                        </span>
                    </div>
                </div>
                <div class="wenwu">
                    <img :src="item.icon" alt="" v-for="(item,key) in gameInfo" :key="key" class="icon">
                </div>
                <p class="tip">点击继续</p>
            </div>
        </transition>
        <game-start ref="gameStart"/>
    </div>
</template>

<script>
import gameInfo from './assets/gameInfo';
import GameStart from './components/GameStart';

export default {
    components: {
        GameStart
    },
    data() {
        return {
            textList: [
                '成为独具慧眼的鉴宝师，拥有众品寻真的火眼金睛，可不是一朝一夕的功夫。想要入门，先看看你的眼力如何吧。',
                '元青花是迎合中东贵族的外销瓷。据载：沉没在南海的商船超过2000艘。目前，收藏在南海博物馆的瓷器中就有珍贵的元青花。'
            ],
            text: '成为独具慧眼的鉴宝师，拥有众品寻真的火眼金睛，可不是一朝一夕的功夫。想要入门，先看看你的眼力如何吧。',
            textShow: true
        };
    },
    computed: {
        gameInfo() {
            return gameInfo.xian;
        }
    },
    mounted() {
        this.$emit('changeBgAudio', 'bgm');
        const time = ((this.textList[0].length / 8) + 1.6) * 1000;
        const time2 = ((this.textList[1].length / 8) + 0.8) * 1000;
        setTimeout(() => {
            this.textShow = false;
            setTimeout(() => {
                this.text = '元青花是迎合中东贵族的外销瓷。据载：沉没在南海的商船超过2000艘。目前，收藏在南海博物馆的瓷器中就有珍贵的元青花。';
                this.textShow = true;
            }, 0);
        }, time);
        setTimeout(() => {
            this.$refs.gameStart.show();
        }, time + time2);
    },
    methods: {
        tStyle(i) {
            return {
                animationDelay: `${(i / 8) + 0.8}s`
            };
        },
        animationend() {
            this.$refs.gameStart.show();
        }
    }
};
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
    transition opacity .2s
.fade-enter, .fade-leave-to
    opacity 0.5
@keyframes move
    from
        transform translateY(300%)
    to
        transform translateY(0%)
@keyframes show
    from
        opacity 0
    to
        opacity 1
.page
    size 100%
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    background url('./assets/img/game_bg.png') 0 0/100% 100% no-repeat
    .list
        size 100%
        position fixed
        top 0
        left 0
        display flex
        flex-direction column
        justify-content flex-end
        align-items center
        background #fff
        overflow hidden
        background url('./assets/img/recommend_bg.png') 0 0/100% 100% no-repeat
        .main
            position relative
            .body
                size 3.22rem 3.85rem
                opacity 0
                animation show 1s
                animation-delay .4s
                animation-fill-mode forwards
                background url('./assets/img/body.png') 0 0/100% 100% no-repeat
            .text
                animation show .8s
                animation-delay .8s
                animation-fill-mode forwards
                opacity 0
                position absolute
                left -1rem
                top -3rem
                size 5.27rem 3.81rem
                padding .61rem .68rem .8rem
                line-height .48rem
                text-align center
                background url('./assets/img/text.png') 0 0/100% 100% no-repeat
                z-index -1
                .t
                    display inline-block
                    size .32rem
                    font-size .32rem
                    line-height .32rem
                    color #333
                    animation show .5s
                    animation-fill-mode forwards
                    opacity 0
        .wenwu
            size 100% 1.2rem
            padding 0 .2rem
            margin .2rem 0 .3rem
            display flex
            justify-content space-around
            img
                height 100%
                animation move 1s
                animation-fill-mode forwards
                transform translateY(400%)
                for i in 1 2 3 4 5 6 7 8
                    &:nth-child({i})
                        animation-delay ((i / 2)+3) s
        .tip
            font-size .3rem
            height 2.3rem
            color #e1d6a6
            padding-top 1.2rem
</style>
