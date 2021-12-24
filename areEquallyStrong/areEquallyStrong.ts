export function areEquallyStrong(
    yourLeft: number,
    yourRight: number,
    friendsLeft: number,
    friendsRight: number
): boolean {
    if (
        yourLeft >= 0 &&
        yourLeft <= 20 &&
        yourRight >= 0 &&
        yourRight <= 20 &&
        friendsLeft >= 0 &&
        friendsLeft <= 20 &&
        friendsRight >= 0 &&
        friendsRight <= 20
    ) {
        let yourSum: number = yourLeft + yourRight;
        let friendsSum: number = friendsLeft + friendsRight;

        if (yourSum === friendsSum) {
            return true;
        } else {
            return false;
        }
    }

    return false;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
console.log(areEquallyStrong(25, 30, 15, 9));
console.log(areEquallyStrong(15, 10, 15, 29));

// Solution 2
export function areEquallyStrong2(
    yourLeft: number,
    yourRight: number,
    friendsLeft: number,
    friendsRight: number
): boolean {
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const friendsStrongest =
        friendsLeft >= friendsRight ? friendsLeft : friendsRight;
    const friendsWeakest =
        friendsLeft <= friendsRight ? friendsLeft : friendsRight;

    return yourStrongest === friendsStrongest && yourWeakest == friendsWeakest;
}

console.log(areEquallyStrong2(10, 15, 15, 10));
console.log(areEquallyStrong2(15, 10, 15, 10));
console.log(areEquallyStrong2(15, 10, 15, 9));
