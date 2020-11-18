//adicao de evento no botao adicionar
var botaoAdicionar = document.querySelector("#adicionar-paciente");
console.log(botaoAdicionar);


//escuta evendo adicionado entre parenteses e pode passar mais de um parametro, no caso o mostraMensagem
// titulo.addEventListener("click", mostraMensagem);

// function mostraMensagem() {
//     console.log("Fui clicado");

// }

//também pode ser utilizada uma funcão anonima que so é chamada dentro do parametro
botaoAdicionar.addEventListener("click", function (event) {
    //previne o efeito default, no caso a pagina dar reload, o EVENT tem que ser chamado na funcao
    event.preventDefault();


    //variavel para adicionar gravar dados passados no form
    var form = document.querySelector("#form-adiciona");


    //recupera dados do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente)
    // // // // // // var nome = form.nome.value;
    // // // // // // var peso = form.peso.value;
    // // // // // // var altura = form.altura.value;
    // // // // // // var gordura = form.gordura.value;




    // // // // // // var pacienteTr = document.createElement("tr");

    // // // // // // //captura de dados do form
    // // // // // // var nomeTd = document.createElement("td");
    // // // // // // var pesoTd = document.createElement("td");
    // // // // // // var alturaTd = document.createElement("td");
    // // // // // // var gorduraTd = document.createElement("td");
    // // // // // // var imcTd = document.createElement("td");

    // // // // // // //adiciona dados no form td 
    // // // // // // nomeTd.textContent = nome;
    // // // // // // pesoTd.textContent = peso;
    // // // // // // alturaTd.textContent = altura;
    // // // // // // gorduraTd.textContent = gordura;
    // // // // // // imcTd.textContent = calculaImc(peso, altura);

    // // // // // // //adiciona dados td(filho) dentro do Tr(pai) 
    // // // // // // pacienteTr.appendChild(nomeTd);
    // // // // // // pacienteTr.appendChild(pesoTd);
    // // // // // // pacienteTr.appendChild(alturaTd);
    // // // // // // pacienteTr.appendChild(gorduraTd);
    // // // // // // ç.appendChild(imcTd);

    //variavel que exibe mensagens de erro
    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }


    adicionaPacienteNaTabela(paciente);



    //limpa o form depois de adicionado o paciente;
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    //variavel que cria um paciente na lista, tem que selecionar a tag que sera inserida
    var pacienteTr = montaTr(paciente);
    console.log(pacienteTr);

    //adiciona na page os dados 
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}


//variavel que retorna erro de algum dado inserido
function exibeMensagensDeErro(erros) {
    //variavel que captura o erro
    var ul = document.querySelector("#mensagens-erro");
    // propriedade que permite controlar o conteudo interno da html
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        //variavel que cria uma li dentro da ul de erros
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}


//recupera dados do paciente do form
function obtemPacienteDoFormulario(form) {

    //cria-se um objeto e se passa as propriedades para formar o objeto.
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

}


//cria-se a tr que ira aparecer na lista
function montaTr(paciente) {
    //variavel que cria um paciente na lista, tem que selecionar a tag que sera inserida
    var pacienteTr = document.createElement("tr");
    //adicionar classe ao paciente criado
    pacienteTr.classList.add("paciente");

    //valida paciente 
    if (!validaPaciente(paciente)) {
        console.log("Paciente invalido");
        //usa-se return vazio para nao adicionar a lista
        return;
    }




    // // // // // //cria-se as td's com todos os dados retornados
    // // // // // var nomeTd = montaTd(paciente.nome, "info-nome");
    // // // // // var pesoTd = montaTd(paciente.peso, "info-peso");
    // // // // // var alturaTd = montaTd(paciente.altura, "info-altura");
    // // // // // var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    // // // // // var imcTd = montaTd(paciente.imc, "info-imc");

    //captura de dados do form e adiciona classes
    // // // // // // var nomeTd = document.createElement("td");
    // // // // // // var pesoTd = document.createElement("td");
    // // // // // // var alturaTd = document.createElement("td");
    // // // // // // var gorduraTd = document.createElement("td");
    // // // // // // var imcTd = document.createElement("td");


    //adiciona dados no form td 
    // // // // // // nomeTd.textContent = paciente.nome;
    // // // // // // pesoTd.textContent = paciente.peso;
    // // // // // // alturaTd.textContent = paciente.altura;
    // // // // // // gorduraTd.textContent = paciente.gordura;
    // // // // // // imcTd.textContent = paciente.imc;

    //adiciona dados td(filho) dentro do Tr(pai) 
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


    // // // // // // pacienteTr.appendChild(nomeTd);
    // // // // // // pacienteTr.appendChild(pesoTd);
    // // // // // // pacienteTr.appendChild(alturaTd);
    // // // // // // pacienteTr.appendChild(gorduraTd);
    // // // // // // pacienteTr.appendChild(imcTd);


    return pacienteTr;
}

//cria-se as td que irao aparecer na lista
function montaTd(dado, classe) {
    //captura de dados do form e adiciona classes
    var td = document.createElement("td");
    //adiciona dados no form td     
    td.textContent = dado;
    //adiciona classe no td selecionado
    td.classList.add(classe);

    return td;
}

//funcao que valida paciente
function validaPaciente(paciente) {

    //variavel que recupera array de erros, usa-se a propriedade PUSH para empurrar a mensagem solicitada
    var erros = [];

    if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco");

    if (!validaPeso(paciente.peso)) erros.push("Peso inválido");
    if (paciente.peso.length == 0) erros.push("O peso não pode ser em branco");


    if (!validaAltura(paciente.altura)) erros.push("Altura inválida");
    if (paciente.altura.length == 0) erros.push("A altura não pode ser em branco");

    if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");


    return erros;
}


