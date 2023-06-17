import { Grid } from "../src/Entities/Grid";

/**
 * solve Sudoku can only solve the easy Grids yet
 */

import { easyGrid1, easyGrid1CorrectlyFilled } from "../src/Repository/Grids/gridsEasy";
import { solveGrid } from "../src/button/solve";
import { solveSudoku } from "../src/solveGrid/solveSudoku";

describe("solve Sudoku", () => {
    test("should return a correctly filled grid", () => {
        const grid: Grid = new Grid(easyGrid1);
        const gridCorrectlyFilled = new Grid(easyGrid1CorrectlyFilled);

        const result: Grid = solveSudoku(grid);

        expect(result.equals(gridCorrectlyFilled)).toBe(true);
        expect(result.equals(gridCorrectlyFilled)).not.toBe(false);
    });
});