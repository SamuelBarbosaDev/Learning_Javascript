function retornaHora(data){
    if (!(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    };

    return data.toLocaleTimeString(
        'pt-BR',
        {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        }
    );
}

try{
    const data = new Date('01-01-1970 12:58:12')
    console.log(retornaHora(data))
    console.log(retornaHora(33))
}

catch (error){
    console.log('Ocorreu um error.')
}

finally{
    console.log('Sempre será executado.')
}
