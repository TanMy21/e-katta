//render profile page
module.exports.profile = function(req,res){
   return res.render('home',{
       title:'User Profile'
   });
}

//render sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up', {
       title:'e-katta | Sign Up'
    })
}

//render sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in', {
       title:'e-katta | Sign In'
    })
}

//get the sign up data
module.exports.createUser = function(req,res){

}

//log in and create user session
module.exports.createSession = function(req,res){
    
}