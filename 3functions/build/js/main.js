"use strict";
//* Functions in TypeScript
let studentID = "Hello there"; // student id have string | number alias
studentID = 432;
// This is called alias
//* Literal types  
// in normal javascript we define 
const studentName = "rita"; // this will never change or replace 
// like this in typescript have literal types 
let zeroUsername;
zeroUsername = "motu";
console.log(zeroUsername);
zeroUsername = "patlu";
console.log(zeroUsername);
let stateStatus;
let errorCodes;
// it mean literally values other than assign not allowed
// what is return void
const message = (msg) => {
    console.log(msg);
};
let add = function (a, b) {
    return a + b;
};
message(add(20, 20));
let multiply = (a, b) => a * b;
message(multiply(2, 5));
// if we know what type of parameters function accept and what will return then we will make the blueprint for the type alias its a benifit of it
//* optional parameters in functions 
// alias will not work on optional parameters or defualts params
const sumOfThreeOrTwo = (a, b, c) => {
    // now first have to check if third param is passed or not cos if not passed it will be undefined 
    return c !== undefined ? a + b + c : a + b;
};
message(sumOfThreeOrTwo(5, 5, 5));
message(sumOfThreeOrTwo(5, 20));
// note: optional chain param will has always on the way last position in params
const sum = function (a, b) {
    return a + b;
};
message(sum(23, 45));
//rest parameter in functions
// lets see one good example 
const addAll = (...nums) => {
    return nums.reduce((prev, curr) => { return prev + curr; });
};
message(addAll(1, 2, 3, 4));
// we have to send rest parameter at last like optional chain
// like 
const sumOfAll = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => {
        return prev + curr;
    });
};
message(sumOfAll(1, 2, 3, 4));
// default parameters 
const defaultParam = (a = 10, b, c = 2) => {
    let sum = a + b + c;
    return sum;
};
message(defaultParam(10, 3)); // == >15  a=10 ,b=3, c=2 this c is default type parameter
message(defaultParam(undefined, 10)); // 
