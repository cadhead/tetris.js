import Piece from "./components/Piece.js"

const PLAYFIELD_SIZE_Y = 20;
const PLAYFIELD_SIZE_X = 10;

export default class Game {
  playfield = this.createPlayfield();
  nextPiece = new Piece();
  piece = null;

  over = false;
  pause = false;

  timer = Date.now();

  _score = 0;
  _level = 0;
  _lines = 0;

  statistics = {
    typesCount: {
      "S": 0,
      "T": 0,
      "O": 0,
      "Z": 0,
      "J": 0,
      "L": 0,
      "I": 0,
    },
    top: {
      score: 151294,
      lines: 43,
      level: 8,
      name: "andrey"
    }
  }

  constructor(view) {
    view.render(this.state);
  }

  set score(newValue) {
    this._score = clamp(newValue, 0, 9999999);
  }

  set level(newValue) {
    this._level = clamp(newValue, 0, 9);
  }

  set lines(newValue) {
    this._lines = clamp(newValue, 0, 9999);
  }

  get score() {
    return this._score;
  }
  
  get level() {
    return this._level;
  }

  get lines() {
    return this._lines;
  }

  get state() {
    const playfield = this.createPlayfield();

    for (let y = 0; y < this.playfield.length; y++) {
      for (let x = 0; x < this.playfield[y].length; x++) {
        playfield[y][x] = this.playfield[y][x];
      }
    }

    if (this.piece) {
      const {pos, matrix} = this.piece;

      for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
          if (matrix[y][x] && playfield[pos.y + y] !== undefined) {
            playfield[pos.y + y][pos.x + x] = matrix[y][x];
          }
        }
      }
    }

    return {
      playfield: playfield,
      piece: this.piece,
      score: this.score,
      level: this.level,
      lines: this.lines,
      nextPiece: this.nextPiece,
      statistics: this.statistics
    }
  }

  start() {
    view.render(this.state);
    this.piece = new Piece();
    this.drop();
  }

  drop() {
    let now = Date.now();
    let delta = now - this.timer;
    view.render(this.state);
    if (delta > 300) {
      this.movePieceDown();
      this.timer = Date.now();
    }

    requestAnimationFrame(() => this.drop());
  }

  movePieceDown() {
    this.piece.pos.y += 1;
    //view.render(this.state);

    if (this.hasColission()) {
      this.piece.pos.y -= 1;
      this.lockPiece();

      this.updatePiece();
    }
  }

  movePieceLeft() {
    this.piece.pos.x -= 1;

    if (this.hasColission()) {
      this.piece.pos.x += 1;

      view.render(this.state);
    }
  }

  movePieceRight() {
    this.piece.pos.x += 1;
    view.render(this.state);

    if (this.hasColission()) {
      this.piece.pos.x -= 1;

      view.render(this.state);
    }
  }

  /**
   * Check is piece out of playfield or behind another piece.
   *
   * @return  {Boolean}
   * 
   */
  hasColission() {
    for (let y = 0; y < this.piece.matrix.length; y++) {
      for (let x = 0; x < this.piece.matrix[y].length; x++) {
        if (
            this.piece.matrix[y][x] &&
            ((this.playfield[this.piece.pos.y + y] === undefined ||
            this.playfield[this.piece.pos.y + y][this.piece.pos.x + x] === undefined) ||
            this.playfield[this.piece.pos.y + y][this.piece.pos.x + x])
          ) {
            return true;
        }
      }
    }
    
    return false;
  }

  /**
   * Pushd piece to playfield.
   * 
   */

  lockPiece() {
    if (this.over) return;

    const {pos, matrix} = this.piece;
    this.piece.locked = true;
    
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (this.piece.pos.y + y < 0) {
          this.over = true;
          console.log(this.over)
        }

        if (matrix[y][x]) {
          if (this.playfield[pos.y + y] === undefined) return;
          this.playfield[pos.y + y][pos.x + x] = matrix[y][x];
        }
      }
    }
  }
  

  /**
   * Creates a 2d 20x10 array and returns it.
   * all items is 0 by default
   *
   * @return  {Array}  playfield
   * 
   */
  createPlayfield() {
    const playfield = new Array(PLAYFIELD_SIZE_Y)
      .fill(0).map(() => new Array(PLAYFIELD_SIZE_X).fill(0));

    return playfield;
  }
  
  updatePiece() {
    this.statistics.typesCount[this.piece.type] += 1;

    this.piece = this.nextPiece;
    this.nextPiece = new Piece();
  }
}

function clamp(val, min, max) {
  return val > max ? max : val < min ? min : val;
}