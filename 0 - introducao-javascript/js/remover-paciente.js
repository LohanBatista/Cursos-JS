//variavel para recurar pacientes
var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");




// exclui o alvo selecionado da tabela
tabela.addEventListener("dblclick", function (event) {

    // animaçao de remover
    event.target.parentNode.classList.add("fadeOut");

    // variavel para pegar o alvo selecionado
    var alvoElemento = event.target;



    // variavel para pegar a tr = paciente
    var paiDoAlvo = alvoElemento.parentNode;


    setTimeout(function () {
        // excluir alvo selecionado
        paiDoAlvo.remove();

    }, 500)


})



// //funcao para pegar evento de clique em cada tr
//  pacientes.forEach(function(paciente){
//      paciente.addEventListener("dblclick", function(){
//          //this seleciona o objeto a sofrer o evento
//          this.remove();
//          console.log("Fui clicado duas vezes");
//      });
//  }); 