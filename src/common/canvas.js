export default class Canvas {
  constructor(container, params) {
    this.element = document.createElement("canvas");
    this.element.width = params.width;
    this.element.height = params.height;

    this.layer = this.element.getContext("2d");

    document.querySelector(container).appendChild(this.element);

    return this;
  }

  fill(x, y, width, height, color) {
    const w = width || this.element.width;
    const h = height || this.element.height;

    this.layer.fillStyle = color;
    this.layer.fillRect(x, y, width, height);
  }

  fillLayer(color, width, height) {
    const w = width || this.element.width;
    const h = height || this.element.height;

    this.fill(0, 0, w, h, color);
  }

  drawImage(x, y, image) {
    let img = new Image();

    img.onload = () => {
      if (!image.width) image.width = img.width;
      if (!image.height) image.height = img.height;

      else this.layer.drawImage(img, x, y, image.width, image.height);
    }

    img.src = image.url;
  }

  stroke(x, y, width, height, color, lineWidth = 2) {
    const w = width || this.element.width;
    const h = height || this.element.height;

    this.layer.strokeStyle = color;
    this.layer.lineWidth = lineWidth;
    this.layer.strokeRect(x, y, w, h);
  }

  strokeRounded(x, y, width, height, radius, color, lineWidth = 2) {
    this.layer.strokeStyle = color;
    this.layer.lineWidth = lineWidth;
    roundRect(this.layer, x, y, width, height, radius, false, true);
  }

  print(text, x, y, fontSize, fontFamily = "'Press Start 2P'", color = "#eeeeee", align = "start", baseline = "bottom") {
    this.layer.font = `${fontSize}px ${fontFamily}`;
    this.layer.textAlign = align;
    this.layer.textBaseline = baseline;
    this.layer.fillStyle = color; 

    this.layer.fillText(text, x, y);
  }
}

/**
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * 
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} [radius = 5] The corner radius; It can also be an object 
 *                 to specify different radii for corners
 * @param {Number} [radius.tl = 0] Top left
 * @param {Number} [radius.tr = 0] Top right
 * @param {Number} [radius.br = 0] Bottom right
 * @param {Number} [radius.bl = 0] Bottom left
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 */

function roundRect(ctx, x, y, width, height, radius, fill = true, stroke = true) {
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}