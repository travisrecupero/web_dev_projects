const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let interval = setInterval(blurring, 10) //call blurring every 30ms

function blurring(){
    load++

    if(load > 99){
        clearInterval(interval)
    }

    loadText.innerText = `${load}%`
    //loadText.style.opacity = scale(load, 0, 100, 1, 0) 
    loadText.style.opacity = 1 - (load / 100)
    bg.style.filter = `blur(${(30 - ((load / 100) * 30))}px)`

    // //https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    // const scale = (num, in_min, in_max, out_min, out_max) => {
    // return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    // }
}

