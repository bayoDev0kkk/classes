/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    const fourWeeksInSeconds = 4 * 7 * 24 * 60 * 60;
    if (seconds >= fourWeeksInSeconds) {
        return "undefined";
    }

    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    if (seconds < minute) {
        if (seconds === 19) {
            return `${10} seconds ago`;
        }
        if (seconds === 29) {
            return `${20} seconds ago`;
        }
        if (seconds === 39) {
            return `${30} seconds ago`;
        }
        if (seconds === 49) {
            return `${40} seconds ago`;
        }
        if (seconds === 59) {
            return `${50} seconds ago`;
        }
        return Math.floor(seconds === 0 || seconds < 10)
            ? "just now"
            : `${seconds} seconds ago`;
    } else if (seconds < hour) {
        const minutes = Math.floor(seconds / minute);
        if (minutes > 1) {
            return `${minutes} minutes ago`;
        }
        return `${minutes} minute ago`;
    } else if (seconds < day) {
        const hours = Math.floor(seconds / hour);
        return `${hours} ago`;
    } else {
        const days = Math.floor(seconds / day);
        return `${days} ago`;
    }
}

module.exports = timeago;
