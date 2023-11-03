let handleInput = (id) => {
    let element = document.getElementById(id)
    let label = document.getElementById(id + 'lbl')
    label.addEventListener('click', () => {
        element.focus()
    })
    element.addEventListener('focus', () => {
        label.classList.add("active")
    }) 
    element.addEventListener('focusout', () => {
        label.classList.remove("active")
    }) 
     
}

handleInput('email')
handleInput('pass')