const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
  pixelsPerInch: 300,
  orientation: "landscape",
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.lineWidth = 0.01*width;

    const w = 0.1 * width;
    const h = 0.1 * height;
    const gap = 0.03 * width;
    const ix = 0.17 * width;
    const iy = 0.17 * height;

    const offset = width * 0.02;

    function generateRectangle() {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          let x = ix + (w + gap) * i;
          let y = iy + (h + gap) * j;

          context.beginPath();
          context.rect(x, y, w, h);
          context.stroke();

          const randomNumber = Math.random();
          if (randomNumber > 0.5) {
            context.beginPath();
            context.rect(
              x + offset / 2,
              y + offset / 2,
              w - offset,
              h - offset
            );
            context.stroke();
          }
        }
      }
    }

    generateRectangle();
  };
};

canvasSketch(sketch, settings);
