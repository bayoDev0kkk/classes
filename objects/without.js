/**

 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * @param {Object} object - любой объект
 * @param {?} args - список значений для удаления
 * @returns {Object} - новый объект без удаленных значений
 */

const without = (object, ...args) => {
    const entries = Object.entries(object);

    const filteredEntries = entries.filter(
        ([key, value]) => !args.includes(key)
    );

    return Object.fromEntries(filteredEntries);
};

const data = { a: 1, b: 2, c: 3 };
console.log(without(data, "b", "c")); // { a: 1 }
