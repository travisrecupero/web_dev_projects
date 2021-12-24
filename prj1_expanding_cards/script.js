////////////////////////////////////////////
//console.log(panels)

// panels.forEach((panel) => {
//     console.log(panel)
// })
////////////////////////////////////////////

////////////////////////////////////////////
// call for each on panels, for each takes in function (lambda)

// panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//         console.log('123')
//     })
// })
////////////////////////////////////////////


// query selector lets us choose tags/elements in HTML
// query selector all lets us choose all panels
// node list
const panels = document.querySelectorAll('.panel')
const buttons = document.querySelector('.button_container')




panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

if(buttons){
    buttons.addEventListener('click', () => {
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
    })
}

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


