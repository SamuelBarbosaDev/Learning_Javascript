// Criando class
class DispositoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    };

    ligar(){
        this.ligado = true;
        return this.ligado;
    };

    desligado(){
        this.desligado = false;
        return this.ligado
    }
}

// Herança
class Smartphone extends DispositoEletronico{
    constructor(nome, processador){
        super(nome);
        this.processador = processador;
    };

    processadorSmartphone(){
        console.log(this.processador)
    }
}

const teleco = new Smartphone('s10', 'spandragon')

teleco.processadorSmartphone()
console.log(teleco)