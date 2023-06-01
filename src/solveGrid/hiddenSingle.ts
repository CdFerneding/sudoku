import { Cell } from "./Cell";

/**
 * hidden Single: simple Technique:
 * a cell only has one possible value
 * for a deeper understanding: https://sudoku.com/sudoku-rules/hidden-singles/ 
 * @param cell 
 * @param grid 
 * @returns possibleNumbers: number[] --> according to the naked Single algorithm
 */
const applyHiddenSingle = (cell: Cell, grid: number[][]): number[] => {

    const row = cell.getRow();
    const column = cell.getColumn();
    const box = cell.getBox();
    const possibleValues = cell.getPossibleValues();

    // Check for naked singles in the row
    for (let c = 0; c < 9; c++) {
        if (c !== column && grid[row][c] === 0) {
            // for this to work grid would need to be an object with an array of 81 cells!
            // worth implementing?
            const colCell = new Cell(row, c, [grid[row][c]]);
            const colPossibleValues = colCell.getPossibleValues();
            possibleValues.forEach(value => {
                if (colPossibleValues.includes(value)) {
                    const index = possibleValues.indexOf(value);
                    possibleValues.splice(index, 1);
                }
            });
        }
    }

    // Check for naked singles in the column
    for (let r = 0; r < 9; r++) {
        if (r !== row && grid[r][column] === 0) {
            const rowCell = new Cell(r, column, [grid[r][column]]);
            const rowPossibleValues = rowCell.getPossibleValues();
            possibleValues.forEach(value => {
                if (rowPossibleValues.includes(value)) {
                    const index = possibleValues.indexOf(value);
                    possibleValues.splice(index, 1);
                }
            });
        }
    }

    // Check for naked singles in the box
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(column / 3) * 3;
    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            if (r !== row && c !== column && grid[r][c] === 0) {
                const boxCell = new Cell(r, c, [grid[r][c]]);
                const boxPossibleValues = boxCell.getPossibleValues();
                possibleValues.forEach(value => {
                    if (boxPossibleValues.includes(value)) {
                        const index = possibleValues.indexOf(value);
                        possibleValues.splice(index, 1);
                    }
                });
            }
        }
    }

    // Update the possible values of the cell
    cell.setPossibleValues(possibleValues);

    return possibleValues;
}

export { applyHiddenSingle };
