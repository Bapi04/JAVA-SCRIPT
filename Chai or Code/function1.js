function sayMyName(){
    console.log("Bapi");
}

// sayMyName()

// function add(num1,num2){
//     console.log(num1+num2);
// }

// add(2,3)

function add(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
}

const res=add(2,3)
console.log("Result : ",res);


function loginUserMessage(userName){
    if(userName===undefined){
        console.log("Please enter userName");
        return
    }
    return `${userName} just loggedIn`
}

// console.log(loginUserMessage("Bapi"));
console.log(loginUserMessage())