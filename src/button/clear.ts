import { createBoard } from "../ManagingGrid/create";

// -----------------------------------------------clearing the Grid----------------------------------------------------------

const createVoidGrid = (): number[][] => {
    let grid: number[][] = [];
    for(let i = 0; i < 9; i++) {
        grid[i] = new Array(9).fill(0);
    }
    return grid;
}

const deleteBoard = (): void => {
    const grid = document.getElementById("grid");
    if (grid === null || grid === undefined) return;

    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

const clearBoard = (): void => {
    deleteBoard();
    createBoard(createVoidGrid());
}

export { clearBoard, deleteBoard }