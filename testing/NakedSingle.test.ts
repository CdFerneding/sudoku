import { testNakedSingle, testNakedSingleCorrectResult } from "../src/Repository/Testing/NakedSinlge";
import { applyNakedSingle } from "../src/Solve/findNumbers/nakedSingle";
import { Grid } from "../src/Entity/Grid";

describe("naked Single", () => {

    test("should return the correct grid after finding a naked single", () => {
        const grid: Grid = new Grid(testNakedSingle);
        const expectedGrid: Grid = new Grid(testNakedSingleCorrectResult);

        const result: Grid = applyNakedSingle(grid);

        expect(result.equals(expectedGrid));
    });
});