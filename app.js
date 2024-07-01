let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Numero Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML= 'Escolha um numero entre 1 e 10';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentaiva = tentativas > 1  ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Vc descobriu com ${tentativas} ${palavraTentaiva}`;
        exibirTextoNaTela('p',mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto)  {
            exibirTextoNaTela('p','o numero secreto é menor');
        } else {
            exibirTextoNaTela('p','o numero secreto é maior'); 
        }
        tentativas++;
        limparCampo();
    }

    }


function exibirMensagemInicial (){
    exibirTextoNaTela('h1','Jogo do Numero Secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}    


function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
   let quantidadeDeElementosnaLista = listaDeNumerosSorteados.length;


   if (quantidadeDeElementosnaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)

}

exibirMensagemInicial();

