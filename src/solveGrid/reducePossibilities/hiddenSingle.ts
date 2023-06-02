import { Grid } from "../../Entities/Grid";
import { Cell } from "../../Entities/Cell";

const applyHiddenSingle = (grid: Grid): Grid => {
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            const cell = grid.getCell(row, column);
            if (cell.isEmpty()) {
                const possibleValues = cell.getPossibleValues();

                // Check for hidden singles in the row
                for (let c = 0; c < 9; c++) {
                    if (c !== column && grid.getCell(row, c).isEmpty()) {
                        const colCell = grid.getCell(row, c);
                        const colPossibleValues = colCell.getPossibleValues();
                        possibleValues.forEach((value) => {
                            if (!colPossibleValues.includes(value)) {
                                cell.removePossibleValue(value);
                            }
                        });
                    }
                }

                // Check for hidden singles in the column
                for (let r = 0; r < 9; r++) {
                    if (r !== row && grid.getCell(r, column).isEmpty()) {
                        const rowCell = grid.getCell(r, column);
                        const rowPossibleValues = rowCell.getPossibleValues();
                        possibleValues.forEach((value) => {
                            if (!rowPossibleValues.includes(value)) {
                                cell.removePossibleValue(value);
                            }
                        });
                    }
                }

                // Check for hidden singles in the box
                const startRow = Math.floor(row / 3) * 3;
                const startCol = Math.floor(column / 3) * 3;
                for (let r = startRow; r < startRow + 3; r++) {
                    for (let c = startCol; c < startCol + 3; c++) {
                        if (r !== row && c !== column && grid.getCell(r, c).isEmpty()) {
                            const boxCell = grid.getCell(r, c);
                            const boxPossibleValues = boxCell.getPossibleValues();
                            possibleValues.forEach((value) => {
                                if (!boxPossibleValues.includes(value)) {
                                    cell.removePossibleValue(value);
                                }
                            });
                        }
                    }
                }

                // Update the possible values of the cell
                cell.setPossibleValues(possibleValues);
            }
        }
    }

    return grid;
};

export { applyHiddenSingle };
