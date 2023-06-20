/**
 * undo is implemented by a stack that will be pushed (Koordinates, Number) 
 * when a number gets added to the grid
 * the stack will be popped when: the undo button is pressed
 * --> the stack must be global of some kind
 */

interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): T | number;
}

abstract class Collection<T> {
    protected storage: T[] = [];

    size(): number {
        return this.storage.length;
    }
    setStorage(storage) {
        this.storage = storage;
    }
    abstract isFull(): boolean;
}

class StackCollection<T> extends Collection<T> implements IStack<T> {
    constructor(private capacity: number = Infinity) {
        super();
    }

    push(item: T) {
        if (this.isFull()) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    // Implementation of the abstract method
    isFull(): boolean {
        return this.capacity === this.size();
    }
}

/**
 * a Stack Collection filled with a 2 dim number Array:
 * e.g: in the grid the cell in row 3, column 5 gets updated to 7:
 * stackForUndo.push([3,5,0]) --> in the creatingGrid.addNumber()
 * 0 says in this case, that one step before the cell was not filled
 * If the undo button is pressed the innerText html of the cell in row 3, column 5 will be set to zero.
 * ...and: stackForUndo.pop() --> in the creatingGrid.addNumber()
 */
const undoStack = new StackCollection<number[]>();

const undoStep = (): string => {
    if (undoStack.size() === 0) {
      const str = `the undoStack is not yet built`;
      alert(str);
      return str;
    }
  
    const arr = undoStack.pop();
  
    if (arr.length !== 3) {
      const str = `something went wrong with fetching an undoStack-element`;
      alert(str);
      return str;
    }
  
    const cell = document.querySelector(`[row="${arr[0]}"][column="${arr[1]}"]`) as HTMLInputElement;
    if (arr[2] !== 0) {
      cell.value = arr[2].toString();
    } else {
      cell.value = "";
    }
  
    console.log(`undid row ${arr[0] + 1} column ${arr[1] + 1} from ${cell.value} to ${arr[2]}`);
    return `good work mate`;
  };
  

export { undoStack, undoStep }
