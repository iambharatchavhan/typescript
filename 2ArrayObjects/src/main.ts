// Arrays in typescript

// Arrays in typescript are work differently than javascript like if declare an array of strings it will detect that array contain all strings thats why this is an array of string and we will not able to push any other type than strings for ex 

let stringArray = ["item1","item2","item3"]

/*
stringArray[0] = 45   
 or 
stringArray.push(1995)
it will not allow to alter the type of the string array and or push any other data types
thats the beuty of the typescript
*/

// ex2 :-

let studentId = ["sam",263, "classC"]


/* 
now here what will typescipt do remember we learn about union in part 01 so the typescript will assing the type union to this array string | number  and we will able to push bothe type i.e number and string to any index of the array 
*/

//ex - 
studentId[0] = 1993
console.log(studentId)
// it will log [1993,263,"classC"]
// remember you will not able to push any boolean values here

// ex - 
let studentPass = [true , 263, "classC"]  // type assign string | number | boolean
// now you will able to alter type between string number or boolean at any index
studentPass[0] = "classB"
studentPass[1] = false
studentPass[2] = "1662"
console.log(studentPass) // ['classB', false, '1662']

// now we have two arrays studentId and studentPass 

studentPass = studentId // it will work fine we can assing studentId to student pass but 
// studentId = studentPass ==> we can not do that the reason is simple student pass already has three data types in it but student id has only two of them

// What about Empty Array 
let emptyArrayex = []  // let emptyArrayex: any[]
// by defalut typescript assign it as any type : any
let emptyArray : any [] = [] // like this we can push any type in it


//! Tupels
/** 
 tuples are typed arrays in typescript that have predefined lenght and its types 
 It is more strict type of array 
ex 1
*/
 
let myTupel : [number , boolean, string] = [21, true,"msg-Accepted"]
console.log(myTupel) // print actual array
myTupel = [43,false,"msg-reuqest-denied"]
console.log(myTupel)  // print altered array 

//! ex 2 waht if
let nextTupel : [boolean,number,string] = [true,21,"Authorised"]

// nextTupel = [232, false, "unAuthrised"]  it will not allow to alter positions of the predefined type 

// lets compair normal array with tupels 

let normalArray = [false,12, "normal-array"]
let tupelArray : [boolean,number,string] = [true,21,"tupel-array"]

normalArray = tupelArray // we can assign tupelArray to normal Array But

// tupelArray = normalArray // it will not allow why?

/** it will throw error
 * Type '(string | number | boolean)[]' is not assignable to type '[boolean,    number, string]'.
  Target requires 3 element(s) but source may have fewer.
 * 
 */


//! Obj

// lets define a object

let obj: Object = {}
obj = []
// How is it posible to assing an array to the obect 
// so in javascript arrays type is object remember ?

// now lets see some operation on object
let personObj  = {
    prop1: "Bharat",
    prop2: true,
    prop3 : ["hello",43,true]
}

// typescript detect the type like be
/**
 * let personObj: {
    prop1: string;
    prop2: boolean;
    prop3: (string | number | boolean)[];
}
 * 
 */
//  personObj.prop1 = true
// We need to very careful while altering the values of the object although it aleardy typed by typescript
// ex1 

personObj.prop1 = "john"
console.log(personObj)
personObj.prop3 = ["x1","x2","x3"]
console.log(personObj) // we can alter like this 



//! lets define Strict Type to the object and make blueprint of it

type ActorsObject = {
    name?: string,
    isActive: boolean,
    movies : (number| string)[],
}

// type : ActorObject
// This is  strict blueprint of the object Actor now we can as many object related to ActorsObject type

let naga : ActorsObject ={
     name: "Nagarjuna",
     isActive: true,
     movies : [1,"Bramhastra",2,"Gost",3,"Mass"]
}

let dhanush : ActorsObject ={
    name: "dhanush",
    isActive: true,
    movies : [1,"Marri",2,"Anek",3,"Jadugar"]
}

let vijay : ActorsObject ={
    isActive: true,
    movies : [1,"Marri",2,"Anek",3,"Jadugar"]
}

// If you notice we have put ? on name property 
// it make it optinol cose if if we not declare name the object will work fine 

// working with functions and objects
// suppose we have api and we have to greet actors by thair names 

const greetActors = (actorobject:ActorsObject)=>{
 // checking first if name of actors are present or not
   if(actorobject.name){
     return `hello Mr/Mrs: ${actorobject.name} welcome to the function`
    }

 return "Soory actors name is not present"
}
console.log(greetActors(dhanush))

// This is one way to do it  but with the optanal chaining we can takel the error and move forwad 


const greetActors2 = (actorobject:ActorsObject)=>{
    // checking first if name of actors are present or not
        return `hello Mr/Mrs: ${actorobject?.name} welcome to the function`
 
   }
   console.log(greetActors2(vijay))




   //Bonus point
   //! Enums 

   enum Grades{
        U,
        D,
        C,
        E,
        B,
        A
   }

console.log(Grades.U) //==> 0 
console.log(Grades.A) //==> 5

// but if 
enum Grades2{
    U =1,
    D,
    C,
    E,
    B,
    A
}

console.log(Grades2.U) //==> 1 
console.log(Grades2.A) //==> 6
