import pieces from "./misc/pieces.js";

const PIECE_DEFAULT_POSITION_X = 3;
const PIECE_DEFAULT_POSITION_Y = -1;

export default class Piece {
  pos = {
    x: PIECE_DEFAULT_POSITION_X,
    y: PIECE_DEFAULT_POSITION_Y
  };
  type = null;
  matrix = [];
  locked = false;

  constructor() {
    this.create();
  }

  create() {
    const keys = Object.keys(pieces);
    const type = keys[keys.length * Math.random() << 0];

    this.pos = {
      x: PIECE_DEFAULT_POSITION_X,
      y: PIECE_DEFAULT_POSITION_Y
    };  
    this.type = type,
    this.matrix = pieces[type];

    return this;
  }
}