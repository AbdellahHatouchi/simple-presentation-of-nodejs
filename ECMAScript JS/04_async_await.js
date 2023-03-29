/*
To Understand asyncronous, callback , Promises , asnyc/await
    Async
    - Async Before Function Mean This Function Return A Promise
    - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );



async function getData() {
    let users = [];
    if (users.length > 0) {
        return "Users Found";
    } else {
        throw new Error("No Users Found");
    }
}

console.log(getData());

getData().then(
    (resolvedValue) => console.log(resolvedValue),
    (rejectedValue) => console.log("Rejected " + rejectedValue)
);

/*
    Await
    - Await Works Only Inside Asnyc Functions
    - Await Make JavaScript Wait For The Promise Result
    - Await Is More Elegant Syntax Of Getting Promise Result
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Iam The Good Promise");
        // reject(Error("Iam The Bad Promise"));
    }, 3000);
});

async function readData() {
    console.log("Before Promise");
    // myPromise.then((resolvedValue) => console.log(resolvedValue));
    console.log(await myPromise);
    // console.log(await myPromise.catch((err) => err));
    console.log("After Promise");
}

readData();