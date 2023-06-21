const marvel_heros = ["Thor","Iron man","Captain"];
const dc_heros = ["Superman","Batman","Flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const allheros=marvel_heros.concat(dc_heros);
// console.log(allheros);

const allNewheros = [...marvel_heros, ...dc_heros] //spread
// console.log(allNewheros);

const anthrArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realUseARR = anthrArr.flat(Infinity)
// console.log(realUseARR);

console.log(Array.isArray("Bapi"));
console.log(Array.from("Bapi")); //Convert to array
console.log(Array.from({name : "Bapi"})); //Intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));