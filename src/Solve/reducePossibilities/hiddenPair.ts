import { Grid } from "../../Entity/Grid";
import { Cell } from "../../Entity/Cell";


/**
 * for better understanding:
 * https://sudoku.com/sudoku-rules/hidden-pairs/
 * @param grid 
 * @returns 
 */
const applyHiddenPair = (grid: Grid): Grid => {

    // a unit are 9 cells (row, column or box)
    const applyHiddenPairToUnit = (unit: Cell[]): void => {
        let candidatesCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (const cell of unit) {
            if (cell.isEmpty()) {
                for (const value of cell.getPossibleValues()) {
                    candidatesCount[value - 1]++;
                }
            }
        }

        const hiddenPairs = [];
        candidatesCount.forEach((count, valueIndex) => {
            if (count === 2) {
                hiddenPairs.push(valueIndex + 1);
            }
        });

        if (hiddenPairs.length >= 2) {
            for (const pair1 of hiddenPairs) {
                for (const pair2 of hiddenPairs) {
                    if (pair1 !== pair2) {
                        const commonCells = [];

                        // Find the cells common to pair1 and pair2 in the unit
                        for (const cell of unit) {
                            if (
                                cell.isEmpty() &&
                                cell.getPossibleValues().includes(pair1) &&
                                cell.getPossibleValues().includes(pair2)
                            ) {
                                commonCells.push(cell);
                            }
                        }

                        if (commonCells.length === 2) {
                            // Remove pair1 and pair2 as candidates from other cells in the unit
                            for (const cell of unit) {
                                if (
                                    !commonCells.includes(cell) &&
                                    cell.getPossibleValues().includes(pair1) &&
                                    cell.getPossibleValues().includes(pair2)
                                ) {
                                    cell.removePossibleValue(pair1);
                                    cell.removePossibleValue(pair2);
                                }
                            }
                            for(const cell of commonCells) {
                                // Remove other values from the cells part of the hidden pair
                                for (const value of cell.getPossibleValues()) {
                                    if (value !== pair1 && value !== pair2) {
                                        cell.removePossibleValue(value);
                                    }
                                }
                            }
                        }

                        // other hidden mulitiple go here...
                    }
                }
            }
        }
    };

    // Check rows for hidden pairs
    for (let row = 0; row < 9; row++) {
        const rowCells = grid.getRow(row);
        applyHiddenPairToUnit(rowCells);
    }

    // Check columns for hidden pairs
    for (let col = 0; col < 9; col++) {
        const colCells = grid.getColumn(col);
        applyHiddenPairToUnit(colCells);
    }

    // Check boxes for hidden pairs
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            let boxNumber = Math.floor(boxRow / 3) * 3 + Math.floor(boxCol / 3);
            const boxCells = grid.getBox(boxNumber);
            applyHiddenPairToUnit(boxCells);
        }
    }

    return grid;
};

export { applyHiddenPair };
