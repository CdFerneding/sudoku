import { testHiddenSingle, testHiddenSingleCorrectResult } from "../src/Repository/Testing/HiddenSingle";
import { Grid } from "../src/Entity/Grid";
import { applyHiddenSingle } from "../src/Solve/findNumbers/hiddenSingle";

describe("hidden Single", () => {

    test("should return the correct grid after finding a hidden Single", () => {
        const grid: Grid = new Grid(testHiddenSingle);
        const expectedGrid: Grid = new Grid(testHiddenSingleCorrectResult);

        const result: Grid = applyHiddenSingle(grid);

        expect(result.equals(expectedGrid));
    });
});