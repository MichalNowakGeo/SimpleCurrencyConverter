console.log("Welcome to Currency Converter!");
let exchangeRates = new Map([
    ["USD", 1],
    ["JPY", 113.5],
    ["EUR", 0.89],
    ["RUB", 74.36],
    ["GBP", 0.75],
]);

for (const [key, value] of exchangeRates) {
    console.log(`1 USD equals ${value} ${key}`);
}
console.log(
    'What do you want to convert?');
const input = require('sync-input');
let from = input("From: ").toUpperCase();
if (exchangeRates.has(from)) {
    let to = input("To: ").toUpperCase();
    if (exchangeRates.has(to)) {
        let amount = Number(input("Amount: "));
        if (amount >= 1) {
            let result = exchangeRates.get(to) * amount / exchangeRates.get(from);
            console.log(`Result: ${amount} ${from} equals ${result.toFixed(4)} ${to}`);
        } else if (amount < 1) {
            console.log("The amount cannot be less than 1")
        } else {
            console.log("The amount has to be a number")
        }
    } else {
        console.log(`Unknown currency`);
    }
} else {
    console.log(`Unknown currency`);
}
