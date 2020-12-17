// 1. Object to JSON
// stringify(obj);
{
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);
}

const rabbit = {
    name : 'tori',
    color : 'white',
    size  : null,
    birthDate : new Date(),
    jump : () => {
        console.log(this.name + "can jump!");
    }
}
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key = ${key},  value = ${value}`);
    return key === 'name' ? 'ellie' : value;
    // 삼항연산자 ? : 
    // var age = 29;
    // var canDrinkAlcohol = (age > 19) ? "True, over 19" : "False, under 19";
    // console.log(canDrinkAlcohol); => "True, over 19"
});
console.log(json);

// 2. JSON to Object
// parse(JSON);

const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); -> error 발생 : JSON.stringify() 할때 함수는 포함이 안됐기 때문.
console.log(rabbit.birthDate);
console.log(obj.birthDate);
