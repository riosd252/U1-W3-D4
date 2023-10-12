const cellsTotal = 76;

window.onload = () => {
  for (let i = 1; i <= cellsTotal; i++) {
    const cellsContainer = document.getElementById("cells-container");
    const singleCell = document.createElement("div");
    singleCell.classList.add("number-cell");
    const cellNumber = document.createElement("h3");
    cellNumber.innerText = i;

    singleCell.appendChild(cellNumber);
    cellsContainer.appendChild(singleCell);
  }
};

const triggerBtn = document.getElementById("trigger-button");

triggerBtn.onclick = () => {
  const tableNumber = document.getElementsByTagName("h3");
  const tableNumberArr = Array.from(tableNumber);

  randomNumber = Math.floor(Math.random() * 77);
};
