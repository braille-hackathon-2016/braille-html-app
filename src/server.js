var store = require("./store.js");
var WebSocketServer = ws.Server;
var quotes = require("./quotes.js");

var wss = new WebSocketServer({ port: 25543 })

var connections = [];

function pause(time) {
    store.paused = true;
    setTimeout(() => {
        store.paused = false;
        newSentence();
    }, time);
}

function newSentence() {
    store.current_sentence = quotes.gen();
    sendAll("sentence", [store.current_sentence]);
}

wss.on("connection", ws => {

    if (store.connected >= 2 || store.ready) {
        return ws.close();
    }

    store.connected++;
    connections.push(ws);
    ws.num = connections.indexOf(ws);
    send(ws, "playerInfo", [ws.num]);

    ws.on("close", () => {
        store.connected--;
        connections.splice(connections.indexOf(ws), 1);
    });

    ws.on("message", (data, flags) => {
        var split = data.split(" ");
        var command = split[0];
        var args = split.slice(1);

        if (command == "progress") {
            var prog = parseInt(args[0]);
            var identifier = "player_" + (ws.num + 1);
            if (prog + 1 < store.current_sentence.length) {
                store[identifier + "_current_score"] = Math.round(((prog + 1) / store.current_sentence.length) * 100);
            } else {
                sendAll("win", [ws.num]);
                store[identifier + "_total_score"]++;
                store["player_1_current_score"] = 0;
                store["player_2_current_score"] = 0;
                pause(3000);
            }
        }
    });
});

var sendAll = exports.sendAll = (command, args) => {
    for (let index in connections) {
        send(connections[index], command, args);
    }
}

var send = exports.send = (conn, command, args) => {
    console.log(arguments);
    var packet = command + " " + args;
    console.log("sending", packet);
    conn.send(packet);
}

var sendOne = exports.sendOne = (command, args) => {
    send(connections[0], command, args);
}

var sendTwo = exports.sendTwo = (command, args) => {
    send(connections[1], command, args);
}

exports.wss = wss;