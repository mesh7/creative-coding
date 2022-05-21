const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
};

// const degreeToRadian = (degree) => {
//   return (degree / 180) * Math.PI;
// };

// const randomNumber = (first, last) => {
//   return Math.random() * (last - first + first);
// };

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const placeConstant = [0, 1, 0.5];
    const placeConstantOne = [
      [0, 0],
      [0, 1],
      [0.5, 0.5],
      [1, 0],
      [1, 1],
    ];

    const w = 0.01 * width;
    const h = 0.1 * height;
    let x, y;

    const num = 24;
    const radius = width * 0.3;

    const colors = [
      "#E84118",
      "#2C52B9",
      "#7F8FA6",
      "#FBC531",
      "#E84118",
      "#2C52B9",
      "#7F8FA6",
      "#FBC531",
      "#E84118",
      "#2C52B9",
      "#7F8FA6",
      "#FBC531",
      "#E84118",
      "#2C52B9",
      "#7F8FA6",
      "#FBC531",
      "#E84118",
      "#2C52B9",
      "#7F8FA6",
      "#FBC531",
      "#E84118",
      "#2C52B9",
      "#7F8FA6", 
      "#FBC531",
    ];

    for (j = 0; j < placeConstantOne.length; j++) {
      for (i = 0; i < num; i++) {
        let cx = placeConstantOne[j][0] * width;
        let cy = placeConstantOne[j][1] * width;
        const slice = math.degToRad(360 / num);
        const angle = slice * i;

        x = cx + radius * Math.sin(angle);
        y = cy + radius * Math.cos(angle);

        context.save();
        context.translate(x, y);
        context.rotate(-angle);
        context.fillStyle = colors[i];
        context.scale(random.range(0.1, 3), random.range(0.1, 2));

        context.beginPath();
        context.rect(-0.5 * w, -0.9 * h, w, h);
        context.fill();
        context.restore();

        context.save();
        context.translate(cx, cy);
        context.rotate(-angle);

        context.lineWidth = random.range(10, 15);

        context.beginPath();
        context.strokeStyle = colors[i];
        context.arc(
          0,
          0,
          radius * random.range(0.7, 1.3),
          slice * random.range(1, -8),
          slice * random.range(1, 5)
        );
        context.stroke();
        context.restore();
      }
    }
  };
};

canvasSketch(sketch, settings);
