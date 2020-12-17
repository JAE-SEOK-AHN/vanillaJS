'use strict';

// Javascript is synchronous.

console.log('1');
setTimeout(function () {
    console.log('2');
}, 1000);
console.log('3');
// callback 함수 : 원할때 인자로 전달하여 불러 쓰는 함수 (Call - back 함수), 동기일수도 있고, 비동기일수도 있음.

// synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(()=>console.log('hello'));

// asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=>{
            if(
                (id === 'ellie' && )
            )
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        
    }
}