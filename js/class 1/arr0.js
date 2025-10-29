function sum(num1, num2, ...rest){
let total =num1 +num2;
for(let i=0; i< rest.length; i++){
    total +=rest[i];
}
return total;
}
console.log (sum (1,2,3,4,5,6,7,8,9,10));
