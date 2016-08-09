var words = [
    "apple", "cat", "dog", "fish", "hack", "code", "braille", "sky", "pi",
    "learn", "zoo", "why", "box", "rat",
];

function rand() {
    return words[Math.floor(Math.random() * words.length)];
}

exports.gen = function() {
    return rand() + " " + rand() + " " + rand();
}