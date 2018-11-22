const router = require('express').Router()
// const packageRouter = require('')
// const userRouter = require('')

router.get('/',function(req,res){
    res.render('home.ejs')
})

// router.use('/package',packageRouter)
// router.use('/user',userRouter)

module.exports = router