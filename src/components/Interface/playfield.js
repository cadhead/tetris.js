import colors from "../misc/pieceColors.js"

export default function playfield(data) {
  const context = data.context || data;
  const {playfield} = data;

  this.state = () => {
    for (let [y] of playfield.entries()) {
      for (let [x] of playfield[y].entries()) {
        if (x === 10) continue; // fix required
        context.renderBlock(10 + x, 1 + y, colors[playfield[y][x]]); // fix required
      }
    }
  }
  
  this.static = () => {
    const box = {
      x: (context.width - context.playfieldSize) / 1.71,
      y: 27,
      width: context.playfieldSize-48,
      height: context.height-100,
      color: "#222222",
      secondaryColor: "skyblue"
    }

    context.canvas.strokeRounded(
      box.x,
      box.y,
      box.width,
      box.height,
      3,
      box.color,
      14
    );

    context.canvas.strokeRounded(
      box.x,
      box.y,
      box.width,
      box.height,
      3,
      box.secondaryColor,
      4
    );
  }
}