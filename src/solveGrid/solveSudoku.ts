import { Grid } from "../Entities/Grid";
import { applyHiddenSingle } from "./findNumbers/hiddenSingle";
import { applySudokuRules } from "./reducePossibilities/sudokuRules";
import { applyNakedSingle } from "./findNumbers/nakedSingle";
import { applyHiddenPair } from "./reducePossibilities/hiddenPair";



/**
 * Solve the Sudoku grid using various solving techniques.
 * @param grid The Sudoku grid to solve
 * @returns The solved Sudoku grid
 */
const solveSudoku = (grid: Grid): Grid => {
    let hasMadeChanges = false;
    let hiddenSingleMadeChanges = false;
    const maxIterations = 70;
    let iteration = 0;
    let oldGrid;

    // apply Sudoku rules
    do {
        hasMadeChanges = false;
        oldGrid = grid.copy();

        // keeping track of strategies that reduce possibilities (not being sudoku rules)
        if (hiddenSingleMadeChanges === true) {
            hasMadeChanges = true;
            hiddenSingleMadeChanges = false;
        }

        // Execute sudokuRules to reduce possibilities
        grid = applySudokuRules(grid);
        if (!grid.equals(oldGrid)) {
            hasMadeChanges = true;
        }

        // Check for naked singles
        oldGrid = grid.copy();
        grid = applyNakedSingle(grid);
        if (!grid.equals(oldGrid)) {
            continue;
        }

        // Check for hidden singles
        if (hasMadeChanges) {
            oldGrid = grid.copy();
            grid = applyHiddenSingle(grid);
            if (!grid.equals(oldGrid)) {
                continue; // Go back to the beginning of the loop
            }
        }

        // Check for hidden pairs
        oldGrid = grid.copy();
        grid = applyHiddenPair(grid);
        if (!grid.equals(oldGrid)) {
            hiddenSingleMadeChanges = true;
            continue; // Go back to the beginning of the loop
        }

        iteration++;
    } while (!grid.isFull() && iteration <= maxIterations);

    return grid;
}

export { solveSudoku }
