import { Cell } from "./Cell";

class Grid {
    cells: Cell[];

    constructor(gridData: number[][], cells?: Cell[]) {
        this.cells = [];

        if (cells) {
            const otherCells = cells;
            for (const otherCell of otherCells) {
                const copiedCell = otherCell.copy();
                this.cells.push(copiedCell);
            }
        } else {
            for (let row = 0; row < 9; row++) {
                for (let col = 0; col < 9; col++) {
                    const value = gridData[row][col];
                    const cell = new Cell(row, col, value !== 0 ? [] : [1, 2, 3, 4, 5, 6, 7, 8, 9], value !== 0 ? value : 0);
                    this.cells.push(cell);
                }
            }
        }
    }

    public copy(): Grid {
        const copiedGridData = this.toNumberArray();
        return new Grid(copiedGridData, this.cells);
    }

    public equals(otherGrid: Grid): boolean {
        const thisCells = this.getCells();
        const otherCells = otherGrid.getCells();

        for (let i = 0; i < thisCells.length; i++) {
            if (!thisCells[i].equals(otherCells[i])) {
                return false;
            }
        }

        return true;
    }


    public getCells() { return this.cells; }

    public getCell(rowIndex: number, columnIndex: number) {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (r === rowIndex && c === columnIndex) {
                    return this.cells[r * 9 + c];
                }
            }
        }
    }

    /**
     * return all 9 cells of a specific row of a grid
     * @param row 
     */
    public getRow(rowIndex: number): Cell[] {
        let cellsOfRow: Cell[] = [];
        this.cells.forEach((cell) => {
            if(cell.getRow() === rowIndex){
                cellsOfRow.push(cell);
            }
        });
        return cellsOfRow;
    }

    public getColumn(columnIndex: number): Cell[] {
        let cellsOfColumn: Cell[] = [];
        this.cells.forEach((cell) => {
            if(cell.getRow() === columnIndex){
                cellsOfColumn.push(cell);
            }
        });
        return cellsOfColumn;
    }

    public getBox(boxIndex: number): Cell[] {
        let cellsOfBox: Cell[] = [];
        this.cells.forEach((cell) => {
            if(cell.getBox() === boxIndex){
                cellsOfBox.push(cell);
            }
        });
        return cellsOfBox;
    }

    public toNumberArray(): number[][] {
        const numArray: number[][] = [];

        for (let row = 0; row < 9; row++) {
            const rowData: number[] = [];
            for (let col = 0; col < 9; col++) {
                const cell = this.getCell(row, col);
                rowData.push(cell.getValue());
            }
            numArray.push(rowData);
        }

        return numArray;
    }

    //----------------------------checking start----------------------------
    public isFull(): boolean {
        return this.cells.every((cell) => cell.getValue() !== 0);
    }

    public checkRowsAndColumns(): boolean {
        const grid: number[][] = this.toNumberArray();
        let counterRows = new Array(9).fill(0);
        let counterColumns = new Array(9).fill(0);
        for (let i = 0; i < 9; i++) {
            counterRows.fill(0);
            counterColumns.fill(0);
            for (let j = 0; j < 9; j++) {
                const numRow = grid[i][j];
                const numCol = grid[j][i];
                counterRows[numRow - 1]++;
                counterColumns[numCol - 1]++;
                if (counterRows[numRow - 1] != 1) return false;
                if (counterColumns[numCol - 1] != 1) return false;
            }
        }
        return true;
    }

    public checkBoxes(): boolean {
        const grid: Grid = new Grid([], this.cells);
        const valuesOfBoxes: number[][] = [[],[],[],[],[],[],[],[],[]];
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const boxNumber: number = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                valuesOfBoxes[boxNumber].push(grid.getCell(r,c).getValue());
            }
        }
        for (let box = 0; box < 9; box++) {
            const sum = valuesOfBoxes[box].reduce((acc, curr) => acc + curr, 0);
            if(sum !== 45) return false;
            else return true;
        }
    }
}

export { Grid }
