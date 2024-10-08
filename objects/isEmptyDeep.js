/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

const isEmptyDeep = (object) => {
    if (Array.isArray(object) && object.length === 0) {
        return true;
    }

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const value = object[key];
            if (value === undefined) {
                return true;
            }
            if (value !== "" && value !== null && value === value) {
                console.log(value);
                if (!isEmptyDeep(value)) {
                    console.log(value);

                    return false;
                }
            }
        }
    }

    return true;
};

const data = { a: { b: undefined } };
const data2 = { a: { b: 1 } };
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
