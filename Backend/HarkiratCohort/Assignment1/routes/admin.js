const express = require('express');
const jwt = require('jsonwebtoken');
const adminMiddleware = require('../middleware/admin');
const { Admin, Course, User } = require('../db');
const zod = require('zod');
const { JWT_PASSWORD } = require('../config');

const router = express.Router();

router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // check if user with username already exists
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg: "Admin created successfully"
    })

});

router.post('/signin', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const adminExist = await Admin.findOne({
        username,
        password
    })

    if(adminExist) {
        const token = jwt.sign({
            username: username
        }, JWT_PASSWORD);
        res.json({
            token
        })
    } else {
        res.status(411).json({
            msg: "wrong credentials"
        })
    }
})

const courseInputValidation = zod.object({
    title: zod.string(),
    description: zod.string(),
    imageLink: zod.string(),
    price: zod.number()
});


router.post('/courses', adminMiddleware, async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod validation 
    
    const result = courseInputValidation.safeParse(req.body);

    if(!result.success) {
        return res.status(403).json({
            msg: "Invalid input entered"
        });
    }

    const newCourse = await Course.create({
        title,
        price,
        imageLink,
        description
    });

    res.json({
        msg: "course created successfully",
        courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async(req, res) => {
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

module.exports = router;



