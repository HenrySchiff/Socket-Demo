const express = require('express')

var io = require("socket.io")(server, {
    cors: {
        origin: "localhost:3000",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
})

var app = express()
var server = require("http").createServer(app)
var io = io.listen(server)

var options = {
    index: "client.html"
}

app.use(express.static("public", options))

port = 3000
server.listen(port, () => {console.log(`Starting server at ${port}`)})


const chat = []

io.on("connection", client => {

    client.emit("update", chat)

    client.on("text", handleText)

    function handleText(name, text) {
        chat.push([name, text])
        io.emit("update", chat)
    }

})