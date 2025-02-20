class ContaBancaria {
    #saldo;

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso!`);
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
        }

    }
    
    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }

    mostrarSaldo() {
        console.log(`O saldo atual é: R$${this.#saldo}`);
    }
}

export { ContaBancaria };