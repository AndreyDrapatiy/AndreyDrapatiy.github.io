<template>
    <div class="score">
        <p>SCORE: <span>{{score}}</span></p>
    </div>
</template>

<script>
    import {eventBus} from './main'

    export default {
        props: ['dataScore'],
        data() {
            return {
                score: 0
            }
        },

        created() {
            eventBus.$on('scoreFactor', factor => {
                this.score += factor * 100;
            })
        }

    }
</script>

<style scoped>
    .score {
        position: absolute;
        top: 0;
        right: 0;
        left: auto;
        padding: 10px 20px;
        font-size: 28px;
        font-weight: 400;

    }

    .score span {
        font-weight: 300;
        color: #ff5722;
    }
</style>