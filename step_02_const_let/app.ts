// use const where variable values do not change
const a =5;
const b :number =33;
const c ="best";

// let // consta
// let a // declare
// LHS = RHS (LHS = varibales names)

// I suggest use let instead of var everywhere
// because let has block scope
let z = 6;
if (true) {
    let z = 4;
    // use z
    console.log ("let :z "+ z);
} else {
    let z = "string";
    console.log ("let : z " + z);
    // use z
} 
console.log("let :" + z); // error z is not