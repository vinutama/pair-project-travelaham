const express = require('express')
const app = express()
const port = 3005
const router = require('./routes')

app.use(express.urlencoded({extended:false}))
app.use('/',router)

app.listen(port, function(){
    console.log(`Running on port ${port}`)
})

