
// getting the current Grid out of DOM
const getCurrentGrid = (): string[][] => {
    let grid: string[][] = [];
    for(let i = 0; i < 9; i++) {
        grid[i] = new Array(9).fill("");
    }
    const cells = document.querySelectorAll('.cell');
    if(cells === null) return [[""]];
    for(let i = 0; i <= 8; i++) {
        for(let j = 0; j <= 8; j++) {
            const temp = cells[i*9+j]; // mapps the 81 cells to the 2 dim array
            if(!(temp instanceof HTMLElement)) return [[``]];
            if(!temp) return [[""]]; // checking if temp is falsy
            const tempNum = temp.innerText;
            grid[i][j] = tempNum;
        }
    }
    return grid;
}

export { getCurrentGrid }