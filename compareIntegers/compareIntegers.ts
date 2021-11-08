export function compareIntegers(a: string, b: string): string {
    // Both a and b's length should be greater than or equal to 1 and less than or equal to 10
    if (a.length >= 1 && a.length <= 10 && b.length >= 1 && b.length <= 10) {
        // Convert string inputs to integers
        let intA: number = parseInt(a);
        let intB: number = parseInt(b);

        if (intA < intB) {
            return "lesser";
        } else if (intA > intB) {
            return "greater";
        } else {
            return "equal";
        }
    }

    return "Invalid";
}

console.log(compareIntegers("12", "13"));
console.log(compareIntegers("875", "799"));
console.log(compareIntegers("1000", "1000"));
