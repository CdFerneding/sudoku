import { Grid } from "../../Entities/Grid";

const applyNakedSingle = (grid: Grid): Grid => {
    grid.getCells().forEach(function(cell) {
        if (cell.getPossibleValues().length === 1) {
            cell.setValue(cell.getPossibleValues()[0]);
            cell.setPossibleValues([]);
        }
    });
    return grid;
}

export { applyNakedSingle }