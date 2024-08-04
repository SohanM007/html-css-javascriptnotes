// Dialog box

// prompt - 
// const name = prompt("please enter your name")
// console.log(name)

// confirm
// const name = confirm("are you learning js")
// console.log(name)

// alert
// alert('hello')
// const name = alert("hello word")
// console.log(name)


// comment

// this is single line comment 

/*this is multiline comment .comment
  it gonna end here */

//   let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");

 
           //   variable
// let
// let message = "ite the value"
// console.log(message)

// var
// var message = "this is ok";
// var message = "this is message"
// console.log(message)

// const
// const message = "this is pk"
// console.log(message)

// string
// let org = "coding ninja";
// console.log("org")

// number
// let count = 10;
// console.log(count);

// let count = 50;
// console.log(typeof(count))

// to convert string into number
// let count ="1233"
// console.log(+count)

// NAN = not a number
// let count ="sohan";
// console.log(+count)

// how to check the longest integer we can store 
// let count = 123;
// console.log(Number.MAX_SAFE_INTEGER)


// BigInt
// let bigCount = 958568745841287719848425448n;
// console.log(bigCount)

// Boolean
// let boolen = false;
// console.log(boolen)

// undefined
// let count;
// console.log(count);

// Null
// let count = null;
// console.log(count)

// Object
// const obj ={
//     num : 123,
//     str : "sohan",
//     bool: true,
//     emptyValue:null
// }
// console.log(obj);
// console.log(obj.num)
// console.log(obj.emptyValue);
// console.log(obj.str)

// array
// const arr = [123 , "sohan", true]
// console.log(arr)

// function checkDay(){
// let day = document.getElementById("dayInput").value.toLowerCase();

// conversion
// 1.auto
// const corrcion = 123 + "234"
// console.log(corrcion)

// 2.manual
// const casting = parseInt("12345skjbdj")
// console.log(casting)    answer = 12345

// const convert = parseInt("afdagh123")
// console.log(convert)  answer = NAN


// operator
// Arithmetic Operators:
// let a =10 ;
// let b = 5;
// let c = a+b;
// console.log(c)

// let a =10 ;
// let b = 5;
// let c = a-b;
// console.log(c)

// let a =10 ;
// let b = 5;
// let c = a*b;
// console.log(c)

// let a =10 ;
// let b = 5;
// let c = a/b;
// console.log(c)

// mod operator
// let a =10 ;
// let b = 12;
// let c = a%b;
// console.log(c)

// poweroperator = 10*10*10*10*10
// let a =10 ;
// let b = 5;
// let c = a**b;
// console.log(c)


// comparison operator
// let a =10;
// let b = 20;
// console.log(10==20)

// let a =10;
// let b = 20;
// console.log(a!=b)

// let a =10;
// let b = "10"
// console.log(a == b)

// let a =10;
// let b = "10"
// console.log(a === b)

// let a =10;
// let b = 20
// console.log(a <= b);

// let a =10;
// let b = 20
// console.log(a >= b);

// let a =10;
// let b = 20
// console.log(a !==b);


// Assignment operator
// let num = 123;
// num += 1;
// console.log(num)

// let num = 125;
// num -= 2;
// console.log(num)

// let num = 525;
// num *= 2;
// console.log(num)

// let num = 555;
// num /= 2;
// console.log(num);



// logical oparator
// AND operator
// let a = 20;
// let b = 30;
// c= a+b
// if(a>40 && b<40){
//     console.log("both a and b are true")
// }else{
//     console.log("atleast one a or b are false")
// }


// OR operator
// let a = 20; 
// let b = 40;

// if(a>30 || b <=40){
//     console.log("its a or operator")
// }else{
//     console.log("both are wrong")
// }

// NOT operator
// let name = "sohan"
// let name2 = "soham"
// if(name != name2){
//     console.log("it a not operato")
// }else{
//     console.log("false")
// }


// type conversion

// let num = 2
// let num2 = 2.0
// console.log( num + num2)

// let num = "5"
// let num2 = 200;
// let sum = num + num2;
// console.log(sum)


// termairy operator
// const finalValue = 123 -23 < 100  ? "good":"bad";
// console.log(finalValue);

// const finalValue = (123 -23 < 100 && 234 && 34 || 23 ? "Good": "Bad");
// console.log(finalValue)

// increment/decrement
// let count = 1;
// let num = count++;
// console.log(count)      postflix
// console.log(num)

// let count = 2 ;
// let num = ++count;      preflix
// console.log(count)
// console.log(num)

// unary operator
// let postString = "12345"
// let negNum = -postString;
// console.log(negNum)

// let postString = 123 ;
// let negNum = -postString;
// console.log(negNum)

// const str = "coding nonja "
// console.log(str.toLocaleUpperCase())

// const str = "KING "
// console.log(str.toLocaleLowerCase())


// to convert string to number
// let str = "123";
// let num = parseInt(str);

// console.log(num); // Output: 123
// console.log(typeof num); //

