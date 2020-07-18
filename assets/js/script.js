/*jshint esversion: 6 */ /*This line apparantly needs to be added for the code to pass jshint: 
https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const*/

/*Defining and initializing some variables and constants to be used within the code*/

/*Make a list of all elements marked with ".tile", and store that list in a constant, named "tiles"*/
const tiles = document.querySelectorAll(".tile");

/*First four variables basically represent " 'resetBoard' state" - i.e. board's inital, default, state*/
let lockBoard = false; /*lockBoard is needed to prevent a bug in the game*/
let isOneTileFlipped = false;
let firstTile;
let secondTile;
/*numberOfTiles variable will be used to shuffle the board 'dynamically' (without having to know the number of tiles beforehand)*/
let numberOfTiles = document.getElementsByClassName("tile").length;

/*Function to be run when a tile is flipped (i.e. clicked on)*/
function flipTile() {
  /*If lockBoard is "on" (i.e. set to "true"), the rest of the function won't get executed*/
  if (lockBoard) return;
  /*"this" represents the element that's triggered the event, in this case the tile that was flipped (i.e. clicked on) */
  if (this === firstTile) return;

  /*Mark "this" (i.e. that tile that was clicked) as "flipped", by adding a .flipped class to it */
  this.classList.add("flipped");

  /*Determine is the card being flipped the first one, or the second one to be flipped*/
  if (!isOneTileFlipped) {
    /*First click (i.e. flip) of a tile*/
    isOneTileFlipped = true;
    firstTile = this;

    return;
  }

  /*Second click (i.e. flip) of a tile*/
  secondTile = this;

  checkForMatch();

  isBoardCleared();
}

function checkForMatch() {
  let isMatch =
    /*"dataset" object in JS is to access (check) the "data-*" attribute set in html*/
    firstTile.dataset.pairingnumber === secondTile.dataset.pairingnumber;

  if (isMatch) {
    disableTiles();
  } else flipTilesBack();
}

/*If a match has been made, "disable" the tiles - i.e. remove the event listener, so as to prevent them from
being flipped again*/
function disableTiles() {
  firstTile.removeEventListener("click", flipTile);
  secondTile.removeEventListener("click", flipTile);

  resetBoard();
}

/*If no match has been made, flip the tiles back (by removing the .flipped class from them).
Also lock the board, so that no more tiles can be flipped until the tiles that are not a match
have been flipped back (so as to prevent an apparent bug) */
function flipTilesBack() {
  lockBoard = true;

  /*There needs to be enough (and not too much) time to see the animation of the tiles flipping back,
  so a timeout is set*/
  setTimeout(() => {
    firstTile.classList.remove("flipped");
    secondTile.classList.remove("flipped");

    resetBoard();
  }, 1500);
}

/*To prevent double-clicking on a tile, and issues it can cause.
Basically sets (i.e. resets) these variables to their inital state*/
function resetBoard() {
  isOneTileFlipped = false;
  lockBoard = false;
  firstTile = null;
  secondTile = null;
}

function isBoardCleared() {
  if (numberOfTiles === document.getElementsByClassName("flipped").length) {
    /*Some bugs appeared if a timeout hasn't been set here for the alert message*/
    setTimeout(() => {
      alert("Congratulations!! ... The board will be reshuffled for you!");
    }, 500);

    setTimeout(() => {
      tiles.forEach((tile) => {
        let randomPositioning = Math.floor(Math.random() * numberOfTiles);
        /*Flexbox "order" property is being utilized for shuflling here (https://www.w3schools.com/cssref/css3_pr_order.asp)*/
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

/*Making the shuffle function here an IIFE - the board needs to be shuffled before a game is started*/
(function shuffle() {
  tiles.forEach((tile) => {
    let randomPositioning = Math.floor(Math.random() * numberOfTiles);
    tile.style.order = randomPositioning;
  });
})();

/*Go through the tiles "list" (list of all elements with .tile class), and attach an event listener to each
of that list's elements, to listen for a "click" event, to execute function "flipTile" when triggered (clicked)*/
tiles.forEach((tile) => tile.addEventListener("click", flipTile));
