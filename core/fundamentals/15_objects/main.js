const Carros = {
    modelo: 'Alpha',
    velocidade_maxima: 320,
    preco: 699000,

    qual_e_o_modelo() {
        console.log(`${this.modelo}`)
    },

    qual_e_o_preco() {
        console.log(`R$ ${this.preco},00`)
    },

    qual_e_a_velocidade() {
        console.log(`Km ${this.velocidade_maxima}`)
    },

    aumente_o_preco() {
        this.preco += 1000 
    }
};

Carros.qual_e_o_modelo();
Carros.qual_e_o_preco();
Carros.qual_e_a_velocidade();
Carros.aumente_o_preco();
Carros.qual_e_o_preco();