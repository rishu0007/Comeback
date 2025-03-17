// The address of this server connected to the network is: 
// URL -> http://localhost:8000
// IP -> 127.0.0.1:8000


const express = require('express')
const app = express()
const PORT = 8000

let data = ["Rishu"]

// Middleware
app.use(express.json())

// HTTP Verbs and routes (or paths)

// type 1 - website endpoints(these endpoints are for sending back html and they typically come when a user enters a url in a browser) 
app.get('/', (req, res) => {
    // this is endpoint number 1
    console.log("user requested the home page website")
    res.send(`
        <body style="background: pink;
        color: blue;">
            <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard"> Dashboard </a>
        </body>
        <script>console.log("This is my script")</script>
        `)
})

app.get('/dashboard', (req, res) => {
    console.log("/dashboard endpoint")
    res.send(`
        <body>
            <h1>Dashbord</h1>
            <a href="/">Home</a>
        </body>
        `)
})

// Type 2 - API endpoint (non visual)

// CRUD-method -> Create-post Read-get Update-put and Delete-delete 

app.get('/api/data', (req, res) => {
    console.log("This is data")
    res.status(599).send(data)
})

app.post('/api/data', (req, res) => {
    // someone wnat sot create a user (for example when they click a sign up button)
    // the user ckicks the sign up button after entering their credentials, and their browser is wired up to send out a network request to the server to handle that action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log("we deleted the element off the end of the array")
    res.sendStatus(203)
})



app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))
