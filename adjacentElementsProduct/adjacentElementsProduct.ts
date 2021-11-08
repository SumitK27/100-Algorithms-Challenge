export function adjacentElementsProduct(inputArray: number[]): number {
    // Only if array has sufficient number of elements
    if (inputArray.length > 2 && inputArray.length <= 10) {
        let maxProduct: number = 0;
        let adjProduct: number = 0;

        // Loop till (n-1)th element
        for (let i: number = 0; i < inputArray.length - 1; i++) {
            // If the elements are greater than or equal to -1000 and less than or equal to 1000
            if (
                inputArray[i] >= -1000 &&
                inputArray[i] <= 1000 &&
                inputArray[i + 1] >= -1000 &&
                inputArray[i + 1] <= 1000
            ) {
                // Calculate the adjacent product value of ith and (i+1)th element
                adjProduct = inputArray[i] * inputArray[i + 1];

                // If maximum product value is less current adjacent product value then update it.
                if (maxProduct < adjProduct) {
                    maxProduct = adjProduct;
                }
            }
        }

        return maxProduct;
    }

    return -1;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([1, 9, 3, 7, 4, 5, 2]));
console.log(adjacentElementsProduct([1]));
console.log(adjacentElementsProduct([200, 10000, 500, 100]));
