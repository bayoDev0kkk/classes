/**
 * Реализуйте класс Validator, который будет проверять строки.
 * К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 * Если является - возвращает true, если не является - то false.
 * Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
 * метод isDate для проверки даты и метод isPhone для проверки телефона:
 */
class Validator {
    isEmail(str) {
        if (str.includes("@" && ".")) {
            return true;
        } else {
            return false;
        }
    }
    isDomain(str) {
        return str.includes(".") && !str.includes(" ");
    }
    isDate(str) {
        const date = new Date(str);
        if (date.getTime()) {
            return true;
        } else {
            return false;
        }
    }
    isPhone(str) {
        const cleaned = str.replace(/\D/g, "");
        const phoneRegex = /^(\+7|8)?\d{10}$/;
        return phoneRegex.test(cleaned);
    }
}

const validator = new Validator();

console.log(validator.isEmail("phphtml@mail.ru"));
console.log(validator.isDomain("phphtml.net"));
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("+7-971-528-15-17")); //тут можете формат своей страны

module.exports = Validator;
