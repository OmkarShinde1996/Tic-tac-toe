import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();
let tiles = document.querySelectorAll('.board-tile')
tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        //getting clicked tile (console.log(tile.dataset.index))
        // console.log(tile.dataset.index)
        onTileClicked(tile.dataset.index)
    })
})

function onTileClicked (tileIndex){
    game.makeMove(tileIndex)
    gameView.updateBoard(game)
}

document.querySelector('.restart').addEventListener('click', () => {
    onRestartClicked()
})

function onRestartClicked(){
    game = new Game()
    gameView.updateBoard(game)
}

gameView.updateBoard(game)