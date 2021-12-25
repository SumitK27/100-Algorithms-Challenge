export function arrayReplace(
    inputArray: number[],
    elemToReplace: number,
    substitutionElem: number
): number[] {
    let outputArray: number[] = [];

    inputArray.forEach((element) => {
        if (element === elemToReplace) {
            outputArray.push(substitutionElem);
        } else {
            outputArray.push(element);
        }
    });

    return outputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));

// Solution Two
export function arrayReplace2(
    inputArray: number[],
    elemToReplace: number,
    substitutionElem: number
): number[] {
    inputArray.forEach((element, index) => {
        if (element === elemToReplace) {
            inputArray[index] = substitutionElem;
        }
    });

    return inputArray;
}

console.log(arrayReplace2([1, 2, 1], 1, 3));
