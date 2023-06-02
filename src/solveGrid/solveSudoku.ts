import { Grid } from "../Entities/Grid";
import { applyHiddenSingle } from "./reducePossibilities/hiddenSingle";
import { applySudokuRules } from "./reducePossibilities/sudokuRules";
import { applyPointingPairs } from "./reducePossibilities/pointingPair";
import { applyNakedSingle } from "./findNumbers/nakedSingle";



/**
 * Solve the Sudoku grid using various solving techniques.
 * @param grid The Sudoku grid to solve
 * @returns The solved Sudoku grid
 */
const solveSudoku = (grid: Grid): Grid => {
    console.log(`inside 'solveSudoku' method.`);
    let hasMadeChanges = false;
    const maxIterations = 10;
    let iteration = 0;

    do {
        hasMadeChanges = false;
        let oldGrid;

        // apply Sudoku rules
        do {
            hasMadeChanges = false;
            oldGrid = grid.copy();
            // Execute sudokuRules to reduce possibilities
            grid = applySudokuRules(grid);
            console.log(!grid.equals(oldGrid));
            if (!grid.equals(oldGrid)) {
                hasMadeChanges = true;
            }

            // Check for naked singles
            oldGrid = grid.copy();
            grid = applyNakedSingle(grid);
            if (!grid.equals(oldGrid)) {
                hasMadeChanges = true;
            }
        } while (!grid.isFull() && hasMadeChanges);

        // apply hidden sinles technique
            oldGrid = grid.copy();
            // execute hiddenSingle Algorithm
            grid = applyHiddenSingle(grid);
            if (!grid.equals(oldGrid)) {
                hasMadeChanges = true;
            }
            oldGrid = grid.copy();

        // Apply pointing pairs technique
        // oldGrid = new Grid(grid.toNumberArray());
        // grid = applyPointingPairs(grid);
        // if (grid !== updatedGrid) {
        //     oldGrid = grid;
        //     hasMadeChanges = true;
        // }

        iteration++;
    } while (!grid.isFull() && hasMadeChanges && iteration <= maxIterations);

    return grid;
}

export { solveSudoku }