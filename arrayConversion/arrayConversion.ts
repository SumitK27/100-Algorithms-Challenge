export function arrayConversion(inputArray: number[]): number {
    let iteration: number = 1;

    while (inputArray.length !== 1) {
        // For Odd Iterations
        if (iteration % 2 !== 0) {
            inputArray = getSumPair(inputArray);
        } else {
            inputArray = getProductPair(inputArray);
        }
        iteration++;
    }

    return inputArray[0];
}

function getSumPair(inputArray: number[]): number[] {
    let tempArray: number[] = [];

    // Take sum of each consecutive pair
    for (let i: number = 1; i < inputArray.length; i += 2) {
        tempArray.push(inputArray[i - 1] + inputArray[i]);
    }

    // If input array has odd length, append last element
    if (inputArray.length % 2 !== 0) {
        tempArray.push(inputArray[inputArray.length - 1]);
    }

    return tempArray;
}

function getProductPair(inputArray: number[]): number[] {
    let tempArray: number[] = [];

    // Take product of each consecutive pair
    for (let i: number = 1; i < inputArray.length; i += 2) {
        tempArray.push(inputArray[i - 1] * inputArray[i]);
    }

    // If input array has odd length, append last element
    if (inputArray.length % 2 !== 0) {
        tempArray.push(inputArray[inputArray.length - 1]);
    }

    return tempArray;
}

// Testing
// console.log(getSumPair([1, 2, 3, 4, 5, 6, 7]));
// console.log(getProductPair([1, 2, 3, 4, 5, 6, 7]));

console.log(arrayConversion([1, 2]));
console.log(arrayConversion([1, 2, 3]));
console.log(arrayConversion([1, 2, 3, 4]));
console.log(arrayConversion([1, 2, 3, 4, 5]));
console.log(arrayConversion([1, 2, 3, 4, 5, 6]));
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7]));
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Solution Two
export function arrayConversion2(inputArray: number[]): number {
    let isOdd = true;

    while (inputArray.length !== 1) {
        inputArray = sumProduct(inputArray, isOdd);
        isOdd = !isOdd;
    }

    return inputArray[0];
}

function sumProduct(numbers: number[], isOdd: boolean) {
    const sumProducts: number[] = [];

    if (isOdd) {
        for (let i = 0; i < numbers.length; i += 2) {
            sumProducts.push(numbers[i] + numbers[i + 1]);
        }
    } else {
        for (let i = 0; i < numbers.length; i += 2) {
            sumProducts.push(numbers[i] * numbers[i + 1]);
        }
    }

    return sumProducts;
}

console.log(arrayConversion2([1, 2]));
console.log(arrayConversion2([1, 2, 3]));
console.log(arrayConversion2([1, 2, 3, 4]));
console.log(arrayConversion2([1, 2, 3, 4, 5]));
console.log(arrayConversion2([1, 2, 3, 4, 5, 6]));
console.log(arrayConversion2([1, 2, 3, 4, 5, 6, 7]));
console.log(arrayConversion2([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(arrayConversion2([1, 2, 3, 4, 5, 6, 7, 8, 9]));
