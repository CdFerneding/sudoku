
// getting the current Grid out of DOM
const getCurrentGrid = (): number[][] => {
    let grid: number[][] = [];
    for(let i = 0; i < 9; i++) {
        grid[i] = new Array(9).fill(null);
    }
    const cells = document.querySelectorAll('.cell');
    if(cells === null || cells === undefined) return null;
    for(let i = 0; i <= 8; i++) {
        for(let j = 0; j <= 8; j++) {
            const temp = cells[i*9+j]; // mapps the 81 cells to the 2 dim array
            if(!(temp instanceof HTMLElement)) return null;
            if(!temp) return null; // checking if temp is falsy
            const tempNum = temp.innerText;
            grid[i][j] = Number(tempNum); // return '0' when 'tempNum = null'!
        }
    }
    return grid;
}

export { getCurrentGrid }