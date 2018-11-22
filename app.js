const express = require('express')
const app = express()
const port = 3005
const router = require('./routes')
const session = require('express-session')

app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true

}))

app.use('/', router)


app.listen(port, function () {
    console.log(`Running on port ${port}`)
})

