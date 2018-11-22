<template>
    <div class="page">
        <div class="top">
            <h3 class="title">
                第{{l + 1}}关
                <span class="seconds">剩余{{Math.floor(30 - (progress/10))}}秒</span>
            </h3>
            <div class="progress-bar">
                <div class="bar" :style="barStyle">
                </div>
            </div>
            <p class="content">找出两图的<i>{{levelInfo.correct.length}}处</i>不同之处</p>
        </div>
        <div class="main">
            <div class="box">
                <img :src="levelInfo.topPic" alt="" class="pic" @click="find">
                <span class="circle"
                    v-for="(item,index) in levelInfo.correct"
                    v-if="item.isRight"
                    :key="index"
                    :style="{
                        left: `${(item.x / levelInfo.width) * 100}%`,
                        top: `${(item.y / levelInfo.height) * 100}%`
                }">
                </span>
                <span class="circle err"
                    v-for="item in errorQueue"
                    :key="item.uuid"
                    :style="{
                        left: `${item.x}%`,
                        top: `${item.y}%`
                }">
                </span>
            </div>
            <div class="box">
                <img :src="levelInfo.bottomPic" alt="" class="pic" @click="find">
                <span class="circle"
                    v-for="item in levelInfo.correct"
                    v-if="item.isRight"
                    :key="item.uuid"
                    :style="{
                        left: `${(item.x / levelInfo.width) * 100}%`,
                        top: `${(item.y / levelInfo.height) * 100}%`
                }">
                </span>
                <span class="circle err"
                    v-for="(item,index) in errorQueue"
                    :key="index"
                    :style="{
                        left: `${item.x}%`,
                        top: `${item.y}%`
                }">
                </span>
            </div>
        </div>
        <!-- <Toast v-if="over" :levelInfo="levelInfo" :status="status" @next="nextLevel" @agin="agin"></Toast> -->
        <Toast v-if="over" :levelInfo="levelInfo" :status="status" @next="nextLevel"></Toast>
    </div>
</template>

<script>
// import wxShare from '@utils/wxShare';
import cloneDeep from 'lodash/cloneDeep';
import gameInfo from './assets/gameInfo';
import Toast from './components/Toast';

