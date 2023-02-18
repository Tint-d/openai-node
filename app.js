const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000


// Enable body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use('/openai',require('./routes/openaiRoute'))

app.listen(port,() => console.log(`Server is running on ${port}...`))

