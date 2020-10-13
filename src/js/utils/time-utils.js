

function leftPad(num) {
    return num >= 9 ? num : `0${num}`;
}

const today = new Date();
const weekBefore = new Date();
weekBefore.setDate(today.getDate() - 7);

function formatDate(date) {
    return `${date.getFullYear()}-${leftPad(date.getMonth() + 1)}-${leftPad(
        date.getDate()
    )}`;
}

export {
    leftPad,
    today,
    weekBefore,
    formatDate
}
