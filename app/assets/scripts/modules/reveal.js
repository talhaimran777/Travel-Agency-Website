/* class RevealOnScroll{
    constructor(){
        
    }
}


export default RevealOnScroll; */



class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }


    bio = function(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}


export default Person;