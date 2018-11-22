<template>
    <div class="main">
        <div id="magazine" class="magazine">
            <div class="item">
                <div class="page1">
                    <span class="text"></span>
                </div>
            </div>
            <div class="item">
                2
            </div>
            <div class="item">
                <div class="page3">
                    <div class="img3"></div>
                </div>
            </div>
            <div class="item">
                4
            </div>
            <div class="item">
                5
            </div>
            <div class="item">
                <div class="page6">
                    <span class="text"></span>
                </div>
            </div>
            <div class="item">
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import '../../assets/js/turn';

export default {
    data() {
        return {
            magazineChange: false
        };
    },
    mounted() {
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
                    console.log(e);
                    console.log(page);
                    console.log(view);
                    if (page === 2) {
                        magazineDom.css('transform', 'translate3d(0, 0, 0)');
                    }
                    if (page === 1) {
                        magazineDom.css('transform', 'translate3d(-25%, 0, 0)');
                    }
                    if (page === 5) {
                        magazineDom.css('transform', 'translate3d(0, 0, 0)');
                    }
                    if (page === 6) {
                        magazineDom.css('transform', 'translate3d(25%, 0, 0)');
                    }
                }
            }
            // ... plus any extra option you need
        });
    },
    methods: {
    }
};
</script>
<style lang='stylus' scoped>
.main
    padding-top .3rem
    .magazine
        size 100% 5rem
        font-size 1rem
        transition all .1s
        .item
            .page3
                size 100%
                padding 12px
                .img3
                    size 100%
                    background url('./assets/image/colum-01.jpeg')
                    background-size 100% 100%
        .p1,
        .p3,
        .p5
            background-image -webkit-linear-gradient(left, #dadada 0%, #e8e7e5 5%)
        .p2,
        .p4,
        .p6
            background-image -webkit-linear-gradient(left, #e8e7e5 95%, #dadada 100%)
        .page1
            size 100%
            background url('./assets/image/colum-01.jpeg')
            background-size 100% 100%
            box-shadow 2px 2px 2px 2px #000
        .page6
            size 100%
            background url('./assets/image/bg-2.png')
            background-size 100% 100%
    .magazine >>> .shadow
        transition: shadow 0.5s;
        box-shadow:0 0 20px #ccc;
</style>
