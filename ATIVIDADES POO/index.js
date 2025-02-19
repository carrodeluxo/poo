class pessoa{
    constructor(nome,idade){
    this.nome=nome;
    this.idade=idade;
    }
    apresentar(){ 
    console.log("ola", this.nome, "sua idade é", this.idade);
    }
}
let pessoa1=new pessoa("neggs",25);
pessoa1.apresentar();