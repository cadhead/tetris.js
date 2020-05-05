import colors from "./components/misc/pieceColors.js";
import Interface from "./components/Interface/index.js";
import TetrisError from "./common/errors.js";
import Canvas from "./common/canvas.js";

const PLAYFIELD_SIZE = 320;
const LEFT_PANEL_SIZE = 260;
const RIGHT_PANEL_SIZE = 200;

const DEFAULT_PARAMS_WIDTH = LEFT_PANEL_SIZE + PLAYFIELD_SIZE + RIGHT_PANEL_SIZE;
const DEFAULT_PARAMS_HEIGHT = 640;
const DEFAULT_PARAMS_ROWS = 20;
const DEFAULT_PARAMS_COLUMNS = 10;

const SPRITES_STATISTICS_STROKE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAFwCAYAAADuYXTGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpEMzM5QTk3Q0QwM0FFNDExODQ5QUU1QkE4QUE2NDA5RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1ODY2MzQ1QTNBRDIxMUU0ODY0NjlERjcwOTZGOTNBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ODY2MzQ1OTNBRDIxMUU0ODY0NjlERjcwOTZGOTNBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ4MzlBOTdDRDAzQUU0MTE4NDlBRTVCQThBQTY0MDlGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzMzlBOTdDRDAzQUU0MTE4NDlBRTVCQThBQTY0MDlGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KJkDngAABLFJREFUeNrs2r1Nw0AYgOEYMQqNQ8EGHoaOgmlSpMsw2YACV+xiUKQT9mc7jgHhv+dp4BA00Z2/exOyqqp2sFV3XgIcAHAAwAEABwAcAHAAYN3u4w/2+70PBlizrCzL7wPwteEv39R/CGuW9nxjAqQn//PLq1eI1TodD+mGk2kA3IfyPG88+T/e3y5fHx6frK1nv05u/bvkfD57Fwh6J0DSd4JgidKTPzEB2LTW5wDxiT80Eaytl7QuikIDgAZAA5gAaICRDZBOULxLWVtPsY77cujzLA0Af9EA8S4FU7p1/2oA+E0DdE0RLyMTqsbsXw0A1ybA2DsUzIkGgBFa7wL1naSodpI0AJM3wE/3rwmABtAAaADQABoADQAaQAOgAUADaAA0AGgADYAGAA2gAdAAoAFAA4AGAA0AGgA0AGgA0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoANABoANAAoAFAA4AGQANoANAAoAFAA6ABNABoADSABgANgAbQAKAB0AAaADQAGgA0gAZAA4AG0ABoANAAGgANABpAA6ABQANoADQAaAANgAYADQAaADQAaADQAKABQAOABgANABoANABoANAAoAFAA4AGAA0AGgA0AGgA0ACgAUADgAYADQAaADQAGkADgAZAA2gA0ABoAA0AGgANoAFAA6ABNABoADSABgANgAYADaAB0ACgATQAGgA0gAZAA4AG0ABoANAAGgANABpAA6ABQAOABgANABoANABoANAAoAFAA4AGAA0AGgA0AGgA0ACgAUADgAYADQAaADQAaADQAKABQAOABgANgAbQAKAB0AAaADQAGkADgAZAA2gA0ABoAA0AGgANYAKgATQAGgA0gAZAA4AG0ABoANAAGgANABpAA6ABQANoADQAaAANgAYADQAaADQAaADQAKABQAOABgANABoANABoANAAoAFAA4AGAA0AGgA0AGgA0ACgAUADgAYADQAaADQAGkADgAZAA2gA0ABoAA0AGgANoAFAA6ABNABoADSACYAG0ABoANAAGgANABpAA6ABQANoADQAaAANgAYADQAaADSABkADgAYADQAaADQAaADQAKABQAOABgANABoANABoANAAoAFAA4AGAA0AGgA0AGgA0ACgAUADgAYADQAaAA2gAUADoAE0AGgANIAGAA2ABtAAoAHQABoANAAawARAA2gANABoAA2ABgANoAHQAKABNAAaADSABkADgAYADQAaQAOgAUADgAYADQAaADQAaADQAKABQAOABgANABoANABoANAAoAFAA4AGAA0AGgA0AGgA0ACgAUADgAYADYAG0ACgAdAAGgA0ABpAA4AGQANoANAAaAANABoADQAaQAOgAUADaAA0AGgADYAGAA2gAdAAoAE0ABoANABoAFjbBIgnZugule5gsISJEJkAmABjTkxRFI27VKxvmMLpeGjsz74bTdy/JgAmwLUT01fR6cnf93vW1v+xjjeToYb1LhDUtD4JvuFdH1iMOBHiJDAB0ABjGsDaeklrDQAaAHYaALomQPq+8T898RMza+s5ruMTfejv6nvfBMAEqE2AzkkAa9vz9YUJwKZ9CjAA2MRNlePw1KUAAAAASUVORK5CYII="
const SPRITES_NEXT_PIECE_STROKE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAIAAABt+uBvAAAABGdBTUEAALGPC/xhBQAAAuFJREFUeF7tnEFWwzAMRMtxejIOw44FV8t16MNZyLUV64eNokwei1CkvpmpNLFd44+HuZ7Pp/31tvfbts25vwTSNa+SpsvX949+Xgo0NboikkC2MjqBrDSff1cLrXofYde47zJJoLEUFgJ5Ce31O1z2SfUYK0gCuQLZ/rSVEunbq8Qce6tlPfEgCbQQyKuaO/jOKI37FJMHYQ9qCfbhd937ETl4zHseJIH2WdixB1Waxx676slxkATap/KeupM57gVXjMZp+YIvTrigKG+Lgm8LO0Agz4O6niwkUIhvZC4mgbq1RHmQu9zhjYO6hEItFuKrFhtH0ngcJA+SB02MF6wHyYMWczG1mATqvuzC60FqMZl0zKRDc5NCA8UQXw0UwUAxNPQuVEEhvloP0nqQu9FHHjSxA+y5ajHQYiHTurNJh3qykEAhvrgn7yyQWmyx/UUCLQQK9eSdW0wC2YUdLbnG9iJooAgGimqxRYtJIHlQt3E+NKyRB8mDtB5Exq547qkWAy0WMi3ycSWMxQWBSy4haQIJ88UJBE3CWMwXl1xC0gQS5osTCJqEsZgvLrmEpAkkzBcnEDQJYzFfXHIJSRNImC9OIGgSxmK+uOQSkiaQMF+cQNAkjMV8ccklJE0gYb44gaBJGIv54pJLSJpAwnxxAkGTMBbzxSWXkDSBhPniBIImYSzmi0suIWkCCfPFCQRNwljMF5dcQtIEEuaLEwiahLGYLy65hKQJJMwXJxA0CWMxX1xyCUkTSJgvTiBoEsZivrjkEpImkDBfnEDQJIzFfGlCi7/6FfmSvXEMncR5dTlG/CcFiqTVOHC6SeZtOfzX6S+3Fuh4E+dVTms9xun9dfwnBOxBEmix89zbiVXj9dF/JxV0bNI1hPBYhATyPKhGc40HCBwfzQo8SAKFDjep3WIjO3nQ4hPfBWrzSTsYt+PIevcRRp00EshOO2yhTJYi6k1KzzFyV2nOvV29LCvQLw1Crz1XKiPlAAAAAElFTkSuQmCC";

