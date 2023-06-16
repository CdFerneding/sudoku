import { testNakedSingle, testNakedSingleCorrectResult } from "../src/Repository/TestingGrids/testNakedSingle";
import { applyNakedSingle } from "../src/solveGrid/findNumbers/nakedSingle";
import { Grid } from "../src/Entities/Grid";

describe("naked Single", () => {

    test("should return the correct grid after finding a naked single", () => {
        const grid: Grid = new Grid(testNakedSingle);
        const expectedGrid: Grid = new Grid(testNakedSingleCorrectResult);

        const result: Grid = applyNakedSingle(grid);

        expect(result.equals(expectedGrid));
    });
});