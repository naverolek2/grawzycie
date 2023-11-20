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
    let lifeFormCounter = 300;
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
    let array = [];



    for (var i = 0; i < board.length; i++) {
        array[i] = board[i].slice();
    }

    let n = board.length;
    let m = board[0].length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let ilosc_somsiadow = 0;
    
            // Check neighbors
            for (let x = Math.max(0, i - 1); x <= Math.min(n - 1, i + 1); x++) {
                for (let y = Math.max(0, j - 1); y <= Math.min(m - 1, j + 1); y++) {
                    if (!(x === i && y === j)) {
                        ilosc_somsiadow += board[x][y] ? 1 : 0;
                    }
                }
            }
    
            // Apply rules
            if ((ilosc_somsiadow === 2 || ilosc_somsiadow === 3) && board[i][j]) {
                array[i][j] = true;
            } else if (ilosc_somsiadow === 3 && !board[i][j]) {
                array[i][j] = true;
            } else {
                array[i][j] = false;
            }
        }
    }
    
        
    
    
  
    

    //TUTAJ WSZYSTKO TRZEBA ROBIĆ
    console.log(array);
    console.log(board);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            board[i][j] = array[i][j];
        }
    }
        
    //function has to return mutated board (after the tick)
    return array;
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