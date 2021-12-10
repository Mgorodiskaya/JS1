const nameCountry = prompt("Введите название страны:");
let nameCountryN = nameCountry.toLowerCase();

let cost;

switch (nameCountryN) {
    case "китай":
        cost = 100;
        break;
    case "чили":
        cost = 250;
        break;
    case "австралия":
        cost = 170;
        break;
    case "индия":
        cost = 80;
        break;
    case "ямайка":
        cost = 120;
        break;
    default:
        alert("В вашей стране доставка не доступна");
}
let nameCountryNN = nameCountryN[0].toUpperCase() + nameCountryN.slice(1);

console.log(`Доставка в ${nameCountryNN} будет стоить ${cost} кредитов`);