export default class View {
  timer = Date.now();
  temp = 0;

  playfieldSize = PLAYFIELD_SIZE;
  leftPanelSize = LEFT_PANEL_SIZE;
  rightPanelSize = RIGHT_PANEL_SIZE;

  isStaticElementsRendered = false;
  constructor(element, params = {}) {
    if (!element) {
      new TetrisError({
        error: "Init: unknown element"
      });
    }

    this.element = element;

    this.width = params.width || DEFAULT_PARAMS_WIDTH;
    this.height = params.height || DEFAULT_PARAMS_HEIGHT;
    this.rows = params.rows || DEFAULT_PARAMS_ROWS;
    this.columns = params.columns || DEFAULT_PARAMS_COLUMNS;

    this.block = {
      width: ((this.width - this.leftPanelSize - this.rightPanelSize) - 50) / this.columns,
      height: (this.height - 100) / this.rows
    }

    this.canvas = new Canvas(element, {
      width: this.width,
      height: this.height
    });
  }

  render(state) {
    Interface.leftPanel.state.render({
      context: this,
      state
    });

    Interface.playfield.state.render({
      context: this,
      playfield: state.playfield
    });

    Interface.rightPanel.state.render({
      context: this,
      state
    });
    
    if (!this.isStaticElementsRendered) {
      this.isStaticElementsRendered = true;

      let font = new FontFace("'Press Start 2P'", "url(https://fonts.gstatic.com/s/pressstart2p/v7/e3t4euO8T-267oIAQAu6jDQyK3nYivN04w.woff2)");
      font.load().then(() => {
        document.querySelector("#gameLoading").remove();

        Interface.background.render(this);
        Interface.leftPanel.static.render(this);
        Interface.playfield.static.render(this);
        Interface.rightPanel.static.render(this);
      });
    }
  }

  renderBlock(x, y, color, width, height) {
    const sx = x;
    const sy = y;
    if (!width) {
      width = this.block.width;
      height = this.block.height;

      x = this.block.width * x;
      y = this.block.height * y;
    }

    this.canvas.fill(
      x,
      y,
      width,
      height,
      color
    );

    if (color != colors["0"]) {
      Interface.block.render({
        context: this,
        x: sx,
        y: sy,
        color
      });
    } else {
      this.canvas.stroke(
        x,
        y,
        width,
        height,
        "#222222"
      );
    }
  }
}