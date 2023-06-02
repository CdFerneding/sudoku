import { Grid } from "../../Entities/Grid";
import { Cell } from "../../Entities/Cell";

const applyHiddenSingle = (grid: Grid): Grid => {
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            // getting a reference of the cell in the grid!
            const cell = grid.getCell(row, column);
            if (!cell.isEmpty()) continue;

            // Check for hidden singles in the row
            let hiddenSingleFound = false;
            let possibleValuesOfCurrentRow = [];
            for (let c = 0; c < 9; c++) {
                const rowCell = grid.getCell(row, c);
                if (c !== column && rowCell.isEmpty()) {
                    rowCell.getPossibleValues().forEach((value) => {
                        if (!possibleValuesOfCurrentRow.includes(value)) {
                            possibleValuesOfCurrentRow.push(value);
                        }
                    });
                }
            }
            cell.getPossibleValues().forEach((value) => {
                if (!possibleValuesOfCurrentRow.includes(value)) {
                    cell.setValue(value);
                    cell.setPossibleValues([]);
                    hiddenSingleFound = true;
                }
            });

            if (hiddenSingleFound) {
                continue;
            }

            // Check for hidden singles in the column
            hiddenSingleFound = false;
            let possibleValuesOfCurrentColumn = [];
            for (let r = 0; r < 9; r++) {
                const colCell = grid.getCell(r, column);
                if (r !== row && colCell.isEmpty()) {
                    colCell.getPossibleValues().forEach((value) => {
                        if (!possibleValuesOfCurrentColumn.includes(value)) {
                            possibleValuesOfCurrentColumn.push(value);
                        }
                    });
                }
            }
            cell.getPossibleValues().forEach((value) => {
                if (!possibleValuesOfCurrentColumn.includes(value)) {
                    cell.setValue(value);
                    cell.setPossibleValues([]);
                    hiddenSingleFound = true;
                }
            });

            if (hiddenSingleFound) {
                continue;
            }

            // Check for hidden singles in the box
            const startRow = Math.floor(row / 3) * 3;
            const startCol = Math.floor(column / 3) * 3;
            let possibleValuesOfCurrentBox = [];
            for (let r = startRow; r < startRow + 3; r++) {
                for (let c = startCol; c < startCol + 3; c++) {

                    const boxCell = grid.getCell(r,c);
                    if (!(r === row && c === column) && boxCell.isEmpty()) {
                        boxCell.getPossibleValues().forEach((value) => {
                            if (!possibleValuesOfCurrentBox.includes(value)) {
                                possibleValuesOfCurrentBox.push(value);
                            }
                        });
                    }
                }
            }
            cell.getPossibleValues().forEach((value) => {
                if (!possibleValuesOfCurrentBox.includes(value)) {
                    cell.setValue(value);
                    cell.setPossibleValues([]);
                    hiddenSingleFound = true;
                }
            });
            if (hiddenSingleFound) {
                continue;
            }
            // --> going for the next Cell in the next for-iteration

        }
    }

    return grid;
};

export { applyHiddenSingle }