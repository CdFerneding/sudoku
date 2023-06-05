import { checkGrid } from "./button/checkingGrid";
import { createBoard } from "./ManagingGrid/create";
import { clearBoard } from "./button/clear";
import { undoStep } from "./button/undo";
import * as RandomGrid from "./Repository/gettingRandomGrid";
import * as Repo from "./Repository/TestingGrids/sudokuTestGrid";
import * as TestGrids from "./Repository/TestingGrids/testSolving";
import { solveGrid } from "./button/solve";
import { generateSudokuPDF } from "./button/downloadGrid";
// import { getCurrentGrid } from "./Getter/getGrid";

// debugger; 
// lint; zod; prettier libs 

//--------------------------------------------buttons-------------------------------------------------------------------

const clearButton = document.getElementById(`clear`);
if(clearButton !== null) clearButton.addEventListener(`click`, clearBoard);
else alert(`we've got a problem with the check button :/`);

const checkerButton = document.getElementById("check");
if(checkerButton !== null) checkerButton.addEventListener("click", checkGrid);
else alert(`we've got a problem with the check button`);

window.addEventListener("keydown", function(e) {
    if (e.key === "z" && e.ctrlKey === true) {
        e.preventDefault();
        // Execute Undo function when strg+u is pressed
        undoStep();
    }
});

const undoButton = document.getElementById(`undo`);
if(undoButton !== null) {
    undoButton.addEventListener("click", undoStep);     
} else alert(`we've got a problem with the undo button`);

const solveButton = document.getElementById('solve');
if(solveButton !== null || solveButton !== undefined) {
    solveButton.addEventListener('click', solveGrid);
} else alert(`we've got a problem with the undo button`);

const downloadButton = document.getElementById(`download`);
if(downloadButton !== null) {
    downloadButton.addEventListener("click", generateSudokuPDF);
} else alert(`we've got a problem with downloading the grid`);

//-------------------------------------------executing------------------------------------------------------------------

// createBoard(RandomGrid.getRandomHardGrid());
// createBoard(RandomGrid.getRandomMediumGrid());
// createBoard(RandomGrid.getRandomEasyGrid());
createBoard(RandomGrid.getRandomMediumGrid());
