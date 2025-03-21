// Here we studied about middleware and global catches

/*

const express = require('express')

const app = express();

app.use(express.json())

app.post("/health-checkup", (req, res) => {
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("your kidney length is " + kidneyLength);
});

// global catches
app.use((err, req, res, next) => {
    res.json({
        "msg": "sorry something is up with our server"
    })
})


app.listen(3000);

*/

const express = require('express');

const app = express();

// return boolena if the age of person is more than 14
const isOldEnoughMiddleware = (req, res, next) => {
    let age = req.query.age;
    if(age >= 14) {
        next();
    } else {
        res.json({
            msg: "sorry not of age yet"
        });
    }
}

app.use(isOldEnoughMiddleware)

app.get('/ride1', (req, res) => {
    res.json({
        msg: "successfully riden the ride 1"
    });
})

app.listen(3000);


// *************** Here we will study about authentications and zod *********************



// const express = require('express');
// const zod = require('zod')

// const app = express();
// const PORT = 3000;

// const schema = zod.array(zod.number());

// //{
// //    email: string => email
// //    password: atleast 8 letters
// //    country: "IN", "US"
// //}

// const schema1 = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8),
//     country: zod.literal("IN").or(zod.literal("US"))
// })



// app.use(express.json());

// app.post("/health-checkup", (req, res) => {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);
//     if(!response.success) {
//         res.status(411).json({
//             msg: "input is invalid"
//         })
//     } else {
//         res.send({
//             response
//         })
//     }
// });


// app.listen(PORT, () => {
//     console.log(`app listening on port ${PORT}`);
// })



// ******************* practising zod **********************************


// const express = require('express');
// const zod = require('zod');

// const app = express();

// app.use(express.json());

// const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8)
// })

// app.post('/login', (req, res) => {
//     const response = schema.safeParse(req.body)
//     if(!response.success) {
//         res.json({
//             msg: "Your inputs are invalid"
//         })
//     }
//     res.json({
//         msg: "loging sucessfully"
//     });
// })

// app.listen(3000);


// **************** learning Authentication *************************

/*

const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require('zod');

let jwtPassword = '123456';

const app = express()

const ALL_USERS = [
    {
        username: 'rishu@gmail.com',
        password: 'kdjeuieii',
        name: 'Rishu Kumar'
    }, 
    {
        username: 'sagar@gamil.com',
        password: 'kdieihjirj',
        name: 'Sagar Raj'
    },
    {
        username: 'yogesh@gmail.com',
        password: 'dkjeijefkj',
        name: 'Yogesh Priyadarshi'
    }
];

app.use(express.json());


const schema = zod.object({
    username: zod.string(),
    password: zod.string().min(8)
})

let userexists = (username, password) => {
    let response = schema.safeParse({
        username,
        password
    });

    if(!response.success) {
        return false;
    }

    // write logic to return true or false if this user exists
    for(let i = 0; i < ALL_USERS.length; i++) {
        if(ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
            return true;
        }
        return false;
    }

}

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    

    if(userexists(username, password)) {
        const token = jwt.sign({
            username: username,
            password: password
        }, jwtPassword, {expiresIn: '2h'});
        
        return res.json({
            token
        });
    }
    return res.status(403).json({
        msg: "user doesn't exist"
    });
});


app.get('/users', (req, res) => {
    const token = req.headers.authorization;
    try {
        const decode = jwt.verify(token, jwtPassword);
        let username = decode.username;
        let password = decode.password;
        // return a list of user other than this user
        let result = ALL_USERS.filter( user => user.username != username && user.password != password)
        res.json({
            result
        })

    } catch(err) {
        return res.status(403).json({
            msg: 'invalid token'
        });
    }

});


app.listen(3000);

*/