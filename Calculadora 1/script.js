function data() { // pegando a data atual
    let local = document.getElementById('data');
    let data = new Date();
    local.innerHTML += `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`;
}

function calcular() { // funcao que dispara as instrucoes para calcular
    let num1 = document.querySelector('input#num1'); // selecionando input num1
    let num2 = document.querySelector('input#num2'); // selecionando input num2
    let resultado = document.querySelector('div#resultado'); // selecionando div para saida do resultado
    let opcao = document.getElementsByName('radio'); // selecionado input de selecao das operacoes

    let numero1 = Number(num1.value); // convertendo o valor de num1 para number
    let numero2 = Number(num2.value);

    resultado.innerHTML = `Resultado: `; // apaga o resultado gerado para o proximo 
    if (numero2 == 0 || numero2 == 0) { // teste de erros
        window.alert('[ERRO] - Preencha os espacos corretamente e tente novamente!');
    } else if (opcao[0].checked) {
        resultado.innerHTML += ` ${numero1 + numero2}`; // soma
    } else if (opcao[1].checked) {
        resultado.innerHTML += ` ${numero1 - numero2}`; // subtracao
    } else if (opcao[2].checked) {
        resultado.innerHTML += ` ${numero1 * numero2}`; // multiplicacao
    } else if (opcao[3].checked) {
        resultado.innerHTML += ` ${numero1 / numero2}`; // divisao
    }

    num1.value = ''; // apaga o valor inserido nos inputs
    num2.value = '';
}