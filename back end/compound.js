function compoundInterest(principal, rate, timesCompounded, years) {
    return principal * Math.pow(1 + rate / timesCompounded, timesCompounded * years);
}
const principal = 1000;
const rate = 0.05; // 5%
const timesCompounded = 8; // Quarterly
const years = 10;
const amount = compoundInterest(principal, rate, timesCompounded, years);
console.log(`Compound Interest Amount: $${amount.toFixed(2)}`);
