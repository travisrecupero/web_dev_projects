
// query selector lets us choose tags/elements in HTML
// query selector all lets us choose all panels
// node list
const panels = document.querySelectorAll('.panel')

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


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
