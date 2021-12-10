let input;
let total = 0;

do {
    input = prompt("введите число");
    total += Number(input);

    if (input === null && total === 0) {
        alert("отмена");
        break;
    } else if (input === null) {
        alert(`общая сумма ${total}`)
        break;
    }

} while (true);


 



