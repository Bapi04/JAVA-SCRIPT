//Dates is Object

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());

let myCreatedDate = new Date(2023,5,18)
// let myCreatedDate1 = new Date(2023,5,18,5,3)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDate());
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));
