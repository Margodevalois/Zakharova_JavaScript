// --- основной вариант решения задачи без дополнительных проверок
const numericArray = prompt("Введите числа через запятую");
console.log("Элементы массива, кратные 3:");
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 3 === 0) {
        console.log(numericArray[i]);
    }
}

// //--- вариант с дополнительными проверками и без возможности нажать кнопку "Отмена"
// let numericArrayInput;
// let numericArray;

// do {
//     numericArrayInput = prompt("Введите числа через запятую");

//     // Проверка на нажатие "Отмена"
//     if (numericArrayInput === null) {
//         alert("Вы отменили ввод. Для продолжения введите числа через запятую.");
//     } else {
//         // Разбиваем введенную строку на массив чисел
//         numericArray = numericArrayInput.split(',').map(Number);

//         // Проверка наличия только числовых значений в массиве
//         if (numericArray.some(isNaN)) {
//             alert("Введены некорректные данные. Пожалуйста, введите только числа через запятую.");
//         }
//     }
// } while (numericArrayInput === null || numericArrayInput.trim() === "" || numericArray.some(isNaN));

// let arrayNumb = numericArray.filter((num) => num % 3 == 0);
// console.log("Элементы массива, кратные 3:", arrayNumb);

// // --- вариант с дополнительными проверками и и возможностью нажатия "Отмена"
// let numericArrayInput;
// let numericArray;

// do {
//     numericArrayInput = prompt("Введите числа через запятую");

//     // Разбиваем введенную строку на массив чисел
//     numericArray = numericArrayInput.split(',').map(Number);

//     // Проверка наличия только числовых значений в массиве
//     if (numericArray.some(isNaN || numericArrayInput.trim() === "")) {
//         alert("Введены некорректные данные. Пожалуйста, введите только числа через запятую.");
//     }
// } while (numericArray.some(isNaN) || numericArrayInput.trim() === "");

// let arrayNumb = numericArray.filter((num) => num % 3 == 0);
// console.log("Элементы массива, кратные 3:", arrayNumb);

