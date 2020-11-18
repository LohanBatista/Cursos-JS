var titulo = document.querySelector(".titulo");

//alteracao de variavel via js
titulo.textContent = "Aparecida Nutricionista";

//buscar dados de pacientes
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes.length);

for (var i = 0; i < pacientes.length; i++) {
  console.log(pacientes[i]);

  //macete para pegar dados de todos da lista de array
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  // selecionando a coluna do IMC
  var tdImc = paciente.querySelector(".info-imc");

  //condicao de medidas invalidas e validas
  // var pesoEhValido = true;//
  var pesoEhValido = validaPeso(peso);
  // var alturaEhValida = true;
  var alturaEhValida = validaAltura(altura);

  // if (peso <= 0 || peso >= 1000)
  if (!pesoEhValido) {
    pesoEhValido = false;
    tdImc.textContent = "Peso invalido!";
    //metodo para mexer no css via javascript
    paciente.classList.add("paciente-invalido");
  }

  // if (altura <= 0 || altura >= 3.00)
  if (!alturaEhValida) {
    alturaEhValida = false;
    tdImc.textContent = "Altura invalida!";
    //metodo para mexer no css via javascript
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    //calculo de imc usando funcao
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}
//funcao para validar peso
function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

//funcao para validar altura
function validaAltura(altura) {
  if (altura >= 0 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}

//criacão de funcao para poder usar em mais de um arquivo o mesmo codigo
//calculo de imc
function calculaImc(peso, altura) {
  // imc comeca em 0
  var imc = 0;

  //formula imc
  imc = peso / (altura * altura);

  return (imc = Math.round(imc));
}
