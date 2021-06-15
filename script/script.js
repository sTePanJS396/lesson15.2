'use strict';
class First {
    constructor(){};
    hello() {
        this.hi = console.log('Привет, я метод родителя!');
    }

}

class Second extends First {
    constructor() {
        super();
    };
    hello(){
        super.hello();
        console.log('А я наследуемый метод!');
    }
}

const sayHello = new Second();

sayHello.hello();