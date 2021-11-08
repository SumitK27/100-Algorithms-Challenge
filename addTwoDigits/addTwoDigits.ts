export function addTwoDigits(n: any): number {
    // Convert input to an integer
    let num: number = parseInt(n);

    let sum: number = 0;

    // Continue only if its a two digit number
    if (typeof num === "number" && num >= 10 && num <= 99) {
        // Loop until num isn't zero
        while (num !== 0) {
            // Add last digit to the sum
            sum += num % 10;

            // Remove last digit from the number
            num = Math.floor(num / 10);
        }

        return sum;
    }

    return -1;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits("29"));
console.log(addTwoDigits(1539));
