const express = require("express");

const app = express();
const port = 3000;

// middleware
app.use(express.json());

app.post('/conversations', (req, res) => {
    console.log(req.headers["authorization"])
    console.log(req.body);
    res.send({
        msg: "2 + 2 = 4"
    })
})

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/route-handler', (req, res) => {
    res.json({
        name: "rishu",
        age: 22
    })
})



app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})