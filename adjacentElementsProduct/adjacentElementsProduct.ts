export function adjacentElementsProduct(inputArray: number[]): number {
    // Only if array has sufficient number of elements
    if (inputArray.length > 2 && inputArray.length <= 10) {
        let maxProduct: number = inputArray[0] * inputArray[1];
        let adjProduct: number = inputArray[0] * inputArray[1];

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

export function adjacentElementsProduct2(inputArray: number[]): number {
    if (inputArray.length < 2) return -1;

    let largestProducts = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i + 1];

        largestProducts = largestProducts < product ? product : largestProducts;
    }

    return largestProducts;
}

console.log(adjacentElementsProduct2([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct2([1, 9, 3, 7, 4, 5, 2]));
console.log(adjacentElementsProduct2([1]));
console.log(adjacentElementsProduct2([200, 10000, 500, 100]));
