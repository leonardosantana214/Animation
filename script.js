

const myObserver = new IntersectionObserver((entries) => {
    console.log(entries)
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            entry.target.classList.add('animate__animated')
            entry.target.classList.add('animate__slow')
            entry.target.classList.add('animate__fadeInLeft')
        } else {
            entry.target.classList.remove('show')
            entry.target.classList.remove('animate__animated')
            entry.target.classList.remove('animate__slow')
            entry.target.classList.remove('animate__fadeInLeft')
        }
    })
});
const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element))

const image = document.getElementById('img')
const fade = document.querySelector('.img')
function Img() {

    document.querySelector('.img').classList.add('animate__animated')
    document.querySelector('.img').classList.add('animate__slow')
    document.querySelector('.img').classList.add('animate__fadeInLeft')
    image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWd6G0c-4jLAcc7V9kLJG2toZh7ut7qwcJoYLnI2oIg&s'

}
function img() {
    image.src = ''

    document.querySelector('.img').classList.remove('animate__animated')
    document.querySelector('.img').classList.remove('animate__slow')
    document.querySelector('.img').classList.remove('animate__fadeInLeft')
}