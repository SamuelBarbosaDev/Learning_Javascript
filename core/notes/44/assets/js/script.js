class Mundo{
    constructor(nome){
        this.nome = nome;
        this.gravidade = true;
    }

    static desligandoGravidade(){
        this.gravidade = false
        console.log(this.gravidade)
    }
}

const planeta = new Mundo(nome='Terra')
Mundo.desligandoGravidade()
console.log(planeta)