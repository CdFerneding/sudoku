import { testHiddenSingle, testHiddenSingleCorrectResult } from "../src/Repository/TestingGrids/testHiddenSingle";
import { Grid } from "../src/Entities/Grid";
import { applyHiddenSingle } from "../src/solveGrid/findNumbers/hiddenSingle";

describe("hidden Single", () => {

    test("should return the correct grid after finding a hidden Single", () => {
        const grid: Grid = new Grid(testHiddenSingle);
        const expectedGrid: Grid = new Grid(testHiddenSingleCorrectResult);

        const result: Grid = applyHiddenSingle(grid);

        expect(result.equals(expectedGrid));
    });
});