// convert a string that represents a floating-point number into an actual floating-point number
// let str = "3.14";
// let num = parseFloat(str);

// console.log(num); // Output: 3.14
// console.log(typeof num); // Output: "number"

// if

// let num = 10 ;
// if(num >0){
//     console.log("true")
// }

// if else
// let num = 10 ;
// if(num <0 ){
//     console.log("its a not true")
// }else{
//     console.log("condition is true")
// }

// if-else-if
// let num = 0;
// if(num > 0){
//     console.log("the number is possitive")
// }else if(num < 0){
//   console.log("the number is negative")
// }else{
//     console.log("the number is zero")
// }

// switch statment
// function checkDay(){
// let day = document.getElementById("dayInput").value.toLowerCase();

// switch(day){
//   case "monday":
//       console.log("it is the start of week")
//     break;
//   case "friday":
//       console.log("It's almost weekend")
//     break;
//  default:
//       console.log("itsa regular day")
// }

// }
// 
i = 5;

// For Loop:
// for(let i = 5; i<10; i++){
//     console.log(i)
// }

// for(let i = 5; i<10; i++){
//     console.log("iteration =" , i+1)
// }


// While loop
// let i = 1;
// while(i < 5){
//     console.log(i);
//     i++;
// } 

// let count = 1;
// while (count <= 5) {
//   console.log("Count is: " + count);
//   count++;
// }

// do-while loop
// do{
//     console.log("Iteration " + (i+1))
//     i++;
// }while(i<5)


