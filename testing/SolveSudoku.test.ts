import { Grid } from "../src/Entity/Grid";

/**
 * solve Sudoku can only solve the easy Grids yet
 */

import { easyGrid1, easyGrid1CorrectlyFilled } from "../src/Repository/Grids/Easy";
import { solveGrid } from "../src/Button/Solving";
import { solveSudoku } from "../src/Solve/solveSudoku";

describe("solve Sudoku", () => {
    test("should return a correctly filled grid", () => {
        const grid: Grid = new Grid(easyGrid1);
        const gridCorrectlyFilled = new Grid(easyGrid1CorrectlyFilled);

        const result: Grid = solveSudoku(grid);

        expect(result.equals(gridCorrectlyFilled)).toBe(true);
        expect(result.equals(gridCorrectlyFilled)).not.toBe(false);
    });
});