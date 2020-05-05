import colors from "../misc/pieceColors.js"

const MINIBOX_STROKE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAIAAABt+uBvAAAABGdBTUEAALGPC/xhBQAAAuFJREFUeF7tnEFWwzAMRMtxejIOw44FV8t16MNZyLUV64eNokwei1CkvpmpNLFd44+HuZ7Pp/31tvfbts25vwTSNa+SpsvX949+Xgo0NboikkC2MjqBrDSff1cLrXofYde47zJJoLEUFgJ5Ce31O1z2SfUYK0gCuQLZ/rSVEunbq8Qce6tlPfEgCbQQyKuaO/jOKI37FJMHYQ9qCfbhd937ETl4zHseJIH2WdixB1Waxx676slxkATap/KeupM57gVXjMZp+YIvTrigKG+Lgm8LO0Agz4O6niwkUIhvZC4mgbq1RHmQu9zhjYO6hEItFuKrFhtH0ngcJA+SB02MF6wHyYMWczG1mATqvuzC60FqMZl0zKRDc5NCA8UQXw0UwUAxNPQuVEEhvloP0nqQu9FHHjSxA+y5ajHQYiHTurNJh3qykEAhvrgn7yyQWmyx/UUCLQQK9eSdW0wC2YUdLbnG9iJooAgGimqxRYtJIHlQt3E+NKyRB8mDtB5Exq547qkWAy0WMi3ycSWMxQWBSy4haQIJ88UJBE3CWMwXl1xC0gQS5osTCJqEsZgvLrmEpAkkzBcnEDQJYzFfXHIJSRNImC9OIGgSxmK+uOQSkiaQMF+cQNAkjMV8ccklJE0gYb44gaBJGIv54pJLSJpAwnxxAkGTMBbzxSWXkDSBhPniBIImYSzmi0suIWkCCfPFCQRNwljMF5dcQtIEEuaLEwiahLGYLy65hKQJJMwXJxA0CWMxX1xyCUkTSJgvTiBoEsZivrjkEpImkDBfnEDQJIzFfGlCi7/6FfmSvXEMncR5dTlG/CcFiqTVOHC6SeZtOfzX6S+3Fuh4E+dVTms9xun9dfwnBOxBEmix89zbiVXj9dF/JxV0bNI1hPBYhATyPKhGc40HCBwfzQo8SAKFDjep3WIjO3nQ4hPfBWrzSTsYt+PIevcRRp00EshOO2yhTJYi6k1KzzFyV2nOvV29LCvQLw1Crz1XKiPlAAAAAElFTkSuQmCC";
const SCORESBOX_STROKE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAFoCAYAAAAB5PQwAAAE30lEQVR42u3aQY6qQBSGUbbDyliMMwduVxMNxpRgFQGkuHU6OQNeunvQ+sf7Ja/rkq++7+8QVZf78keiyQGM33C53iCs2SEYAE0OIH3jD8Pw5NnzGZ6X/tzoPQQD8GwAEwPI/QI4o68oNgAMYCJ+536Bj17PZ37OnkAG4LnpATiB0AAGgAb4/Qs8e67hOf333RvAC+A59ABKTyD/sYqalL5/N2sAf3RCDqA0ej/+UxEcZvX71wAwgDUfIV4EKhrA7g1gAIQegBMIDWAAaAAnEBrAANAATiA0gAGgAZxAaAADQAMYABrAANAAXgQ0AGgA0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoANABoANAAoAFAA4AGAA0AGgA0AAagATAADYABaACcQBoAA9AAOIE0AAagAXACaQAMQAPgBNIAGIAGwAlkABiAEwgnkAFgAE4gnEAGgAZwAqEBDAAN4ARCAxgAGsAJhAYwADSAEwgNYABoAANAA3gR0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoANABoANAAoAFAA4AGAA0AGgA0AGgA0ACgATAADYABaAAMQAPgBNIAGIAGwAmkATAADYATSANgABoAJ5AGwACcQDiBDAADcALhBDIADMAJhBPIANAATiA0gAGgAZxAaAADQAM4gdAABoAGcAKhAQwADWAAaAAvAhoANABoANAAoAFAA4AGAA0AGgA0AGgA0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoAA9AAGIAGwAA0AAagAXACaQAMQAPgBNIAGIAGwAmkATAADYATSANgAE4gnEAGgAE4gXACGQAG4ARCAxgAGsAJhAYwADSAEwgNYABoACcQGsAA0ABOIDSAAaABDAANABoANABoANAAoAFAA4AGAA0AGgA0AGgA0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoAA9AAGIAGwAA0AAagAXACaQAMQAPgBNIAGIAGwAmkATAADYATSANgAE4gnEAGgAE4gXACGQAG4ARCAxgAGsAJhAYwADSAEwgNYABoACcQGsAA0ABOIDSAAaABvAhoANAAoAFAA4AGAA0AGgA0AGgA0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoANABoAAxAA2AAGgAD0AAYgAbAADQATiANgAFoAJxAGgAD0AA4gTQABqABcAIZAAbgBMIJZAAYgBMIJ5ABYABOIDSAAaABnEBoAANAAziB0AAGgAZwAqEBDAANYABoAANAA3gR0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoANABoANAAoAFAA4AGAA0AGgA0AGgA0AAYgAbAADQABqABcAJpAAxAA+AE0gAYgAbACaQBMAANgBNIA2AAGgAnkAFgAE4gnEAGgAE4gXACGQAawAmEBjAANIATCA1gAGgAJxAawADQAE4gNIABoAEMAA3gRUADgAYADQAaAOI2QPoLoAZLTx8DwABKTqDcL0qHA0cY34+5E2hxBBsATQ0g/YG5iMh9n2fP/3jOfd/qBjAAz00NoPQEgjPYrQEg5AB8tHqO9Lx5A3j2HHoAPjZpgQFgAK//y/b6Sj8a0m/07LnG56U/9/XGNwDPBvBjCBBJl/vyR6KlATwALu1ULa7Nc5IAAAAASUVORK5CYII="


