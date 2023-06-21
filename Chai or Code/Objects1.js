//singleton object buid in constructor method .--> object2.js

//object literals--.>

const mySym = Symbol("key1")

const jsUser = {
    name: "bapi",
    "fullName": "Bapi Ranjan Parekh",
    [mySym]:"mykey1", //symbol
    age:22,
    location:"Odisha",
    email: "xyz@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);

jsUser.email = "bapi@chatgpt.com"
// Object.freeze(jsUser) //Now cannot change email
jsUser.email= "bapi@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello jsUser");
}


jsUser.greeting2 = function(){
    console.log(`hello jsUser , ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());