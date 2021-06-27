//1
const button = document.getElementById('button')
button.addEventListener('click' , ()=>{
    if(document.querySelector('.firstInput').value === '' || document.querySelector('.secondInput').value === ''){
        return ' '
    }
let tmp = document.querySelector('.firstInput').value
    document.querySelector('.firstInput').value = document.querySelector('.secondInput').value
    document.querySelector('.secondInput').value = tmp
})
