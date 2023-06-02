import { Grid } from "../../Entities/Grid";
import { Cell } from "../../Entities/Cell";

const applyPointingPairs = (grid: Grid): Grid => {
    const updatedGrid = new Grid(grid.toNumberArray());

    for (let boxRow = 0; boxRow < 9; boxRow += 3) {
        for (let boxColumn = 0; boxColumn < 9; boxColumn += 3) {
            const possibleValuesInBox = new Set<number>();
            const cellsToUpdate: { row: number; column: number }[] = [];

            // Get the possible values and cells to update in the box
            for (let r = boxRow; r < boxRow + 3; r++) {
                for (let c = boxColumn; c < boxColumn + 3; c++) {
                    const cell = updatedGrid.getCell(r, c);
                    if (cell.isEmpty()) {
                        const possibleValues = cell.getPossibleValues();
                        for (const value of possibleValues) {
                            possibleValuesInBox.add(value);
                        }
                        cellsToUpdate.push({ row: r, column: c });
                    }
                }
            }

            // Check for pointing pairs in the box
            for (const value of possibleValuesInBox) {
                let inSameRow = true;
                let inSameColumn = true;
                let sameRow: number | undefined;
                let sameColumn: number | undefined;

                for (const { row, column } of cellsToUpdate) {
                    const cell = updatedGrid.getCell(row, column);
                    if (cell.getPossibleValues().includes(value)) {
                        if (sameRow === undefined) {
                            sameRow = row;
                        } else if (sameRow !== row) {
                            inSameRow = false;
                        }

                        if (sameColumn === undefined) {
                            sameColumn = column;
                        } else if (sameColumn !== column) {
                            inSameColumn = false;
                        }
                    }
                }

                if (inSameRow && sameRow !== undefined) {
                    const startColumn = boxColumn - (boxColumn % 3);
                    const endColumn = boxColumn + 3 - (boxColumn % 3);
                    for (let c = startColumn; c < endColumn; c++) {
                        if (c < boxColumn || c >= boxColumn + 3) {
                            const cell = updatedGrid.getCell(sameRow, c);
                            if (cell.isEmpty() && cell.getPossibleValues().includes(value)) {
                                cell.removePossibleValue(value);
                            }
                        }
                    }
                }

                if (inSameColumn && sameColumn !== undefined) {
                    const startRow = boxRow - (boxRow % 3);
                    const endRow = boxRow + 3 - (boxRow % 3);
                    for (let r = startRow; r < endRow; r++) {
                        if (r < boxRow || r >= boxRow + 3) {
                            const cell = updatedGrid.getCell(r, sameColumn);
                            if (cell.isEmpty() && cell.getPossibleValues().includes(value)) {
                                cell.removePossibleValue(value);
                            }
                        }
                    }
                }
            }
        }
    }

    return updatedGrid;
};

export { applyPointingPairs };
