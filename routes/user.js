const express =require('express')
const router= express.Router()
const userBasic=require('../Controllers/userBasicController')

router.get("/",userBasic.showLandingPage)
router.get('/showLoginAction',userBasic.showLoginPage)
router.get('/showSignUpAction',userBasic.showSignUpPage)



module.exports=router