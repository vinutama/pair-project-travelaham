const express = require('express')
const app = express()
const port = 3005
const router = require('./routes')
const session = require('express-session')

app.use(express.urlencoded({ extended: false }))

app.use('/', router)

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
}))

app.listen(port, function () {
    console.log(`Running on port ${port}`)
})

