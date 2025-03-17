const express = require('express');
const app = express();


var users = [ {
    name: "john",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get('/', (req, res) => {{
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys

    })
}})


app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done"
    })
})

app.put('/', (req, res) => {
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})


// removing all the unhealthy kidneys
app.delete('/', (req, res) => {

    // only if alteas one unhealthy kidney is ther do this, else return 411
    if(isThereAtleastOneUnhealthyKidney()) {
        let newKidneys = [];
        for(let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})
    } else {
        res.status(411).json({
            msg: "no bad kidneys"
        });
    }

    
})


let isThereAtleastOneUnhealthyKidney = () => {
    let atleastOneUnhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys.healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000);

