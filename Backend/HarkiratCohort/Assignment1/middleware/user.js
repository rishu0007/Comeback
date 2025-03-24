/*
const { User } = require("../db");

const userMiddleware = async (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const value = await User.findOne({
        username: username,
        password: password
    });

    if(value) {
        next();
    } else {
        res.status(403).json({
            msg: "User doesn't exist"
        })
    }
};

module.exports = userMiddleware;
*/

// *************** using jwt shaves 1 db call as we can see above ******************

const jwt = require('jsonwebtoken');
const secret = require('../index')

const userMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, secret);
    if(decodedValue.username) {
        req.username = decodedValue.username;
        next();
    } else {
        res.status(403).json({
            msg: "You are not authenticated"
        })
    }
};

module.exports = userMiddleware;