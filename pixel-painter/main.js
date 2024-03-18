let layout = document.getElementById('canvas')
let palette = document.getElementById('palette');
let currColor = document.getElementById('current-color')
let colors = palette.querySelectorAll('.color')
let resetButton = document.createElement('button')
resetButton.innerHTML = 'RESET';



    colors.forEach(c => {
        c.addEventListener('click', () => {
        currColor.style['background'] = c.style['background']
    
    })
})

for(let i = 0; i < 80; i++) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        cell.addEventListener('mouseover', (e) => {
            if(e.buttons === 1){
            cell.style['background'] = currColor.style['background']
        } 
    })
        cell.addEventListener('click', () => {
         cell.style['background'] = currColor.style['background']
        })   
    
    layout.append(cell);
    
}

resetButton.style.cssText = 'width: 55px; height: 55px; border-radius: 100px; text-align:center; font-size: 12px; margin-left: 10px; margin-top: 10px'

resetButton.addEventListener('click', (e) => {
    let cells = document.getElementsByClassName('cell')
    for(let i = 0; i < cells.length; i++) {
        cells[i].style.background='white'
    }
})

palette.append(resetButton)


   
    
    

    












































// for (let color of colors) {
//     color.addEventListener('click', function() {
//     currColor.style['background'] = color.style['background']
//     })
// }


// for(let i = 0;  i < 80; i++) {
//     let cell = document.createElement('div');
//         cell.classList.add('cell');
//         layout.appendChild(cell)
//         cell.addEventListener('mouseover', (e) => {
//             if(e.buttons === 1) {
//             cell.style['background'] = currColor.style['background']
//             }
//         })
//         cell.addEventListener('click', () => {
//             cell.style['background'] = currColor.style['background']
//         })

//        layout.append(cell) 
//     }

   
   
    

    
   


   
    
    
  

