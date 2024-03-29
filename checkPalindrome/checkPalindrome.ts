export function checkPalindrome(inputString: string): boolean {
    let totalLength: number = inputString.length;
    if (inputString.length % 2 === 0) {
        for (let i: number = 0; i < totalLength / 2; i++) {
            if (inputString[i] !== inputString[totalLength - 1 - i]) {
                return false;
            }
        }
    } else {
        for (let i: number = 0; i < totalLength - 1 / 2; i++) {
            if (inputString[i] !== inputString[totalLength - 1 - i]) {
                return false;
            }
        }
    }
    return true;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));

// Solution Two
export function checkPalindrome2(inputString: string): boolean {
    const reversed = inputString.split("").reverse().join("");

    return inputString === reversed;
}

console.log(checkPalindrome2("aabaa"));
console.log(checkPalindrome2("abac"));
console.log(checkPalindrome2("a"));
