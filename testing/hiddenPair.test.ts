import { Grid } from "../src/Entities/Grid";
import { testHiddenPair, testHiddenPairCorrectResult } from "../src/Repository/TestingGrids/testHiddenPair";
import { solveSudoku } from "../src/solveGrid/solveSudoku";

describe("hidden Pair", () => {

    test("should return true when the correct number is deduced by hidden pair", () => {
        const grid: Grid = new Grid(testHiddenPair);

        let result = solveSudoku(grid).toNumberArray();

        expect(result).toEqual(testHiddenPairCorrectResult);
    });
});