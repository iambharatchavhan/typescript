
//* Functions in TypeScript

// Type Alias 

type stringNumber = string | number ;

type stringNumberArray = (string|number)[];

type UserObj = {
      prop1 :string,
      prop2 : boolean,
      prop3:stringNumberArray, // we predifine the type above
      prop4:stringNumber  // we predifine the type above
}

let studentID : stringNumber = "Hello there" ; // student id have string | number alias
    studentID = 432;
// This is called alias


//* Literal types  

// in normal javascript we define 
const studentName = "rita" // this will never change or replace 

// like this in typescript have literal types 

let zeroUsername : "motu"| "patlu" | "zatka";

zeroUsername = "motu"
console.log(zeroUsername)
zeroUsername = "patlu"
console.log(zeroUsername)

let stateStatus : "pending" | "resovle" | "rejected"

let errorCodes : 404 | 200 

// it mean literaly values other than assign not allowed

// what is return void

const message = (msg:any): void =>{
    console.log(msg)
}

// the function which does not return anuthing returns type void 

// type alias for functions

type mathFunction = (a:number , b:number) => number ;

let add : mathFunction = function (a,b) {
     return a + b
}

message(add(20,20))

let multiply : mathFunction = (a,b)=> a * b
message(multiply(2,5))

// if we know what type of parameters function accept and what will return then we will make the blueprint for the type alias its a benifit of it


//* optional paramiters in functions 

// alias will not work on optianl parameters or defualts params

const sumOfThreeOrTwo = (a:number ,b:number ,c?:number) => {
    // now first have to check if third param is passed or not cos if not passed it will be undefined 
return c !== undefined ?  a + b + c : a + b


}
message(sumOfThreeOrTwo(5,5,5))
message(sumOfThreeOrTwo(5,20))

// note: optianal chain param will has always on the way last postiton in params











const sum  = function (a:number,b:number):number {
    return a + b 
}
message(sum(23,45)) 



