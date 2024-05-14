// Calculator Making projeect 1

import inquirer from "inquirer";

import {sum , subtract , multiply ,division} from "./operations.js";
const questions = await inquirer.prompt([{
    type : "number",
    name : "num1",
    message : "Enter your 1st number",
    
    /* pass your question in here*/
},
{
    type : "number",
    name : "num2",
    message : "Enter your 2nd number",
},
{
    type : "list",
    name : "operator",
    message : "select your operator",
    choices: ["+" , "-" , "*" , "/"],
},
]);


if (questions.operator == "+"){
    console.log("This is Sum");
    sum (questions.num1, questions.num2);
} else if (questions.operator == "-"){
    console.log("This is Subtract");
    subtract (questions.num1, questions.num2);
}else if (questions.operator == "*"){
    console.log("This is Multiply");
    multiply (questions.num1, questions.num2);
}else if (questions.operator == "/"){
    console.log("This is Division");
    division (questions.num1, questions.num2);
}else{
    console.log("Invalid Operator");
};
console.log("questions:", questions);