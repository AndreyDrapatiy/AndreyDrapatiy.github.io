<template>
    <div class="timer">
        <p>TIME LEFT: <span>{{time}}</span></p>
    </div>
</template>

<script>
    import {eventBus} from "./main";

    export default {
        data(){
            return{
                time: 10
            }
        },
        methods:{

            timer: function () {
                setInterval(()=>{
                    this.time > 0 ? this.time -= 1 : this.gameOver();
                },1000)
            },


            gameOver: function () {
                confirm('GAME OVER. PRESS "OK" TO RESTART');
                location.reload();
            }
        },

        created(){
            eventBus.$on('timerStart', data => {
                if(data){
                   this.timer()
                }
            });

            eventBus.$on('addTime', data =>{
                this.time += data;
            });
        }
    }
</script>

<style scoped>
    .timer {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 30px;
        font-size: 28px;
        font-weight: 400;
    }

    .timer span {
        font-weight: 300;
        color: #ff5722;
    }
</style>