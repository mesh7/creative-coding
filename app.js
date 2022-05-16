let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

context.fillStyle = "blue";
// context.fillRect(100, 100, 400, 400);

context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 400, 400);
context.stroke();

context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
context.stroke();

for (let i = 0; i < 5; i++) {
  let width = 60;
  let height = 60;
  let x = 100;
  let y = 100;

  context.beginPath();
  context.rect(100 + 80 * i, 100, width, height);
  context.stroke();
}
