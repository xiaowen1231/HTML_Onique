let index = 0

function refresh(){ 
    if(index>2){
        index = 0 
    }
    else if(index<0){
        index = 2
    }

    let carousel = document.querySelector('.carousel')

    let width = getComputedStyle(carousel).width

    width = Number(width.slice(0,-2))

    carousel.querySelector(".container").style.left = 

    (index * width * -1) + "px"

    
}

refresh()

function leftShift(){
    index--
    refresh()
}

function rightShift(){
    index++
    refresh()
}

function setShift(ind){
    index = ind
    refresh()
}