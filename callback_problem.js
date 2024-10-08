/*console.log("start");
function imp(username) {
    setTimeout(() => {

        return `subbscribe to ${username}`;

    }, 0);
}

const message = imp('Prashan verma');// to resolve this we have to use call back function.

console.log(message);
console.log("stop");*/

/******* console.log("message");  gives undefined the reason behind this is   */

console.log("start");
function imp(username,callb) {
    setTimeout(() => {

        callb(`subscribe to ${username}`);

    },1000);
}

const message = imp('Prashan verma',(message)=> {
    console.log(message);
});// to resolve this we have to use call back function.


console.log("stop");// nnow this will give the output in correct way.
