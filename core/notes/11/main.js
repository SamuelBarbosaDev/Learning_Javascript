function soma(x, y){
    if (
        (typeof x || typeof y) !== 'number'
    ){
        throw new Error('x e y precisam ser números.')
    }
    return x + y
}

try{
    console.log(soma(1, 1))
    console.log(soma('1', 2))
}

catch(error){
    console.log('Ocorreu um erro.')
}