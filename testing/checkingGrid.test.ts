import { Grid } from "../src/Entities/Grid";

// Mock getCurrentGrid() to return a correct grid
const getCurrentGrid = jest.fn().mockReturnValue([
    [8, 5, 4, 7, 3, 1, 2, 6, 9],
    [3, 6, 9, 4, 2, 8, 5, 7, 1],
    [2, 1, 7, 9, 5, 6, 3, 4, 8],
    [7, 9, 3, 1, 4, 5, 6, 8, 2],
    [4, 2, 6, 3, 8, 9, 7, 1, 5],
    [1, 8, 5, 2, 6, 7, 9, 3, 4],
    [5, 3, 8, 6, 1, 2, 4, 9, 7],
    [6, 7, 1, 5, 9, 4, 8, 2, 3],
    [9, 4, 2, 8, 7, 3, 1, 5, 6]
]);

// Create a Grid instance with the mocked grid
const correctGrid: Grid = new Grid(getCurrentGrid());

describe("checking Grid", () => {
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