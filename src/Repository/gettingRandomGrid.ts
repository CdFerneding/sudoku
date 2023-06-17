import { errorMonitor } from "events";
import * as EasyGrids from "./Grids/gridsEasy";
import * as HardGrids from "./Grids/gridsHard";
import * as MediumGrids from "./Grids/gridsMedium";

/**
 * note: using Bracket Notation to Access the Grid Repos respectively
 * e.g: "EasyGrids[randGridName]"" is equivalent to:
 * "EasyGrids.easyGrid1", if randGridName is "easyGrid1"
 */

const getRandomEasyGrid = (): number[][] => {
    const randNum = Math.floor(Math.random() * 100 % EasyGrids.numOfEasyGrids) + 1;
    const randGridName = `easyGrid${randNum}`;
    const randGrid = EasyGrids[randGridName];
    return randGrid;
}

const getRandomMediumGrid = (): number[][] => {
    const randNum = Math.floor(Math.random() * 100 % MediumGrids.numOfMediumGrids) + 1;
    const randGridName = `mediumGrid${randNum}`;
    const randGrid = MediumGrids[randGridName];
    return randGrid;
}

const getRandomHardGrid = (): number[][] => {
    const randNum = Math.floor(Math.random() * 100 % HardGrids.numOfHardrids) + 1;
    const randGridName = `hardGrid${randNum}`;
    const randGrid = HardGrids[randGridName];
    return randGrid;
}

export { 
    getRandomEasyGrid, 
    getRandomMediumGrid, 
    getRandomHardGrid 
};