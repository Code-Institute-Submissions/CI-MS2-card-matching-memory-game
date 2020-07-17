const tiles = document.querySelectorAll(".tile");

let lockBoard = false;
let isOneTileFlipped = false;
let firstTile;
let secondTile;
let numberOfTiles = document.getElementsByClassName("tile").length;