export default {
    components: {
        Toast
    },
    data() {
        return {
            name: 'xian',
            over: false,
            gameInfo: cloneDeep(gameInfo),
            l: 0,
            timer: null,
            progress: 0,
            errorQueue: [],
            status: ''
        };
    },
    computed: {
        level() {
            return `level${this.l}`;
        },
        levelInfo() {
            return this.gameInfo[this.name][this.l];
        },
        barStyle() {
            const scale = this.progress / 3;
            return {
                transform: `translate3d(-${scale}%, 0, 0)`,
                backgroundImage: scale >= (2 / 3) * 100 ? 'linear-gradient(-90deg, #FF5C5C 0%, #FFC085 100%)' : 'linear-gradient(-90deg, #90FFF2 0%, #3CA7FF 100%)'
            };
        }
    },
    methods: {
        clock() {
            this.timer = setInterval(() => {
                this.progress++;
                if (this.progress >= 300) {
                    clearInterval(this.timer);
                    this.over = true;
                    this.status = 'fail';
                    this.$emit('sound', 'failure');
                }
            }, 100);
        },
        // agin(val) {
        //     this.gameInfo[this.name][this.l].correct.forEach((item, index) => {
        //         this.gameInfo[this.name][this.l].correct[index].isRight = false;
        //     });
        //     this.progress = 0;
        //     this.over = false;
        //     this.clock();
        // },
        nextLevel(val) {
            if (val === 'align') {
                this.gameInfo[this.name][this.l].correct.forEach((item, index) => {
                    this.gameInfo[this.name][this.l].correct[index].isRight = false;
                });
                this.progress = 0;
                this.over = false;
                this.clock();
                return;
            }
            if (this.l === this.gameInfo[this.name].length - 1) {
                this.$router.push('/guessdifferent/result');
                return;
            }
            this.l++;
            this.progress = 0;
            this.over = false;
            this.clock();
        },
        find(e) {
            let flag = false;
            const coordX = (e.offsetX / e.target.offsetWidth) * 100;
            const coordY = (e.offsetY / e.target.offsetHeight) * 100;
            this.gameInfo[this.name][this.l].correct.forEach((item, index) => {
                const x = (item.x / this.levelInfo.width) * 100;
                const y = (item.y / this.levelInfo.height) * 100;
                if (Math.abs(x - coordX) <= 10 && Math.abs(y - coordY) <= 10) {
                    this.gameInfo[this.name][this.l].correct[index].isRight = true;
                    flag = true;
                }
            });
            if (flag) {
                if (this.gameInfo[this.name][this.l].correct.every(i => i.isRight)) {
                    clearInterval(this.timer);
                    this.status = 'pass';
                    this.$emit('sound', 'pass');
                    setTimeout(() => {
                        this.over = true;
                    }, 500);
                }
                else {
                    this.$emit('sound', 'succeed');
                }
            }
            else {
                this.$emit('sound', 'error');
                const uuid = Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
                this.errorQueue.push({
                    uuid,
                    x: coordX,
                    y: coordY
                });
                this.progress += 10;
                setTimeout(() => {
                    const i = this.errorQueue.findIndex(err => err.uuid === uuid);
                    if (i >= 0) {
                        this.errorQueue.splice(i, 1);
                    }
                }, 1000);
            }
        }
    },
    mounted() {
        this.clock();
        this.$emit('changeBgAudio', 'gamebgm');
        // wxShare({
        //     title: '鉴宝师养成计划',
        //     desc: '如果你天赋异禀，如果你兰质蕙心，如果你颖悟绝伦，皆可免试入门。',
        //     link: `${location.origin}/h5/guessdifferent`,
        //     imgUrl: 'https://h5.ywbjchina.com/h5/web/img/guessDifferent/index_bg.png'
        // }, () => {
        //     this.$emit('changeBgAudio', 'gamebgm');
        // });
    }
};
</script>

<style lang="stylus" scoped>
@keyframes draw
    0%
        border none
    25%
        border-top 2px solid green
    50%
        border-top 2px solid green
        border-right 2px solid green
    75%
        border-top 2px solid green
        border-right 2px solid green
        border-bottom 2px solid green
    100%
        border 2px solid green
.page
    size 100%
    overflow hidden
    padding 1.6rem .14rem 0
    position relative
    background url('./assets/img/game_bg.png') 0 0/100% 100% no-repeat
    .top
        size 100% 1.6rem
        position absolute
        top 0rem
        left 0rem
        padding .22rem .14rem 0 1.44rem
        &:after
            position absolute
            left 0
            top 0
            content ''
            size 1.23rem 1.6rem
            background url('./assets/img/timing_icon.png') 0 0/100% 100% no-repeat
        .title
            font-size .36rem
            color #fff
            font-weight 900
            .seconds
                font-weight 900
                float right
                font-size .28rem
        .progress-bar
            margin .12rem 0
            size 100% .3rem
            border .075rem solid #000
            border-radius .15rem
            overflow hidden
            .bar
                size 100%
                background-image linear-gradient(-90deg, #90FFF2 0%, #3CA7FF 100%)
                border-radius .075rem
        .content
            font-size .22rem
            color #bcbcbc
            i
                color #fff
    .main
        size 100%
        padding .4rem .45rem .6rem
        display flex
        flex-direction column
        justify-content space-between
        background url('./assets/img/game_box_bg.png') 0 0/100% 100% no-repeat
        .box
            position relative
            size 100% 46%
            display flex
            justify-content center
            align-items center
            .pic
                max-width 100%
                max-height 100%
                min-width 100%
                min-height 100%
            .circle
                position absolute
                size .72rem .66rem
                background url('./assets/img/correct.png') 0 0/100% 100% no-repeat
                transform translate(-50%, -50%)
            .err
                width .67rem
                background-image url('./assets/img/error.png')
</style>
