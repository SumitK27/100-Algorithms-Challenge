export function addBorder(picture: string[]): string[] {
    // Create a border of the length of the array string + 2 (for both sides)
    const wall: string = "*".repeat(picture[0].length + 2);

    // Add the borders on the top and bottom of the array
    picture.unshift(wall);
    picture.push(wall);

    // Create a border on both the sides of the strings
    for (let i: number = 1; i < picture.length - 1; i++) {
        picture[i] = "*".concat(picture[i], "*");
    }

    // Return array with border
    return picture;
}

console.log(addBorder(["abc", "ded"]));
