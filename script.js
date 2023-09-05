const scene = document.getElementById("scene");

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < 50; i++) {
  const cube = document.createElement("div");
  cube.classList.add("cube");
  cube.style.left = `${getRandom(0, 100)}%`;
  cube.style.top = `${getRandom(0, 100)}%`;
  cube.style.animation = `rotate ${getRandom(5, 10)}s linear infinite`;
  scene.appendChild(cube);
