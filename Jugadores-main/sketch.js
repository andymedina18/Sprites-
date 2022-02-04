
var gameState = 0;
var playerCount;
var database;
var form, game, player;
var canvas;
var car1, car2, car3, car4;
var cars;

var allPlayers;

function setup() {
    canvas = createCanvas(displayWidth - 20, displayHeight - 20);

    //Llamamos a la base de datos
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    if (playerCount === 4) {
        game.update(1);
    }

    if (gameState === 1) {
        clear();
        game.play();
    }
}
