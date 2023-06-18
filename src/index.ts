import { createBoard } from "./ManagingGrid/create";
import { easyGrid1 } from "./Repository/Grids/gridsEasy";
import { testGrid } from "./Repository/TestingGrids/sudokuTestGrid";
import { testHiddenPair } from "./Repository/TestingGrids/testHiddenPair";
import { testSudokuRules, testSudokuRulesData } from "./Repository/TestingGrids/testSudokuRules";
import * as RandomGrid from "./Repository/gettingRandomGrid";

// debugger; 
// lint; zod; prettier libs 

//--------------------------------------------buttons-------------------------------------------------------------------
// executing the buttons using dynamic imports to load modules on demand 
// therefore improving the initial loading time
// however prolonging the individuall loading time


const clearButton = document.getElementById(`clear`);
if(clearButton !== null) {
    clearButton.addEventListener(`click`, async () => {
        try {
            const { clearBoard } = await import("./button/clear");
            clearBoard();
        } catch (error) {
            console.log("Error while loading clearBoard:", error);
        }
    });
}
else alert(`we've got a problem with the clear button :/`);

const checkerButton = document.getElementById("check");
if(checkerButton !== null) {checkerButton.addEventListener("click", async () => {
    try {
        const { checkGrid } = await import("./button/checkingGrid");
        checkGrid();
    } catch (error) {
        console.log("Error while loading checkGrid:", error);
    }
});
}else alert(`we've got a problem with the check button`);

window.addEventListener("keydown", function(e) {
    if (e.key === "z" && e.ctrlKey === true) {
        e.preventDefault();
        // Execute Undo function when strg+u is pressed
        async () => {
            try {
                const { undoStep } = await import("./button/undo");
                undoStep();
            } catch (error) {
                console.log("Error while loading undoStep:", error);
            }
        }
    }
});

// undo Button for taking a step back (when the player has inputted the number himself)
const undoButton = document.getElementById(`undo`);
if(undoButton !== null) {
    undoButton.addEventListener("click", async () => {
        try {
            const { undoStep } = await import("./button/undo");
            undoStep();
        } catch (error) {
            console.log("Error while loading undoStep:", error);
        }
    });     
} else alert(`we've got a problem with the undo button`);

// solve Button for solving the currently displayed grid 
const solveButton = document.getElementById('solve');
if(solveButton !== null || solveButton !== undefined) {
    solveButton.addEventListener('click', async () => {
        try {
            const { solveGrid } = await import("./button/solve");
            solveGrid();
        } catch (error) {
            console.log("Error while loading solveGrid:", error);
        }
    });
} else alert(`we've got a problem with the undo button`);

// download Button for generating a pdf document
const downloadButton = document.getElementById(`download`);
if (downloadButton !== null) {
    downloadButton.addEventListener("click", async () => {
      try {
        const { generateSudokuPDF } = await import("./button/downloadGrid");
        generateSudokuPDF();
      } catch (error) {
        console.log("Error loading generateSudokuPDF:", error);
      }
    });
  } else {
    alert("We've got a problem with downloading the grid");
  }

//-------------------------------------------executing------------------------------------------------------------------

// createBoard(RandomGrid.getRandomHardGrid());
// createBoard(RandomGrid.getRandomMediumGrid());
// createBoard(RandomGrid.getRandomEasyGrid());
createBoard(RandomGrid.getRandomMediumGrid());
