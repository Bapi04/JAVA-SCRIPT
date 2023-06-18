//stack(primitive) , Heap(Non_primitive)

let myyoutubeType="Gaming";
let anotherType = myyoutubeType;
anotherType = "Coding"


console.log(anotherType);
console.log(myyoutubeType);


let user1 =
{
    email: "user@google.com",
    upi: "user@ybl"
}

let user2=user1;

user2.email = "bapi@gmail.com";

console.log(user1.email);
console.log(user2.email);