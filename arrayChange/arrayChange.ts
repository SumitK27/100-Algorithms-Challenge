export function arrayChange(inputArray: number[]): number {
    let count = 0;

    for (let i = 0; i < inputArray.length; i++) {
        // if current value is greater than next value
        if (inputArray[i] >= inputArray[i + 1]) {
            // difference between what next number should be and what next number actually is
            const difference = inputArray[i] + 1 - inputArray[i + 1];

            // Assign the next number one greater than current number
            inputArray[i + 1] = inputArray[i] + 1;

            // Increment the count needed to make the next number greater by one increment per move. ie. difference is the moves needed
            count += difference;
        }
    }

    console.log(inputArray);

    return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([5, 3, 1]));
console.log(arrayChange([1, 5, 1]));
