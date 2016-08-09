var store = require("./store.js");
var WebSocketServer = ws.Server;

var wss = new WebSocketServer({ port: 25543 })

wss.on("connection", ws => {

    if (store.connected >= 2 || store.ready) {
        return ws.close();
    }

    store.connected++;

    ws.on("close", () => {
        store.connected--;
    });
});

module.exports = wss;