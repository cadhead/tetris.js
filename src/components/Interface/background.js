import colors from "../misc/pieceColors.js"

export default function background(data) {
  const context = data.context || data;

  const background = new Array(Math.floor(context.height / context.block.height))
  .fill(0).map(() => new Array(Math.floor(context.width / context.block.width) + 1).fill(0));

  for (let [y] of background.entries()) {
    for (let [x] of background[y].entries()) {
      let color = background[y][x] == 0 ? "#778899" : colors[background[y][x]];
      context.renderBlock(x, y, color);
    }
  }
}