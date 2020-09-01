/* class RevealOnScroll{
    constructor(){
        
    }
}


export default RevealOnScroll; */



function Person(name, age){

    this.name = name;
    this.age = age;

    bio = function(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}


module.exports = Person;