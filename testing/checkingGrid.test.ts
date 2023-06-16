import { checkGrid } from "../src/button/checkingGrid";

describe("checkGrid", () => {
    test("should return 'something went wrong' when grid-fetching fails", () => {
        // Mock getCurrentGrid() to return null or undefined
        // Call checkGrid() and assert that it returns the expected output
      });
  
    test("should return 'the grid is not fully filled' when the grid is not fully filled", () => {
      // Mock getCurrentGrid() to return a partially filled grid
      // Call checkGrid() and assert that it returns the expected output
    });
  
    test("should return 'the grid is incorrect' when rows/columns are incorrect", () => {
      // Mock getCurrentGrid() to return a grid with incorrect rows/columns
      // Call checkGrid() and assert that it returns the expected output
    });
  
    test("should return 'the grid is correct' when the grid is correct", () => {
      // Mock getCurrentGrid() to return a correct grid
      // Call checkGrid() and assert that it returns the expected output
    });
  });
  
  describe("checkRowsAndColumns", () => {
    // Write test cases for checkRowsAndColumns() function
  });
  