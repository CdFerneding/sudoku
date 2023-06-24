import { Grid } from "../src/Entity/Grid";
import { testHiddenPair, testHiddenPairCorrectResult } from "../src/Repository/Testing/HiddenPair";
import { solveSudoku } from "../src/Solve/solveSudoku";

describe("hidden Pair", () => {

    test("should return true when the correct number is deduced by hidden pair", () => {
        const grid: Grid = new Grid(testHiddenPair);

        let result = solveSudoku(grid).toNumberArray();

        expect(result).toEqual(testHiddenPairCorrectResult);
    });
});