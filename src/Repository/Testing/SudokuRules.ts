// naked Single at (0,8) 
import { Cell } from "../../Entity/Cell";
import { Grid } from "../../Entity/Grid";

const testSudokuRulesData: number[][] = [
    [0, 5, 0, 0, 3, 0, 0, 0, 0],
    [0, 6, 9, 0, 0, 0, 5, 0, 1],
    [0, 0, 7, 9, 0, 0, 0, 4, 8],

    [7, 9, 0, 1, 0, 5, 6, 8, 2],
    [4, 2, 0, 3, 8, 9, 7, 0, 5],
    [1, 8, 0, 0, 6, 0, 0, 0, 0],

    [0, 0, 8, 0, 0, 0, 4, 0, 0],
    [0, 7, 0, 5, 0, 4, 0, 0, 0],
    [0, 0, 0, 0, 7, 3, 0, 5, 6]
];
const testSudokuRules: Grid = new Grid(testSudokuRulesData);

const cellsForCorrectSolution: Cell[] = [
    new Cell(0,0,[2,8],0), new Cell(0,1,[],5), new Cell(0,2,[1,2,4],0), new Cell(0,3,[2,4,6,7,8],0), new Cell(0,4,[],3), new Cell(0,5,[1,2,6,7,8],0), new Cell(0,6,[2,9],0), new Cell(0,7,[2,6,7,9],0), new Cell(0,8,[7,9],0),
    new Cell(1,0,[2,3,9],0), new Cell(1,1,[],6), new Cell(1,2,[],9), new Cell(1,3,[2,4,7,8],0), new Cell(1,4,[2,4],0), new Cell(1,5,[2,7,8],0), new Cell(1,6,[],5), new Cell(1,7,[2,3,7],0), new Cell(1,8,[],1),
    new Cell(2,0,[2,3],0), new Cell(2,1,[1,3],0), new Cell(2,2,[],7), new Cell(2,3,[],9), new Cell(2,4,[1,2,5],0), new Cell(2,5,[1,2,6],0), new Cell(2,6,[2,3],0), new Cell(2,7,[],4), new Cell(2,8,[],8),
    
    new Cell(3,0,[],7), new Cell(3,1,[],9), new Cell(3,2,[3],0), new Cell(3,3,[],1), new Cell(3,4,[4],0), new Cell(3,5,[],5), new Cell(3,6,[],6), new Cell(3,7,[],8), new Cell(3,8,[],2),
    new Cell(4,0,[],4), new Cell(4,1,[],2), new Cell(4,2,[6],0), new Cell(4,3,[],3), new Cell(4,4,[],8), new Cell(4,5,[],9), new Cell(4,6,[],7), new Cell(4,7,[1],0), new Cell(4,8,[],5),
    new Cell(5,0,[],1), new Cell(5,1,[],8), new Cell(5,2,[3,5],0), new Cell(5,3,[2,4,7],0), new Cell(5,4,[],6), new Cell(5,5,[2,7],0), new Cell(5,6,[3,9],0), new Cell(5,7,[3,9],0), new Cell(5,8,[3,4,9],0),

    new Cell(6,0,[2,3,5,6,9],0), new Cell(6,1,[1,3],0), new Cell(6,2,[],8), new Cell(6,3,[2,6],0), new Cell(6,4,[1,2,9],0), new Cell(6,5,[1,2,6],0), new Cell(6,6,[],4), new Cell(6,7,[1,2,3,7,9],0), new Cell(6,8,[3,7,9],0),
    new Cell(7,0,[2,3,6,9],0), new Cell(7,1,[],7), new Cell(7,2,[1,2,3,6],0), new Cell(7,3,[],5), new Cell(7,4,[1,2,9],0), new Cell(7,5,[],4), new Cell(7,6,[1,2,3,8,9],0), new Cell(7,7,[1,2,3,9],0), new Cell(7,8,[3,9],0),
    new Cell(8,0,[2,9],0), new Cell(8,1,[1,4],0), new Cell(8,2,[1,2,4],0), new Cell(8,3,[2,8]), new Cell(8,4,[],7), new Cell(8,5,[],3), new Cell(8,6,[1,2,8,9],0), new Cell(8,7,[],5), new Cell(8,8,[],6),
];

const testSudokuRulesCorrectSolution: Grid = new Grid([], cellsForCorrectSolution);

export { testSudokuRules, testSudokuRulesCorrectSolution, testSudokuRulesData, cellsForCorrectSolution };
