import { Cell } from "../../Entities/Cell";
import { Grid } from "../../Entities/Grid";

/**
 * naked Single: simple Technique:
 * a cell with a possible Value that is the only one of it's kind an entire row, column or box
 * @param cell 
 * @param grid 
 * @returns possibleValues: number[] according to the naked Single tactic 
 */
const applySudokuRules = (grid: Grid): Grid => {
    const cells = grid.getCells();

    cells.forEach((cell: Cell) => {
        const row = cell.getRow();
        const column = cell.getColumn();
        const box = cell.getBox();
        const possibleValues: number[] = cell.getPossibleValues();

        // Remove values already present in the same row
        for (let c = 0; c < 9; c++) {
            const value = grid.getCell(row, c).getValue();
            if (value !== null && possibleValues.includes(value)) {
                cell.removePossibleValue(value);
            }
        }

        // Remove values already present in the same column
        for (let r = 0; r < 9; r++) {
            const value = grid.getCell(r, column).getValue();
            if (value !== null && possibleValues.includes(value)) {
                cell.removePossibleValue(value);
            }
        }

        // Remove values already present in the same box
        const boxRow = Math.floor(box / 3) * 3;
        const boxColumn = (box % 3) * 3;
        for (let r = boxRow; r < boxRow + 3; r++) {
            for (let c = boxColumn; c < boxColumn + 3; c++) {
                const value = grid.getCell(r, c).getValue();
                if (value !== null && possibleValues.includes(value)) {
                    cell.removePossibleValue(value);
                }
            }
        }

        cell.setPossibleValues(possibleValues);
    });

    return grid;
};

export { applySudokuRules }