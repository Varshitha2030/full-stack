function calculateFare(km) {
    let fare = 0;

    if (km <= 4) {
        fare = 30;  // Base price for first 4 km
    } else if (km <= 9) {
        fare = 30 + (km - 4) * 10;  // Next 5 km at Rs.10 per km
    } else if (km <= 19) {
        fare = 30 + (5 * 10) + (km - 9) * 15;  // Next 10 km at Rs.15 per km
    } else {
        fare = 30 + (5 * 10) + (10 * 15) + (km - 19) * 20;  // Beyond 19 km at Rs.20 per km
    }

    return fare;
}
let distance = 19.5;
console.log("Total fare for " + distance + " km = Rs." + calculateFare(distance));
