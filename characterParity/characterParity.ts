export function characterParity(symbol: string): string {
    return isNaN(parseInt(symbol))
        ? "not a digit"
        : parseInt(symbol) % 2 === 0
        ? "even"
        : "odd";
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));

// Solution Two
export function characterParity2(symbol: string): string {
    const result = parseInt(symbol);

    return isNaN(result) ? "not a digit" : result % 2 === 0 ? "even" : "odd";
}

console.log(characterParity2("5"));
console.log(characterParity2("8"));
console.log(characterParity2("q"));
