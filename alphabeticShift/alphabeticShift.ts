export function alphabeticShift(inputString: string): string {
    let alphabets: string[] = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];

    let inputArray = inputString.split("");
    let outputString = "";

    inputArray.forEach((character) => {
        let getCharacterIndex =
            alphabets.indexOf(character) + 1 > alphabets.length - 1
                ? 0
                : alphabets.indexOf(character) + 1;
        outputString += alphabets[getCharacterIndex];
    });

    return outputString;
}

console.log(alphabeticShift("crazy"));

// Solution Two
export function alphabeticShift2(inputString: string): string {
    let alphabets: string[] = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];

    let inputShifted = inputString.split("");

    for (let i = 0; i < inputShifted.length; i++) {
        let index = 0;

        if (inputShifted[i] !== "z") {
            index = alphabets.indexOf(inputShifted[i]) + 1;
        }

        inputShifted[i] = alphabets[index];
    }

    return inputShifted.join("");
}

console.log(alphabeticShift2("crazy"));

// Solution Three
export function alphabeticShift3(inputString: string): string {
    let alphabets: object = {
        a: "b",
        b: "c",
        c: "d",
        d: "e",
        e: "f",
        f: "g",
        g: "h",
        h: "i",
        i: "j",
        j: "k",
        k: "l",
        l: "m",
        m: "n",
        n: "o",
        o: "p",
        p: "q",
        q: "r",
        r: "s",
        s: "t",
        t: "u",
        u: "v",
        v: "w",
        w: "x",
        x: "y",
        y: "z",
        z: "a",
    };

    let inputShifted = inputString.split("");

    for (let i = 0; i < inputShifted.length; i++) {
        inputShifted[i] = alphabets[inputShifted[i]];
    }

    return inputShifted.join("");
}

console.log(alphabeticShift3("crazy"));
