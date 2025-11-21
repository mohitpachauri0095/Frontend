class person{
    constructor(name,age){
        this.firstName = name;
        this.age =age;
        this.birthyear =2025 - age;
    }

    introduce(){
        console.log(`Hi my name is ${this.name}, and i am $ {this.age} year old`);
    }
}
const person2 =new person("mohit", 21);
person2.intro();