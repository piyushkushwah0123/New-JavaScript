// console.log("Hello javascript");

const { useCallback } = require("react")


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


// 5. Arrow Function :- Bind nhi hota h this ke sath

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

// function abc(){
//     console.log("Hello");
    // return undefined(value)                       => Waps call krte h toh undefined 
// }
// console.log(abc());


// console.log(a)
// var a = 10;                     // In case in let there will be an error  


// let a = 10

// console.log("hello a");
// console.log('hello a');

// console.log(`hello ${a}`);


// function abc(){
//     alert("hello javascript")

//     let a = prompt("Enter your email");
//     console.log(a);
// }


// function abc(){
//     var a =10
// let b = 20
// const c =30
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// abc()


// Block Scope:-


// if(true){
// var a =10
//  let b = 20
//  const c =10

// console.log(a);
// console.log(b);
// console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);


// function abc(callback){
//     console.log("hello abc");
// callback()
// }

// function mno(){
//  console.log("hello mno");
// }

// abc(mno)


// NUMBER METHOD :-

// 1. Number 

// let a = Number(5);
// let b = Number("55");

// console.log(a);
// console.log(b);

// 2. parseInt() :- String convert in integer number 

// let a = parseInt("10.33");
// let b = parseInt("10.33px");
// let c = parseInt("abc10");

// console.log(a);
// console.log(b);
// console.log(c);

// 3. parseFloat() :- String convert in decimal Number 

// let a = parseFloat("10.33");
// let b = parseFloat("10.33px");
// let c = parseFloat("abc10");

// console.log(a);
// console.log(b);
// console.log(c);


// 4. tofixed() :- decimal ke baad kitna digit return krna h

// let a = 10.555

// console.log(a.toFixed(2));
// console.log(a.toFixed(3));
// console.log(a.toFixed(5));
// console.log(a.toFixed(4));
// console.log(a.toFixed(6));


// 5. toPrecision() :- Returns a string containing a number

// let a = 10.555

// console.log(a.toPrecision(2));
// console.log(a.toPrecision(3));
// console.log(a.toPrecision(5));
// console.log(a.toPrecision(4));
// console.log(a.toPrecision(6));


// 6. toString() :-  Number ko  String m convert

// let a = 10
// console.log(typeof a)
// let result = a.toString()
// console.log(typeof result);


// 7. valueOf() :- 

// let a = new Number(5)
// console.log(typeof a.valueOf);

// 8.  isfinite():- 

// let a= 10
// console.log(Number.isFinite(a));


// 9. isInteger():-

// let a= 10
// console.log(Number.isInteger(10));
// console.log(Number.isInteger(-10));
// console.log(Number.isInteger(10.55));


// 10. isNan();

// let a= 10
// console.log(Number.isNaN(10));


// Math Object Methods 
//1. Math.round()

// let a = 10.55
// console.log(Math.round(a));
// console.log(Math.round(2.10));


// 2. Math.ceil()

// console.log(Math.ceil(10.5));
// console.log(Math.ceil(10.1));
// console.log(Math.ceil(10.9));
// console.log(Math.ceil(- 10.1));


// 3. Math.floor()

// console.log(Math.floor(10.1));
// console.log(Math.floor(10.5));
// console.log(Math.floor(10.9));
// console.log(Math.floor(- 10.1));


// 4. Math.random()

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// console.log(Math.floor(Math.random() * 10 )+ 1);
// console.log(Math.floor(Math.random() * 9000 )+ 1000);
// console.log(Math.floor(Math.random() * 900 )+ 100);
// console.log(Math.floor(Math.random() * 90 )+ 10);

// Generate number between 151 to 200
// console.log(Math.floor(Math.random() * 50 )+ 151);


// 5. Math.max()

// console.log(Math.max(10, 20 ,30 ,40, 50));


// 6. Math.min()

// console.log(Math.min(10, 20 ,30 ,40, 50));


// 7. Math.trunc()

