// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
let num = +prompt("Введите пятиразрядное число");
if (num <= 99999 && num >= 10000) {
    let fivthNum = num % 10,
        fourthNum = (num % 100) - fivthNum,
        thirdNum = (num % 1000) - fourthNum - fivthNum,
        secondNum = ((num % 10000) - thirdNum - fourthNum - fivthNum),
        firstNum = ((num % 100000) - secondNum - thirdNum - fourthNum - fivthNum);
    reverseFivthNum = fivthNum * 10000;
    reverseFourthNum = fourthNum * 100;
    sumReverse = reverseFivthNum + reverseFourthNum;
    sum = firstNum + secondNum;
    if (sum == sumReverse) {
        alert(`Ваше число ${num} является палиндромом`);
    } else {
        alert(`Ваше число ${num} не является палиндромом`);
    }
} else {
    alert("Введите пятиразрядное число");
}

