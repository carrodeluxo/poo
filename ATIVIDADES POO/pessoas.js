class Pessoa {
    #nome;
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    apresentacao() {
        return `Olá ${this.#nome}, você possue ${this.#idade} anos de idade!`;
    }
}

export { Pessoa };