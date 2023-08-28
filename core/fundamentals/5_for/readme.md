A estrutura de repetição for é uma das estruturas mais comuns em JavaScript e é usada para executar um bloco de código várias vezes, com um controle mais preciso do que o while. A estrutura for consiste em três partes principais: a inicialização, a condição de continuação e a expressão de iteração. Aqui está a sintaxe básica:

```javascript

for (inicialização; condição; expressão de iteração) {
  // Código a ser executado em cada iteração
}
```
Aqui está uma explicação de cada parte:

1. **Inicialização:** É a parte onde você inicia uma variável de controle ou configura um contador. Isso geralmente é feito usando uma variável.
   
2. **Condição:** É uma expressão que é avaliada antes de cada iteração do loop. Se a condição for verdadeira (avaliada como true), o loop continua; se for falsa (avaliada como false), o loop termina.
   
3. **Expressão de Iteração:** É a parte onde você atualiza a variável de controle ou contador. Geralmente, isso é usado para incrementar ou decrementar o valor da variável.

Aqui está um exemplo simples que conta de 1 a 5 usando um loop for:

```javascript

for (let contador = 1; contador <= 5; contador++) {
  console.log("Contagem: " + contador);
}
```
Neste exemplo:

- A inicialização let contador = 1 inicia a variável contador com o valor 1.
- A condição contador <= 5 verifica se contador é menor ou igual a 5. Enquanto essa condição for verdadeira, o loop continua.
- A expressão de iteração contador++ incrementa o valor de contador em 1 a cada iteração.

O resultado será que o código dentro do loop será executado cinco vezes, produzindo a saída:

```makefile

Contagem: 1
Contagem: 2
Contagem: 3
Contagem: 4
Contagem: 5
```

O for é particularmente útil quando você sabe exatamente quantas vezes deseja que o loop seja executado ou quando deseja iterar sobre uma sequência de valores, como um array.

Lembre-se de que, assim como com o while, é importante ter cuidado ao usar o for para garantir que a condição seja eventualmente avaliada como falsa para evitar loops infinitos.