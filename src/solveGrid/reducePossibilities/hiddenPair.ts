import { Grid } from "../../Entities/Grid";
import { Cell } from "../../Entities/Cell";

const applyHiddenPair = (grid: Grid): Grid => {
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            const cell: Cell = grid.getCell(row, column);
            if (!cell.isEmpty) continue;

            let hiddenSingleFound = false;

            // Check for hidden singles in the box
            const startRow = Math.floor(row / 3) * 3;
            const startCol = Math.floor(column / 3) * 3;
            let possibleValuesOfCurrentBox = [];
            for (let r = startRow; r < startRow + 3; r++) {
                for (let c = startCol; c < startCol + 3; c++) {

                    const boxCell = grid.getCell(r, c);
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
                return grid;
            }

        }
    }

    return grid;
}

export { applyHiddenPair };
