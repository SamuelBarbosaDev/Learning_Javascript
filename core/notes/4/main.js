// Estudo sobre objetos:
const people = {
    name: 'Daniela',
    last_name: 'Silva',
    old_years: '47',
    address: {
        street: 'rua 700',
        number: '1200',
    }
};

// Atribuição via desestruturação:
const {name, last_name, address} = people;
console.log(name, last_name, address)
