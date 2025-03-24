// using jwt shaves 1 db call

const jwt = require('jsonwebtoken');
const { JWT_PASSWORD } = require('../config');

const adminMiddleware = async(req, res, next) => {
    // implement admin auth logic
    // you need to check the headers and validate the admin from the admin DB
    const token = req.headers.authorization;
    // Bearer akjdkfddfdkjdkjdsjfdjdflkfjdjfsdjf => ["Bearer", "akjdkfddfdkjdkjdsjfdjdflkfjdjfsdjf"]
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_PASSWORD);
    // username, type: "admin" | "user"
    if(decodedValue.username) {
        next();
    } else {
        res.status(403).json({
            msg: "You are not authenticated"
        })
    }
}

module.exports = adminMiddleware;