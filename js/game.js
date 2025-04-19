// Variáveis principais do jogo
let respostaCorreta;
let pontuacao = 0;
let modoAtual = 'basico';

// Função que inicia o jogo com o modo escolhido
function iniciarJogo(modo) {
    modoAtual = modo;
    document.getElementById("area-jogo").style.display = "block";
}
// Função que gera nova pergunta e mostra na tela
function novaPergunta() {
    const numeros = gerarNumeros(modoAtual);
    const operacao = escolherOperacao(); 
    const perguntaTexto = `${numeros.num1} ${operacao} ${numeros.num2}`;

    respostaCorreta = calcularResposta(numeros.num1, numeros.num2, operacao);

    document.getElementById("pergunta").innerText = perguntaTexto;
    document.getElementById("resposta").value = "";
    document.getElementById("resultado").innerText = "";
}