<template>
    <div class="main">
        <div id="magazine" class="magazine">
            <div class="cover"></div>
            <div class="cover-back"></div>
            <div class="directory">
                <ul>
                    <li
                        v-for="(item, index) in directoryList"
                        :key="index"
                        :class="['title', item.position]"
                        :style="{'top': item.top, 'left': item.left}"
                        @click="directory(index)">
                        {{item.title}}
                        <span class="flag" v-if="active === index"></span>
                        <span class="setsail" v-if="active === index"></span>
                    </li>
                </ul>
            </div>
            <div v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
                <div :class="[`page${i}`, 'item']" :style="{'backgroundImage': `url('static/image/novel/page_${i}.png')`}"></div>
            </div>
            <div class="after-cover"></div>
        </div>
        <div class="operation">
            <div class="content" @click="content"></div>
            <div :class="['player', playing ? 'active' : '']" @click="player(playing)"></div>
        </div>
        <audio
            :src="bgm"
            ref="bgm"
            @ended="ended">
        </audio>
    </div>
</template>

<script>
import $ from 'jquery';
import '../../assets/js/turn';

export default {
    data() {
        return {
            magazineChange: false,
            bgm: '',
            playing: false,
            directoryList: [
                {
                    title: '小螃蟹和小荷花',
                    top: '1.48rem',
                    left: '0.81rem',
                    position: 'right'
                },
                {
                    title: '杰克船长',
                    top: '1.73rem',
                    left: '2.5rem',
                    position: 'left'
                },
                {
                    title: '器龙讨封',
                    top: '2.02rem',
                    left: '1.24rem',
                    position: 'right'
                },
                {
                    title: '幽灵船',
                    top: '3.2rem',
                    left: '0.41rem',
                    position: 'right'
                }
            ],
            active: 0
        };
    },
    mounted() {
        const that = this;
        const magazineDom = $('#magazine');
        magazineDom.turn({
            width: '100%',
            height: '5.316rem',
            elevation: 50,
            autoCenter: true,
            gradients: true,
            acceleration: true,
            when: {
                turning(e, page) {
                    that.bgmHandle(page);
                    if (page === 2) {
                        magazineDom.css('transform', 'translate3d(0, -50%, 0)');
                    }
                    if (page === 1) {
                        magazineDom.css('transform', 'translate3d(-25%, -50%, 0)');
                    }
                    if (page === 11) {
                        magazineDom.css('transform', 'translate3d(0, -50%, 0)');
                    }
                    if (page === 12) {
                        magazineDom.css('transform', 'translate3d(25%, -50%, 0)');
                    }
                }
            }
        });
    },
    methods: {
        directory(index) {
            this.active = index;
            setTimeout(() => {
                let num = 0;
                if (index === 0) {
                    num = 5;
                }
                if (index === 1) {
                    num = 6;
                }
                if (index === 2) {
                    num = 8;
                }
                if (index === 3) {
                    num = 10;
                }
                $('#magazine').turn('page', num);
            }, 200);
        },
        content() {
            $('#magazine').turn('page', 2);
        },
        player(playing) {
            if (!this.bgm) {
                return;
            }
            if (playing) {
                this.$refs.bgm.pause();
                this.playing = false;
                console.log(this.bgm);
                return;
            }
            this.$refs.bgm.play();
            this.playing = true;
        },
        ended() {
            this.$refs.bgm.load();
            this.$refs.bgm.pause();
            this.playing = false;
        },
        bgmHandle(page) {
            this.$refs.bgm.pause();
            this.playing = false;
            switch (page) {
                case 4:
                case 5:
                    this.bgm = 'static/media/novel/reader_05.mp3';
                    break;
                case 6:
                case 7:
                    this.bgm = 'static/media/novel/reader_06.mp3';
                    break;
                case 8:
                case 9:
                    this.bgm = 'static/media/novel/reader_08.mp3';
                    break;
                case 10:
                case 11:
                    this.bgm = 'static/media/novel/reader_10.mp3';
                    break;
                default:
                    this.bgm = '';
                    break;
            }
            setTimeout(() => {
                this.player(false);
            }, 0);
        }
    }
};
</script>
<style lang='stylus' scoped>
.main
    size 100%
    background url('./assets/image/bg.png') 0 0/100% 100% no-repeat
    overflow hidden
    .magazine
        size 100% 5.316rem
        transition all .1s
        position absolute
        top 50%
        transform translateY(-50%)
        .item
            size 100%
            background-size 100% 100%
        .cover
            background url('./assets/image/cover.png') 0 0/100% 100% no-repeat
        .cover-back
            background url('./assets/image/preface.png') 0 0/100% 100% no-repeat
        .directory
            background url('./assets/image/directory.png') 0 0/100% 100% no-repeat
            .title
                position absolute
                font-size .16rem
                .flag
                    size .32rem .267rem
                    background url('./assets/image/flag.png') center/100% 100% no-repeat
                    position absolute
                .setsail
                    size .32rem .267rem
                    background url('./assets/image/setsail.png') center/100% 100% no-repeat
                    position absolute
                &.right
                    .flag
                        top -.1rem
                        right -.36rem
                    .setsail
                        top -.08rem
                        right -.68rem
                &.left
                    .flag
                        top -.1rem
                        left -.16rem
                    .setsail
                        top -.08rem
                        left -.6rem
        .after-cover
            background url('./assets/image/after-cover.png') center/100% 100% no-repeat
    .magazine >>> .shadow
        transition: shadow 0.5s;
        box-shadow:0 0 20px #ccc;
    .operation
        size 100% .4rem
        // background red
        position absolute
        top 9.2rem
        left 0
        padding 0 2.6rem
        display flex
        justify-content space-around
        align-items center
        .content
            size .4rem .3rem
            background url('./assets/image/icon_content.png') 0 0/100% 100% no-repeat
        .player
            size .4rem
            background url('./assets/image/icon_play.png') 0 0/100% 100% no-repeat
            &.active
                background url('./assets/image/icon_pause.png') 0 0/100% 100% no-repeat
</style>
