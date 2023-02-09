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
