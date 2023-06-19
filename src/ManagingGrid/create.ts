import { deleteBoard } from "../button/clear";
import { undoStack } from "../button/undo";

const createBoard = (withGrid: number[][]): void => {
    // delete all Children of the grid div if it already has any
    deleteBoard();
    
    const grid = document.getElementById("grid");

    // build a sudoku grid: 9 row div's with 9 input cell's respectfully
    withGrid.forEach((elem: number[], rowIndex: number) => {
        const row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute("row", `${rowIndex}`);
        if (rowIndex === 2 || rowIndex === 5) row.classList.add('underline');
        grid.append(row);

        elem.forEach((value: number, colIndex: number) => {
            const cell = document.createElement("input");
            cell.setAttribute("row", `${rowIndex}`);
            cell.setAttribute("column", `${colIndex}`);
            cell.setAttribute("id", "numberInput");
            cell.setAttribute("pattern", "[1-9]");
            cell.setAttribute("maxlength", "1");
            cell.setAttribute("prev-value", value.toString());
            cell.classList.add("cell");

            if (colIndex == 2 || colIndex == 5) {
                cell.classList.add('rightline');
            }
            if (value === null || value === 0) {
                cell.setAttribute("style", "font-weight: light; font-size: xx-large");
                cell.addEventListener("input", handleInputChange);
            } else {
                cell.value = value.toString();
                cell.setAttribute("style", "font-weight: bold; font-size: xx-large;");
                cell.readOnly = true;
            }

            row.append(cell);
        });
    });
}


function handleInputChange(event: Event): void {
    const inputField = event.target;
    if (!(inputField instanceof HTMLInputElement)) return;
    const row = inputField.getAttribute("row");
    const column = inputField.getAttribute("column");
    const cell = document.querySelector(`[row="${row}"][column="${column}"]`);

    if (!(cell instanceof HTMLInputElement)) return;

    const num = Number.parseInt(inputField.value);
    if (!isNaN(num) && num >= 1 && num <= 9) {
        const numberBeforeChange = Number.parseInt(cell.getAttribute("prev-value") || "0");
        undoStack.push([Number.parseInt(row), Number.parseInt(column), numberBeforeChange]);
        cell.setAttribute("prev-value", cell.value); // Update the previous value attribute
    } else {
        cell.value = "";
    }
}

export { createBoard }
