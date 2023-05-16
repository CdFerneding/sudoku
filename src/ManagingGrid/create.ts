import { undoStack } from "./undo";

// --------------------------------------------creating Grid----------------------------------------------------------
// creating Grid with eventListener inputting cells
// a function creating a 9x9 grid of squares
const createBoard = (withGrid: string[][]): void => {
    const grid = document.getElementById("grid");
    if(grid === null) return;

    // create 9 rows for the sudoku grid
    withGrid.forEach((elem: String[], rowIndex: number) => {
        const row = document.createElement('div');
        if(row === null) return;
        row.classList.add('row');
        row.setAttribute("row", `${rowIndex}`);
        if (rowIndex == 2 || rowIndex == 5) row.classList.add('underline');
        grid.append(row);

        // insert cells into each row
        elem.forEach((value: String, colIndex: number) => {
            const cell = document.createElement("div");
            if(cell === null) return;
            cell.setAttribute("row", `${rowIndex}`)
            cell.setAttribute("column", `${colIndex}`)
            cell.classList.add("cell");
            if (colIndex == 2 || colIndex == 5) cell.classList.add('rightline');

            // const cellNumber = Number.parseInt(value.toString());
            if(value.toString() === "") {
                cell.setAttribute("type", "button");
                cell.addEventListener("click", addNumber);
            } else cell.innerText = value.toString();
            
            row.append(cell);
        });
    });
}

const addNumber = (event: MouseEvent): void => {
    const elem = event.target;
    if (!(elem instanceof HTMLElement)) return;
    const row = elem.getAttribute("row");
    const column = elem.getAttribute("column");
    const cell = document.querySelector(`[row="${row}"][column="${column}"]`);
    if(!(cell instanceof HTMLElement)) return;
    let num: number;
    do {
        const promt = prompt("Enter a number between 1 and 9:");
        if(promt === null) return;
        num = Number.parseInt(promt);
    } while (isNaN(Number(num)))
    if (!isNaN(Number(num)) && cell !== null) {
        let numberBeforeChange: number;
        if(cell.innerHTML === ``) numberBeforeChange = 0;
        else numberBeforeChange = Number.parseInt(cell.innerHTML);
        cell.innerText = num.toString();
        undoStack.push([Number.parseInt(row), Number.parseInt(column), numberBeforeChange])
    }
}

export { createBoard }