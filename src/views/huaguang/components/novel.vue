<template>
    <transition name="fade" mode="out-in">
        <div class="main" v-show="showNovel" @click.stop="showNovel = false">
            <div id="magazine" class="magazine">
                <div class="cover"></div>
                <div class="cover-back"></div>
                <div class="directory">
                    <span @click="aa">哈哈</span>
                </div>
                <div v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
                    <div :class="[`page${i}`, 'item']" :style="{'backgroundImage': `url('static/image/novel/page_${i}.png')`}"></div>
                </div>
                <div class="after-cover"></div>
            </div>
        </div>
    </transition>
</template>

<script>
import $ from 'jquery';
import '../../../assets/js/turn';

export default {
    data() {
        return {
            magazineChange: false,
            showNovel: false
        };
    },
    methods: {
        show() {
            this.showNovel = true;
            this.initPage();
        },
        hide() {
            this.showNovel = false;
        },
        aa() {
            $('#magazine').turn('page', 5);
        },
        initPage() {
            const magazineDom = $('#magazine');
            magazineDom.turn({
                width: '100%',
                height: '5rem',
                elevation: 50,
                autoCenter: true,
                gradients: true,
                acceleration: true,
                when: {
                    turning(e, page, view) {
                        // console.log(e);
                        console.log(page);
                        console.log(view);
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
        }
    }
};
</script>
<style lang='stylus' scoped>
.fade-enter-active, .fade-leave-active
    transition opacity .3s
.fade-enter, .fade-leave-to
    opacity 0
.main
    size 100%
    background rgba(0,0,0,.7)
    position fixed
    top 0
    left 0
    z-index 1000
    .magazine
        size 100% 5rem
        transition all .1s
        position absolute
        top 50%
        transform translateY(-50%)
        .item
            size 100%
            background-size 100% 100%
        .cover
            background url('../assets/image/cover.png') 0 0/100% 100% no-repeat
        .cover-back
            background #fff
        .directory
            background #ccc
        .after-cover-back
            background #ccc
        .after-cover
            background #fff
    .magazine >>> .shadow
        transition: shadow 0.5s;
        box-shadow:0 0 20px #ccc;
</style>
