
const requireAuth = (req,res,next) =>{
    console.log(req.cookie);
    

}
module.exports = requireAuth;