// console.log(Math.trunc(10));
// console.log(Math.trunc(10.55));
// console.log(Math.trunc(- 10.3));


// 8. Math.power();

// console.log(2**4);
// console.log(Math.pow(2,4));

// console.log(15**10);
// console.log(Math.pow(15,10));


// 9. Square root()

// console.log(Math.sqrt(7));
// console.log(Math.sqrt(21));
// console.log(Math.sqrt(30));


// 10. Cube root()

//  console.log(Math.cbrt(8));
//  console.log(Math.cbrt(64));
//  console.log(Math.cbrt(25));


// 11. Math.abs()

// console.log(Math.abs(10));
// console.log(Math.abs(10.5));
// console.log(Math.abs(- 10));
// console.log(Math.abs(- 10.5));
// console.log(Math.abs(0));


// 12. Math.sign()

// console.log(Math.sign(10));
// console.log(Math.sign(-10));
// console.log(Math.sign(0));


// String :- 

// let a = 10
// console.log("hello js a")
// console.log(`hello js ${a}`);   // Template literal

// let str = 'Hello Javacript';
// let str = "Hello Javacript";

// STRING METHODS :-

// 1. length
// let str = "Hello Javacript";
// console.log(str.length);


// 2. toUppercase()

// let str = "Hello Javacript";
// console.log(str.toUpperCase());


// 3. toUppercase()

//  let str = "Hello Javacript";
//  console.log(str.toLowerCase());


// 4. trim()

//  let str = "   Hello Javacript     ";
//  console.log(str.trim());


// 5. trimStart()


// 6. trimEnd()


// 7. slice() :- Negavtive indexing ko support krta h 

// let str = "hello Javacript";
// let result= str.slice(0,5);
// console.log(result);

// let str = "hello javascript";
// let result= str.slice(-10,-6);
// console.log(result);

// let str = "hello javascript";
// let result= str.slice(-10);
// console.log(result);


// 8. subString() :- negative indexing support nhi krta 

// let str = "hello javascript";
// let result= str.substring(6);
// console.log(result);


// 9. substr()                      // Debricate

//  let str = "hello javascript";
//  let result= str.substr(6,4);
//  console.log(result);


// 10. charat()

// let str = "javascript";
// console.log(str.charAt(0));

// let str = "java";
// console.log(str.charAt(5));


// 11. at()

// let str = "java";
// console.log(str.at(3));

// let str = "java";
// console.log(str.at(5));           // Undefined


// 12. charCodeAt()

// let str = "java";
// console.log(str.charCodeAt(3));    // unique value 

// let str = "java";
// console.log(str.charCodeAt(5));       // NaN


// 13. indexOf()

// let str = "javascript";
// console.log(str.indexOf("s"));

// let str = "java";
// console.log(str.indexOf("s"));          // -1


// 14. lastIndexOf()

// let str = "javascript";
// console.log(str.lastIndexOf("a"));  
// console.log(str.lastIndexOf("s"));


// 15.includes()

// let str = "javascript";
// console.log(str.includes("a"));             // return boolean    


// 16. startwith()

// let str = "javascript";
// console.log(str.startsWith("a")); 

// let str = "javascript";
// console.log(str.endsWith("t")); 


// 17. replace()

//  let str = "javascript";
//  console.log(str.replace("javascript","java")); 

//  let str = "java";
//  console.log(str.replace("j","h")); 


// 18. replaceAll()

// let str = "javascript";
// console.log(str.replaceAll("a","v"));


// 19. split()

// let str = "javascript";
// console.log(str.split(""));     // String convert in Array

// let str = "hello,javascript";
// console.log(str.split(","));


// 20. concat()

// let str1 = "hello";
// let str2 = "javascript";
// let str3 = "world";

// let str4 = str1.concat(str2,str3)
// console.log(str4);


// 21. repeat()

// let str = "javascript";
// console.log(str.repeat(2));

// Ques :- Conver first letter in UpperCase

// let str1 = "hello";
// let str2 = "javascript";

