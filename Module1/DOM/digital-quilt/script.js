const body = document.querySelector("body");

const createSquares = (num = 10) => {
  // Step 1
  for (let i = 1; i <= num; i++) {
    const div = document.createElement("div");
    // div.className = 'square'
    div.style.backgroundColor = randColorRGB()
    div.classList.add("square");
    div.textContent = i;
    // console.log(div.classList.contains('square'))
    console.log(div);
    body.appendChild(div);
  }
};

const randColorRGB = () => {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  return `rgb(${red}, ${green}, ${blue})`
}

createSquares(500)