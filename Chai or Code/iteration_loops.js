//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// for (let i = 0;i <=10;i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//         // console.log(`inner loop value ${j} and outer  loop ${i}`);
//         console.log(`${i} * ${j} = ${i*j} `);
//     }
// }


//break and continue

// for (let i = 0; i <= 10; i++) {
//     if(i==5){
//         console.log(`detected 5 `);
//         break;
//     }
//     console.log(`value of i is ${i}`);
    
// }

for (let i = 0; i <= 10; i++) {
    if(i==5){
        console.log(`detected 5 `);
       continue;
    }
    console.log(`value of i is ${i}`);
    
}