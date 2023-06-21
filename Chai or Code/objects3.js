const course = {
    courseName : "js in Hindi",
    price : "999",
    courseInstructor : "Bapi"
}

const {courseInstructor : inst}=course
// console.log(courseInstructor);
console.log(inst); //Object destructure


// {
//     "name" : "bapi",
//     "courseName": "js in Hindi",
//     "price" : "free"
// }