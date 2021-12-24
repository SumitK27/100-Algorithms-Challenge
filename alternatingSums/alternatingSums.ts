export function alternatingSums(a: number[]): number[] {
    if (a.length >= 1 && a.length <= 10) {
        let sumT1: number = 0;
        let sumT2: number = 0;

        for (let i: number = 0; i < a.length; i++) {
            if (a[i] >= 45 && a[i] <= 100) {
                if (i % 2 == 0) {
                    sumT1 += a[i];
                } else {
                    sumT2 += a[i];
                }
            }
        }
        return [sumT1, sumT2];
    }
    return [-1, -1];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
console.log(alternatingSums([]));
console.log(alternatingSums([150, 160, 160, 145, 170]));

// Solution Two
export function alternatingSums2(a: number[]): number[] {
    let evenSum: number = 0;
    let oddSum: number = 0;

    a.forEach((element, index) => {
        if (index % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    });

    return [evenSum, oddSum];
}

console.log(alternatingSums2([50, 60, 60, 45, 70]));
console.log(alternatingSums2([]));
console.log(alternatingSums2([150, 160, 160, 145, 170]));
