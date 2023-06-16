import { getCurrentGrid } from "../ManagingGrid/getGrid";

// -----------------------------------------------checking the Grid----------------------------------------------------------
// functions for the check Button

/**
 * the main checking function that will use all other function in this file (and getting the current grid)
 */
const checkGrid = (): string => {
    let output: string;
    const g = getCurrentGrid();
    if (g === null || g === undefined) {
        output = `something went wrong with fetching the grid :S`;
        alert(output);
        return output;
    }else if (gridIsFull() !== true) {
        output = `the grid is not fully filled :S`;
        alert(output);
        return output;
    }else if (checkRowsAndColumns() !== true && checkBoxes() !== true) {
        output = `the grid is incorrect :S`;
        alert(output);
        return output;
    }else {
        output = `the grid is correct :D. Well done!`;
        alert(output );
        return output
    };
}

const gridIsFull = (): boolean   => {
    const g = getCurrentGrid();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (g[i][j] == null) {
                return false;
            }
        }
    }
    return true;
}

/**
 * a lot of trouble with this one. Set the counter Array to all 0s after each row/column;
 * --> counting the occurrence of numbers in each row/column, checking if it is equal to 1
 * @returns boolean that indicates whether the sudoku grid's rows and columns are correct 
 * as per sudoku rules
 */
const checkRowsAndColumns = (): boolean => {
    const currentGrid = getCurrentGrid();
    let counterRows = new Array(9).fill(0);
    let counterColumns = new Array(9).fill(0);
    for (let i = 0; i < 9; i++) {
        counterRows.fill(0); 
        counterColumns.fill(0);
        for (let j = 0; j < 9; j++) {
            const numRow = currentGrid[i][j];
            const numCol = currentGrid[j][i];
            counterRows[numRow-1]++;
            counterColumns[numCol-1]++;
            if(counterRows[numRow-1] != 1) return false;
            if(counterColumns[numCol-1] != 1) return false;
        }
        // if even one elem of the countArrays is not equal 1 false will be returned
        // if(counterRows.some(count => count !== 9)) return false;
        // else if(counterColumns.some(count => count !== 9)) return false;
        // doesn't work for the incorrect order of numbers in the grid
    }
    return true;
}


// a little unpleasant, but as of right now I don't know what else to do :/
// @Me surely it can be solved more elegantly but "don't change a running system" :D 
const checkBoxes = (): boolean => {
    // first row of boxes:
    if (boxCheckHelper(0, 2, 0, 2) != true) return false;
    else if (boxCheckHelper(0, 2, 3, 5) != true) return false;
    else if (boxCheckHelper(0, 2, 6, 8) != true) return false;
    // second row of boxes:
    else if (boxCheckHelper(3, 5, 0, 2) != true) return false;
    else if (boxCheckHelper(3, 5, 6, 8) != true) return false;
    else if (boxCheckHelper(3, 5, 0, 2) != true) return false;
    // third row of boxes:
    else if (boxCheckHelper(5, 8, 0, 2) != true) return false;
    else if (boxCheckHelper(5, 8, 3, 5) != true) return false;
    else if (boxCheckHelper(5, 8, 5, 8) != true) return false;
    else return true
}

const boxCheckHelper = (fromRow: number, toRow: number, fromColumn: number, toColumn: number): boolean => {
    const g = getCurrentGrid();
    let counter = new Array(9).fill(0);
    // if (fromRow == null || fromRow == undefined || toRow == null || toRow == undefined
    //     || fromColumn == null || fromColumn == undefined || toColumn == null || toColumn == undefined) return false;
    for (let i = fromRow; i <= toRow; i++) {
        for (let j = fromColumn; j <= toColumn; j++) {
            const num = g[i][j];
            counter[num-1]++;
            if (counter[num-1] > 1) return false;
        }
    }
    return true;
}

export { checkGrid, checkRowsAndColumns }