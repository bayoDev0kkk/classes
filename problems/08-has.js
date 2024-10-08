/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
function has(path, object) {
    for (let i = 0; i < path.length; i++) {
        if (object === undefined || object === null) {
            if (object !== object[path[i]]) {
                return false;
            }
        }
    }
    return true;
}

module.exports = has;
