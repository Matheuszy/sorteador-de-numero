function sortear()  {
    let recuperarQuantidade = parseInt(document.getElementById('quantidade').value);
    let recuperarDe = parseInt(document.getElementById('de').value);
    let recuperarAte = parseInt(document.getElementById('ate').value);

    if (recuperarDe > recuperarAte) {
        alert('o número De deve ser menor que o número Até')
    } else {
        let sorteados = [];
        let numero;
        for(let i = 0; i <recuperarQuantidade; i++) {
            numero = obterNumeroAleatorio(recuperarDe, recuperarAte);
            while(sorteados.includes(numero)){
                numero = obterNumeroAleatorio(recuperarDe, recuperarAte);
            }
            sorteados.push(numero);
        }
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<label class="texto__paragrafo" id="texto">Números sorteados:${sorteados}</label>`
    
        alterarStatusBotao();
    }
}



function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    if(botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value ='';
    document.getElementById('ate').value = '';
    document.getElementById("resultado").innerHTML ='<label class="texto__paragrafo" id="texto">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}