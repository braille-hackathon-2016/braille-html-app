var quotes = require("./quotes.js");
var store = {
    ip_address: "wait",
    time_taken: 0,
    current_sentence: quotes.gen(),
    ready: false,
    connected: 0,
    player_1_current_score: 0,
    player_2_current_score: 0,
    player_1_total_score: 0,
    player_2_total_score: 0,
    paused: false,
    last_winner: null,
}

try {
    require('dns').lookup(require('os').hostname(), function(err, add, fam) {
        store.ip_address = add;
    });
} catch (e) {
    console.log(e);
}

module.exports = store;