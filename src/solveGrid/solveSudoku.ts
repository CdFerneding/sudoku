import { Grid } from "../Entities/Grid";
import { applyHiddenSingle } from "./reducePossibilities/hiddenSingle";
import { applySudokuRules } from "./reducePossibilities/sudokuRules";
import { applyPointingPairs } from "./reducePossibilities/pointingPair";



/**
 * Solve the Sudoku grid using various solving techniques.
 * @param grid The Sudoku grid to solve
 * @returns The solved Sudoku grid
 */
const solveSudoku = (grid: Grid): Grid => {
    console.log(`inside 'solveSudoku' method.`);
    let isGridFilled = false;
    let hasMadeChanges = false;
    const maxIterations = 10;
    let iteration = 0;

    do {
        hasMadeChanges = false;

        // Apply hidden singles technique
        let updatedGrid = applyHiddenSingle(grid);
        if (grid !== updatedGrid) {
            grid = updatedGrid;
            hasMadeChanges = true;
        }

        // Apply Sudoku rules to reduce possibilities
        updatedGrid = applySudokuRules(grid);
        if (grid !== updatedGrid) {
            grid = updatedGrid;
            hasMadeChanges = true;
        }

        // Apply pointing pairs technique
        updatedGrid = applyPointingPairs(grid);
        if (grid !== updatedGrid) {
            grid = updatedGrid;
            hasMadeChanges = true;
        }

        // Check if the grid is filled
        const cells = grid.getCells();
        isGridFilled = cells.every((cell) => cell.getValue() !== 0);
        iteration++;
    } while (!isGridFilled && hasMadeChanges && iteration <= maxIterations);

    return grid;
};

export { solveSudoku };