// str1 = str1.charAt(0).toUpperCase() + str1.slice(1);
// str2 = str2.charAt(0).toUpperCase() + str2.slice(1);

// console.log(str1);
// console.log(str2);


// let str = "Piyushkushwah@002gmail.com";

// str = str.replace("Piyushkushwah@002gmail.com" , "Piy*********@002gmail.com")
// console.log(str);


// Array :-

// let arr = [10,200,30,40,50]
// let arr= new Array (1,2,3,)
// console.log(arr);


// let arr =  [10,20,30,40,50]
// arr [10] = 60
// console.log(typeof arr);
// console.log(arr.length);


// let arr =  [10,20,30,40,50]
// console.log(Array.isArray(arr));


// let arr = "10"
// console.log(Array.isArray(arr));


// Array Methods :-

// 1. push()  :- last index

// let arr =  [10,20,30,40,50]
// let result = arr.push(60)
// console.log(arr);
// console.log(result);


// 2. pop()  :- last index


// 3. shift()


// 4. unshift() :-  


// 5. slice() :- add amd delete ( Support negative indexing )


// 6. join() :- convert 


// 7. sort() :-  used to sort the element pf an array in place and return in sorted array

// let arr =  [11,2,16,4,21]
// let arr1 = ["m","f","z","a"]        
// let result = arr.sort((a,b) => a-b)
// console.log(arr);                             


// let arr = [30,40,50,10,20]
// for(let i=0;i<=arr.length;i++){
//     for(let j=0; j<=arr.length;j++){
//        if(arr[j]>arr[j+1]) {
//         let temp = arr[j]
//         arr[j]=arr[j+1]
//         arr[j+1]= temp;
//        }
//     }
// }
// console.log(arr);


// 8. Concate()  := merge and add 


// 9. some()


// 10. map() :-  Transfrom or modify

// let arr = [30,40,50,10,20]
// let result =  arr.map(val => val * val)
// console.log(result);


// 11. filter() 


// 12. reduce()

// let arr = [10,20,30,40,50]

// let result = arr.reduce((acc , curr) => {
//     return acc + curr
// }, 0)  
// console.log(result); 


// Object :- It is a data type used to store multiple values in a single variable on the form of key - value pair.
//           It is a collection of properties 


// nullish( ?? ) :- null  ya undefined h toh right part chalega , inke alawa kuch bhi ho left part chalega.

// let a = null
// console.log(a ?? "N/A");

// let a = 1
// console.log(a ?? "N/A");

// let a = false
// console.log(a ?? "N/A");

// let a = 10
// console.log(a || "N/A");
// console.log(a && "N/A");


// async await :- async return promise and await handle that

// async function abc(){
//     return "hello"
// }

// console.log(abc());


// function getData(){
//     setTimeout(() => {
//         console.log("data fetch successsfully")
//     }, 1000);
// }

// async function abc(){
// console.log("start")

//     let result = await getData()
//     console.log(result);

//     console.log("end");
// }
// console.log(abc());


// Fetch Api :- return promise

// async function fetchData(){
//     let result = fetch("https://jsonplaceholder.typicode.com/todos")
//     console.log(result);
// }
// fetchData



// let json = {
//     "name" :"abc",
//     "age" : 25,
//     "role" : "student"
// }


// let obj = {
//     name :"abc",
//     age : 25,
//     role : "student"
// }

// let obj1 = JSON.stringify(obj)

// console.log(obj1);


// async function fetchData() {
//     let result = await fetch("https://jsonplaceholder.typicode.com/todos", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             name: "mukesh"
//         })
//     });

//     let updatedData = await result.json();
//     console.log(updatedData);
// }
// fetchData();


// localStorage :- 


// let obj =  {
//     name :"abc",
//     age:25
// }
// let result = JSON.stringify(obj)

// localStorage.setItem("user" , result);
// localStorage.setItem("product" , "mobile")

// // localStorage.removeItem("product")

// console.log(localStorage.getItem("user"));


// sessionStorage :- 

