// DefineProperty - defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(
        this, 
        'estoque',
        {
            enumerable: true, // Mostra a chave
            value: estoque, // Valor
            writable: false, // pode alterar
            configurable: false, // configurável
        }
    )

    Object.defineProperties(
        this,
        {
            nome: {
                enumerable: true, // Mostra a chave
                value: nome, // Valor
                writable: true, // pode alterar
                configurable: true, // configurável
            },
            preco: {
                enumerable: true, // Mostra a chave
                value: preco, // Valor
                writable: true, // pode alterar
                configurable: true, // configurável
            },
        }
    )
};

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)