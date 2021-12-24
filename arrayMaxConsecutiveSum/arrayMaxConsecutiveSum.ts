export function arrayMaxConsecutiveSum(inputArray: number[], k: number): any {
    let sumArray = [];

    // Loop till length - (k - 1) elements
    for (let i: number = 0; i < inputArray.length - (k - 1); i++) {
        let currentSum = 0;

        // Add k consecutive elements from current element
        for (let j: number = i; j < i + k; j++) {
            currentSum += inputArray[j];
        }

        // Store sum of current consecutive elements
        sumArray.push(currentSum);
    }

    // Get Maximum sum
    return Math.max(...sumArray);
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 4));

export function arrayMaxConsecutiveSum2(
    inputArray: number[],
    k: number
): number {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < k; i++) {
        sum += inputArray[i];
    }

    max = sum;

    for (let i = k; i < inputArray.length; i++) {
        sum -= inputArray[i - k];
        sum += inputArray[i];
        console.log(sum);
        if (sum > max) {
            max = sum;
        }
    }

    return max;
}
console.log(arrayMaxConsecutiveSum2([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum2([2, 3, 5, 1, 6], 3));
console.log(arrayMaxConsecutiveSum2([2, 3, 5, 1, 6], 4));
