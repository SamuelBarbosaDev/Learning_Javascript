# Variáveis em JavaScript

As variáveis em JavaScript são usadas para armazenar dados, como números, strings, objetos e outros valores. Elas são fundamentais para o funcionamento de qualquer programa JavaScript. Aqui estão os principais aspectos das variáveis em JavaScript:

## Declaração de Variáveis

Você pode declarar uma variável em JavaScript usando uma das três palavras-chave: `var`, `let` ou `const`. A recomendação mais recente é usar `let` ou `const`, pois elas têm escopo mais restrito em comparação ao `var`.

- `var`: Tem escopo de função e não de bloco. É global quando declarado fora de qualquer função.
- `let`: Tem escopo de bloco e não pode ser redeclarado na mesma escopo.
- `const`: Também tem escopo de bloco, mas deve ser atribuído um valor na declaração e não pode ser reatribuído.

Exemplos:

```javascript
var x = 10;
let y = "Hello";
const z = true;
```

## Atribuição de Valores

Você pode atribuir valores a uma variável usando o operador de atribuição (=). O tipo da variável é inferido com base no valor atribuído.

```javascript

var nome = "João";
var idade = 30;
```

## Escopo

O escopo de uma variável refere-se à região do código em que a variável é acessível. Variáveis declaradas com var têm escopo de função, enquanto as declaradas com let e const têm escopo de bloco.

```javascript

function exemploEscopo() {
  var x = 5; // Escopo da função
  if (true) {
    let y = 10; // Escopo de bloco
  }
}
```

## Reatribuição

Variáveis declaradas com var e let podem ser reatribuídas com um novo valor, enquanto variáveis declaradas com const não podem.

```javascript

var a = 5;
a = 10; // Ok
let b = 5;
b = 10; // Ok
const c = 5;
c = 10; // Erro: Não é possível reatribuir uma constante
```

## Hoisting

Em JavaScript, declarações var são "içadas" para o topo do escopo em que foram declaradas, o que significa que você pode usá-las antes de declará-las no código. No entanto, apenas a declaração é içada, não a inicialização.

```javascript
console.log(a); // Undefined
var a = 5;
```

## Nomenclatura de Variáveis

Os nomes de variáveis são sensíveis a maiúsculas e minúsculas (case-sensitive).
Devem começar com uma letra, sublinhado (_) ou cifrão ($).
Podem conter letras, números, sublinhados (_) e cifrões ($) subsequentes.
Devem seguir boas práticas de nomenclatura para tornar o código mais legível (por exemplo, camelCase ou snake_case).

Exemplos de nomes de variáveis válidos: nome, idade, _variavelPrivada, $valor.

Em resumo, as variáveis em JavaScript são usadas para armazenar dados e podem ser declaradas com var, let ou const, cada uma com diferentes escopos e regras de atribuição. É importante entender como as variáveis funcionam para escrever código JavaScript eficaz e sem erros.
