// syncronus code works in single threaded line
console.log("hello");
console.log("brother");
console.log("kaise ho");//{hello;brother;Kaise ho}

// Asyncronous code work as mulit threaded line and is always executed in the last.

console.log("promise");

setTimeout(() => {
    console.log("Krta haii");
}, 1000);/// this will work at last becouse this a async code.

console.log("Hamesha");//{ppromise;hamesha;krta hai}



   