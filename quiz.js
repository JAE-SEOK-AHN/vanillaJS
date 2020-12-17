{
const fruits = ['apple', 'banana', 'orange'];
const string = fruits.join();
console.log(string);
// join() - 배열을 String으로 변환해주는 api
}

{
const a = "😊,😂,🤣,😍";
const result = a.split(',');
console.log(result);
// split() - String을 Array로 변환해주는 api
}

const array = [1, 2, 3, 4, 5];
const reverse_array = array.reverse();
console.log(reverse_array);
// reverse()  - Array의 순서를 거꾸로 바꿔주는 api

const arraa = [1, 2, 3, 4, 5];
const new_array = arraa.splice(0, 2);
console.log(arraa);
// splice() - 시작할 위치와 개수를 입력하면 배열에서 요소를 제거함
// slice() 로도 원하는 결과를 얻을 수 있음. 다만 splice는 배열 자체를 수정하고 slice는 배열에서 원하는 부분만 가져옴.


class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88)
    ];

    {
    const result = students.find((students) => students.score === 90);
    console.log(result);
    // find() - callback 함수가 true일때 요소를 return
    }

    {
        const result = students.filter((students) => students.enrolled === true);
        console.log(result);
    }
    // filter() - callback 함수가 true인 요소들만 배열로 만들어서 return

    {
        const result = students.map((student) => student.score);
        console.log(result);
    }
    // map() - 배열안에 들어있는 요소들을 다른것으로 변환해주는 api 

    {
        const result = students.some((student) => student.score < 50);
        console.log(result);
    }
    // some() - 배열의 요소중에서 callback함수의 return이 true값이 있는지 없는지 확인해주는 api(Boolean)
    // 모두가 true인지 확인하려면 every() 를 사용

    {
        const result = students.reduce((prev, curr) => {
            console.log('----------');
            console.log(prev);
            console.log(curr);
            return prev + curr.score;
        }, 0);
        console.log(result / students.length);
    }
    // reduce() - callback 함수를 전달하고 initial value를 전달해서 모든 요소들의 누적된 값을 return

    {
        const result = students.map((student)=> student.score).join();
        console.log(result);
    }

    {
        const result = students.map((student)=>student.score).sort((a, b) => a - b).join();
        console.log(result);       
    }
    // sort((a,b) => a - b) - a - b 값일 경우 오름차순으로 정렬, b - a인 경우 내림차순 정렬