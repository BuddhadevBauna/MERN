import jwt from "jsonwebtoken";

//for verify JWT 
const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if(!token) {
        res.status(401)
        .json({message: "Unauthorized HTTP, token not provided"});
    }
    // console.log("Token from auth middleware", token);

    //assuming token is in format "Bearer <JWTToken>, removing the "Bearer" prefix"
    const jwtToken = token.replace('Bearer', "").trim();
    // console.log("Token from auth middleware", jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        // console.log(isVerified);

        
        next();
    } catch (error) {
        res.status(401)
        .json({message: "Unauthorized, Invalid token"});
    }
}

export default authMiddleware;