export function centuryFromYear(year: number): number {
    // Constraint: 1 <= Year <= 2005
    if (year >= 1 && year <= 2005) {
        // eg. 2003 =>
        // => floor((2003 - 1) / 100) + 1
        // => floor(2002 / 100) + 1
        // => floor(20.02) + 1
        // => 20 + 1
        // => 21
        return Math.floor((year - 1) / 100) + 1;
    }
    return -1;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(2001));
console.log(centuryFromYear(2021));

export function centuryFromYear2(year: number): number {
    const century = year / 100;

    if (year % 100 === 0) {
        return century;
    }

    return Math.floor(century + 1);
}

console.log(centuryFromYear2(1905));
console.log(centuryFromYear2(1700));
console.log(centuryFromYear2(2001));
console.log(centuryFromYear2(2021));
