
//variavel para seleiconar filtro
var campoFiltro = document.querySelector("#filtrar-tabela");


//escutar evento de input
campoFiltro.addEventListener("input", function () {


    //variavel para pegar lista de pacientes
    var pacientes = document.querySelectorAll(".paciente");

    //condicao para saber se algo foi digitado
    if (this.value.length > 0) {
        console.log("digitado");

        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            //dentro do paciente se busca o TD com a classe info-nome
            var tdNome = paciente.querySelector(".info-nome");
            //para extrair o conteudo da TD
            var nome = tdNome.textContent;
            //variavel para buscar usando expressoes regulares
            var expressao = new RegExp(this.value,"i");

            //condicao para esconder pacientes que nao estejam sendo filtrados
            if ( !expressao.test(nome)) {
                paciente.classList.add("invisivel");

            } else {
                paciente.classList.remove("invisivel");


            }

            
        }

    }else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

});

