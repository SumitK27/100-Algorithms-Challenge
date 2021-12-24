export function allLongestStrings(inputArray: string[]): string[] {
    let longestLength = inputArray[0].length;
    let longestWords = [];

    // Get the longest
    inputArray.forEach((element) => {
        longestLength < element.length ? element.length : longestLength;
    });

    inputArray.forEach((element) => {
        if (element.length === longestLength) {
            longestWords.push(element);
        }
    });

    return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
