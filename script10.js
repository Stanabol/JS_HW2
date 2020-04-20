// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
let day = +prompt("Введите день в числовом формате", 2);
let month = +prompt("Введите месяц в числовом формате", 4);
let year = +prompt("Введите год", 2020);

if (day > 31 && day == 0 && month > 12 && month == 0) {
    alert("Введите коректную дату");

} else {
    if (day >= 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)) {
        day = 1;
        month = ++month
    } else if (day >= 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
        day = 1;
        month = ++month
    } else if (day >= 29 && month == 2 && (year % 100 !== 0 && year % 400 == 0 || year % 4 == 0)) {
        day = 1;
        month = ++month
    } else if (day >= 28 && month == 2 && (year % 100 == 0 && year % 400 !== 0 || year % 4 !== 0)) {
        day = 1;
        month = ++month
    } else if (day >= 31 && month == 12) {
        day = 1;
        month = 1;
        year = ++year
    } else {
        day = day + 1;
    }
}
alert(`${day}.${month}.${year}`);

