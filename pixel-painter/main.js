let layout = document.getElementById('canvas')
let palette = document.getElementById('palette');
let currColor = document.getElementById('current-color')
let colors = palette.querySelectorAll('.color')

colors.forEach(color => {
    color.addEventListener('click', () => {
    currColor.style['background'] = color.style['background']
    })
})



for(let i = 0;  i < 80; i++) {
    let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', (e) => {
            if(e.buttons === 1) {
            cell.style['background'] = currColor.style['background']
            }
        })
        cell.addEventListener('click', (e) => {
            cell.style['background'] = currColor.style['background']
        })

       layout.append(cell) 
    }

   
   
    

    
   


   
    
    
    console.log(currColor)

