'use strict';

const calculator = {

    read() {
        this.num1 = +prompt('Введите первое число:');
        if (typeof this.num1 !== Number && isNaN(this.num1)) {
            alert('first second number is wrong!');
            this.read();
        }
        this.num2 = +prompt('Введите второе число:');
        if (typeof this.num2 !== Number && isNaN(this.num2)) {
            alert('second number is wrong!');
            this.read();
        }
        console.log(this);
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
};

calculator.read();
alert(`суммирование: ${calculator.sum()}`);
alert( `умножение: ${calculator.mul()}`);
