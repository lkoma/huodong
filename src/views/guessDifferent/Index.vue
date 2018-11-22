<template>
    <div>
        <transition :name="className">
            <router-view @changeBgAudio="changeBgAudio" @sound="sound"></router-view>
        </transition>
        <audio src="static/media/guessDifferent/index_bg.mp3" ref="bgm" preload="auto" @ended="sound('bgm')"></audio>
        <audio src="static/media/guessDifferent/game_bg.mp3" ref="gamebgm" preload="auto" @ended="sound('gamebgm')" class="audio_ele"></audio>
        <audio src="static/media/guessDifferent/pass.mp3" ref="pass" preload="auto" class="audio_ele"></audio>
        <audio src="static/media/guessDifferent/failure.mp3" ref="failure" preload="auto" class="audio_ele"></audio>
        <audio src="static/media/guessDifferent/succeed.mp3" ref="succeed" preload="auto" class="audio_ele"></audio>
        <audio src="static/media/guessDifferent/error.mp3" ref="error" preload="auto" class="audio_ele"></audio>
    </div>
</template>

<script>

export default {
    data() {
        return {
            className: 'slide-in',
            routerHistory: []
        };
    },
    watch: {
        $route(to, from) {
            // this.$store.dispatch('system/setError', '');
            if (!this.routerHistory.length) {
                this.className = 'slide-in';
                this.routerHistory.push(from.path, to.path);
                return;
            }
            const index = this.routerHistory.indexOf(to.path);
            if (index !== -1) {
                this.className = 'slide-out';
                this.routerHistory = this.routerHistory.slice(0, index + 1);
                return;
            }
            this.className = 'slide-in';
            this.routerHistory.push(to.path);
        }
    },
    methods: {
        changeBgAudio(type) {
            if (type === 'gamebgm') {
                this.$refs.bgm.pause();
                this.$refs.gamebgm.play();
            }
            else {
                this.$refs.gamebgm.pause();
                this.$refs.bgm.play();
            }
        },
        sound(type) {
            this.$refs[type].load();
            this.$refs[type].play();
        }
    },
    mounted() {
        // this.changeBgAudio('bgm');
        // wxShare({
        //     title: '鉴宝师养成计划',
        //     desc: '如果你天赋异禀，如果你兰质蕙心，如果你颖悟绝伦，皆可免试入门。',
        //     link: `${location.origin}/h5/guessdifferent`,
        //     imgUrl: 'https://h5.ywbjchina.com/h5/web/img/guessDifferent/index_bg.png'
        // }, () => {
        //     this.changeBgAudio(this.$route.name === 'guessDifferentLevel' ? 'gamebgm' : 'bgm');
        // });
        this.changeBgAudio(this.$route.name === 'guessDifferentLevel' ? 'gamebgm' : 'bgm');
    }
    // asyncData() {
    //     return Promise.resolve({ title: '鉴宝师培养计划' });
    // }
};
</script>

<style lang="stylus" scoped>
.slide-in-enter
    transform translate3d(100%, 0, 0)
.slide-in-enter-to
    transform translate3d(0, 0, 0)
.slide-in-enter-active
    transition transform .5s
    position fixed !important
    top 0
    left 0
    z-index 2
.slide-in-leave
    opacity 1
.slide-in-leave-to
    opacity .6
.slide-in-leave-active
    transition opacity .4s
    position fixed !important
    top 0
    left 0
    z-index 1

.slide-out-leave
    opacity 1
    transform translate3d(0, 0, 0)
.slide-out-leave-to
    opacity .6
    transform translate3d(100%, 0, 0)
.slide-out-leave-active
    transition all .4s
    position fixed !important
    top 0
    left 0
    z-index 2
#app
    size 100%
</style>
