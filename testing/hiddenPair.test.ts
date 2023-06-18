import { Grid } from "../src/Entities/Grid";
import { testHiddenPair, testHiddenPairCorrectResult } from "../src/Repository/TestingGrids/testHiddenPair";
import { applyHiddenPair } from "../src/solveGrid/reducePossibilities/hiddenPair";

describe("hidden Pair", () => {

    test("should return the correctly filled in number deduced by hidden pair", () => {
        const grid: Grid = new Grid(testHiddenPair);
        const expectedGrid: Grid = new Grid(testHiddenPairCorrectResult);

        const result: Grid = applyHiddenPair(grid);

        expect(result.equals(expectedGrid));
    });
});