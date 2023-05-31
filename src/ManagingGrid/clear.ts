import { createBoard } from "./create";

// -----------------------------------------------clearing the Grid----------------------------------------------------------

const createVoidBoard = (): number[][] => {
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
    const grid = document.createElement(`div`);
    if(grid === null) return;
    grid.id = `grid`;
    document.body.append(grid);
    createBoard(createVoidBoard());
}

export { clearBoard }