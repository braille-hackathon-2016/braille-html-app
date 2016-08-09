var store = {
    ip_address: "wait",
    time_taken: 0,
    current_sentence: "Is this a dagger I see before me?",
    scores: [
        [0, 10],
        [5, 20]
    ]
}

try {
    require('dns').lookup(require('os').hostname(), function(err, add, fam) {
        store.ip_address = add;
    });
} catch (e) {}

module.exports = store;