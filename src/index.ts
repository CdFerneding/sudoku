import { checkGrid } from "./CheckingGrid/checkingGrid";
import { createBoard } from "./ManagingGrid/creatingGrid";
import { clearBoard } from "./ManagingGrid/clearingGrid";
import { undoStep } from "./ManagingGrid/undo";
import * as RandomGrid from "./Repository/gettingRandomGrid";
// import { getCurrentGrid } from "./Getter/getGrid";

// debugger;

//--------------------------------------------buttons-------------------------------------------------------------------

const clearButton = document.getElementById(`clear`);
if(clearButton !== null) clearButton.addEventListener(`click`, clearBoard);
else alert(`we've got a problem with the check button :/`);

const checkerButton = document.getElementById("check");
if(checkerButton !== null) checkerButton.addEventListener("click", checkGrid);
else alert(`we've got a problem with the check button`);

const undoButton = document.getElementById(`undo`);
if(undoButton !== null) undoButton.addEventListener(`click`, undoStep);
else alert(`we've got a problem with the undo button`);

//-------------------------------------------executing------------------------------------------------------------------

// createBoard(RandomGrid.getRandomHardGrid());
// createBoard(RandomGrid.getRandomMediumGrid());
createBoard(RandomGrid.getRandomEasyGrid());