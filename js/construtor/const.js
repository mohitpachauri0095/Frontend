const person = function (name, age) {
    this.firstName = name;
    this.age =age;
    this.birthyear =2025 - age;
};          
   
person.prototype.introduce = function(){
    console.log(`hi my name is &{this.firstName}, and i am ${this.age} year old, i was born in ${this.birthyear}`);
                 
};              
    
const person1 =new person("mohit", 61);
console.log(person1);        
 
