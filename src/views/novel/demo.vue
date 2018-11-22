<template>
    <div class="flipbook-viewport">
        <div class="container">
            <div class="flipbook">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import '../../assets/js/turn2';

export default {
    components: {},
    data() {
        return {
        };
    },
    mounted() {
        $('.flipbook').turn({
            // Width

            width: 922,
            // Height

            height: 600,
            // Elevation

            elevation: 50,
            // Enable gradients

            gradients: true,
            // Auto center this flipbook

            autoCenter: true

        });
    },
    methods: {
    }
};
</script>
<style lang='stylus' scoped>
body{
    overflow:hidden;
    background-color:#fcfcfc;
    margin:0;
    padding:0;
}

.flipbook-viewport{
    overflow:hidden;
    width:100%;
    height:100%;
}

.flipbook-viewport .container
    position:absolute;
    top:50%;
    left:50%;
    margin:auto;
.flipbook-viewport .flipbook
    width:922px;
    height:600px;
    left:-461px;
    top:-300px
.flipbook-viewport .shadow
    transition shadow 0.5s
    box-shadow 0 0 20px #ccc
</style>
