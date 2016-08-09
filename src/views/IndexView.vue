<template>
    <div id="indexView">
        <div id="toolbar">
            <span class="address">Connect to 192.168.0.22</span>
            <span class="time">Time: 32 seconds</span>
        </div>
        <div id="sentenceSpace">
            <span class="sentence">Is this a dagger I see before me?</span> 
        </div>
        <div id="bottomSpace">
            <div id="scores">
                <span class="help">Scores</span>
                <div class="scoreWrap">
                    <div class="score p1">32</div>
                    <div class="smallscore p1">16%</div>
                </div>
                <div class="scoreWrap">
                    <div class="score p2">32</div>
                    <div class="smallscore p2">94%</div>
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

            }
        }
    }
</script>