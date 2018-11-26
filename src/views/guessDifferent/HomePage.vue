<template>
    <div class="page">
        <div class="btn">
            加载中{{progress}}%
        </div>
    </div>
</template>

<script>
import gameInfo from './assets/gameInfo';

function loadImg(url) {
    return new Promise(res => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            res();
        };
        img.onerror = () => {
            res();
        };
    });
}

function loadAudio(audio) {
    return new Promise(res => {
        audio.addEventListener('canplay', () => {
            res();
        }, false);
        setTimeout(() => {
            res();
        }, 3000);
        audio.load();
    });
}
function loadAudioQueue() {
    const audios = document.getElementsByClassName('audio_ele');
    return Promise.all(Array.from(audios).map(item => loadAudio(item)));
}
export default {
    data() {
        return {
            timer: null,
            progress: 0
        };
    },
    methods: {
        timing(speed) {
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                this.progress++;
                if (this.progress >= 100) {
                    clearInterval(this.timer);
                    this.$router.push('/guessdifferent/museum');
                }
            }, speed);
        }
    },
    mounted() {
        this.timing(200);
        const imgLoaderQueue = gameInfo.xian.reduce((per, cur) => {
            per.push(loadImg(cur.bottomPic));
            per.push(loadImg(cur.topPic));
            per.push(loadImg(cur.passPic));
            per.push(loadImg(cur.failPic));
            return per;
        }, [
            loadImg('/static/image/guessDifferent/xian_finish.png'),
            loadImg('/static/image/guessDifferent/xian_pic_template.png'),
            loadImg('/static/image/guessDifferent/xian_main.png'),
            loadImg(require('./assets/img/recommend_bg.png')),
            loadAudioQueue()
        ]);
        Promise.all(imgLoaderQueue).then(() => {
            this.timing(20);
            this.$emit('changeBgAudio', 'bgm');
            // wxShare({
            //     title: '鉴宝师养成计划',
            //     desc: '如果你天赋异禀，如果你兰质蕙心，如果你颖悟绝伦，皆可免试入门。',
            //     link: `${location.origin}/h5/guessdifferent`,
            //     imgUrl: 'https://h5.ywbjchina.com/h5/web/img/guessDifferent/index_bg.png'
            // }, () => {
            //     this.$emit('changeBgAudio', 'bgm');
            // });
        });
    }
};
</script>

<style lang="stylus" scoped>
.page
    size 100%
    position fixed
    background url('./assets/img/index_bg.png') 0 0/100% 100% no-repeat
    display flex
    flex-direction column
    justify-content flex-end
    align-items center
    .btn
        size 4.39rem 1.22rem
        margin-bottom .3rem
        padding 0.2rem 0.6rem 0.4rem
        text-align center
        line-height .62rem
        color #fff
        font-size .3rem
        background url('./assets/img/btn_goplay.png') 0 0/100% 100% no-repeat
</style>
