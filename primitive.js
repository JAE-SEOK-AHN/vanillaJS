// primitive type  : number, string, boolean, null, undefined
//  object

// let number = 2;
// let number2 = number;
// console.log(number);
// console.log(number2);

// number2 = 3;

let obj = {
    name: 'ellie',
    age: 5
};

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('----------');
console.log(obj.name);
console.log(obj2.name);

function add(a, b) {
    return a + b;
}

const sum = add(3, 4);
console.log(sum);

const doSomething = add;
const result = doSomething(2, 3);
console.log(result);

const result2 = add(2, 3);
console.log(result2);

function surprise(operator) {
    const result = operator(2, 3); //add(2,3)
    console.log(result);
}

surprise(add);






