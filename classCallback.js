class Counter {
    constructor(runEveryFiveTimes) {
        
    }) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase(runIf5times) {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            this.callback(this.counter);
        }
    }
}

const coolCounter = new Counter();
function printSomething() {
    console.log('yo!');
}

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();