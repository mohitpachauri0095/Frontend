const person ={
    firstName: "mohit",
    lastName: "pachauri",
    age:21,
    instroduce:function(){
        console.log(`Hi my name is ${this.firstName} ${this.lastName} and i am ${this.age} year old`);
    },
};

console.log(person.firstName);
console.log(person.lastName);
person.instroduce();

// const person = {
//     name: "Mohit",
//     lastname: "Pachauri",
//     age =21
// };
// function fullName(obj){
//     return `hello my name  ${this.firstname}`;
// }
// console.log(person)
