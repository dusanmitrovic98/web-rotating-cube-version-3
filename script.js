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

  for (let j = 0; j < 6; j++) {
    const face = document.createElement("div");
    face.classList.add("face");
    face.style.transform = `rotateY(${j * 60}deg) translateZ(20px)`;
    face.textContent = `Cube ${i + 1}`;
    cube.appendChild(face);
  }
}
