/*
To Understand asyncronous, callback , Promises , asnyc/await

Asynchronous vs Synchronous Programming

Synchronous
- Operations Runs in Sequence
- Each Operation Must Wait For The Previous One To Complete
- Story From Real Life => Ticket to match football

Asynchronous
- Operations Runs In Parallel
- This Means That An Operation Can Occur while Another One Is Still Being Processed
- Story From Real Life => cafe or youtube upload vedio
*/
// -----------------------------------------------------------------------------


































// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");