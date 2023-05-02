var btns = document.querySelectorAll('.btnCompra');
var container = document.getElementById('invisible');

var btnNao = document.getElementById('nao');

for (var i=0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        if (container.style.display == 'none'){
            container.style.display = 'block'
        } else{
            container.style.display = 'none'
        }
    })
}

btnNao.addEventListener('click', function(){
    container.style.display = 'none'
})