// Nested Loops
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){

//     console.log(i ,j)
//     }
// }

// gmail validation program
// function main(email){
//     let result;
//    let atindex = email.lastIndexOf("@");
//    let dotindex = email.lastIndexOf(".");
//    let length = email.length;
//     //write your program here to verify the email
//     if(atindex >= 3 && dotindex - atindex >=4 && length -dotindex -1 >= 2&& length >= 11){
//       result = email + "is valid"
//     }else{
//      result =  "invalid email"
//     }
//     //assign your final ans in result;
//     return result;
// }
// console.log(main("sohan@gamil.com"))

// Array

// const newArray = [item1 ,item2 ,item3 ,item4];
// const myArray = [1,2,3,4]
// console.log(myArray)

// const myArray = new Array(1 ,2,3,4,5);
// console.log(myArray)

// const myArray =[123 ,"sohan",true ,["four", "five"] , {six:6}]
// console.log(myArray)

// const myString = 'hello';
// const newArray = Array.from(myString)
// console.log(newArray);

// const myString = "sohan";
// const newArray = Array.from(myString);
// console.log(newArray);


// push
// const arr = [1,2,3,4,5]
// arr.push(6);
// console.log(arr)

// pop
// const arr =[1,2,3,4,5]
// arr.pop();
// console.log(arr)

// sort
// const arr = [1,6,4,7,2,8];
// arr.sort();
// console.log(arr)

// reverse
// const arr =[1,2,3,4,5,6];
// arr.reverse();
// console.log(arr)

//slice
// const arr1 = ["mubai","pune","sangli","kolhapur"];
// const sliceArr1 =arr1.slice(3);
// console.log(arr1)
// console.log(sliceArr1);


// const arr = ["mubai","pune","sangli","kolhapur"];
// const sliceArr1 =arr.slice(1,5);
// console.log(sliceArr1)

// splice
// const arr =["mubai","pune","sangli","kolhapur"]
// const spliceArray =arr.splice(3);
// console.log(arr)
// console.log(spliceArray)
// it will cut the array from index 2 and write remainng array

// concat
// const city1 =["jaipur","mumbai"];
// const city2 =["kota","shimala","pune"];
// const mergeCity = city1.concat(city2);
// console.log(mergeCity)

// Iterating over Arrays:
//1. Using for loop
// const myArray =[1,2,3,4,5];
// for(i=0;i< myArray.length; i++){
//   console.log(myArray[i])
// }

// const myArray = ["train","bike","car","motorcycle","jet"];
// for(i=0; i<myArray.length; i++){
//   console.log(myArray[i])
// }

// 2. Using for…of loop:
// const array = ["train","bike","car","motorcycle","jet"];
// for (const item of array) {
//   console.log(item);
// }

// 3. Using for…in loop:
// let myArray = ["train","bike","car","motorcycle","jet"];
// for(let item in myArray){
//   console.log(myArray[item])
// }


// Break and Continue
// 1.Break
// for(let i=1; i<7; i++){
//  if(i == 5){
//   break;
//  }
//  console.log(i)
// }

// 2.Continue
// for(let i= 1; i<10; i++){
//   if(i == 2){
//     continue;
//   }
//   console.log(i)
// }




// Rest Operator
// const fruits = ["apple" , "banana","orage","graps","apple"];
// const[first,second,...rest] =fruits;
// console.log(first);
// console.log(second);
// console.log(...rest);

// const person = {
//   name: 'Alice',
//   age: 30,
//   occupation: 'Engineer'
// };
// const { name, ...details } = person;
// console.log(name); // Output: Alice
// console.log(details);


// spread operator
// const arr1 = [1,2,3];
// const arr2 =[4,5,6];
// const arr3 =[...arr1 ,...arr2];
// console.log(arr3)

//destructuring
// let arr =[3,5,6,8,9,10];
// let[a,b,c,...rest]=arr;
// console.log(arr)
// its gonna add 3 value to a ,5 value to b and ,6 value to c and remaining gonna store in arr


// shallow copy
// const originalArray = [1, 2, [3, 4]];
// // Creating a shallow copy
// const shallowCopy = originalArray.slice();
// // Modifying the nested array
// shallowCopy[2][0] = 99;
// console.log(originalArray); // Output: [1, 2, [99, 4]] (original affected)
// console.log(shallowCopy);   // Output: [1, 2, [99, 4]]

// Deep copy
// const originalArray = [1, 2, [3, 4]];
// // Creating a deep copy
// const deepCopy = JSON.parse(JSON.stringify(originalArray));
// // Modifying the nested array
// deepCopy[2][0] = 99;
// console.log(originalArray); // Output: [1, 2, [3, 4]] (original unaffected)
// console.log(deepCopy);      // Output: [1, 2, [99, 4]]


// foreach
// numbers =[11,12]
// numbers.forEach(n => {
//   console.log(n*n)
// });

//map
//  let numbers =[11,12,13]
//  let ne=numbers.map((n)=>(n*n)); 

//  numbers.forEach(n=>console.log(n))
//  console.log("this is new array")
//  ne.forEach(n=>console.log(n))
 
//  let even=numbers.filter(n=>n%2==0)
//  even.forEach(n=>console.log(n))

//  reduce
// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15

// function takeInput(){
//   let count = document.getElementById('count').value
//   console.log(count)
// }

// hosting
// x=5;
// console.log(x);
// var x;

// console.log(x)
// var x=10;  answer = undefined

// greet();
// function greet(){
//   console.log("hello word")
// }


//callstack
// function main() {
//   console.log('Main function');
//   subFunction();
// }
// function subFunction() {
//   console.log('Sub function');
// }
// main();

// When main() is called, it is pushed onto the call stack.
// Inside main(), console.log('Main function') is executed, then subFunction() is called, pushing subFunction() onto the stack.
// Inside subFunction(), console.log('Sub function') is executed, then subFunction() completes, so it is popped off the stack.
// After subFunction() completes, control returns to main(), which then completes and is popped off the stack.
// Finally, the stack is empty as the program has finished execution.


// Global scoping
// var globalVar = 'I am in the global scope';
// function position(){
//   console.log(globalVar)
// }
// position()

// function scoping
// function position(){
//   var localVar = "i am the function scoping";
//   console.log(localVar);  //output = i am the function scoping
// }
// position();
// console.log(localVar);  //output = error

//block scoping
// function foo(){
//  if(true){
//   let blockVar="i am in the block scope"
//   console.log(blockVar);    answer = i am in the block scope
//  }
//  console.log(blockVar)    answer = error
// }
// foo()


// clouser

// /function outerFunction() {
//   let outerVariable = 'I am from outerFunction';
//   function innerFunction() {
//       console.log(outerVariable); // innerFunction has access to outerVariable
//   }
//   return innerFunction; // return the inner function
// }
// const closure = outerFunction(); // closure now holds innerFunction
// closure(); // Prints: I am from outerFunction

// fuction
// traditional function

// function sum(){

// }

//arrow function
// const sum = () => {}

// try and catch block
// function divide(a, b) {
//   try {
//       if (b === 0) {
//           throw new Error('Division by zero is not allowed');
//       }
//       return a / b;
//   } catch (error) {
//       console.error('Error caught:', error.message);
//       return 'Error occurred'; // Handle the error gracefully
//   } finally {
//       console.log('Division operation completed');
//   }
// }
// console.log(divide(10, 2)); // Output: 5
// console.log(divide(10, 0)); // Output: Error caught: Division by zero is not allowed, Division operation completed, Error occurred



// setTimeout
// console.log("first line of code");
// setTimeout(() =>{
//   console.log("last line of code")
// },5000);
// console.log("this is code")

// Promise
// const promise =new Promise((resolve,reject)=>{
//   const flag =true;
//   if(flag){
//     resolve("promise resolved")
//   }else{
//     reject("promise is rejected")
//   }

// });
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Final Block");
//   });


// await
// function wait(){
//   return new Promise((resolve ,reject) =>{
//     setTimeout(() =>{
//       console.log("wait is over");
//       resolve();
//     },2000)
//   });

// }
// async function executeSetTimeout(){
//   await wait();
//   console.log("after setTimeOut")
// }

// executeSetTimeout();
// console.log("outside SetTimeout");


//constructor
// function Person(name ,age){
//   this.name =name;
//   this.age =age;
// }
// const Person1 = new Person("kapil",27)
// console.log(Person1.name)

