let board = document.querySelector('div');


function makeBoard() {
for(let i = 0; i < 9; i++) {
    let square = document.createElement('div');
    square.classList.add('square', 'empty');
    board.append(square);
 }
}

makeBoard()

