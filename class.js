class person {
    //constructor
    constructor (name, age) {
        //fields
        
        this.name = name;
        this.age = age;
    }
    
    //methods
    speak() {
        console.log(this.name + " hello!");
    
    }
}

_callApi = () => {
     
};

const ellie = new person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();