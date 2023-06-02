class Cell {
	private row: number;
	private column: number;
	private box: number;
	private value: number;
	private possibleValues: number[];

	constructor(row: number = null, column: number = null, possiblesValues: number[] = null, value: number = 0) {
		this.row = row;
		this.column = column;
		// boxNumber = boxRow * 3 + boxColumn
		if (row === null || column === null) this.box = null;
		else this.box = Math.floor(this.row / 3) * 3 + Math.floor(this.column / 3);
		this.value = value;
		this.possibleValues = possiblesValues;
	}


	public getRow() { return this.row }
	public getColumn() { return this.column }
	public getBox() { return this.box }
	public getPossibleValues(): number[] { return this.possibleValues }
	public getValue() { return this.value; }

	public setValue(value: number) { this.value = value }
	public setPossibleValues(possiblesValues: number[]) { this.possibleValues = possiblesValues }

	public clone(): Cell {
		const copiedCell = new Cell(this.row, this.column, [...this.possibleValues], this.value);
		return copiedCell;
	}

	public removePossibleValue(value: number) {
		const index = this.possibleValues.indexOf(value);
		if (index > -1) {
			this.possibleValues.splice(index, 1);
		}
	}

	public isEmpty(): boolean {
		return this.value === 0 || this.value === null;
	}

	// public includesPossibility(value: number): boolean {
	// 	return this.possibleValues.includes(value);
	// }
}

export { Cell }
