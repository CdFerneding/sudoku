import { Grid } from "../src/Entities/Grid";
import { testSudokuRules, testSudokuRulesCorrectSolution } from "../src/Repository/TestingGrids/testSudokuRules";
import { applySudokuRules } from "../src/solveGrid/reducePossibilities/sudokuRules";

describe("sudoku Rules", () => {

    test("applySudokuRules() should correctly reduce the possiblilities of a given sudoku grid", () => {
        const grid: Grid = testSudokuRules;
        const expectedGrid: Grid = testSudokuRulesCorrectSolution;

        const result: Grid = applySudokuRules(grid);

        expect(result.equals(expectedGrid));
    });
});