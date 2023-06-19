const getCurrentGrid = (): number[][] => {
    let grid: number[][] = [];
    for (let i = 0; i < 9; i++) {
      grid[i] = new Array(9).fill(null);
    }
    const cells = document.querySelectorAll('.cell');
    if (cells === null || cells === undefined) return null;
    for (let i = 0; i <= 8; i++) {
      for (let j = 0; j <= 8; j++) {
        const temp = cells[i * 9 + j];
        if (!(temp instanceof HTMLInputElement)) return null;
        if (!temp) return null;
        grid[i][j] = Number(temp.value);
      }
    }
    return grid;
  }
  
  export { getCurrentGrid }