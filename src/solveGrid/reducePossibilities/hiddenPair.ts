import { Cell } from "../../Entities/Cell";
import { Grid } from "../../Entities/Grid";

const applyHiddenPair = (grid: Grid): Grid => {
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            const cell: Cell = grid.getCell(row, column);
            if (!cell.isEmpty()) continue;

            // check if the cell has two possible values
            if (cell.getPossibleValues.length !== 2) continue;

            // check if there is another cell within the same row that has the same possible values
            for (let c = 0; c < 9; c++) {
                const rowCell: Cell = grid.getCell(row, c);
                if (c !== column && rowCell.getPossibleValues().length === 2) {
                    if (cell.getPossibleValues() === rowCell.getPossibleValues()) {
                        // delete the possible values in any other cell of the row
                        for (let colDelete = 0; colDelete < 9; colDelete++) {
                            const candidateCell: Cell = grid.getCell(row, colDelete);
                            if (!candidateCell.equals(rowCell) && !candidateCell.equals(cell)) {
                                // check if the possibleCell has one of the hiddenPair as possible values
                                if (candidateCell.getPossibleValues().includes(cell.getPossibleValues()[0])) {
                                    candidateCell.removePossibleValue(cell.getPossibleValues()[0]);
                                }
                                if (candidateCell.getPossibleValues().includes(cell.getPossibleValues()[1])) {
                                    candidateCell.removePossibleValue(cell.getPossibleValues()[1]);
                                }
                            }
                        }
                    }
                }
            }

            // check for the column
            for (let r = 0; r < 9; r++) {
                const colCell: Cell = grid.getCell(r, column);
                if (r !== row && colCell.getPossibleValues().length === 2) {
                    if (cell.getPossibleValues() === colCell.getPossibleValues()) {
                        // delete the possible values in any other cell of the row
                        for (let rowDelete = 0; rowDelete < 9; rowDelete++) {
                            const candidateCell: Cell = grid.getCell(rowDelete, column);
                            if (!candidateCell.equals(colCell) && !candidateCell.equals(cell)) {
                                // check if the possibleCell has one of the hiddenPair as possible values
                                if (candidateCell.getPossibleValues().includes(cell.getPossibleValues()[0])) {
                                    candidateCell.removePossibleValue(cell.getPossibleValues()[0]);
                                }
                                if (candidateCell.getPossibleValues().includes(cell.getPossibleValues()[1])) {
                                    candidateCell.removePossibleValue(cell.getPossibleValues()[1]);
                                }
                            }
                        }
                    }
                }
            }

            // in the box
            const startRow = Math.floor(row / 3) * 3;
            const startCol = Math.floor(column / 3) * 3;
            for (let r = startRow; r < startRow + 3; r++) {
                for (let c = startCol; c < startCol + 3; c++) {

                    const boxCell = grid.getCell(r, c);
                    if (!(r === row && c === column) && boxCell.getPossibleValues().length === 2) {
                        if (cell.getPossibleValues() === boxCell.getPossibleValues()) {

                            const startRowDel = Math.floor(row / 3) * 3;
                            const startColDel = Math.floor(column / 3) * 3;
                            for (let r = startRowDel; r < startRowDel + 3; r++) {
                                for (let c = startColDel; c < startColDel + 3; c++) {

                                    const candidateCell: Cell = grid.getCell(startRowDel, startColDel);
                                    if (!candidateCell.equals(boxCell) && !candidateCell.equals(cell)) {
                                        // check if the possibleCell has one of the hiddenPair as possible values
                                        if (candidateCell.getPossibleValues().includes(cell.getPossibleValues()[0])) {
                                            candidateCell.removePossibleValue(cell.getPossibleValues()[0]);
                                        }
                                        if (candidateCell.getPossibleValues().includes(cell.getPossibleValues()[1])) {
                                            candidateCell.removePossibleValue(cell.getPossibleValues()[1]);
                                        }
                                    }

                                }
                            }

                        }
                    }
                }
            }

        }
    }

    return grid;
}

export { applyHiddenPair }
