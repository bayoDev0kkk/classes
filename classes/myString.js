/**
 * Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
    reverse(str) {
        if (str === undefined) {
            return undefined;
        }
        if (str === "") {
            return "";
        }
        return str.split("").reverse().join("");
    }
    ucFirst(str) {
        if (str === undefined) {
            return undefined;
        }
        if (str === "") {
            return "";
        }

        return str.trim()[0].toUpperCase() + str.trim().slice(1);
    }

    ucWords(str) {
        if (str === undefined) {
            return undefined;
        }
        if (str === "") {
            return "";
        }
        return str
            .trim()
            .split(/\s+/)
            .map((word) => {
                if (word.length > 0) {
                    return word[0].toUpperCase() + word.slice(1);
                }
                return word;
            })
            .join(" ");
    }
}

const str = new MyString();

console.log(str.reverse("abcde")); //выведет 'edcba'
console.log(str.ucFirst("abcde")); //выведет 'Abcde'
console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde Abcde'

module.exports = MyString;
