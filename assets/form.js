var btnForm = document.getElementById('btnForm');

btnForm.addEventListener('click', function(){
    var nome = document.getElementById('iptNome').value;
    var data = document.getElementById('iptData').value;
    var email = document.getElementById('iptEmail').value;

    if(nome == '' || data == '' || email == ''){
        alert('Ainda há campos para preencher!')
    } else{
        document.querySelector('form').innerHTML = '<img src="imgs/loading.gif" width="400px">'

        let dia = data.substring(8, 10);
        let mes; 

        switch (data.substring(5,7)){
            case '01':
                mes = 'Janeiro'
                break;
            case '02':
                mes = 'Fevereiro'
                break;
            case '03':
                mes = 'Março'
                break;
            case '04':
                mes = 'Abril'
                break;
            case '05':
                mes = 'Maio'
                break;
            case '06':
                mes = 'Junho'
                break;
            case '07':
                mes = 'Julho'
                break;
            case '08':
                mes = 'Agosto'
                break;
            case '09':
                mes = 'Setembro'
                break;
            case '10':
                mes = 'Outubro'
                break;
            case '11':
                mes = 'Novembro'
                break;
            case '12':
                mes = 'Dezembro'
                break;
        }

        setTimeout(function() {
            document.querySelector('.confirm').innerHTML = '<p class="pAgrad">Agradecemos pela preferência ' + nome + '!! Consulta ao veículo marcada para o dia ' + dia + ' de ' + mes + '. </p><a href="index.html"><button class="btnCompra btnEnd">Voltar ao Início</button></a>';
          }, 5000)
    }
})