import readline from "readline";
import { Pessoa } from "./pessoa.js";
import { Funcionario } from "./funcionario.js";
import { ContaBancaria } from "./contaBancaria.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let respostas = []

rl.question("Seja bem-vindo ao cadastro de pessoas! \n1 - Pessoa Física \n2 - Funcionário \nVocê se Classifica como Pessoa Física ou Funcionário? ", (opcao) => {
    respostas.opcao = opcao;
    rl.close();
})

switch (respostas.opcao) {
    case 1:
        rl.question("Qual o seu nome?", (nome) => {
            respostas.nome = nome;

            rl.question("Qual a sua idade?", (idade) => {
                respostas.idade = idade;
            })
        const pessoa = new Pessoa(respostas.nome, respostas.idade);
        console.log(pessoa.apresentacao());

        })
        
    case 2:
        rl.question("Qual é o seu nome?", (nome) => {
            respostas.nome = nome;

            rl.question("Qual a sua idade?", (idade) => {
                respostas.idade = idade;
                
                rl.question("Qual o seu salário atual em seu emprego?", (salario) => {
                    respostas.salario = salario;
                })
            })
        })
        const funcionario = new Funcionario(respostas.nome, respostas.idade, respostas.salario)
        console.log(funcionario.apresentacao());
        console.log(funcionario.exibirSalario());

    default:
        console.log("Opção inválida! Escolha a opção 1 ou 2 e tente novamente.");
}


























const pessoa1 = new Pessoa("Allison", 17);
console.log(pessoa1.apresentacao());

const contaPessoa1 = new ContaBancaria(100);
contaPessoa1.mostrarSaldo();
contaPessoa1.depositar(50);
contaPessoa1.mostrarSaldo();

const funcionario1 = new Funcionario("João Paulo", 34, 2400);
console.log(funcionario1.apresentacao());
console.log(funcionario1.exibirSalario());
