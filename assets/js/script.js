const tiles = document.querySelectorAll(".tile");

let lockBoard = false;
let isOneTileFlipped = false;
let firstTile;
let secondTile;
let numberOfTiles = document.getElementsByClassName("tile").length;


function flipTile() {
  if (lockBoard) return;
  if (this === firstTile) return;

  this.classList.add("flipped");

  if (!isOneTileFlipped) {
    // first click
    isOneTileFlipped = true;
    firstTile = this;

    return;
  }

  // second click
  secondTile = this;

  checkForMatch();

  isBoardCleared();
}


function checkForMatch() {
  let isMatch = firstTile.dataset.pairingnumber === secondTile.dataset.pairingnumber;

  isMatch ? disableTiles() : flipTilesBack();
}