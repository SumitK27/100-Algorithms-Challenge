export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDiff = Math.abs(inputArray[1] - inputArray[0]);

    for (let i = 2; i < inputArray.length; i++) {
        let currentDiff = Math.abs(inputArray[i] - inputArray[i - 1]);

        if (currentDiff > maxDiff) {
            maxDiff = currentDiff;
        }
    }

    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));
