const menu = document.querySelector('.dashboard')
const ham = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-times')

const toggleHidden = () => {
    menu.classList.toggle('hidden')
}

ham.addEventListener('click', toggleHidden)
close.addEventListener('click', toggleHidden)