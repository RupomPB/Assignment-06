
1) What is the difference between var, let, and const?

Ans: Here is the  difference between var, let, and const

* var: Function-scoped, can be re-declared and re-assigned, hoisted with initialization as undefined.

* let: Block-scoped, cannot be re-declared in the same scope, can be re-assigned, hoisted but not initialized (temporal dead zone).

* const: Block-scoped, cannot be re-declared or re-assigned, hoisted but not initialized (temporal dead zone).

2) What is the difference between map(), forEach(), and filter()?

Ans : Here is the Difference between map(), forEach(), and filter()

* map(): Iterates over an array, applies a transformation, and returns a new array of the same length.

* forEach(): Iterates over an array mainly for side effects; does not return a new array.

* filter(): Iterates over an array and returns a new array containing elements that satisfy a given condition.

3) What are arrow functions in ES6?

Ans: Arrow functions in ES6  provide a shorter syntax for writing functions. They lexically bind the 

this keyword, meaning this refers to the context in which the arrow function was defined. They are 

best suited for concise, single-expression functions but are not ideal for methods requiring their 

own this.


4) How does destructuring assignment work in ES6?

Ans: In ES6 Destructuring allows extracting values from arrays or objects into separate variables in 

a concise way. It improves code readability and reduces the need for multiple variable assignments. 

Destructuring supports default values and renaming of variables.

5) Explain template literals in ES6. How are they different from string concatenation?

Ans: Template literals are strings enclosed in backticks (`). They allow embedding expressions, 

multi-line strings, and dynamic string construction. They are more readable and convenient than 

traditional string concatenation and eliminate the need for manual string joining.