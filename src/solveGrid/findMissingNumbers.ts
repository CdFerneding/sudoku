import { applyPointingPairs } from "./pointingPair";
import { applyHiddenSingle } from "./hiddenSingle";
import { applyNakedSingle } from "./nakedSingle";
import { Cell } from "./Cell";



// Helper function to compare two arrays for equality
const arraysEqual = (a: any[], b: any[]): boolean => {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length !== b.length) return false;

	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}

	return true;
}

/**
 * is called by ../ManagingGrid/solve.ts
 * only implements algorithm (things related to the grid in the client HTML are managed by 'solve.ts')
 * @param grid 
 * @returns number[][]
 */
const findNumbers = (grid: number[][]): number[][] => {
	let allFreeCells: Cell[] = findEmptyCells(grid); // returns an array of cells that are empty

	let hasChanges: boolean; // When changes are made the while loop needs to be executed again!
	const maxIterations = 100; // preventing infinite loop (safeguard)
	let iteration = 0;

	do {
		// first iteration initiallizes all empty cells with the possible Numbers 1-9
		hasChanges = false; // Reset the flag before each iteration
		// allFreeCells = findEmptyCells(grid);

		for (let i = 0; i < allFreeCells.length; i++) {
			const cell: Cell = allFreeCells[i];
			const possibleValuesBeforeSearch = cell.getPossibleValues();
			const possibleValuesAfterSearch = getPossibleValuesForCell(cell.clone(), grid);
			// create a new cell Element or else the algorithm works on a reference!
			// thereby possible Values before/after would always be the same

			if (possibleValuesAfterSearch.length === 1) {
				const value = possibleValuesAfterSearch[0];
				const row = cell.getRow();
				const column = cell.getColumn();
				grid[row][column] = value; // Update the value in the grid
				allFreeCells.splice(i, 1);
				i--; // since one element is deleted we would skip a free cell if not reducing i by one
				hasChanges = true; // Set the flag if a change was made
			// if we added a value to the grid we can disregard it's possibilities since they are no longer relevant
			} else if (!arraysEqual(possibleValuesBeforeSearch, possibleValuesAfterSearch)) {
				cell.setPossibleValues(possibleValuesAfterSearch);
				hasChanges = true; // Set the flag if a change was made
			}
		}
		console.log(`${iteration}`)
		iteration++;
	} while ((allFreeCells.length > 0 && hasChanges) && iteration < maxIterations);

	return grid;
}


/**
 * this function does not care about possible Values.
 * Only used to find the emply cells
 * @param withGrid 
 * @returns For each cell === 0 --> [row, column, []]
 */
const findEmptyCells = (withGrid: number[][]): Cell[] => {
	let freeCells: Cell[] = [];

	for (let i = 0; i <= 8; i++) {
		for (let j = 0; j <= 8; j++) {
			if (withGrid[i][j] === 0) {
				const cell = new Cell(i, j, [1,2,3,4,5,6,7,8,9]);
				freeCells.push(cell);
			}
		}
	}
	return freeCells;
}

/**
 * basic Sudoku rules / 'hidden single'
 * @param cell
 * @param grid 
 * @returns possible values for a specific cell
 */
const getPossibleValuesForCell = (cell: Cell, grid: number[][]): number[] => {
	let possibleValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	if(cell.getPossibleValues().length > 1) {
		possibleValues = applyNakedSingle(cell, grid);
	}

	if(cell.getPossibleValues().length > 1) {
		possibleValues = applyHiddenSingle(cell, grid);
	}

	// if(cell.getPossibleValues().length > 1) {
	// 	possibleValues = applyPointingPairs(cell, grid);
	// }

	return possibleValues;
}

export { findNumbers };
