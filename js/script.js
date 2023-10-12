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

const triggeredAction = function () {
  const randGenerated = Math.ceil(Math.random() * 76);

  /*const allCells = document.getElementsByTagName("h3");
  const allCellsArr = Array.from(allCells);

  for (let i = 0; i < allCellsArr.length; i++) {
    if (parseInt(allCellsArr[i].innerText) === randGenerated) {
      allCellsArr[i].style.color = "red";
    }
  }*/
  const allh3s = document.getElementsByTagName("h3");
  const allCells = document.getElementsByClassName("number-cell");
  const allCellsArr = Array.from(allCells);

  for (let i = 0; i < allCellsArr.length; i++) {
    if (parseInt(allh3s[i].innerText) === randGenerated) {
      allCells[i].classList.add("already-retrieved");
    }
  }
};

const triggerBtn = document.getElementById("trigger-button");

triggerBtn.onclick = triggeredAction;
