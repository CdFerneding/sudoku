import { Grid } from "../src/Entity/Grid";
import { easyGrid1 } from "../src/Repository/Grids/Easy";
import { cellsForCorrectSolution } from "../src/Repository/Testing/SudokuRules";

const correctGridData = [
    [8, 5, 4, 7, 3, 1, 2, 6, 9],
    [3, 6, 9, 4, 2, 8, 5, 7, 1],
    [2, 1, 7, 9, 5, 6, 3, 4, 8],
    [7, 9, 3, 1, 4, 5, 6, 8, 2],
    [4, 2, 6, 3, 8, 9, 7, 1, 5],
    [1, 8, 5, 2, 6, 7, 9, 3, 4],
    [5, 3, 8, 6, 1, 2, 4, 9, 7],
    [6, 7, 1, 5, 9, 4, 8, 2, 3],
    [9, 4, 2, 8, 7, 3, 1, 5, 6]
];
const correctGrid: Grid = new Grid(correctGridData);

const falseGridData: number[][] = [
    [8, 5, 4, 7, 3, 0, 2, 6, 9],
    [3, 6, 9, 4, 2, 8, 5, 7, 1],
    [2, 1, 7, 9, 5, 6, 3, 4, 8],
    [7, 9, 3, 1, 4, 5, 6, 8, 2],
    [4, 2, 6, 3, 8, 9, 7, 1, 5],
    [1, 8, 5, 2, 6, 7, 9, 3, 4],
    [5, 3, 8, 6, 1, 2, 4, 9, 7],
    [6, 7, 1, 5, 9, 4, 8, 2, 3],
    [9, 9, 2, 8, 7, 3, 1, 5, 6]
];
const falseGrid: Grid = new Grid(falseGridData);

describe("Grid Entity", () => {
    describe("Checking functions", () => {
        test("should return true when all rows and all columns have no multiples", () => {
            expect(correctGrid.checkRowsAndColumns()).toBe(true);
            expect(correctGrid.checkRowsAndColumns()).not.toBe(false);
        });
        test("should return false when a row has multiples", () => {
            expect(falseGrid.checkRowsAndColumns()).toBe(false);
            expect(falseGrid.checkRowsAndColumns()).not.toBe(true);
        });
        test("should return true when the grid is fully filled", () => {
            expect(correctGrid.isFull()).toBe(true);
            expect(correctGrid.isFull()).not.toBe(false);
        });
        test("should return false when the grid is not fully filled", () => {
            expect(falseGrid.isFull()).toBe(false);
            expect(falseGrid.isFull()).not.toBe(true);
        });
        test("should return true when the boxes are correctly filled", () => {
            expect(correctGrid.checkBoxes()).toBe(true);
            expect(correctGrid.checkBoxes()).not.toBe(false);
        });
    });

    describe("Constructor", () => {
        test("should return the Grid according to the gridData given", () => {
            /**
             * const easyGrid1 = [
             *  [8, 2, 7, 3, 0, 0, 0, 4, 9],
             *  [6, 4, 9, 0, 5, 0, 8, 3, 0],
             *  [0, 0, 0, 4, 8, 9, 6, 0, 0],
             *  [0, 0, 0, 6, 0, 1, 2, 0, 0],
             *  [2, 1, 0, 0, 0, 7, 0, 0, 6],
             *  [4, 9, 0, 0, 0, 0, 1, 5, 7],
             *  [1, 8, 0, 0, 2, 4, 7, 0, 0],
             *  [0, 0, 0, 0, 7, 3, 0, 0, 0],
             *  [3, 0, 4, 1, 0, 0, 0, 0, 0]
             *  ];
             */
            const grid = new Grid(easyGrid1);
            expect(grid.cells[0].getValue()).toBe(8);
            expect(grid.cells[0].getRow()).toBe(0);
            expect(grid.cells[0].getColumn()).toBe(0);
            expect(grid.cells[0].getBox()).toBe(0);
            // array comparison needs "toEqual" else the references would be compared
            // toEqual performs deep equality check
            expect(grid.cells[0].getPossibleValues()).toEqual([]);
            expect(grid.cells[9].getValue()).toBe(6);
            expect(grid.cells[9].getRow()).toBe(1);
            expect(grid.cells[9].getColumn()).toBe(0);
            expect(grid.cells[12].getValue()).toBe(0);
            expect(grid.cells[12].getRow()).toBe(1);
            expect(grid.cells[12].getColumn()).toBe(3);
            expect(grid.cells[12].getBox()).toBe(1);
            expect(grid.cells[12].getColumn()).not.toBe(4);
            expect(grid.cells[12].getPossibleValues()).toEqual([1,2,3,4,5,6,7,8,9]);
            // more tests possible
        });
        test("should return the Grid according to the a given Cell Array", () => {
            const grid: Grid = new Grid([], cellsForCorrectSolution);
            expect(grid.cells).toEqual(cellsForCorrectSolution);
        });
    });
});