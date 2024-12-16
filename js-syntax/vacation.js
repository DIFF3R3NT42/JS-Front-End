function PriceCalculator(amount, type, day) {
    let price = 0;

    if (type === "Students") {
        if (day === "Friday") {
            price = amount * 8.45;
        } else if (day === "Saturday") {
            price = amount * 9.80;
        } else if (day === "Sunday") {
            price = amount * 10.46;
        } else {
            return "Invalid day";
        }
        // Students discount
        if (amount >= 30) {
            price *= 0.85; // Reduce by 15%
        }
    } else if (type === "Business") {
        if (day === "Friday") {
            price = amount * 10.90;
        } else if (day === "Saturday") {
            price = amount * 15.60;
        } else if (day === "Sunday") {
            price = amount * 16;
        } else {
            return "Invalid day";
        }
        // Business discount
        if (amount >= 100) {
            price -= 10 * (price / amount); // 10 people stay for free
        }
    } else if (type === "Regular") {
        if (day === "Friday") {
            price = amount * 15;
        } else if (day === "Saturday") {
            price = amount * 20;
        } else if (day === "Sunday") {
            price = amount * 22.50;
        } else {
            return "Invalid day";
        }
        // Regular discount
        if (amount >= 10 && amount <= 20) {
            price *= 0.95; // Reduce by 5%
        }
    } else {
        return "Invalid type";
    }

    return `Total price: ${price.toFixed(2)}`;
}

// Example usage:
console.log(PriceCalculator(30, "students", "Sunday"));  // Students discount: 313.8
console.log(PriceCalculator(105, "Business", "Saturday")); // Business discount: 1548.0
console.log(PriceCalculator(15, "Regular", "Friday"));  // Regular discount: 213.75
console.log(PriceCalculator(5, "Regular", "Monday"));  // Invalid day
console.log(PriceCalculator(10, "VIP", "Sunday"));     // Invalid type
