const numOfEasyGrids = 2;

const easyGrid1 = [
    [8, 2, 7, 3, 0, 0, 0, 4, 9],
    [6, 4, 9, 0, 5, 0, 8, 3, 0],
    [0, 0, 0, 4, 8, 9, 6, 0, 0],
    [0, 0, 0, 6, 0, 1, 2, 0, 0],
    [2, 1, 0, 0, 0, 7, 0, 0, 6],
    [4, 9, 0, 0, 0, 0, 1, 5, 7],
    [1, 8, 0, 0, 2, 4, 7, 0, 0],
    [0, 0, 0, 0, 7, 3, 0, 0, 0],
    [3, 0, 4, 1, 0, 0, 0, 0, 0]
];

const easyGrid1CorrectlyFilled = [
    [8, 2, 7, 3, 1, 6, 5, 4, 9],
    [6, 4, 9, 7, 5, 2, 8, 3, 1],
    [5, 3, 1, 4, 8, 9, 6, 7, 2],
    [7, 5, 3, 6, 9, 1, 2, 8, 4],
    [2, 1, 8, 5, 4, 7, 3, 9, 6],
    [4, 9, 6, 2, 3, 8, 1, 5, 7],
    [1, 8, 5, 9, 2, 4, 7, 6, 3],
    [9, 6, 2, 8, 7, 3, 4, 1, 5],
    [3, 7, 4, 1, 6, 5, 9, 2, 8]
];

const easyGridWronglyFilled = [
    [8, 2, 7, 3, 1, 6, 5, 4, 9],
    [6, 4, 9, 7, 5, 2, 8, 3, 1],
    [5, 3, 1, 4, 8, 9, 6, 7, 2],
    [7, 5, 3, 6, 8, 1, 2, 8, 4],
    [2, 1, 8, 5, 4, 7, 3, 9, 6],
    [4, 9, 6, 2, 3, 8, 1, 5, 7],
    [1, 8, 5, 9, 2, 4, 7, 6, 3],
    [9, 6, 2, 8, 7, 3, 4, 1, 5],
    [3, 7, 4, 1, 6, 5, 9, 2, 8]
];

const easyGrid2 = [
    [4, 9, 0, 8, 0, 0, 5, 1, 0],
    [0, 1, 8, 0, 5, 0, 0, 0, 6],
    [0, 0, 0, 0, 6, 9, 0, 0, 4],
    [0, 0, 5, 0, 0, 0, 6, 0, 0],
    [0, 7, 4, 5, 0, 6, 2, 9, 0],
    [9, 0, 0, 3, 0, 0, 1, 4, 5],
    [5, 0, 0, 9, 4, 0, 0, 6, 0],
    [0, 0, 9, 2, 7, 5, 0, 0, 0],
    [8, 2, 7, 0, 3, 1, 0, 0, 0]
]

export {
    numOfEasyGrids,
    easyGrid1,
    easyGrid2,
    easyGrid1CorrectlyFilled,
    easyGridWronglyFilled
}