import Cell from "./Cell/Cell.js";
import World from "./world/world.js";

const board = new World();

const cell = new Cell(true);
board.initBoard(4, true);

console.log(initBoard);
