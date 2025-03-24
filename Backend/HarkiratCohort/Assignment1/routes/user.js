const express = require('express');
const jwt = require('jsonwebtoken');
const userMiddleware = require('../middleware/user');
const { User, Course } = require('../db');
const { JWT_PASSWORD } = require('../config');

const router = express.Router();

router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    });

    res.json({
        msg: "User created Successfully"
    })

});

router.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExist = User.findOne({
        username,
        password
    })

    if(userExist) {
        const token = jwt.sign({
            username: username
        }, JWT_PASSWORD);
        res.json({
            token
        });
    } else {
        res.status(411).json({
            msg: "Invalid credentials"
        })
    }
})

router.get('/courses', async (req, res) => {
    // listig all the courses
    const response = await Course.find({});
    res.json({
        course: response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const courseId = req.params.courseId;
    const username = req.username;
    try {
        await User.updateOne({
            username: username
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        })
    } catch(e) {
        console.log(e)
    };
    
    res.json({
        msg: "purchase complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        msg: courses
    })
    
});

module.exports = router;