// let obj =  {
//     name :"abc",
//     age:25
// }
// let result = JSON.stringify(obj)

// sessionStorage.setItem("user" , result);
// sessionStorage.setItem("product" , "mobile")
// sessionnStorage.removeItem("product")

// console.log(sessionStorage.getItem("user"));


// async function fetchData() {
//     let result = await fetch("https://jsonplaceholder.typicode.com/todos", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             name: "mukesh"
//         })
//     });

//     let updatedData = await result.json();
//     console.log(updatedData);
// }
// fetchData();


const db = {

  users: [
    {
      userId: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "customer",
      address: {
        city: "Delhi",
        state: "Delhi",
        country: "India",
        pincode: 110001
      },
      cart: [
        { productId: 1, quantity: 1 },
        { productId: 4, quantity: 2 }
      ],
      wishlist: [2, 3],
      orders: ["ORD1001", "ORD1002"]
    },

    {
      userId: 2,
      name: "Priya Singh",
      email: "priya@gmail.com",
      role: "customer",
      address: {
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        pincode: 400001
      },
      cart: [
        { productId: 2, quantity: 1 }
      ],
      wishlist: [1],
      orders: ["ORD1003"]
    }
  ],

  categories: [
    {
      categoryId: 1,
      name: "Electronics",
      parentCategory: null
    },
    {
      categoryId: 2,
      name: "Accessories",
      parentCategory: 1
    },
    {
      categoryId: 3,
      name: "Furniture",
      parentCategory: null
    }
  ],

  vendors: [
    {
      vendorId: 1,
      name: "TechWorld",
      rating: 4.5,
      location: "Bangalore"
    },
    {
      vendorId: 2,
      name: "HomeStore",
      rating: 4.2,
      location: "Jaipur"
    }
  ],

  products: [
    {
      productId: 1,
      name: "Laptop",
      price: 65000,
      brand: "Dell",
      categoryId: 1,
      vendorId: 1,
      stock: 10,
      specifications: {
        ram: "16GB",
        storage: "512GB SSD",
        processor: "Intel i7"
      },
      rating: 4.6
    },

    {
      productId: 2,
      name: "Smartphone",
      price: 30000,
      brand: "Samsung",
      categoryId: 1,
      vendorId: 1,
      stock: 20,
      specifications: {
        ram: "8GB",
        storage: "128GB",
        battery: "5000mAh"
      },
      rating: 4.4
    },

    {
      productId: 3,
      name: "Headphones",
      price: 5000,
      brand: "Sony",
      categoryId: 2,
      vendorId: 1,
      stock: 15,
      specifications: {
        type: "Wireless",
        noiseCancellation: true
      },
      rating: 4.5
    },

    {
      productId: 4,
      name: "Office Chair",
      price: 12000,
      brand: "GreenSoul",
      categoryId: 3,
      vendorId: 2,
      stock: 8,
      specifications: {
        material: "Mesh",
        adjustableHeight: true
      },
      rating: 4.2
    }
  ],

  orders: [
    {
      orderId: "ORD1001",
      userId: 1,
      orderDate: "2026-03-01",
      items: [
        { productId: 1, quantity: 1 },
        { productId: 3, quantity: 2 }
      ],
      payment: {
        method: "UPI",
        status: "Paid"
      },
      delivery: {
        status: "Delivered",
        date: "2026-03-05"
      },
      coupon: "DISC10"
    },

    {
      orderId: "ORD1002",
      userId: 1,
      orderDate: "2026-03-07",
      items: [
        { productId: 4, quantity: 1 }
      ],
      payment: {
        method: "Credit Card",
        status: "Paid"
      },
      delivery: {
        status: "Shipped",
        expected: "2026-03-12"
      }
    },

    {
      orderId: "ORD1003",
      userId: 2,
      orderDate: "2026-03-08",
      items: [
        { productId: 2, quantity: 1 }
      ],
      payment: {
        method: "COD",
        status: "Pending"
      },
      delivery: {
        status: "Processing"
      }
    }
  ],

  reviews: [
    {
      reviewId: 1,
      userId: 1,
      productId: 1,
      rating: 5,
      comment: "Excellent laptop",
      date: "2026-03-06"
    },
    {
      reviewId: 2,
      userId: 2,
      productId: 2,
      rating: 4,
      comment: "Good phone",
      date: "2026-03-09"
    }
  ],

  coupons: [
    {
      code: "DISC10",
      discount: 10,
      type: "percentage",
      expiry: "2026-12-31"
    }
  ],

  inventory: [
    {
      productId: 1,
      warehouse: "Delhi",
      stock: 10
    },
    {
      productId: 2,
      warehouse: "Mumbai",
      stock: 20
    },
    {
      productId: 3,
      warehouse: "Bangalore",
      stock: 15
    },
    {
      productId: 4,
      warehouse: "Jaipur",
      stock: 8
    }
  ]

};

