import { PDFDocument, PageSizes, rgb } from "pdf-lib";
import { getCurrentGrid } from "../ManagingGrid/getGrid";

const generateSudokuPDF = async () => {
    const gridData = getCurrentGrid(); // Get the current grid values

    if (!gridData) {
        console.log("Failed to retrieve grid data from the DOM");
        return null;
    }

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage(PageSizes.A4);
    const { width, height} = page.getSize();

    // set title
    const titleText = 'Sudoku Spectrum';
    page.drawText(titleText, {
        x: 50,
        y: height -50,
        size: 30,
    });

    // set footnote
    const footnoteText = 'from a website by Conrad Ferneding';
    page.drawText(footnoteText, {
        x: 50,
        y: 30,
        size: 10,
    });

    // Set font and font size
    const font = await pdfDoc.embedFont("Helvetica");
    const fontSize = 24;

    // Define grid properties
    const gridX = 50;
    const gridY = page.getHeight() - 100;
    const cellSize = 40;

    // Draw grid lines
    for (let i = 0; i <= 9; i++) {
        const x = gridX + i * cellSize;
        const y1 = gridY;
        const y2 = gridY - 9 * cellSize;

        page.drawLine({
            start: { x, y: y1 },
            end: { x, y: y2 },
            thickness: 1,
            color: rgb(0, 0, 0), // Convert to an array of numbers
        });

        if (i % 3 === 0) {
            page.drawLine({
                start: { x, y: y1 },
                end: { x, y: y2 },
                thickness: 3,
                color: rgb(0, 0, 0), // Convert to an array of numbers
            });
        }
    }

    for (let i = 0; i <= 9; i++) {
        const y = gridY - i * cellSize;
        const x1 = gridX;
        const x2 = gridX + 9 * cellSize;

        page.drawLine({
            start: { x: x1, y },
            end: { x: x2, y },
            thickness: 1,
            color: rgb(0, 0, 0), // Convert to an array of numbers
        });

        if (i % 3 === 0) {
            page.drawLine({
                start: { x: x1, y },
                end: { x: x2, y },
                thickness: 3,
                color: rgb(0, 0, 0), // Convert to an array of numbers
            });
        }
    }

    // Fill in grid values
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const value = gridData[row][col];
            const textX = gridX + col * cellSize + cellSize / 2 - fontSize / 3;
            const textY = gridY - row * cellSize - cellSize / 2 - fontSize / 2;

            let valueAsString: string;
            if(value === 0) valueAsString = '';
            else valueAsString = value.toString();
             
            page.drawText(valueAsString, { x: textX, y: textY, font, size: fontSize });
        }
    }

    const pdfBytes = await pdfDoc.save();

    // blob object that contains the pdf data   
    const blob = new Blob([pdfBytes], { type: "application/pdf" });

    // Create a download link and trigger the click event
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sudoku.pdf";
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(link.href);
};

export { generateSudokuPDF }
