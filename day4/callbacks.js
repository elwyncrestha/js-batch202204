function calculateBonus(amount, customCalculatorFn) {
    return customCalculatorFn ? customCalculatorFn(amount) : 0.15 * amount;
}

console.log(calculateBonus(100));
console.log(calculateBonus(100, function customFn(amount) {
    return 0.3 * amount;
}));
console.log(calculateBonus(100, (amt) => 0.3 * amt));
