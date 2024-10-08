/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

const intersectionDeep = (firstObject, secondObject) => {
    const result = {};
    for (const key in firstObject) {
        if (secondObject.hasOwnProperty(key)) {
            const value1 = firstObject[key];
            const value2 = secondObject[key];
            const interDeep = intersectionDeep(value1, value2);
            if (interDeep[value1] === interDeep[value2]) {
                result[key] = value1;
            }
        }
    }
    return result;
};

const data = { a: 1, b: { c: 3 } };
const data2 = { c: 1, b: { c: 3 } };
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }

module.exports = intersectionDeep;
