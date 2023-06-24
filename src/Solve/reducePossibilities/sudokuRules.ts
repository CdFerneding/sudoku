import { Cell } from "../../Entity/Cell";
import { Grid } from "../../Entity/Grid";

/**
 * simply applying sudoku rules to reduce possibilities
 * @param grid 
 * @returns grid with reduced possiblie values 
 */
const applySudokuRules = (grid: Grid): Grid => {
    const cells = grid.getCells();

    cells.forEach((cell: Cell) => {
        if(cell.getValue() !== 0) return;
        const row = cell.getRow();
        const column = cell.getColumn();
        const box = cell.getBox();
        const possibleValues: number[] = cell.getPossibleValues();

        // Remove values already present in the same row
        for (let c = 0; c < 9; c++) {
            const value = grid.getCell(row, c).getValue();
            if (c !== column && value !== null && possibleValues.includes(value)) {
                cell.removePossibleValue(value);
            }
        }

        // Remove values already present in the same column
        for (let r = 0; r < 9; r++) {
            const value = grid.getCell(r, column).getValue();
            if (r !== row && value !== null && possibleValues.includes(value)) {
                cell.removePossibleValue(value);
            }
        }

        // Remove values already present in the same box
        const boxRow = Math.floor(box / 3) * 3;
        const boxColumn = (box % 3) * 3;
        for (let r = boxRow; r < boxRow + 3; r++) {
            for (let c = boxColumn; c < boxColumn + 3; c++) {
                const value = grid.getCell(r, c).getValue();
                if ((r !== row || c !== column) && value !== null && possibleValues.includes(value)) {
                    cell.removePossibleValue(value);
                }
            }
        }

        cell.setPossibleValues(possibleValues);
    });

    return grid;
}

export { applySudokuRules }