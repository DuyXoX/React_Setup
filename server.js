const express = require('express');
require('dotenv').config();
const dbConnect = require('./server/config/mongodb');

const app = express()
const port = process.env.PORT || 8000
app.use(express.json())
app.use(express.urlencoded({ extends: true }))
dbConnect()


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})