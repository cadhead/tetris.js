import transformColor from "../../common/transformColor.js";

export default function block(data) {
  const context = data.context || data;
  const {x, y, color} = data;
  const width = data.width || context.block.width;
  const height = data.height || context.block.height;

  // Glare Imitation
  context.canvas.fill((x * width) + 4, (y * height) + 4, 3, 6, "white");
  context.canvas.fill((x * width) + 4, (y * height) + 4, 6, 3, "white");

  // Lighter border (top-left)
  context.canvas.fill(
    (x * width) + 1,
    (y * height) + 1,
    3,
    height,
    transformColor(color, 40)
  );
  context.canvas.fill(
    (x * width) + 1,
    (y * height) + 1,
    width,
    3,
    transformColor(color, 40)
  );

  // Darker border (bottom-right)
  context.canvas.fill(
    (x * width) + (width - 3),
    (y * height) + (height - 26),
    3,
    width,
    transformColor(color, -70));
  context.canvas.fill(
    (x * width) + (width - 25),
    (y * height) + (height - 3),
    height,
    3,
    transformColor(color, -70)
  );

  // Black border
  context.canvas.stroke(
    x * width,
    y * height,
    width,
    height,
    "#000000"
  );
}