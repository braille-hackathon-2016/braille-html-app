<template>
    <div id="indexView">
        <div id="toolbar">
            <span class="address">Connect to {{ store.ip_address }}</span>
            <span class="time">Time: {{ store.time_taken }} seconds</span>
        </div>
        <div id="sentenceSpace">
            <span class="sentence">{{ store.current_sentence }}</span> 
        </div>
        <div id="bottomSpace">
            <div id="scores">
                <span class="help">Scores</span>
                <div class="scoreWrap">
                    <div class="score p1">{{ store.scores[0][0] }}</div>
                    <div class="smallscore p1">{{ store.scores[0][1] }}%</div>
                </div>
                <div class="scoreWrap">
                    <div class="score p2">{{ store.scores[1][0] }}</div>
                    <div class="smallscore p2">{{ store.scores[1][1] }}%</div>
                </div>
            </div>
            <div id="braille_reference">
                <span class="help">Braille Reference</span><br />
                <image src="http://www.pharmabraille.com/wp-content/uploads/2015/11/braille-alphabet-and-braille-numbers.png" height="200px"/>
            </div>
        </div>
    </div>
    <div id="loadingScreen" v-if="!store.ready">
        <h1>Please connect {{ 2 - store.connected }} more phones</h1>
        <h3>Connect to {{ store.ip_address }}</h3>
        <button v-if="store.connected==2" v-on:click="play">Play</button>
    </div>
</template>

<script>
    export default {
        data() {
                return {
                    store: this.$root.store
                }
            },
            methods: {
                play: function(event) {
                    setInterval(() => {
                        this.store.time_taken++;
                    }, 1000);
                    this.store.ready = true;
                }
            }
    }
</script>