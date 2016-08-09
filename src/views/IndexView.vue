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
</template>

<script>
    export default {
        data() {
            return {
                store: this.$root.store
            }
        }
    }
</script>