import { getCurrentGrid } from "../ManagingGrid/getGrid";
// import { findNumbers } from "./findMissingNumbers";
import { clearBoard, deleteBoard } from "./clear";
import { createBoard } from "../ManagingGrid/create";
import { Grid } from "../Entities/Grid";
import { solveSudoku } from "../solveGrid/solveSudoku";

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