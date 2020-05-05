import colors from "../../components/misc/pieceColors.js";
import transformColor from "../../common/transformColor.js";

const STATISTICS_STROKE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAFoCAYAAAAB5PQwAAAE30lEQVR42u3aQY6qQBSGUbbDyliMMwduVxMNxpRgFQGkuHU6OQNeunvQ+sf7Ja/rkq++7+8QVZf78keiyQGM33C53iCs2SEYAE0OIH3jD8Pw5NnzGZ6X/tzoPQQD8GwAEwPI/QI4o68oNgAMYCJ+536Bj17PZ37OnkAG4LnpATiB0AAGgAb4/Qs8e67hOf333RvAC+A59ABKTyD/sYqalL5/N2sAf3RCDqA0ej/+UxEcZvX71wAwgDUfIV4EKhrA7g1gAIQegBMIDWAAaAAnEBrAANAATiA0gAGgAZxAaAADQAMYABrAANAAXgQ0AGgA0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoANABoANAAoAFAA4AGAA0AGgA0AAagATAADYABaACcQBoAA9AAOIE0AAagAXACaQAMQAPgBNIAGIAGwAlkABiAEwgnkAFgAE4gnEAGgAZwAqEBDAAN4ARCAxgAGsAJhAYwADSAEwgNYABoAANAA3gR0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoANABoANAAoAFAA4AGAA0AGgA0AGgA0ACgATAADYABaAAMQAPgBNIAGIAGwAmkATAADYATSANgABoAJ5AGwACcQDiBDAADcALhBDIADMAJhBPIANAATiA0gAGgAZxAaAADQAM4gdAABoAGcAKhAQwADWAAaAAvAhoANABoANAAoAFAA4AGAA0AGgA0AGgA0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoAA9AAGIAGwAA0AAagAXACaQAMQAPgBNIAGIAGwAmkATAADYATSANgAE4gnEAGgAE4gXACGQAG4ARCAxgAGsAJhAYwADSAEwgNYABoACcQGsAA0ABOIDSAAaABDAANABoANABoANAAoAFAA4AGAA0AGgA0AGgA0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoAA9AAGIAGwAA0AAagAXACaQAMQAPgBNIAGIAGwAmkATAADYATSANgAE4gnEAGgAE4gXACGQAG4ARCAxgAGsAJhAYwADSAEwgNYABoACcQGsAA0ABOIDSAAaABvAhoANAAoAFAA4AGAA0AGgA0AGgA0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoANABoAAxAA2AAGgAD0AAYgAbAADQATiANgAFoAJxAGgAD0AA4gTQABqABcAIZAAbgBMIJZAAYgBMIJ5ABYABOIDSAAaABnEBoAANAAziB0AAGgAZwAqEBDAANYABoAANAA3gR0ACgAUADgAYADQAaADQAaADQAKABQAOABgANABoANABoANAAoAFAA4AGAA0AGgA0AGgA0AAYgAbAADQABqABcAJpAAxAA+AE0gAYgAbACaQBMAANgBNIA2AAGgAnkAFgAE4gnEAGgAE4gXACGQAawAmEBjAANIATCA1gAGgAJxAawADQAE4gNIABoAEMAA3gRUADgAYADQAaAOI2QPoLoAZLTx8DwABKTqDcL0qHA0cY34+5E2hxBBsATQ0g/YG5iMh9n2fP/3jOfd/qBjAAz00NoPQEgjPYrQEg5AB8tHqO9Lx5A3j2HHoAPjZpgQFgAK//y/b6Sj8a0m/07LnG56U/9/XGNwDPBvBjCBBJl/vyR6KlATwALu1ULa7Nc5IAAAAASUVORK5CYII="

export default function leftPanel(data) {
  const context = data.context || data;

  this.static = () => {
    const piecesStatisticsBox = {
      x: 30,
      y: 165,
      width: 190 + (190 * .1),
      height: 360 + (360 * .1),

      render() {
        context.canvas.drawImage(
          this.x,
          this.y, 
          {
            url: STATISTICS_STROKE,
            width: this.width,
            height: this.height
          }
        );
        
        setTimeout(() => {
          context.canvas.print(
            "Statistics:",
            this.x * 2,
            this.y + (this.y * (.20 + .02)),
            14
          );
        }, 0);

        const piecesList = [
          [0, 0, "S", "S"],
          [0, "S", "S", 0],
          [0, 0, 0, 0],
          [0, 0, "T", 0],
          [0, "T", "T", "T"],
          [0, 0, 0, 0],
          [0, "O", "O", 0],
          [0, "O", "O", 0],
          [0, 0, 0, 0],
          [0, "Z", "Z", 0],
          [0, 0, "Z", "Z"],
          [0, 0, 0, 0],
          [0, 0, "J", 0],
          [0, 0, "J", 0],
          [0, "J", "J", 0],
          [0, 0, 0, 0],
          [0, "L", 0, 0],
          [0, "L", 0, 0],
          [0, "L", "L", 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          ["I", "I", "I", "I"]
        ];

        setTimeout(() => {
          for (let [y] of piecesList.entries()) {
            for (let [x] of piecesList[y].entries()) {
              if (piecesList[y][x]) {
                context.renderBlock(
                  (this.x + (this.x * 0.8)) + (x * (context.block.width / 2)),
                  (this.y + (this.y * 0.35)) + (y * (context.block.height / 2)),
                  colors[piecesList[y][x]],
                  context.block.height / 2,
                  context.block.height / 2
                );
              }
            }
          }
        }, 0);
      }
    }

    const linesCountBox = {
      x: 35,
      y: 33,
      width: 200,
      height: 40,

      render() {
        context.canvas.fill(
          this.x,
          this.y,
          this.width,
          this.height,
          "#000000"
        );

        context.canvas.stroke(
          this.x,
          this.y,
          this.width,
          this.height,
          "#222222",
          4
        );

        context.canvas.stroke(
          this.x,
          this.y,
          this.width,
          this.height,
          "skyblue",
          1
        );

        context.canvas.print(`Lines -`, this.x + (this.x * .2), this.y + (this.y * .84), 14);
      }
    }

    piecesStatisticsBox.render();
    linesCountBox.render();
  }

  this.state = () => {
    const linesCountBox = {
      x: 35 + ((14 * 4) + 30),
      y: 33,
      width: 200,
      height: 40,
      lines: data.state.lines,
      
      render() {
        context.canvas.fill(
          this.x + (this.x * .1),
          this.y + (this.y * .1),
          this.width / 2,
          this.height - (this.height * .2),
          "#000000"
        );
    
        context.canvas.print(
          String(this.lines).padStart(4, "0"),
          this.x + (this.x * .2),
          this.y + (this.y * .84),
          14
        );
      }
    }

    const piecesStatisticsBox = {
      x: 190 - (190 / 4),
      y: 234,
      typesCount: data.state.statistics.typesCount,

      render() {
        for (let idx = 0; idx < Object.keys(this.typesCount).length; idx++) {
          let key = Object.keys(this.typesCount)[idx];

          context.canvas.fill(this.x-8, (this.y - 24) + (idx * 48), 80, 28, "#000000");
          context.canvas.stroke(this.x-8, (this.y - 24) + (idx * 48), 80, 28, transformColor(colors[key], -16));
          context.canvas.print(this.typesCount[key], this.x, this.y + (idx * 48), 14)
        }
      }
    }

    linesCountBox.render();
    piecesStatisticsBox.render();
  }
}