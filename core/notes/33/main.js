// DefineProperty - Getter e Setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(
        this, 
        'estoque',
        {
            enumerable: true, // Mostra a chave
            configurable: false, // configurável
            get: () => estoque,
            set: valor => {
                console.log(valor)
            }
        }
    )
};

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = '33'

console.log(p1)
console.log(p1.estoque)

///

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace(' -- ', '')
            nome = valor;
        }
    }
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Samuel -- ';
console.log(p2.nome);