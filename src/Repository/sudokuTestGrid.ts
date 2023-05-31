// maybe: getting a random grid from a DB later (my own or a public)
// edit: rly necessary?
const testGrid: number[][] = [
    [null, 5, null, null, 3, null, null, null, null],
    [null, 6, 9, null, null, null, 5, null, 1],
    [null, null, 7, 9, null, null, null, 4, 8],

    [7, 9, null, 1, null, 5, 6, 8, 2],
    [4, 2, null, 3, 8, 9, 7, null, 5],
    [1, 8, null, null, 6, null, null, null, null],

    [null, null, 8, null, null, null, 4, null, null],
    [null, 7, null, 5, null, 4, null, null, null],
    [null, null, null, null, 7, 3, null, 5, 6]
];
const testGridFilledRight: string[][] = [
    ["8", "5", "4", "7", "3", "1", "2", "6", "9"],
    ["3", "6", "9", "4", "2", "8", "5", "7", "1"],
    ["2", "1", "7", "9", "5", "6", "3", "4", "8"],

    ["7", "9", "3", "1", "4", "5", "6", "8", "2"],
    ["4", "2", "6", "3", "8", "9", "7", "1", "5"],
    ["1", "8", "5", "2", "6", "7", "9", "3", "4"],

    ["5", "3", "8", "6", "1", "2", "4", "9", "7"],
    ["6", "7", "1", "5", "9", "4", "8", "2", "3"],
    ["9", "4", "2", "8", "7", "3", "1", "5", "6"]
];
const testGridFilledWrong: string[][] = [
    ["5", "8", "4", "7", "3", "1", "2", "6", "9"],
    ["3", "6", "9", "4", "2", "8", "5", "7", "1"],
    ["2", "1", "7", "9", "5", "6", "3", "4", "8"],

    ["7", "9", "3", "1", "4", "5", "6", "8", "2"],
    ["4", "2", "6", "3", "8", "9", "7", "1", "5"],
    ["1", "8", "5", "2", "6", "7", "9", "3", "4"],

    ["5", "3", "8", "6", "1", "2", "4", "9", "7"],
    ["6", "7", "1", "5", "9", "4", "8", "2", "3"],
    ["9", "4", "2", "8", "7", "3", "1", "5", "6"]
];

export{
    testGrid,
    testGridFilledRight,
    testGridFilledWrong
}