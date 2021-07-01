//1
const button = document.getElementById('button')
button.addEventListener('click', () => {
    if (document.querySelector('.firstInput').value === '' || document.querySelector('.secondInput').value === '') {
        return ' '
    }
    let tmp = document.querySelector('.firstInput').value
    document.querySelector('.firstInput').value = document.querySelector('.secondInput').value
    document.querySelector('.secondInput').value = tmp
})
//2
const input = document.querySelectorAll('.input')
for (let i = 0; i < input.length; i++) input[i].addEventListener('blur', function () {
    input[i].value.length === +input[i].getAttribute('data-length') ? input[i].style.border = '2px solid green' : input[i].style.border= '2px solid red'
})
//3
let initImg = document.querySelector('.img_block__img')
//console.log(initImg.src)
initImg.addEventListener('click', function () {
    initImg.src === 'http://localhost:63342/dz31js/nature-drops.jpg' ? initImg.src = "man-walking-dog.jpg" : initImg.src = "nature-drops.jpg"
})
//4
const navLi = document.querySelectorAll('.nav__ul > li')
for (let i = 0; i < navLi.length; i++) {
    debugger
    navLi[i].addEventListener('click', function () {
        if(  navLi[i].hasAttribute('style')) {
            this.removeAttribute('style')
        }else{
            for(let j = 0 ; j < navLi.length ; j++){
                if(navLi[j].hasAttribute('style')){
                    navLi[j].removeAttribute('style')
                }
            }
            this.setAttribute('style', 'border:1.5px solid #EB3C30; background-color: #add8e6;')
        }
    })
}