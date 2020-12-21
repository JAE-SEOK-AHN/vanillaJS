{
    const ellie = {
        name: 'Ellie',
        age: '18'
    };

    const name = 'Ellie';
    const age = '18';

    const ellie2 = {
        name: name,
        age: age
    };

    const ellie3 = {
        name,
        age
    };

    console.log(ellie, ellie2, ellie3);


}

{
    //spread syntax
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];

    //array copy
    const arrayCopy = [...array];
    // ...  - array 에 들어있는 item 하나하나씩을 낱개로 가져옴

    const arrayCopy2 = [...array, { key : 'key3' }];

    console.log(array, arrayCopy, arrayCopy2);

    const obj3 = { ...obj1 };
    console.log(obj3);

}
    //동일한 key를 가지고 있는 경우에는 뒤에있는 값으로 덮어씌워짐
    
 {

     function printMessage(message = 'default message') {
            console.log(message);
        }

    
    printMessage('hello');
    printMessage();
    
        
}


{
    // Tenary Operator 
    
    {
        const isCat = true;

        {
            let component;
            if (isCat) {
                component = '🐱'
            } else {
                component = '🐶'
            }
            console.log(component);
        }
        
        {
            const component = isCat ? '🐱' : '🐶'
            console.log(component);
        }
    }
}

{
    const person1 = {
        name: 'Ellie',
        job: {
            title: 'S/W Engineer',
            manager: {
            name: 'Bob',
        },
    },
};
         
         const person2 = {
             name: 'Bob',
            };
            
            {
                function printManager(person) {
                    console.log(person1.job.manager.name);
                }
                
                printManager(person1);
                printManager(person2);
            }

            {
                function printManager(person) {
                    console.log(
                        person.job
                          ? person.job.manager
                            ? person.job.manager.name
                            : undefined
                          :undefined  
                    );
                }
                printManager(person1);
                printManager(person2);
            }


            function printManager(person) {
                console.log(person.job && person.job.manager && person.job.manager.name );
            }
            printManager(person1);
            printManager(person2);



            //optional chaning을 이용하여 코드 간소화
            {
                function printManager(person) {
                    console.log(person.job?.manager?.name);
                }
                printManager(person1);
                printManager(person2);
            }

        }


        
        
        



