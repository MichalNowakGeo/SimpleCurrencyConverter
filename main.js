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
    'I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP\nType the currency you wish to convert: USD');
const input = require('sync-input');
let currency = input("To: ").toUpperCase();
if (exchangeRates.has(currency)) {
    let amount = Number(input("Amount: "));
    if (amount >= 1) {
        let result = exchangeRates.get(currency) * amount;
        console.log(`Result: ${amount} USD equals ${result.toFixed(4)} ${currency}`);
    } else if (amount < 1) {
        console.log("The amount cannot be less than 1")
    } else {
        console.log("The amount has to be a number")
    }
} else {
    console.log(`Unknown currency`);
}
