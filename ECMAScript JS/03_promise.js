/*
To Understand asyncronous, callback , Promises , asnyc/await

Promise Intro And Syntax
- Promise In JavaScript Is Like Promise In Real Life
- Promise Is Something That Will Happen In The Future
- Promise Avoid Callback Hell
- Promise Is The Object That Represents The Status Of An Asynchronous Operation And Its Resulting Value

- Promise Status
--- Pending: Initial State
--- Fulfilled: Completed Successfully
--- Rejected: Failed

Story
- Once A Promise Has Been Called, It Will Start In A Pending State
- The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
- Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

- Then
--- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

const myPromise = new Promise((resolveFunction, rejectFunction) => {
    let connectToDataBase = false;
    if (connectToDataBase) {
        resolveFunction("Connection Established");
    } else {
        rejectFunction(Error("Connection Failed"));
    }
}).then(
    (resolveValue) => console.log(`Good ${resolveValue}`),
    (rejectValue) => console.log(`Bad ${rejectValue}`)
);
console.log(myPromise);

// ===========================================================================================

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//     let connect = true;
//     if (connect) {
//         resolveFunction("Connection Established");
//     } else {
//         rejectFunction(Error("Connection Failed"));
//     }
// });

// console.log(myPromise);


// myPromise.then(
//     (resolveValue) => console.log(`Good ${resolveValue}`),
//     (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// myPromise.then(
//     (resolveValue) => console.log(`Good ${resolveValue}`),
//     (rejectValue) => console.log(`Bad ${rejectValue}`)
// );


// ========================================== Advence promise ==================================================
/*
    Promise Training

    We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
    .then(We Will Choose Two People)
    .then(We Will Test Them Then Get One Of Them)
    .catch(No One Came)

    Then    => Promise Is Successfull Use The Resolved Data
    Catch   => Promise Is Failed, Catch The Error
    Finally => Promise Successfull Or Failed Finally Do Something
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//     let employees = [];
    // let employees = ["abdellah", "ali", "fatima", "ibrahim"];
//     if (employees.length === 4) {
//         resolveFunction(employees);
//     } else {
//         rejectFunction(Error("Number Of Employees Is Not 4"));
//     }
// });

// myPromise
//     .then((resolveValue) => {
//         resolveValue.length = 2;
//         return resolveValue;
//     })
//     .then((resolveValue) => {
//         resolveValue.length = 1;
//         return resolveValue;
//     })
//     .then((resolveValue) => {
//         console.log(`The Choosen Emplyee Is ${resolveValue}`);
//     })
//     .catch((rejectedReason) => console.log(rejectedReason))
//     .finally(console.log("The Operation Is Done"));