let index = 0

function refresh(){
    if(index<0){
        index=2
    }
    else if(index>2){
        index=0
    }

    let carousel = document.querySelector('.carousel')

    let width = getComputedStyle(carousel).width

    width = Number(width.slice(0,-2))

    carousel.querySelector(".container").style.left = 
    index * width * -1 + "px"
}

let refreshWrapper = (func) => {
    return function (...args){
        let result = func(...args)
        refresh()
        return result
    }
}

let leftShift = refreshWrapper(()=>{
    index--
})
 
let rightShift = refreshWrapper(()=>{
    index++
})

let setIndex = refreshWrapper((idx)=>{
    index=idx
})

refresh()