import { findSingle } from "./hiddenSingle";


class Cell {
    private row: number;
    private column: number;
    private box: number;
    private possibleValues: number[];

    constructor(row: number, column: number, possiblesValues: number[]) {
        this.row = row;
        this.column = column;
        // boxNumber = boxRow * 3 + boxColumn
        this.box = Math.floor(this.row / 3) * 3 + Math.floor(this.column / 3);
        this.possibleValues = possiblesValues;
    }
    public getRow() {return this.row}
    public getColumn() {return this.column}
    public getBox() {return this.box}
    public getPossibleValues() {return this.possibleValues}
  }


/**
 * is called by ../ManagingGrid/solve.ts
 * @param withGrid 
 * @returns Cell[] 
 */
const possibles = (withGrid: number[][]): Cell[] => {
    let allFreeCells = getAllNumbers(withGrid);
    console.log(allFreeCells);
    
    return;
}

/**
 * is called by /possibles
 * @param withGrid 
 * @returns For each cell === "" [[row, column, [arrayOfNumbers1-9]]]
 */
  const getAllNumbers = (withGrid: number[][]): Cell[] => {
    console.log('getAllNumbers got called');
    let freeCells: Cell[] = [];
    for (let i = 0; i <= 8; i++) {
      for (let j = 0; j <= 8; j++) {
        if (withGrid[i][j] === 0) {
          const cell = new Cell(i,j,[1,2,3,4,5,6,7,8,9]);
          freeCells.push(cell);
        }
      }
    }
    return freeCells;
  };
  
  

export { possibles };