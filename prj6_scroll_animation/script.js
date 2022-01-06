const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4 //checks bottom of screen 

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top //returns a rectangle with its location (.top), gives top value

        if(boxTop < triggerBottom)
        {
            box.classList.add('show')
        }
        else
        {
            box.classList.remove('show')
        }
    })
}

