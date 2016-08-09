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
                    <div class="score p1">{{ store.player_1_current_score }}%</div>
                    <div class="smallscore p1">{{ store.player_1_total_score }}</div>
                </div>
                <div class="scoreWrap">
                    <div class="score p2">{{ store.player_2_current_score }}%</div>
                    <div class="smallscore p2">{{ store.player_2_total_score }}</div>
                </div>
            </div>
            <div id="braille_reference">
                <span class="help">Braille Reference</span><br />
                <image src="http://faculty.washington.edu/chudler/gif/braille.gif" height="350px"/>
            </div>
        </div>
    </div>
    <div id="loadingScreen" v-if="!store.ready">
        <h1>Please connect {{ 2 - store.connected }} more phones</h1>
        <h3>Connect to {{ store.ip_address }}</h3>
        <button v-if="store.connected==2" v-on:click="play">Play</button>
    </div>
    <div id="paused" v-if="store.paused">
        <h1>Player {{ store.last_winner+1 }} won that round</h1>
        <h3>Generating new sentence...</h3>
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
                    this.store.server.sendAll("sentence", [this.store.current_sentence]);
                }
            }
    }
</script>