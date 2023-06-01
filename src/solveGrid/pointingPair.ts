
import { Cell } from "./Cell";

/**
 * Applies the pointing pairs tactic to reduce the possible values for a specific cell:
 * For each box in the Sudoku grid: 
 * Identify the possible values that occur in the box. 
 * For each possible value in the box: Check if the value appears in only one row within the box.
 * If so, eliminate the value from the corresponding row in the other boxes within the same row.
 * Check if the value appears in only one column within the box.
 * If so, eliminate the value from the corresponding column in the other boxes within the same column.
 * Repeat steps 1-2 for all boxes in the Sudoku grid.
 * @param cell The cell for which to calculate the possible values
 * @param grid The Sudoku grid
 * @returns The updated possible values for the cell
 */
const applyPointingPairs = (cell: Cell, grid: number[][]): number[] => {
  const row = cell.getRow();
  const column = cell.getColumn();
  const box = cell.getBox();
  const possibleValues: number[] = cell.getPossibleValues();

  // Apply pointing pairs tactic
  const boxRow = Math.floor(box / 3) * 3;
  const boxColumn = (box % 3) * 3;
  const boxCells: Cell[] = [];
  for (let r = boxRow; r < boxRow + 3; r++) {
    for (let c = boxColumn; c < boxColumn + 3; c++) {
      if (r !== row && c !== column) {
        boxCells.push(new Cell(r, c, []));
      }
    }
  }

  for (const value of possibleValues) {
    let inSameRow = true;
    let inSameColumn = true;
    for (const boxCell of boxCells) {
      if (boxCell.getPossibleValues().includes(value)) {
        if (boxCell.getRow() !== row) {
          inSameRow = false;
        }
        if (boxCell.getColumn() !== column) {
          inSameColumn = false;
        }
      }
    }
    if (inSameRow) {
      for (let c = 0; c < 9; c++) {
        if (c < boxColumn || c >= boxColumn + 3) {
          const boxValue = grid[row][c];
          if (boxValue === 0 && possibleValues.includes(value)) {
            const index = possibleValues.indexOf(value);
            possibleValues.splice(index, 1);
          }
        }
      }
    }
    if (inSameColumn) {
      for (let r = 0; r < 9; r++) {
        if (r < boxRow || r >= boxRow + 3) {
          const boxValue = grid[r][column];
          if (boxValue === 0 && possibleValues.includes(value)) {
            const index = possibleValues.indexOf(value);
            possibleValues.splice(index, 1);
          }
        }
      }
    }
  }

  return possibleValues;
};

export { applyPointingPairs }