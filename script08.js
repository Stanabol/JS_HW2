// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
let circle = +prompt("Введите длину окружности ");
let perim = +prompt("Введите периметр квадрата");
const CONSTANT = 3.14;
let radius = circle / (2 * CONSTANT);
let area = CONSTANT * (radius * radius);
let side = perim / 4;
let square = side * side;

if (area <= square) {
    alert("Данная окружность поместиться в указанный квадрат");

} else {
    alert("Данная окружность не поместиться в указанный квадрат");
}
