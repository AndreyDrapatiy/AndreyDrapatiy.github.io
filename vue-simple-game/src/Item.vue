<template>
    <div v-bind:class="dataClass"
         v-bind:style="{ left: dataPosX+'px', top: dataPosY+ 'px' }"
         v-on:click="scoreTimeUp">
    </div>
</template>

<script>

    import {eventBus} from './main'

    export default {

        props: ['dataScoreFactor', 'dataAddTime', 'dataClass', 'dataPosX', "dataPosY"],
        data() {
            return {}
        },

        methods: {
            scoreTimeUp() {
                eventBus.$emit('scoreFactor', this.$props.dataScoreFactor);
                eventBus.$emit('addTime', this.$props.dataAddTime);
            }
        }
    }
</script>

