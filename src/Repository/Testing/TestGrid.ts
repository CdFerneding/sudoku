// maybe: getting a random grid from a DB later (my own or a public)
const testGrid: number[][] = [
    [0, 5, 0, 0, 3, 0, 0, 0, 0],
    [0, 6, 9, 0, 0, 0, 5, 0, 1],
    [0, 0, 7, 9, 0, 0, 0, 4, 8],

    [7, 9, 0, 1, 0, 5, 6, 8, 2],
    [4, 2, 0, 3, 8, 9, 7, 0, 5],
    [1, 8, 0, 0, 6, 0, 0, 0, 0],

    [0, 0, 8, 0, 0, 0, 4, 0, 0],
    [0, 7, 0, 5, 0, 4, 0, 0, 0],
    [0, 0, 0, 0, 7, 3, 0, 5, 6]
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