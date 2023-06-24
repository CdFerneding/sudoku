import { Grid } from "../Entity/Grid";
import { getCurrentGrid } from "../Managing/GetGrid";

// -----------------------------------------------checking the Grid----------------------------------------------------------
// functions for the check Button

/**
 * the main checking function that will use all other function in this file (and getting the current grid)
 */
const checkGrid = (): string => {
    console.log("in the checkGrid function");
    let output: string;
    const gridData = getCurrentGrid();
    const grid: Grid = new Grid(gridData);
    if (grid === null || grid === undefined) {
        output = `something went wrong with fetching the grid :S`;
        alert(output);
        return output;
    }else if (grid.isFull() !== true) {
        output = `the grid is not fully filled :S`;
        alert(output);
        return output;
    }else if (grid.checkRowsAndColumns() !== true || grid.checkBoxes() !== true) {
        output = `the grid is incorrect :S`;
        alert(output);
        return output;
    }else {
        output = `the grid is correct :D. Well done!`;
        alert(output );
        return output
    };
}
export { checkGrid }
