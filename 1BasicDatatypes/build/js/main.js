"use strict";
// javascript is loosely type language
// but typescript is strongly type language 
// what is mean by strongly type? 
// typescript checks types during runtime and it is staticaly type  
//? data types of typescript 
//!basic types 
let myName = "Bharat";
//myName = 43 compilere show error here that myName is a number
// but 
myName = "ajay"; // it will wirk fine like javascript
// like this we can not assing string into a number or boolean vise varsa 
// let define some types 
let userName = "user";
//or
let userAddress;
userAddress = "andheri east";
let userId = 43;
let isValid = true;
let userPan;
userPan = "BUDP";
userPan = "8308"; // type any can store any type of datatype 
// we can declare like this 
let anyType; // if you does not provide any data type to a variable it will take as "ANY"
//anyType = 44;
// anyType = "hello world"
// console.log(typeof(anyType))
//! type union
//? in type union we can define more than one detatype to single variable
let schoolId; //ex 1
schoolId = "Bharat";
console.log("schoolId", schoolId);
schoolId = 234;
console.log("schoolId", schoolId);
let validationCheck; //ex 2
validationCheck = 1234;
console.log("validationCheck", validationCheck);
validationCheck = false;
console.log("validationCheck", validationCheck);
//! functions 
// lets do some experiment on funcations 
//? let sum = ( a ,b) => a + b 
// compiler does not like this way it will show
//* Parameter 'a' & b implicitly has an 'any' type.
//! lest takel this right
const sum = (a, b) => a + b;
// if both datatypes are number then the sum will return number
const sumTow = (a, b) => a + b;
// if one datatype si string then the sum will return string
// lesson one done
