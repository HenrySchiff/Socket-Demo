const sendButton = document.getElementById("sendButton")
const textBox = document.getElementById("textBox")
const chatBox = document.getElementById("chatBox")
const nameBox = document.getElementById("nameBox")

sendButton.addEventListener("click", text)

const socket = io("localhost:3000")

socket.on('update', handleUpdate)


function text() {
    socket.emit("text", nameBox.value, textBox.value)
    textBox.value = ""
}

function handleUpdate(chat) {
    chatBox.innerHTML = ""

    for (const message of chat) {
        
        const paragraph = document.createElement("p")

        const name = message[0]
        const text = message[1]
        paragraph.innerHTML = name + ": " + text

        chatBox.appendChild(paragraph)
    }
}