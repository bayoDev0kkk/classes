/**

 * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
 * Ожидаемый результат: ({}) => true,
 ({ a: undefined }) => true,
 ({ a: 1 }) => false
 * Пустые значения: '', null, NaN, undefined
 * @param {Object} object - объект с примитивами
 * @returns {boolean}
 */

const isEmpty = (object) => {
    for (const key in object) {
        console.log(key, "dadsa");
        if (object.hasOwnProperty(key)) {
            const value = object[key];
            console.log(value, "value");
            if (value !== "" && value !== undefined && value === value) {
                return false;
            }
        }
    }
    return true;
};

const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true
