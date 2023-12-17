# Understanding Arrays, Tuples, Objects, and Enums in TypeScript

TypeScript is a statically typed superset of JavaScript that includes static typing. This means that you can specify variable types such as arrays, tuples, objects, and enums. We'll look at how TypeScript handles arrays, tuples, objects, and enums in this article.

Arrays in TypeScript

TypeScript arrays allow you to store and modify lists of values. One of TypeScript arrays' important characteristics is its ability to impose a specified type for their elements. Consider the following examples:
```Typescript
// Example 1: Array of Strings
let stringArray: string[] = ["item1", "item2", "item3"];

// Example 2: Array with Union Types
let studentId: (string | number)[] = ["sam", 263, "classC"];

// Example 3: Array with Union Types (boolean, number, string)
let studentPass: (boolean | number | string)[] = [true, 263, "classC"];

// Assigning arrays to each other
studentPass = studentId; // Fine
studentId = studentPass; 
// Error: Cannot assign types with different elements
```


In TypeScript, arrays with different element types cannot be assigned to each other directly. The type of an array is determined by its elements.

Tuples in TypeScript

Tuples are a specific type of array in TypeScript that allows you to define the types of each element at specific positions. Unlike arrays, tuples have a fixed length, and the types of their elements are predefined.
```Typescript
// Example 1: Tuple with predefined types
let myTupel: [number, boolean, string] = [21, true, "msg-Accepted"];

// Example 2: Tuple with different order of types
let nextTupel: [boolean, number, string] = [true, 21, "Authorized"];
nextTupel = [232, false, "Unauthorized"]; 
// Error: Cannot assign with different order

// Comparing normal arrays with tuples
let normalArray = [false, 12, "normal-array"];
let tupleArray: [boolean, number, string] = [true, 21, "tuple-array"];

normalArray = tupleArray; // Fine
tupleArray = normalArray; // Error: Types are not compatible
/* type '(string | number | boolean)[]' is not assignable to
   type '[boolean,    number, string]'.
  Target requires 3 element(s) but source may have fewer.
 */
```

More Detailed 

Tuple with Predefined Types:

```Typescript

let myTuple: [number, boolean, string] = [21, true, "msg-Accepted"];

```

This example demonstrates the creation of a tuple with predefined types. The tuple myTuple must contain exactly three elements, where the first is a number, the second a boolean, and the third a string.

Tuple with Different Order of Types:

```Typescript 
let nextTuple: [boolean, number, string] = [true, 21, "Authorized"];
nextTuple = [232, false, "Unauthorized"]; 
// Error: Cannot assign with different order

```


Here, we define a tuple nextTuple with a different order of types. An attempt to assign an array with a different type order results in a compilation error.

Comparing Normal Arrays with Tuples:

```Typescript 
let normalArray = [false, 12, "normal-array"];
let tupleArray: [boolean, number, string] = [true, 21, "tuple-array"];


normalArray = tupleArray; // Fine
tupleArray = normalArray; 
// Error: Types are not compatible


```




This example compares normal arrays and tuples. Assigning a tuple to an array is permissible, but the reverse is not allowed due to the strict typing of tuples.

tuples in TypeScript provide a way to define a fixed structure with specific types for each element. Attempting to violate the defined structure leads to compile-time errors, contributing to safer and more reliable code.

Objects in TypeScript

Objects in TypeScript can be assigned types, providing a blueprint for the structure of the object. Optional properties can be denoted with the ? symbol.


```Typescript 
type ActorsObject = {
  name?: string;
  isActive: boolean;
  movies: (number | string)[];
};

let naga: ActorsObject = {
  name: "Nagarjuna",
  isActive: true,
  movies: [1, "Bramhastra", 2, "Gost", 3, "Mass"],
};

let dhanush: ActorsObject = {
  name: "Dhanush",
  isActive: true,
  movies: [1, "Mari", 2, "Anek", 3, "Jadugar"],
};

let vijay: ActorsObject = {
  isActive: true,
  movies: [1, "Mari", 2, "Anek", 3, "Jadugar"],
};

```



In this example, we define a type ActorsObject to represent the structure of objects related to actors. The type includes an optional name property, a mandatory isActive property of boolean type, and an array movies that can contain numbers or strings. Subsequently, three objects (naga, dhanush, and vijay) are created based on this type, showcasing how TypeScript enforces the specified structure.

Using Functions On Objects:

```Typescript 
const greetActors = (actorObject: ActorsObject) => {
  if (actorObject.name) {
    return `Hello Mr/Mrs: ${actorObject.name} welcome to the function`;
  }
  return "Sorry actor's name is not present";
};

console.log(greetActors(dhanush));

const greetActors2 = (actorObject: ActorsObject) => {
  return `Hello Mr/Mrs: ${actorObject?.name} welcome to the function`;
};

console.log(greetActors2(vijay));
```




This example demonstrates the use of functions that accept objects as parameters. The greetActors function checks if the actor's name is present and provides a customized greeting. The second function greetActors2uses optional chaining (?.) to handle potential undefined values gracefully. These examples showcase how TypeScript allows for precise typing in function parameters, enhancing code reliability.

### Bonus: Enums in TypeScript:

Enums in TypeScript provide a way to define a set of named constant values. They make code more readable and maintainable by giving meaningful names to numeric values.

```Typescript 

enum Grades {
  U,
  D,
  C,
  E,
  B,
  A,
}


```

console.log(Grades.U); //==> 0
console.log(Grades.A); //==> 5

In this example, an enum Grades is defined with default numeric values starting from 0. Each constant within the enum is assigned an incremental numeric value. When accessing these values, TypeScript returns the corresponding numeric index.

Enums with Specific Numeric Values:

Enums can also have specific numeric values assigned, providing more control over the underlying values associated with each constant.

```Typescript
enum Grades2 {
  U = 1,
  D,
  C,
  E,
  B,
  A,
}



console.log(Grades2.U); //==> 1
console.log(Grades2.A); //==> 6

```


Here, Grades2 is another enum where the constant U is explicitly assigned the value 1, and subsequent constants receive incremented values. This allows for greater flexibility in defining the numeric representation of each enum constant.

TypeScript's static typing system significantly enhances code reliability and developer productivity. By allowing the specification of types for arrays, tuples, objects, and enums, TypeScript helps catch potential errors at compile-time rather than runtime. Understanding these concepts is crucial for writing type-safe and maintainable TypeScript code, ultimately leading to more robust and scalable applications. Enums, in particular, contribute to code clarity and expressiveness by providing named constants for a set of related values.