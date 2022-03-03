const http = require("http")
const express = require("express")
const porta = 1303
const fs = require("fs")

const app = express()
const servidor = http.createServer(app)

app.use(express.static('public'))

servidor.listen(porta,()=>console.log("Servidor iniciado na porta 1303"))