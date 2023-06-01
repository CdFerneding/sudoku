class Cell {
	private row: number;
	private column: number;
	private box: number;
	private possibleValues: number[];

	constructor(row: number = null, column: number = null, possiblesValues: number[] = null) {
		this.row = row;
		this.column = column;
		// boxNumber = boxRow * 3 + boxColumn
		if(row === null || column === null) this.box = null;
		else this.box = Math.floor(this.row / 3) * 3 + Math.floor(this.column / 3);
		this.possibleValues = possiblesValues;
	}


	public getRow() { return this.row }
	public getColumn() { return this.column }
	public getBox() { return this.box }
	public getPossibleValues(): number[] { return this.possibleValues }
	public setPossibleValues(possiblesValues: number[]) { this.possibleValues = possiblesValues }

	public clone(): Cell {
		const copiedCell = new Cell(this.row, this.column, [...this.possibleValues]);
		return copiedCell;
	  }
}

export { Cell }
