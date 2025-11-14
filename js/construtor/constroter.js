const person = function (name, age) {
    this.firstName = name;
    this.age =age;
    this.birthyear =2025 - age;
};

const person1 =new person("mohit", 21);
console.log(person1);