// Section 1: Basic Questions

// Ques :- 1. Get all users' names.
// const userNames = db.users.map(user => user.name);
// console.log(userNames);


// Ques :- 2. Find user with userId = 1.
// const user = db.users.find(u => u.userId === 1);
// console.log(user);


// Ques :- 3. Get all products with price greater than 10,000.
// const product = db.products.filter(p => p.price > 10000);
// console.log(product);


// Ques :- 4. List all categories names.
// const names = db.categories.map(c => c.name);
// console.log(names);


// Ques :- 5. Find all vendors with rating above 4.3.
// const vendor = db.vendors.filter(v => v.rating > 4.3);
// console.log(vendor);


// Ques :- 6. Get all products with stock less than 10.
// const product = db.products.filter(p => p.stock  < 10);
// console.log(product);


// Ques :- 7. Find all users from "Delhi".
// const city = db.users.filter(u => u.address.city === "Delhi");
// console.log(city);


// Ques :- 8. Get all orders with status "Delivered".
// const package = db.orders.filter(o => o.delivery.status === "Delivered");
// console.log(package);


// Ques :- 9. Count total number of products.
// const product = db.products.length;
// console.log(product);


// Ques :- 10. Get all wishlist products of user 1.
// const user = db.users.find(u => u.userId === 1);
// db.products.filter(p => user.wishlist.includes(p.productId));
// console.log(user);

// Section 2: Intermediate Questions

// Ques :- 1. Get total cart value of user 1.
// Ques :- 2. Find all products in "Electronics" category.
// Ques :- 3. Get vendor name for each product.


// Ques :- 4. Find total number of orders per user.
// const order = db.users.map(u => ({user: u.name,totalOrders: u.orders.length}));
// console.log(order);


// Ques :- 5. Get all products with rating above 4.5.
// const rating = db.products.filter(p => p.rating > 4.5);
// console.log(rating);

// Ques :- 6. Find all orders where payment method is "UPI".
// const order = db.orders.filter(o => o.payment.method === "UPI");
// console.log(order);


// Ques :- 7. Get all items from order "ORD1001".
// const order = db.orders.find(o => o.orderId === "ORD1001");
// order.items;
// console.log(order);


// Ques :- 8. Find products that are out of stock.
// const product = db.products.filter(p => p.stock === 0);
// console.log(product);

// Ques :- 9. Get all reviews for productId = 1.
// const review = db.reviews.filter(r => r.productId === 1);
// console.log(review);


// Ques :- 10. Find average rating of all products.


// Section 3: Advanced Questions

// Ques :- 1. Calculate total revenue generated from all orders.
// Ques :- 2. Get most expensive product.
// Ques :- 3. Find most sold product (based on order quantity).
// Ques :- 4. Get user who placed the highest number of orders.
// Ques :- 5. Find total quantity sold per product.
// Ques :- 6. Get top-rated product.
// Ques :- 7. Find all products with no reviews.
// Ques :- 8. Get all users who used a coupon.
// Ques :- 9. Find total discount applied using coupons.
// Ques :- 10. Get orders that are still pending delivery.



 





