export function candies(n: number, m: number): number {
    let candy = Math.floor(m / n) * n;

    return candy;
}

console.log(candies(3, 10));
console.log(candies(4, 15));
