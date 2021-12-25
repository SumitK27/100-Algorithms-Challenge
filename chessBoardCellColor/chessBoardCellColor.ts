export function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const board = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
    };

    let x1 = board[cell1[0]];
    let y1 = parseInt(cell1[1]);
    let x2 = board[cell2[0]];
    let y2 = parseInt(cell2[1]);

    let total1 = (x1 + y1) % 2;
    let total2 = (x2 + y2) % 2;

    if (total1 === total2) {
        return true;
    }
    return false;
}

console.log(chessBoardCellColor("A1", "C3"));
console.log(chessBoardCellColor("A1", "H3"));
