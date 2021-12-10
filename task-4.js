const credits = 23580;
const pricePerDroid = 3000;

let quality;
let message;
let creditsRemainder;
let totalPrice;

quality = Number(prompt("Введите желаемое количество дроидов для покупки"));

if (quality === 0) {
    message = "Отменено пользователем!"
}
else {
    totalPrice = quality * pricePerDroid;
    if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
}
else {
    creditsRemainder = credits - totalPrice;
    message = `Вы купили ${quality} дроидов, на счету осталось ${creditsRemainder} кредитов.`;
}
}

console.log(message);