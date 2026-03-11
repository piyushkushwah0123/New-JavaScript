// console.log("Hello javascript");


// a= 10

//  console.log(a);

 // var let const

//  var a = 10 
//  var a = 20
//  console.log(a);

//  let a = 10
//   a = 20
//  console.log(a);

// const a = 10
//  a = 20
// console.log(a);

// var a = 10
// let b= 20
// const c = 30

// Scope :- Global, Functional , Block

// function abc(){
//     console.log(a);
//      console.log(b);
//       console.log(c);
// }
// abc()

// if(true){
//     var a = 10
//     let b = 20
//     const c = 30
// }

// console.log(a)
// console.log(b)
// console.log(c)

// let a = 10;
// let b = 20;

// console.log(a);
// console.log(b);


// var a = 10
// let b = 20
// const c = 30

// abc()

// function abc(){

//     var a = 10
//     let b = 20
//     const c = 30

//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// console.log(a);
// console.log(b);
// console.log(c);

// Data Types :- 1.Primitive , 2. Non primitive 


// Call By reference :--

// let a = "JavaScript"

// let obj = {
//     id:1,
//     name:"ramesh",
//     role:"Student",
// }


// let obj1 = obj

// obj1.name ="suresh"

// console.log(obj);
// console.log(obj1);


// Call By  value:--

// function abc(x){
//      x = 2 
//   console.log(x);
// }
// let a= 10

// abc(a)            // Argument :- jab bhi call krte h , actual value pass krte hai 
  


// let n = 12345;
// let count = 0;

// while(n>0){
//   n = Math.floor(n/10);
//   count++;
// }
// console.log(count);


//  Function 
//  1. Declaration (named function) 

// function abc() {
//     console.log("Hello JavaScript");
// return                          // Value back krne ke liye 
// }

// abc()


// function abc (a , b , c){
// console.log("Hello JAVA");
// console.log(c);

// // return c
// }
// console.log(abc(10,20));

// function abc(a,b){
//   console.log("ab");
// }
// abc(10,20)


// 2. Function expression

// let a = function(){
//   console.log("hello javascript");
// }
// a();


// 3. Anonymous Function

// function(){                                // We can't call this bcz there is no name of function
//   console.log("hello javascript");    
// }                                     


// 4. IIFE 

// (function () {
//   console.log("hello javascript");
// })()


// 5. Arrow Function

// let a = (a,b) => {
//   return  a + b 
// }
// console.log(a(10,20));

// Single Argument

// let a = a => a * a
// console.log(a(10));


// 6. Default parameterize funtion

// function abc (a, b = 50){
//   return a + b
// }
// console.log(abc(10, 20));


// 7. Callback Funtion

// function abc(a , callback){
//    console.log(a);
//    callback()
// }

// function mno(){
//    console.log("hello");
// }
// abc("amit" , mno)


// function abc(a , callback){
//    console.log(a);
//    callback()
// }

// abc("amit" , function mno(){
//   console.log("hello");
// })