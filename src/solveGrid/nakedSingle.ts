import { Cell } from "./Cell";

/**
 * naked Single: simple Technique:
 * a cell with a possible Value that is the only one of it's kind an entire row, column or box
 * @param cell 
 * @param grid 
 * @returns possibleValues: number[] according to the naked Single tactic 
 */
const applyNakedSingle = (cell: Cell, grid: number[][]): number[] => {

    const row = cell.getRow();
    const column = cell.getColumn();
    const box = cell.getBox();
    const possibleValues: number[] = cell.getPossibleValues();

    // Remove values already present in the same row
    for (let c = 0; c < 9; c++) {
        const value = grid[row][c];
        if (value !== 0 && possibleValues.includes(value)) {
            const index = possibleValues.indexOf(value);
            possibleValues.splice(index, 1);
        }
    }

    // Remove values already present in the same column
    for (let r = 0; r < 9; r++) {
        const value = grid[r][column];
        if (value !== 0 && possibleValues.includes(value)) {
            const index = possibleValues.indexOf(value);
            possibleValues.splice(index, 1);
        }
    }

    // Remove values already present in the same box
    const boxRow = Math.floor(box / 3) * 3;
    const boxColumn = (box % 3) * 3;
    for (let r = boxRow; r < boxRow + 3; r++) {
        for (let c = boxColumn; c < boxColumn + 3; c++) {
            const value = grid[r][c];
            if (value !== 0 && possibleValues.includes(value)) {
                const index = possibleValues.indexOf(value);
                possibleValues.splice(index, 1);
            }
        }
    }
    return possibleValues;
}

export { applyNakedSingle }