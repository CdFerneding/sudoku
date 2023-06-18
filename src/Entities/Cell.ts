class Cell {
	private row: number;
	private column: number;
	private box: number;
	private value: number;
	private possibleValues: number[];

	constructor(row: number = null, column: number = null, possiblesValues: number[] = [], value: number = 0) {
		this.row = row;
		this.column = column;
		// boxNumber = boxRow + boxColumn/3
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

	public copy(): Cell {
		const copiedCell = new Cell();
		copiedCell.row = this.row;
		copiedCell.column = this.column;
		copiedCell.box = this.box;
		copiedCell.value = this.value;
		copiedCell.possibleValues = [...this.possibleValues];
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

	public equals(otherCell: Cell): boolean {
		return (
			this.row === otherCell.getRow() &&
			this.column === otherCell.getColumn() &&
			this.box === otherCell.getBox() &&
			this.value === otherCell.getValue() &&
			arraysEqual(this.possibleValues, otherCell.getPossibleValues())
		);
	}

	// public includesPossibility(value: number): boolean {
	// 	return this.possibleValues.includes(value);
	// }
}

// Helper function to compare arrays for equality
function arraysEqual(arr1: any[], arr2: any[]): boolean {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

export { Cell }
