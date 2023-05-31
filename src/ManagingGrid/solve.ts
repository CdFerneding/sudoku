import { getCurrentGrid } from "../Getter/getGrid";
import { possibles } from "../solveGrid/possibleNumbersForCell";

const solveGrid = () => {
    let currentGrid = getCurrentGrid();
    console.log(currentGrid);
    let possibleNumbersPerCell = possibles(currentGrid);
}

export { solveGrid }