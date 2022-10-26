



const showLandingPage =(req,res)=>{
    res.render("user/index",{admin:false,user:true})
}

const showLoginPage =(req,res)=>{
    res.render('user/userLoginPage',{admin:false,user:true})
}

const showSignUpPage =(req,res)=>{
    res.render('user/userSignUpPage',{admin:false,user:true})
}


module.exports ={
    showLandingPage,
    showLoginPage,
    showSignUpPage
}