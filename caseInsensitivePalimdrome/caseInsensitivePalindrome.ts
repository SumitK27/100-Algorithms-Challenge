export function isCaseInsensitivePalindrome(inputString: string): boolean {
    let original = inputString.toLowerCase().split("");
    let reversed = [...original].reverse();

    if (reversed.join("") === original.join("")) {
        return true;
    }

    return false;
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));

// Solution Two
export function isCaseInsensitivePalindrome2(inputString: string): boolean {
    const originalLowerCase = inputString.toLowerCase();
    const reversedWord = originalLowerCase.split("").reverse().join("");

    return originalLowerCase === reversedWord;
}

console.log(isCaseInsensitivePalindrome2("AaBaa"));
console.log(isCaseInsensitivePalindrome2("abac"));
