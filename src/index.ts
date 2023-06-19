import { createBoard } from "./ManagingGrid/create";
import * as RandomGrid from "./Repository/gettingRandomGrid";

// debugger; 
// lint; zod; prettier libs 

//--------------------------------------------buttons-------------------------------------------------------------------
// executing the buttons using dynamic imports to load modules on demand 
// therefore improving the initial loading time
// however prolonging the individuall loading time

// difficulty buttons
const difficultyEasyButton = document.getElementById('difficulty-easy');
const difficultyMediumButton = document.getElementById('difficulty-medium');
const difficultyHardButton = document.getElementById('difficulty-hard');
difficultyEasyButton.addEventListener('click', createEasyGrid);
difficultyMediumButton.addEventListener('click', createMediumGrid);
difficultyHardButton.addEventListener('click', createHardGrid);

// display the current difficulty
const currentDifficulty = document.getElementById('current-difficulty');

// set visibilities (client side)
const explanationArea = document.getElementById('explanation');
const gamingArea = document.getElementById('gaming');
const difficultyArea = document.getElementById('choose-difficulty');

difficultyArea.style.display = 'block';
explanationArea.style.display = 'block';
gamingArea.style.display = 'none';

// hide Explanation button
const hideExplanationButton = document.getElementById('hide-explanation');
hideExplanationButton.addEventListener('click', hideExplanation);

function hideExplanation() {
    if (explanationArea.style.display === 'block') {
        explanationArea.style.display = 'none';
        hideExplanationButton.innerHTML = 'show explanation';
    }
    else {
        explanationArea.style.display = 'block';
        hideExplanationButton.innerHTML = 'hide explanation';
    }
}

// difficulty event funcitons

function createEasyGrid() {
    currentDifficulty.innerText = 'Easy Grid'
    // difficultyArea.style.display = 'none';
    gamingArea.style.display = 'block';
    createBoard(RandomGrid.getRandomEasyGrid());
}

function createMediumGrid() {
    currentDifficulty.innerText = 'Medium Grid'
    gamingArea.style.display = 'block';
    createBoard(RandomGrid.getRandomMediumGrid());
}

function createHardGrid() {
    currentDifficulty.innerText = 'Hard Grid'
    gamingArea.style.display = 'block';
    createBoard(RandomGrid.getRandomHardGrid());
}

// gaming buttons (at the beginning not displayed: gamingArea)
const clearButton = document.getElementById(`clear`);
if (clearButton !== null) {
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
if (checkerButton !== null) {
    checkerButton.addEventListener("click", async () => {
        try {
            const { checkGrid } = await import("./button/checkingGrid");
            checkGrid();
        } catch (error) {
            console.log("Error while loading checkGrid:", error);
        }
    });
} else alert(`we've got a problem with the check button`);

window.addEventListener("keydown", function (e) {
    if (e.key === "z" && e.ctrlKey === true) {
        e.preventDefault();
        // Execute Undo function when strg+z is pressed
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
if (undoButton !== null) {
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
if (solveButton !== null || solveButton !== undefined) {
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
