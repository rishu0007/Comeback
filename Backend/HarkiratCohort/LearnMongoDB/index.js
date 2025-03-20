// 1. basically what we are building in this assignment is that first we will add signup functionality in which user
//  have to send username, password, first name and then successfully signup provided that user is not already present
//  in the database.

// 2. Second endpoint for signin and if user is present and password is correct then return the jwt

// 3. /users in which expect jw as header and return back list of all the users

const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const jwtPassword = '12345';
const app = express();

mongoose.connect("mongodb+srv://rishu:rishu571@practice.16nyy.mongodb.net/user_app");

const User = mongoose.model('Users', {name: String, email: String, password: String});

app.use(express.json());

app.post('/signup', async(req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.name;

    let existingUser = await User.findOne({email: username});
    if(existingUser) {
        return res.status(400).send("Username already exist");
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });

    await user.save();
    res.json({
        msg: "successfully signedUp"
    })
})



app.listen(3000);
