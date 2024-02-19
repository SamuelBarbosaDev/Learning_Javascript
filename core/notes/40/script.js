const pessoas = [
    {id: 3, nome: 'luiz'},
    {id: 2, nome: 'carlos'},
    {id: 1, nome: 'julia'},
]

// const novasPessoas = {};
// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa}
// }

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));

for (const [identifier, {id, nome}] of novasPessoas){
    console.log(identifier, id, nome)
}

for (const pessoas of novasPessoas){
    console.log(pessoas);
}