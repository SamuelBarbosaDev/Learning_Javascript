const _velocidade = Symbol('Velocidade')
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log('SETTER')
        if(typeof valor !== 'number') return;
        if(valor>=100 || valor <= 0) return;
    }

    get velocidade() {
        console.log('GETTER')
        return this[this[_velocidade]]
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
        console.log(this[_velocidade]);
    }

    freia() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    };
}

const honda = new Carro(nome='honda')

honda.velocidade = 99;
honda.acelerar()


// for (let i = 0; i<=108; i++){
//     honda.acelerar()
// }

