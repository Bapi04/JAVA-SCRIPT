//Array

const myArray  = [0,1,2,3,4,5];
const myHeros = ["Shaktiman","Naga"]

const myArray2 = new Array(1,2,3,4)
// console.log(myArray[1]);
// console.log(myArray2);

// myArray2.push(5)
// myArray2.push(6)
// console.log(myArray2);

// myArray2.pop()

// myArray2.unshift(6)
// console.log(myArray2);
// myArray2.shift()

// console.log(myArray.includes(7));
// console.log(myArray2.indexOf(1));

//const newArr = myArray2.join()

//console.log(myArray2);
//console.log(newArr);//Now converted to type string
    
//Slice,splice

console.log("A ",myArray2);

const myn1= myArray2.slice(1,3);//Not manimulate original array
console.log(myn1);
console.log("B ",myArray2)

const myn2= myArray2.splice(1,3);//Manipulates original array
console.log("C ",myArray2)
console.log(myn2);



