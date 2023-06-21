//singleTn object
//const tinderUser = new Object()

const tinderUser = {} //Non singleton
tinderUser.id="123abc"
tinderUser.name="bapi"
tinderUser.isLoggedIn=false


// console.log(tinderUser);

const regularuser = {
    email: "bapi@gmail.com",
    fullName : {
        userFullName : {
            FirstName: "Bapi",
            lastName : "Parekh"
        }
    }
}

//console.log(regularuser.fullName.userFullName.FirstName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

//const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);


console.log(Object.keys(tinderUser)); //return keys
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//properties available or not