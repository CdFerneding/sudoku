import { getCurrentGrid } from "../Getter/getGrid";
import { findNumbers } from "./findMissingNumbers";
import { clearBoard, deleteBoard } from "../ManagingGrid/clear";
import { createBoard } from "../ManagingGrid/create";

const solveGrid = () => {
    let currentGrid = getCurrentGrid();
    let resultingGrid = findNumbers(currentGrid);
    deleteBoard();
    createBoard(resultingGrid);
}

export { solveGrid }