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
  let isMatch =
    firstTile.dataset.pairingnumber === secondTile.dataset.pairingnumber;

  isMatch ? disableTiles() : flipTilesBack();
}

function disableTiles() {
  firstTile.removeEventListener("click", flipTile);
  secondTile.removeEventListener("click", flipTile);

  resetBoard();
}

function flipTilesBack() {
  lockBoard = true;

  setTimeout(() => {
    firstTile.classList.remove("flipped");
    secondTile.classList.remove("flipped");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [isOneTileFlipped, lockBoard] = [false, false];
  [firstTile, secondTile] = [null, null];
}

function isBoardCleared() {
  if (numberOfTiles === document.getElementsByClassName("flipped").length) {
    setTimeout(() => {
      alert("Congratulations!! ... The board will be reshuffled for you!");
    }, 500);

    setTimeout(() => {
      tiles.forEach((tile) => {
        let randomPositioning = Math.floor(Math.random() * numberOfTiles);
        tile.style.order = randomPositioning;
      });
      tiles.forEach((tile) => tile.classList.remove("flipped"));
      resetBoard();
      tiles.forEach((tile) => tile.addEventListener("click", flipTile));
    }, 1500);
  } else {
    return;
  }
}

(function shuffle() {
  tiles.forEach((tile) => {
    let randomPos = Math.floor(Math.random() * numberOfTiles);
    tile.style.order = randomPos;
  });
})();

tiles.forEach((tile) => tile.addEventListener("click", flipTile));
