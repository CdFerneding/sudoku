import { Cell } from "./Cell";

class Grid {
    cells: Cell[];

    constructor(gridData: number[][]) {
        this.cells = [];

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const value = gridData[row][col];
                const cell = new Cell(row, col, value !== 0 ? [] : [1, 2, 3, 4, 5, 6, 7, 8, 9], value !== 0 ? value : 0);
                this.cells.push(cell);
            }
        }
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

}

export { Grid }