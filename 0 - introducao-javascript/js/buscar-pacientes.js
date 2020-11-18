
//
var botaoBusca = document.querySelector("#buscar-paciente")

botaoBusca.addEventListener("click", function () {
    console.log("Buscando pacientes...");
    //variavel para buscar dados da api
    var xhr = new XMLHttpRequest();

    //funcao para ensinar qual tipo de requisicao ira fazer e pra onde  
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");


    //condicao para saber status 
    xhr.addEventListener("load", function () {

        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            console.log(resposta);
            console.log(typeof resposta);


            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
            console.log(typeof pacientes);


            //adicionar na tabela
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });

        } else {
            alert("Erro " + xhr.status + " " + xhr.responseText);
            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.classList.remove("invisivel");

        }
    });
    //verifica se esta carregando a request para entao enviala

    //pega a requisicao e criada e envia
    xhr.send()

});