let board = document.querySelector('div');
let resetBtn = document.querySelector('button')
let player = 1;



function makeBoard() {
for(let i = 0; i < 9; i++) {
    let square = document.createElement('div');
    square.classList.add('square', 'empty');
    square.addEventListener('click', (e) => {
        makeMove(e)
    })
    board.append(square);
 }
}

makeBoard();

function makeMove(e) {
    let classes = e.target.classList;

    if(classes.contains('empty')){
        classes.remove('empty');

        if(player === 1){
        e.target.textContent = 'X';
        player = 0;
        }else {
            e.target.textContent = 'O';
            player = 1;
        }
    } 
}

function reset() {
    while(board.hasChildNodes()){
        board.removeChild(board.firstElementChild);
    }
    player = 1;
    makeBoard();
    }


resetBtn.addEventListener('click',() => {
    reset();
})

// function winningBoard() {
//     board =  [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,4,8],
//         [2,4,6],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8]
//     ];
//     makeMove();
// }

// winningBoard();




