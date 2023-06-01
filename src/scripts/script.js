function handleModal() {
    const button = document.querySelector('.dark-button')
    const modalController = document.querySelector('.modal__controller')


    button.addEventListener('click', function(){
        modalController.showModal()
    })
}

handleModal()