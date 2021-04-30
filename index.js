const obj = require("javascript-obfuscator")

let str = `
const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
client.on("message", (msg) => {
    if (msg.content == "!ping") msg.channel.send("pong!")
})

client.on("ready",() => {
    console.log("Ready!")
})

client.login(config.token)
`

const fs = require("fs")

fs.writeFileSync("./obstrucated.txt", obj.obfuscate(str).getObfuscatedCode())

fs.readFile("./obstrucated.txt", "utf-8", function (err, res) {
    if (err) console.error(err)
    eval(res)
})
