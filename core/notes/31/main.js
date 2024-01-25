const numeros = [5, 50, 80, 1, 2, 3];

for (let valor of numeros){
    console.log(valor)
}

numeros.forEach(
    (valor, indice, array) => {
        console.log(indice, valor, array)
    }
)