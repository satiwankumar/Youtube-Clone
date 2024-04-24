const express = require('express')
const app = express()
const connectDb = require('./db/index')

require('dotenv').config()


const port = 3000
connectDb()
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})