// --- основной вариант решения задачи без дополнительных проверок
const nameInput = prompt("Введите имя:");
if (nameInput === "Вячеслав") {
    alert("Привет, Вячеслав");
} else {
    alert("Нет такого имени");
}

// // --- вариант с проверкой на пустоту ввода и возможностью отменить
// let nameInput = prompt("Введите имя:");
// while (nameInput.trim() === "") {
//     alert("Вы ввели пустую строку. Пожалуйста, введите имя");
//     nameInput = prompt("Введите имя:");
// }
// const formattedName = nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase();
// if (formattedName === "Вячеслав") {
//     alert("Привет, Вячеслав");
// } else {
//     alert("Нет такого имени");
// }

// // --- вариант без возможности нажать кнопку "Отмена"
// let nameInput;

// do {
//     nameInput = prompt("Введите имя:");

//     if (nameInput === null) {
//         alert("Вы отменили ввод. Для продолжения введите имя.");
//     } else {
//         const formattedName = nameInput.trim().charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase();

//         if (formattedName === "" || !isNaN(parseInt(formattedName))) {
//             alert("Вы ввели пустую строку или цифры. Пожалуйста, введите имя");
//         } else if (formattedName === "Вячеслав") {
//             alert("Привет, Вячеслав");
//         } else {
//             alert("Нет такого имени");
//         }
//     }
// } while (nameInput === null || (nameInput.trim() === "" || !isNaN(parseInt(nameInput))));
