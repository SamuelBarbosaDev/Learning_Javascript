JavaScript é uma linguagem de programação dinamicamente tipada, o que significa que as variáveis podem conter diferentes tipos de dados ao longo do tempo. Existem vários tipos de dados em JavaScript, que podem ser categorizados em dois grupos principais: tipos de dados primitivos e tipos de dados de referência (objetos).

Aqui estão os tipos de dados primitivos em JavaScript e um exemplo que demonstra cada um deles:

1. **Number (Número):** Representa valores numéricos, inteiros ou de ponto flutuante.
```javascript
let idade = 25;
let altura = 1.75;
```

2. **String (Texto):** Representa sequências de caracteres.
``` javascript
let nome = "Alice";
let frase = "Olá, mundo!";
```

3. **Boolean (Booleano):** Representa valores verdadeiros (true) ou falsos (false).
``` javascript
let temCafe = true;
let estaChovendo = false;
```

4. **Null (Nulo):** Representa a ausência intencional de qualquer valor ou objeto.
``` javascript
let valorNulo = null;
```

5. **Undefined (Indefinido):** Representa uma variável que foi declarada, mas ainda não foi atribuída a nenhum valor.
``` javascript
let variavelNaoAtribuida;
```

6. **Symbol (Símbolo):** Representa um valor único e imutável usado como chave de propriedades de objetos.
``` javascript
const idUnico = Symbol("id");
```

7. **BigInt (Inteiro Arbitrário):** Representa inteiros com precisão arbitrária.
``` javascript
    const numeroGrande = 1234567890123456789012345678901234567890n;
```

Aqui estão exemplos de tipos de dados de referência (objetos) em JavaScript:

8. **Object (Objeto):** Representa um objeto genérico e é a base de todos os outros tipos de dados de referência.
```javascript
const pessoa = {
  nome: "João",
  idade: 30
};
```

9. **Array (Matriz):** Representa uma coleção ordenada de valores, geralmente do mesmo tipo, acessados ​​por um índice.
``` javascript
const numeros = [1, 2, 3, 4, 5];
```

10. **Function (Função):** Representa um bloco de código que pode ser chamado e executado.
``` javascript
function saudacao(nome) {
  return `Olá, ${nome}!`;
}
```

11. **Date (Data):** Representa datas e horários.
``` javascript
const dataAtual = new Date();
```

12. **RegExp (Expressão Regular):** Representa uma expressão regular usada para encontrar padrões em strings.
``` javascript
    const expressaoRegular = /pattern/;
```

Esses são os principais tipos de dados em JavaScript. É importante entender a diferença entre eles e como usá-los, pois eles desempenham um papel fundamental no desenvolvimento de aplicativos JavaScript.