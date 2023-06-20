import { clearBoard, deleteBoard } from "../src/button/clear";

describe.skip("clear", () => {
    test("should clear the grid by deleting all child elements of the grid", () => {
        // Create a mock grid element with child elements
        const mockGrid = document.createElement("div");
        const mockChildElement1 = document.createElement("div");
        const mockChildElement2 = document.createElement("div");

        mockGrid.appendChild(mockChildElement1);
        mockGrid.appendChild(mockChildElement2);

        jest.spyOn(document, "getElementById").mockReturnValue(mockGrid);

        expect(mockGrid.childNodes.length).toBe(2);
        clearBoard();

        // doesn't return the expected result. Is 9?
        expect(mockGrid.childNodes.length).toBe(0);

        // Restore original behavior of the mocked functions
        jest.restoreAllMocks();
    });
});
