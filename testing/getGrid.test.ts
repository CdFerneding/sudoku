import { getCurrentGrid } from "../src/ManagingGrid/getGrid";
import { easyGrid1 } from "../src/Repository/Grids/gridsEasy";


describe("get Grid", () => {
    
    beforeEach(() => {
        const { JSDOM } = require("jsdom");
        const dom = new JSDOM(`
        <body>
            <div class="jumbotron text-center">
                <h2>Sudoku Spectrum</h2>
                <div id="grid">
                <div class="row" row="0"><div row="0" column="0" class="cell">8</div><div row="0" column="1" class="cell">2</div><div row="0" column="2" class="cell rightline">7</div><div row="0" column="3" class="cell">3</div><div row="0" column="4" class="cell" type="button"></div><div row="0" column="5" class="cell rightline" type="button"></div><div row="0" column="6" class="cell" type="button"></div><div row="0" column="7" class="cell">4</div><div row="0" column="8" class="cell">9</div></div>
                <div class="row" row="1"><div row="1" column="0" class="cell">6</div><div row="1" column="1" class="cell">4</div><div row="1" column="2" class="cell rightline">9</div><div row="1" column="3" class="cell" type="button"></div><div row="1" column="4" class="cell">5</div><div row="1" column="5" class="cell rightline" type="button"></div><div row="1" column="6" class="cell">8</div><div row="1" column="7" class="cell">3</div><div row="1" column="8" class="cell" type="button"></div></div>
                <div class="row underline" row="2"><div row="2" column="0" class="cell" type="button"></div><div row="2" column="1" class="cell" type="button"></div><div row="2" column="2" class="cell rightline" type="button"></div><div row="2" column="3" class="cell">4</div><div row="2" column="4" class="cell">8</div><div row="2" column="5" class="cell rightline">9</div><div row="2" column="6" class="cell">6</div><div row="2" column="7" class="cell" type="button"></div><div row="2" column="8" class="cell" type="button"></div></div>
                <div class="row" row="3"><div row="3" column="0" class="cell" type="button"></div><div row="3" column="1" class="cell" type="button"></div><div row="3" column="2" class="cell rightline" type="button"></div><div row="3" column="3" class="cell">6</div><div row="3" column="4" class="cell" type="button"></div><div row="3" column="5" class="cell rightline">1</div><div row="3" column="6" class="cell">2</div><div row="3" column="7" class="cell" type="button"></div><div row="3" column="8" class="cell" type="button"></div></div>
                <div class="row" row="4"><div row="4" column="0" class="cell">2</div><div row="4" column="1" class="cell">1</div><div row="4" column="2" class="cell rightline" type="button"></div><div row="4" column="3" class="cell" type="button"></div><div row="4" column="4" class="cell" type="button"></div><div row="4" column="5" class="cell rightline">7</div><div row="4" column="6" class="cell" type="button"></div><div row="4" column="7" class="cell" type="button"></div><div row="4" column="8" class="cell">6</div></div>
                <div class="row underline" row="5"><div row="5" column="0" class="cell">4</div><div row="5" column="1" class="cell">9</div><div row="5" column="2" class="cell rightline" type="button"></div><div row="5" column="3" class="cell" type="button"></div><div row="5" column="4" class="cell" type="button"></div><div row="5" column="5" class="cell rightline" type="button"></div><div row="5" column="6" class="cell">1</div><div row="5" column="7" class="cell">5</div><div row="5" column="8" class="cell">7</div></div>
                <div class="row" row="6"><div row="6" column="0" class="cell">1</div><div row="6" column="1" class="cell">8</div><div row="6" column="2" class="cell rightline" type="button"></div><div row="6" column="3" class="cell" type="button"></div><div row="6" column="4" class="cell">2</div><div row="6" column="5" class="cell rightline">4</div><div row="6" column="6" class="cell">7</div><div row="6" column="7" class="cell" type="button"></div><div row="6" column="8" class="cell" type="button"></div></div>
                <div class="row" row="7"><div row="7" column="0" class="cell" type="button"></div><div row="7" column="1" class="cell" type="button"></div><div row="7" column="2" class="cell rightline" type="button"></div><div row="7" column="3" class="cell" type="button"></div><div row="7" column="4" class="cell">7</div><div row="7" column="5" class="cell rightline">3</div><div row="7" column="6" class="cell" type="button"></div><div row="7" column="7" class="cell" type="button"></div><div row="7" column="8" class="cell" type="button"></div></div>
                <div class="row" row="8"><div row="8" column="0" class="cell">3</div><div row="8" column="1" class="cell" type="button"></div><div row="8" column="2" class="cell rightline">4</div><div row="8" column="3" class="cell">1</div><div row="8" column="4" class="cell" type="button"></div><div row="8" column="5" class="cell rightline" type="button"></div><div row="8" column="6" class="cell" type="button"></div><div row="8" column="7" class="cell" type="button"></div><div row="8" column="8" class="cell" type="button"></div></div></div>
                <button id="undo" type="button" class="btn btn-success btn-lg">undo (Ctrl+Z)</button>
                <button id="check" type="button" class="btn btn-success btn-lg">check</button>
                <button id="clear" type="button" class="btn btn-success btn-lg">clear</button>
                <button id="solve" type="button" class="btn btn-success btn-lg">solve</button>
                <button id="download" type="button" class="btn btn-success btn-lg">download</button>
            </div>
        </body>
        `);
        const { window } = dom;
        const { document } = window;
        global.document = document;
    });
    test("should return the expected gridData", () => {
        const DOMData: number[][] = easyGrid1;
        const dataByGetGrid: number[][] = getCurrentGrid();
        expect(DOMData).toBe(dataByGetGrid);
    });
});