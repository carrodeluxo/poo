import readline from "readline";
import { Pessoa } from "./pessoa.js";
import { Funcionario } from "./funcionario.js";
import { ContaBancaria } from "./contaBancaria.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const perguntar = (pergunta) => {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => resolve(resposta));
    });
};

const main = async () => {
    console.log("Seja bem-vindo ao cadastro de pessoas!");
    
    let opcao = await perguntar("1 - Pessoa Física \n2 - Funcionário \n\nVocê se classifica como Pessoa Física ou Funcionário? ");
    
    let nome = await perguntar("Qual o seu nome? ");
    let idade = await perguntar("Qual a sua idade? ");

    if (opcao === "1") {
        const pessoa = new Pessoa(nome, idade);
        console.log("\n");
        console.log(pessoa.apresentacao());

    } else if (opcao === "2") {
        let salario = await perguntar("Qual o seu salário atual em seu emprego? ");
        const funcionario = new Funcionario(nome, idade, salario);
        console.log("\n");
        console.log(funcionario.apresentacao());
        console.log(funcionario.exibirSalario());

    } else {
        console.log("Opção inválida! Escolha a opção 1 ou 2 e tente novamente.");
        rl.close();
        return;
    }

    let perguntabanco = await perguntar("\nVocê deseja realizar alguma transação bancária? (sim/não) ");

    if (perguntabanco === "sim") {
        const conta = new ContaBancaria();
        let continuar = true;

        while (continuar) {
            console.log("\n1 - Depositar \n2 - Sacar \n3 - Mostrar Saldo \n4 - Sair");
            let opcaoBanco = await perguntar("Escolha uma opção: ");

            switch (opcaoBanco) {
                case "1":
                    let valorDeposito = await perguntar("Digite o valor do depósito: ");
                    conta.depositar(valorDeposito);
                    break;
                case "2":
                    let valorSaque = await perguntar("Digite o valor do saque: ");
                    conta.sacar(valorSaque)
                    break;
                case "3":
                    conta.mostrarSaldo();
                    break;
                case "4":
                    console.log("Saindo do sistema bancário...");
                    continuar = false;
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        }
    }

    console.log ("\nObrigado por utilizar nosso sistema!");

    rl.close();
};

main();