export default function rightPanel(data) {
  const context = data.context || data;

  this.static = () => {
    const nextPieceBox = {
      x: context.width - context.rightPanelSize - 20,
      y: 30,
      width: 96, // image size
      height: 96, // image size

      render() {
        context.canvas.drawImage(this.x, this.y, {
          url: MINIBOX_STROKE,
          width: this.width,
          height: this.height
        });

        setTimeout(() => {
          context.canvas.print("Next", this.x + (this.x * .04), this.y * 2.1, 14);
        }, 0);
      }
    }

    const levelBox = {
      x: (context.width - context.rightPanelSize - 20) + 96 + 10,
      y: 30,
      width: 96, // image size
      height: 96, // image size

      render() {
        context.canvas.drawImage(this.x, this.y, {
          url: MINIBOX_STROKE,
          width: this.width,
          height: this.height
        });
  
        setTimeout(() => {
          context.canvas.print("Level", this.x + (this.x * .024), this.y * 2.1, 13);
        }, 0);
      }
    }

    const scoresBox = {
      x: context.width - context.rightPanelSize,
      y: 30 + 96 + 38,
      width: 160, // image size
      height: 290, // image size

      render() {
        context.canvas.drawImage(this.x, this.y, {
          url: SCORESBOX_STROKE,
          width: this.width,
          height: this.height
        });

        setTimeout(() => {
          context.canvas.print("SCORE", this.x + (this.x * .07), this.y + (this.y * .2), 16);
          context.canvas.print("TOP", this.x + (this.x * .1), (this.y + (this.y * .2)) * 1.5, 16);
        }, 0);
      }
    }

    nextPieceBox.render();
    levelBox.render();
    scoresBox.render();
  }

  this.state = () => {
    const nextPieceBox = {
      x: context.width - context.rightPanelSize,
      y: 65,
      width: 96 / 1.8,
      height: 96 / 2.2,
      nextPiece: data.state.nextPiece,

      render() {
        context.canvas.fill(this.x, this.y, this.width, this.height, "#000000");

        for (let [y] of this.nextPiece.matrix.entries()) {
          for (let [x] of this.nextPiece.matrix[y].entries()) {
            if (!this.nextPiece.matrix[x][y]) continue;

            context.renderBlock(
              this.x + (this.x * .02) + (x * (context.block.width / 2.6)),
              this.y + (this.y * .03) + (y * (context.block.height / 2.6)),
              colors[this.nextPiece.type],
              context.block.width / 2.6,
              context.block.height / 2.6
            );
          }
        }
      }
    }

    const levelBox = {
      x: (context.width - context.rightPanelSize) + 96 + 10,
      y: 65,
      width: 96 / 1.8,
      height: 96 / 2.2,
      level: data.state.level,

      render() {
        context.canvas.fill(this.x, this.y, this.width, this.height, "#000000");
        context.canvas.print(
          this.level,
          this.x + (this.x * .025),
          this.y + (this.y * .5),
          24
        );
      }
    }

    const scoresBox = {
      x: (context.width - context.rightPanelSize),
      y: 30 + 96 + (16 * 4), 
      width: 160 - 40,
      height: 20,
      score: data.state.score,
      top: data.state.statistics.top,

      render() {
        context.canvas.fill(
          this.x + (this.x * .035),
          this.y + (this.y * .1),
          this.width,
          this.height,
          "#000000"
        );
        context.canvas.print(
          String(data.state.score).padStart(7, "0"),
          this.x + (this.x * .045),
          (this.y + (this.y * .2)),
          16
        );

        context.canvas.fill(
          this.x + (this.x * .035),
          (this.y + (this.y * .1)) * 1.48,
          this.width,
          this.height * 6,
          "#000000"
        );
        context.canvas.print(
          String(this.top.score).padStart(7, "0"),
          this.x + (this.x * .045),
          (this.y + (this.y * .2)) * 1.44,
          16
        );

        context.canvas.print(
          this.top.name.toUpperCase(),
          this.x + (this.x * .035),
          ((this.y + (this.y * .2)) * 1.44) + 30,
          12
        );

        context.canvas.print(
          `level:${this.top.level}`,
          this.x + (this.x * .035),
          ((this.y + (this.y * .2)) * 1.44) + 60,
          12
        );

        context.canvas.print(
          `lines:${this.top.lines}`,
          this.x + (this.x * .035),
          ((this.y + (this.y * .2)) * 1.44) + 90,
          12
        );
      }
    }

    nextPieceBox.render();
    levelBox.render();
    scoresBox.render();
  }
}