import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Lohan", 10000, 1234567899999);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Eduarda", 8000, 321651656856);
gerente.cadastrarSenha("987654321");

const cliente = new Cliente("Pedro", 2132132321, "123");

const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "987654321");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);
