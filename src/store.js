var store = {
    ip_address: "wait",
    time_taken: 0,
    current_sentence: "Is this a dagger I see before me?",
    ready: false,
    connected: 0,
    scores: [
        [0, 0],
        [0, 0]
    ]
}

try {
    require('dns').lookup(require('os').hostname(), function(err, add, fam) {
        store.ip_address = add;
    });
} catch (e) {
    console.log(e);
}

module.exports = store;