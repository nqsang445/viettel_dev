const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) =>{
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.plit(' ')[1];

    if (!token) return res.sendStatus(401)
        try {
          const decode =  jwt.verify(token, 'bimat')
          
        } catch (error) {
            
            return res.sendStatus(403)
        }
    

}
module.exports = verifyToken;