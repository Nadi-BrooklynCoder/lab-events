let board = document.querySelector('div');
let resetBtn = document.querySelector('.reset')
let player = 1;

function makeBoard() {
for(let i = 0; i < 9; i++) {
    let square = document.createElement('div');
    square.classList.add('empty', 'square');
    square.addEventListener('click', (e) => {
        makeMove(e)
    })
    board.append(square);
 }
 gameOver();
}

makeBoard();

function makeMove(e) {
    let classes = e.target.classList;

    if(classes.contains('empty')){
        classes.remove('empty');

        if(player === 1){
        e.target.textContent = 'X';
        player = 0;
        } else {
            e.target.textContent = 'O';
            player = 1;
        }
    } 
    gameOver();
}

function reset() {
    const squares = document.querySelectorAll('.square');
    for(let square of squares){
        square.remove();
    }
    player = 1;
    makeBoard();
}

resetBtn.addEventListener('click', () => {
    reset();
})

function gameOver() {
    const squares = document.querySelectorAll('.square');
    let boardFull = true;

    for(let square of squares){
        if(square.classList.contains('empty')){
            boardFull = false;
        }
    } if(boardFull){
        alert(`GAME OVER!`)
    
    }
}
gameOver();

   



