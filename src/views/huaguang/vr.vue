<template>
    <div class="main">
        <div class="loading" v-show="loading"></div>
        <div id="gameContainer" class="game-container" v-show="!loading"></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            VR: null,
            loading: true
        };
    },
    mounted() {
        const that = this;
        window.gameInstance = window.UnityLoader.instantiate(
            'gameContainer',
            'static/vr/Build/webgl.json',
            {
                onProgress(a, progress) {
                    if (progress >= 1) {
                        that.loading = false;
                    }
                }
            }
        );
    },
    methods: {
    }
};
</script>
<style lang='stylus' scoped>
@keyframes load
    0%
        transform translate(-50%, -50%) rotateZ(0)
    100%
        transform translate(-50%, -50%) rotateZ(360deg)
.main
    size 100%
    background rgb(0,0,0)
    .loading
        size 1rem
        background url('./assets/image/loading.png') 0 0/100% 100% no-repeat
        animation load 2s linear infinite
        position absolute
        top 50%
        left 50%
        transform-origin center
        transform translate(-50%, -50%)
    .game-container
        size 100% auto
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
</style>
