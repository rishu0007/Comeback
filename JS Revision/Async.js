/*

setTimeout(function() {
    console.log("hey there!")
}, 2000)

console.log("text after setTimeout function" );

*/

// ********************** Promise *********************************************************************************

/*

let ans =  new Promise((res, rej) => {
    if(false) {
        return res();
    } else {
        return rej();
    }
})

ans
.then(() => {
    console.log("resolved")
})

.catch(() => {
    console.log("rejected")
})

// user will ask for a number between 0 to 9 and if the number is below 5, resolve if not then reject

let userInput = new Promise((res, rej) => {
    let number = Math.floor(Math.random() * 10);

    if(number < 5) {
        return res();
    } else {
        return rej();
    }
})

userInput
.then(() => {
    console.log("num less than 5")
})

.catch(() => {
    console.log("num greater than 5")
})


*/

// *************************************** Promise Chaning ***********************************************************************

// Sabse pahle ghar par aao
// gate khol aur gate lagao
// khana pakao khana khao
// coding karo
// sojao

let work1 = new Promise((res, rej) => {
    return res("ghar par aao");
})

let work2 = work1.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        return res("gate kholo aur gate lagao")
    })
})

let work3 = work2.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        return res("khana pakao aur khao")
    })
})

let work4 = work3.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        return res("coding karo")
    })
})

let work5 = work4.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        return res("sojao")
    })
})

work5.then((data) => {
    console.log(data);
})



// ************************************ Async awai ****************************************************


// without async awai

let user = () => {
    fetch(`https://randomuser.me/api/`)
        .then((raw) => {
            return raw.json();
        })
        .then((data) => {
            console.log(data);
        })
}

user();

// with async await

let users = async () => {
    let raw = await fetch(`https://randomuser.me/api/`);
    let data = await raw.json();
    console.log(data);
}

users();