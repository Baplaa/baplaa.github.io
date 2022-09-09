//Author: Tristan Lingat
//Date: July 5, 2022

const express = require("express")
const app = express()
const port = 8080
const path = require('path')

app.use(express.static(path.join(__dirname, "templates")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/index.html'))
})

app.listen(port, () => console.log('Listening on port 8080'))