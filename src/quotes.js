var words = [
    "apple", "cat", "dog", "fish", "hack", "code", "braille", "sky", "pi",
    "learn"
];

function rand() {
    return words[Math.floor(Math.random() * words.length)];
}

exports.gen = function() {
    return rand() + " " + rand() + " " + rand();
}