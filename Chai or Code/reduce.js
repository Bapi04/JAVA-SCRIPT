const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,curr) {
//     console.log(`acc : ${acc} and curr : ${curr}`);
//     return acc+curr
// },0 )

// console.log(myTotal);

const myTotal = myNums.reduce( (acc,curr) => acc+curr,0 )
// console.log(myTotal);

const shoppingCart = [{
    itemName: "js course",
    price: 2999
},
{
    itemName:"Web dev",
    price:1999
},
{
    itemName:"App dev",
    price: 4999
},
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay);