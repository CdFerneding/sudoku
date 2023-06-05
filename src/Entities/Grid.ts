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

    public isFull(): boolean {
        return this.cells.every((cell) => cell.getValue() !== 0);
    }

    public toString(): string {
        let string: string = "";
      
        // Add horizontal dividers between boxes
        const boxDivider = "+---+---+---+\n";
      
        for (let row = 0; row < 9; row++) {
          if (row % 3 === 0 && row !== 0) {
            // Add horizontal dividers between boxes
            string += boxDivider;
          }
      
          for (let col = 0; col < 9; col++) {
            if (col % 3 === 0 && col !== 0) {
              // Add vertical dividers between boxes
              string += "|";
            }
      
            const cell = this.getCell(row, col);
            const value = cell.getValue();
      
            if (value === 0) {
              string += " "; // Display empty cells as spaces
            } else {
              string += value.toString();
            }
          }
      
          string += "\n";
        }
      
        return string;
      }
      

}

export { Grid }