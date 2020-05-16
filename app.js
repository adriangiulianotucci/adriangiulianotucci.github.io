var a = 'Dorai niñazoi'

var boton = document.getElementById('boton')

boton.addEventListener('click',function (e) {
    e.target.innerText = a
})