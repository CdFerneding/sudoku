import { getCurrentGrid } from "../Managing/GetGrid";
// import { findNumbers } from "./findMissingNumbers";
import { clearBoard, deleteBoard } from "./Clearing";
import { createBoard } from "../Managing/CreateGrid";
import { Grid } from "../Entity/Grid";
import { solveSudoku } from "../Solve/solveSudoku";

const solveGrid = () => {
    console.log(`the solve button was pressed.`)
    const currentGrid: number[][] = getCurrentGrid();
    const grid: Grid = new Grid(currentGrid);
    const resultingGrid: Grid = solveSudoku(grid);
    const resultingGridToNumArr = resultingGrid.toNumberArray();
    deleteBoard();
    createBoard(resultingGridToNumArr);
}

export { solveGrid }
