/*
To Understand asyncronous, callback , Promises , asnyc/await

Pyramid Of Doom || Callback Hell

- What Is Callback
- Callback Hell Example

What Is Callback
- A Function That Is Passed Into Another One As An Argument To Be Executed Later
-- Example of the callback function is the function passed as argument when to use the 
    setTimeOut function or addEventlistener ...
*/
// When use the addEventListener 
// 
// function makeItGreen(e) {
//     e.target.style.color = "Green";
// }
// let p = document.querySelector(".test");
// p.addEventListener("click", makeItGreen);
// 
// When use the setTimeOut 
function iamACallback() {
    console.log("Iam A Callback Function");
}

setTimeout(iamACallback, 2000);

/*
Example of the callback Hell :
- Story : 
-- Function To Handle Photos
---- [1] Download Photo From URL
---- [2] Resize Photo
---- [3] Add Logo To The Photo
---- [4] Show The Photo In Website
*/


setTimeout(() => {
    console.log("Download Photo From URL");
    setTimeout(() => {
        console.log("Resize Photo");
        setTimeout(() => {
            console.log("Add Logo To The Photo");
            setTimeout(() => {
                console.log("Show The Photo In Website");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);