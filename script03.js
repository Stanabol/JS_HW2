// Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
let num = +prompt("Введите трехзначное число");
if (num <= 999 && num >= 100) {
    let lastnum = num % 10;
    let secondnum = ((num % 100) - lastnum) / 10;
    let firstnum = (num - (num % 100)) / 100;
    if (firstnum == secondnum || firstnum == lastnum || secondnum == lastnum) {
        alert("В данном числе есть одинаковые цифры");
    } else {
        alert("В данном числе нет одинаковых цифр");
    }
} else {
    alert("Вы ввели не трехзначное число");

}