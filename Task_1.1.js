// --- основной вариант решения задачи без дополнительных проверок
const numberInput = prompt("Введите число:");
const number = parseInt(numberInput);
if (number > 7) {  
  alert("Привет");
}

// // --- вариант с дополнительными проверками и без возможности нажать кнопку "Отмена"
// let numberInput;

// while (true) {
//     numberInput = prompt("Введите число:");

//     if (numberInput === null) {
//         alert("Вы отменили ввод. Для продолжения введите число больше 7.");
//     } else if (numberInput.trim() === "" || isNaN(parseInt(numberInput)) || parseInt(numberInput) <= 7) {
//         alert("Неверный ввод. Введите число, большее 7.");
//     } else {
//         break;
//     }
// }
// alert("Привет");


// // --- вариант с дополнительными проверками и возможностью нажатия "Отмена"
// let numberInput = prompt("Введите число:");

// while (isNaN(parseInt(numberInput)) || parseInt(numberInput) <= 7) {
//     if (numberInput.trim() === "" ) {
//         alert("Вы ввели пустую строку. Для продолжения введите число больше 7.");
//     } else {
//         alert("Неверный ввод. Введите число, большее 7.");
//     }
//     numberInput = prompt("Введите число:");
// }
// alert("Привет");
