const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let enter;

enter = prompt("Введите пароль!");

if (enter === null) {
    message = "Отменено пользователем!";
}
else if (enter === ADMIN_PASSWORD) {
    message= "Добро пожаловать!";
}
else {
    message = "Доступ запрещен, неверный пароль!";
}

console.log(message);