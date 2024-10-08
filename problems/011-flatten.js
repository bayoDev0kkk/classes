/**
 * Напишите функцию flatten(array) которая делает вложенный массив плоским
 *
 * Пример:
 *
 * flatten([1, [2, 3]]) === [1, 2, 3]
 * flatten([1, [2, [3, 4]]]) === [1, 2, 3, 4]
 *
 * @param {Array.<number|[]>} array
 * @returns {number[]}
 */
function flatten(array) {
    const res = [];
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (Array.isArray(current)) {
            res.push(...flatten(...current));
        } else {
            res.push(current);
        }
    }
    return res;
}

module.exports = flatten;
