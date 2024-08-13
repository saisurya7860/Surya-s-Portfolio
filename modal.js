const openmodal = document.querySelectorAll('[modal-open-btn]')
const closemodal = document.querySelectorAll('[modal-close-btn]')
const overlay = document.getElementById('overlay')

openmodal.forEach(button =>{
    button.addEventListener('click' ,() => {
        const modal = document.querySelector(button.getAttribute('modal-open-btn'))
        openmodal(modal)
    })
})




closemodal.forEach(button =>{
    button.addEventListener('click' ,() => {
        const modal = button.closest('#modalcard')
        closemodal(modal)
    })
})

overlay.addEventListener('click',() =>{
    const modals =document.querySelectorAll('#modalcard.active')
    modals.forEach(modal =>{
        closemodal(modal)
    })
})


function openmodal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}


function closemodal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}