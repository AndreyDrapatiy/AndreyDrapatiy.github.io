<template>
    <div class="main">
        <button v-on:click="loopStart" v-if="buttonVisible" class="pure-material-button-contained">start</button>
        <app-item
                :dataAddTime="addTime"
                :dataScoreFactor="scoreFactor"
                :dataClass="itemClass"
                :dataPosX="posX"
                :dataPosY="posY">
        </app-item>

        <app-score></app-score>
        <app-timer></app-timer>
    </div>
</template>

<script>
    import appItem from './Item.vue';
    import appScore from './Score';
    import appTimer from './Timer';
    import {eventBus} from './main'


    export default {
        data() {
            return {
                buttonVisible: true,

                itemModel: [
                    {class: 'red-s', factor: 3, time: 3},
                    {class: 'yellow-m', factor: 2, time: 2},
                    {class: 'green-l', factor: 1, time:1}
                ],

                scoreFactor: 0,
                addTime: 0,
                itemClass: '',
                posX: '',
                posY: '',
            }
        },
        components: {
            appItem: appItem,
            appScore: appScore,
            appTimer: appTimer
        },
        methods: {
            loopStart() {
                let i;
                let interval = 1200;

                this.buttonVisible = false;

                eventBus.$emit('timerStart', true);

                function getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max));
                }

                setInterval(() => {
                    interval = interval > 800 ? interval -= 100 : interval = 800;
                    clearInterval(i);
                    start();
                }, 5000);

                const start = () => {
                    i = setInterval(() => {

                        let current = getRandomInt(3);

                        this.itemClass = this.itemModel[current].class;
                        this.scoreFactor = this.itemModel[current].factor;
                        this.addTime = this.itemModel[current].time;
                        this.posY = getRandomInt(window.innerHeight - 125);
                        this.posX = getRandomInt(window.innerWidth - 125);

                    }, interval)
                };

                start();//first start

            }
        }
    }
</script>

<style>
    body {
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: 0;
    }

    .main{
        height: 100vh;
        background: #263238;
        color:#eceff1;
    }

    .pure-material-button-contained {
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ff5722;
        display: inline-block;
        box-sizing: border-box;
        border: none;
        width: 160px;
        border-radius: 4px;
        padding: 0 16px;
        color:#eceff1;
        min-width: 64px;
        height:46px;
        vertical-align: middle;
        text-align: center;
        text-transform: uppercase;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        font-size: 20px;
        font-weight: 500;
        overflow: hidden;
        outline: none;
        cursor: pointer;
        transition: box-shadow 0.2s;
    }

    .green-l, .yellow-m, .red-s{
        position: absolute;
        border-radius: 50%;
        transition: 100ms;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    .green-l:hover, .yellow-m:hover, .red-s:hover{
        box-shadow: 0 0 16px rgba(0,0,0,0.8);
    }

    .green-l {
        background: #64dd17;
        width: 125px;
        height: 125px;
    }

    .yellow-m {
        background: #ffd600;
        width: 75px;
        height: 75px;
    }

    .red-s {
        background: #dd2c00;
        width: 25px;
        height: 25px;

       }
</style>