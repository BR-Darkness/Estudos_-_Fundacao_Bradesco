/*
- Objetivo: Capturar o nome do usuário e apresentar uma saudação personalizada
- Definir as variáveis com o prefixo js_.
- Elementos de Entrada: método prompt do objeto window
- Elementos de Saída: método write do objeto document
*/

/* Definições de Variáveis: */

var js_nome;

/* Entrada de Dados: */
js_nome = window.prompt('Insira o seu nome: ', '');

/* Saída de Dados: */

//Mensagem de Saudação Personalizada
document.write('<p id="teste">Olá <b>' + js_nome + '</b> seja bem-vindo!</p>');

function Concatenar()
{
    var Nome = document.Form_Concatenacao.Form_Nome.value;
    var Idade = document.Form_Concatenacao.Form_Idade.value;

    if (Nome != '' && Idade != '') 
    {
        window.alert('Olá ' + Nome + ' seja muito bem-vindo!\nVocê atualmente possui ' + Idade + ' Ano(s).');
    }
    else
    {
        window.alert('Por favor preencha corretamente os campos solicitados.');
    }
}

function Somar()
{
    var N1 = document.Form_Soma.Form_N1.value;
    var N2 = document.Form_Soma.Form_N2.value;
    var Result = parseInt(N1) + parseInt(N2);

    if (N1 != '' && N2 != '') 
    {
        // window.alert('A soma de ' + N1 + ' + ' + N2 + ' é igual á: '  + Result + '.');
        document.getElementById('Resultado').textContent = N1 + ' + ' + N2 + ' = '  + Result + '.';
    }
    else
    {
        document.getElementById('Resultado').textContent = 'Por favor preencha corretamente os campos solicitados.';
    }
}