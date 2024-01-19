// Função Construtora -> Objetos
// Construtora -> Pessoa (new)

class Pessoa {
    constructor(nome, sobrenome) {
        // Atributos ou métodos privados:
        const ID = 12;
        const metodoInterno = e => {
            console.log(`Método privado`);
        };

        // Atributos ou métodos públicos:
        this.nome = nome;
        this.sobrenome = sobrenome;

        this.metodoPublico = e => {
            console.log(`Meu nome é ${this.nome} ${this.sobrenome}.`);
        };
    }
};

const persona = new Pessoa('Samuel', 'Barbosa')

persona.metodoPublico()