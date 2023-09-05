const scene = document.getElementById("scene");

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < 50; i++) {
  const cube = document.createElement("div");
  cube.classList.add("cube");
