// function declaration
function greet1(name){
   return `Hello, ${name}! `;
}
console.log(greet1("moon"));
// function expression
const greet=function(name){
    return `hello, ${name}!`;
}
console.log(greet("moon"));
// arrow functions
const greet2=(name) => `hello, ${name}!`;
console.log(greet2("moon"));
// IIFE
(function(){
    console.log("this runs right away!");
})();
// call back function
const greetFn=(name)=>{
    console.log("hello, ${name}!");
}
function processname(callback){
    const name="moon";
    callback(name);
}
processname(greetFn);