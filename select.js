const selected = document.querySelector('.selected')
const optionsContainer = document.querySelector('.options-container')
const optionsList = document.querySelectorAll('.option')
const serchBox = document.querySelector('.serch-box')

selected.addEventListener('click', () =>{
    optionsContainer.classList.toggle('active')
})

optionsList.forEach(el => {
    el.addEventListener('click', () => {
        selected.innerHTML = el.querySelector('label').innerHTML
        optionsContainer.classList.remove('active')
    })
})

serchBox.addEventListener('keyup', (e) => {
    filterList(e.target.value)
})

const filterList = serchTerm => {
    serchTerm = serchTerm.toLowerCase()
    optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerHTML.toLocaleLowerCase()
        if (label.indexOf(serchTerm)!= -1){
            option.style.display = 'block'
        } else{option.style.display = 'none'}
    })
}