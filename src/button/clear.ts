import { createBoard } from "../ManagingGrid/create";

// -----------------------------------------------clearing the Grid----------------------------------------------------------

const createVoidGrid = (): number[][] => {
    let grid: number[][] = [];
    for(let i = 0; i < 9; i++) {
        grid[i] = new Array(9).fill(null);
    }
    return grid;
}

const deleteBoard = (): void => {
    const grid = document.getElementById(`grid`);
    if(grid === null) return;
    while(grid.lastChild) {
        grid.removeChild(grid.lastChild);
    }
}

const clearBoard = (): void => {
    deleteBoard();
    createBoard(createVoidGrid());
}

export { clearBoard, deleteBoard }