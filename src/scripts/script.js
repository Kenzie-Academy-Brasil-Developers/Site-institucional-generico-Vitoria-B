function handleModal() {
    const button = document.querySelector('.dark-button')
    const modalController = document.querySelector('.modal__controller')


    button.addEventListener('click', function(){
        modalController.showModal()

        closeModal()
    })
}

function closeModal() {
    const button = document.querySelector('.modal__close')
    const modalController = document.querySelector('.modal__controller')


    button.addEventListener('click', function(){
        modalController.close()
    })
}

handleModal()


function actionButtonAbout() {
    const button = document.querySelector('.blue__button--action')
    
}