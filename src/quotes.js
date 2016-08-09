var words = require("./words.js");

exports.gen = function() {
    return [words.gen(), words.gen(), words.gen()].join(" ");
}