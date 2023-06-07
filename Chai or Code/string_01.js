//String is a Object  
  
const name = "bapi";
const repoCount =30;

//console.log(name+repoCount+"value");

//BackTicks----> string Interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('bapi ranjan parekh');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

 const newString = gameName.substring(0,4);
 console.log(newString);

 const anotherString = gameName.slice(-10,4);
 console.log(anotherString);

 const newString1 = "   Bapiparekh   "
 console.log(newString1);
 console.log(newString1.trim());

 const url = "https://bapi.com/bapi%20parekh"

 console.log(url.replace('%20','_'));

 console.log(url.includes('ranjan'));

console.log(gameName.split(' '));