/**

 * Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null
 и т.п.
 * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * @param element - элемент для проверки
 * @returns {boolean}
 */

const isPlainObject = (element) => {
    if (typeof element !== "object" || element === null) {
        return false;
    }
    if (Array.isArray(element)) {
        return false;
    }
    return true;
};

const data = { a: 1 };
console.log(isPlainObject(data)); // true
