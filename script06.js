// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
let usd = +prompt("Введите USD");
let EUR = 0.92;
let UAH = 27.08;
let AZN = 1.70;
let convertEUR = confirm("Перевести в - EUR?");
if (convertEUR == true) {
    let rezultEUR = usd * EUR;
    alert(`Из ${usd}$ вы получите ${rezultEUR}€`);
} else {
    let convertAZN = confirm("Перевести в - AZN?");
    if (convertAZN == true) {
        let rezultAZN = usd * AZN;
        alert(`Из ${usd}$ вы получите ${rezultAZN}₼`);
    } else {
        let convertUAH = confirm("Перевести в - UAH?");
        if (convertUAH == true) {
            let rezultUAH = usd * UAH;
            alert(`Из ${usd}$ вы получите ${rezultUAH}₴`);
        }
    }
}





