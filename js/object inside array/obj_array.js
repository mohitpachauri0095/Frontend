// let arr = [
//     {user:1, name: "mohit"},
//     {user:2, name: "rohit"},
//     {user:3, name: "moni"},
//     {user:4, name: "kamal"}
// ]
// console.log(arr);


let arr = [
    {user:1, name: "mohit", age:22},
    {user:2, name: "rajeshkhanna", age:22},
    {user:3, name: "mohita", age:25},
    {user:4, name: "rajeshkhannaa", age:252}

]

let [{name},  , {name:name1}] =arr;
console.log(name);
console.log(name1);
console.log(arr);