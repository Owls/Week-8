//?
function promise1() {
    return new Promise((resolve, reject) => {
        resolve();
    });
}

// you didn't add in calling of promise1() STEP 5, I added that in below.
promise1()
    .then(() => {
        console.log("success"); // the .then() will always be called as we're always resolving with no chance of rejecting
    })
    .catch(() => {
        console.log("There was an error");
    });

// good work!
function promise2(boop) {
    return new Promise((resolve, reject) => {
        if (boop) {
            resolve("Your data you asked for.");
        } else {
            reject("There was an error");
        }
    });
}

promise2(true)
    .then((success) => {
        console.log(success);
    })
    .catch((failure) => {
        console.log(failure);
    });

const promise3 = new Promise((resolve, reject) => {
    resolve("promise 3 complete");
});

const promise4 = new Promise((resolve, reject) => {
    resolve("Promise 4 complete");
});

const promise5 = new Promise((resolve, reject) => {
    resolve("Promise5 complete");
});

promise3
    .then((success) => {
        console.log(success);
    })
    .catch((failure) => {
        console.log(failure);
    });

// great work!
Promise.all([promise3, promise4, promise5])
    .then((success) => {
        console.log(success);
    })
    .catch((failure) => {
        console.log(failure);
    });

// Great work!
let xhr = new XMLHttpRequest();

xhr.open("GET", "http://api.icndb.com/jokes/15", true);

xhr.onload = function () {
    console.log(this.responseText);
    const joke = JSON.parse(this.responseText).value.joke;
    console.log(joke);
};

xhr.send();

// some async/await examples, remember that async/await is just a fancy way to consume promises
async function foo() {
    try {
        await promise1();
        const promise2Result = await promise2();
        console.log(promise2Result);
        const promise3Result = await promise3();
        const promise4Result = await promise4();
        const promise5Result = await promise5();
        console.log(promise3Result, promise4Result, promise5Result);
    } catch (err) {
        console.log(err);
    }
}
