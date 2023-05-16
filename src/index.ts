import { checkGrid } from "./CheckingGrid/checkingGrid";
import { createBoard } from "./ManagingGrid/create";
import { clearBoard } from "./ManagingGrid/clear";
import { undoStep } from "./ManagingGrid/undo";
import * as RandomGrid from "./Repository/gettingRandomGrid";
import * as Repo from "./Repository/sudokuTestGrid"
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
    
      
}
else alert(`we've got a problem with the undo button`);

//-------------------------------------------executing------------------------------------------------------------------

// createBoard(RandomGrid.getRandomHardGrid());
// createBoard(RandomGrid.getRandomMediumGrid());
// createBoard(RandomGrid.getRandomEasyGrid());
createBoard(Repo.testGrid);