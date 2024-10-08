    /**
 * Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
 * Наш класс теперь будет работать так:
 */

class Worker {
    _name = "";
    _surname = "";
    _days = 0;
    _rate = 0;

    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    get getName() {
        return this._name;
    }

    get getSurname() {
        return this._surname;
    }

    set setRate(value) {
        this._rate = value;
    }

    get getRate() {
        return this._rate;
    }

    set setDays(value) {
        this._days = value;
    }
    get getDays() {
        return this._days;
    }

    // Метод для вычисления зарплаты
    get getSalary() {
        return this.calculateSalary();
    }

    // Вспомогательный метод для расчета зарплаты
    calculateSalary() {
        return this._rate * this._days;
    }
}

const worker = new Worker("Иван", "Иванов", 10, 31);
console.log(worker.getName); //выведет 'Иван'
console.log(worker.getSurname); //выведет 'Иванов'
console.log(worker.getRate); //выведет 10
console.log(worker.getDays); //выведет 31
console.log(worker.getSalary); //выведет 310 - то есть 10*31

/**
 * Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.
 * Наш класс теперь будет работать так:
 */

console.log(worker.getRate); //выведет 10
console.log(worker.getDays); //выведет 31
console.log(worker.getSalary); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate = 20; //увеличим ставку
worker.setDays = 10; //уменьшим дни
console.log(worker.getSalary); //выведет 200 - то есть 20*10

module.exports = Worker;
