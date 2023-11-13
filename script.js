function init() {
    //create 2-dimensional 50x50 fields game board filled with empty (false)
    let board = Array();
    for(let y=0; y<50; y++) {
        board[y] = Array()
        for(let x=0; x<50; x++) {
            board[y][x] = false;
        }
    }
    //console.log(board);
    //seed random life forms
    let lifeFormCounter = 50;
    while (lifeFormCounter > 0) {
        let randomY = Math.floor(Math.random()*50);
        let randomX = Math.floor(Math.random()*50);
        //console.log(randomX, randomY, lifeFormCounter);
        //if field is empty seed life there
        if(board[randomY][randomX] == false) {
            board[randomY][randomX] = true;
            lifeFormCounter--;
        }
    }

    return board;
}
function draw(board) {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    //clear canvas
    ctx.clearRect(0,0,500,500);
    for(let y=0; y<50; y++) {
        for(let x=0; x<50; x++) {
            if(board[y][x] == true) {
                //paint the canvas
                ctx.fillRect(x*10, y*10, 10, 10);
            }
        }
    }
}
function life(board) {
    //function accepts as argument the previous "tick" of the board
    //here you should implement the changes....
    let ilosc_somsiadow = 0
    let isAlive = true 
    let array = [];
        let c = 0
        for (var key in board) {
            if (board.hasOwnProperty(key)) ++c;
          }
    let arrayLengthI = board.length;
    alert(arrayLengthI);
        
    
    for(let i = 0; i < array[i].length; i++) {
        if(array[i] == true) {
            if(array[i-1] == true) {
                ilosc_somsiadow =+ 1
            }
            if(array[i+1] == true) {
                ilosc_somsiadow =+ 1

            }

        }
        for(let j = 0; j < array[j].length; j++) {

        }
    }
    console.log(array)
    if(ilosc_somsiadow < 2 && board[randomY][randomX] == true) {
        // komórka umiera
    }
    if(ilosc_somsiadow == 2 && board[randomY][randomX] == true || ilosc_somsiadow == 3 && board[randomY][randomX] == true) {
        //komórka przeżywa, nic się nie zmienia
    }
    if(ilosc_somsiadow > 3 && board[randomY][randomX] == true) {
        // komórka umiera
    }
    if(ilosc_somsiadow == 3 && board[randomY][randomX] == false) {
        // komórka się odradza
    }


    //TUTAJ WSZYSTKO TRZEBA ROBIĆ

    //function has to return mutated board (after the tick)
    return board;
}

function mainLoop(board) {
    //call a function here to implement the rule of "Conway's Game of Life"
    board = life(board)
    //draw the current board
    draw(board);
    console.log("Tick...")
}
let gameBoard = init();
setInterval(mainLoop,500, gameBoard);

//console.log(gameBoard);