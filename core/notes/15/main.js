// Arguments sustenta todos os argumentos enviados:
function sum(){
    let total = 0;
    for (let value of arguments){
        total += value;
    };

    return total;
};

console.log(sum(1,2,3,4,5,26,7,8,9,0));


// Arguments sustenta todos os argumentos enviados:
function sum2(...values){
    let total = 0;
    for (let i in values){
        total += values[i]
    }
    return total
};

console.log(sum2(33, 89, 33, 67));