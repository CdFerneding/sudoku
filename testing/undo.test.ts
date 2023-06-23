import { undoStack, undoStep } from '../src/button/undo'; // Replace 'your-file' with the correct file path

describe("undo", () => {
    beforeEach(() => {
        // Clear the undoStack before each test
        undoStack.setStorage([]);
    });

    test("should undo the last step and update the cell value", () => {
        // Simulate adding a step to the undo stack
        undoStack.push([0, 0, 5]);

        // Mock the querySelector method to return a mocked cell element
        document.querySelector = jest.fn().mockReturnValue({
            value: '5', // Set the previous value here
            setAttribute: jest.fn(),
        }) as unknown as (selectors: string) => HTMLInputElement;

        // Call the undoStep function
        const result = undoStep();

        // Assert that the cell value is updated to the previous value
        expect(document.querySelector).toHaveBeenCalledWith('[row="0"][column="0"]');
        expect((document.querySelector('[row="0"][column="0"]') as HTMLInputElement).value).toBe('5');

        // Assert the returned message
        expect(result).toBe('good work mate');
    });

    test("should display an alert message if undoStack is empty", () => {
        // Ensure the undoStack is empty
        undoStack.pop();
      
        window.alert = jest.fn();
        const result = undoStep();
      
        expect(window.alert).toHaveBeenCalledWith('the undoStack is not yet built');
        expect(result).toBe('the undoStack is not yet built');
      });
      

    test("should display an alert message if the undoStack element is not valid", () => {
        // Simulate adding an invalid step to the undo stack
        undoStack.push([0, 0]);
        window.alert = jest.fn();
        const result = undoStep();

        expect(window.alert).toHaveBeenCalledWith('something went wrong with fetching an undoStack-element');
        expect(result).toBe('something went wrong with fetching an undoStack-element');
    });
});
