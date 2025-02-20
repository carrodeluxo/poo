import { Pessoa } from "./pessoa.js";

class Funcionario extends Pessoa {
    #salario;

    constructor(nome, idade, salario) {
        super(nome, idade);
        this.#salario = salario
    }

    exibirSalario() {
        return `O seu salário atual em seu emprego é de R$${this.#salario}`;
    }
}

export { Funcionario };