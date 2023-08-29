# Operadores Lógicos em JavaScript

Os operadores lógicos em JavaScript são usados para realizar operações de lógica booleana em valores booleanos (verdadeiro ou falso). Eles são frequentemente usados para tomar decisões com base em múltiplas condições. JavaScript oferece três operadores lógicos principais: `&&` (E lógico), `||` (OU lógico), e `!` (NÃO lógico).

### Operador `&&` (E lógico)

O operador `&&` realiza uma operação "E lógico" em duas expressões. Ele retorna verdadeiro (`true`) se **ambas as expressões forem verdadeiras** e falso (`false`) caso contrário. Sua tabela de verdade é a seguinte:

```arduino
true && true // true
true && false // false
false && true // false
false && false // false
```


Exemplo em JavaScript:

```javascript
let a = true;
let b = false;

if (a && b) {
  console.log("Ambas as condições são verdadeiras.");
} else {
  console.log("Pelo menos uma das condições é falsa.");
}
```

### Operador || (OU lógico)

O operador || realiza uma operação "OU lógico" em duas expressões. Ele retorna verdadeiro (true) se pelo menos uma das expressões for verdadeira e falso (false) caso ambas sejam falsas. Sua tabela de verdade é a seguinte:

```arduino
true || true   // true
true || false  // true
false || true  // true
false || false // false
```

Exemplo em JavaScript:

```javascript

let a = true;
let b = false;

if (a || b) {
  console.log("Pelo menos uma das condições é verdadeira.");
} else {
  console.log("Ambas as condições são falsas.");
}
```
### Operador ! (NÃO lógico)

O operador ! realiza uma operação "NÃO lógico" em uma única expressão booleana. Ele inverte o valor da expressão, ou seja, se a expressão for verdadeira, o operador ! a tornará falsa e vice-versa. Sua tabela de verdade é a seguinte:

```arduino
!true  // false
!false // true
```

Exemplo em JavaScript:

```javascript
let a = true;

if (!a) {
  console.log("A condição é falsa.");
} else {
  console.log("A condição é verdadeira.");
}
```

### Precedência de Operadores

É importante observar que os operadores lógicos têm precedência em relação a outros operadores, como os operadores de comparação. No entanto, você pode usar parênteses para controlar a ordem de avaliação, se necessário.

```javascript

if ((a && b) || (c && d)) {
  // ...
}
```
## operadores de comparação:
Os operadores de comparação são usados em JavaScript para comparar valores e expressões e, em seguida, avaliar se a comparação é verdadeira (retorna true) ou falsa (retorna false). Aqui estão os operadores de comparação mais comuns e como eles funcionam:

### Operador de Igualdade (==):
- Verifica se os valores são iguais, independentemente do tipo de dados.
- Retorna true se os valores forem iguais, false caso contrário.

Exemplo:

```javascript
5 == "5" // true
```

### Operador de Igualdade Estrita (===):
- Verifica se os valores são iguais e do mesmo tipo de dados.
- Retorna true se os valores forem iguais e do mesmo tipo, false caso contrário.

Exemplo:

```javascript
5 === "5" // false
```

### Operador de Diferença (!=):

- Verifica se os valores não são iguais, independentemente do tipo de dados.
- Retorna true se os valores forem diferentes, false caso contrário.

Exemplo:

```javascript
5 != "5" // false
```

### Operador de Diferença Estrita (!==):

- Verifica se os valores são diferentes ou se são de tipos diferentes.
- Retorna true se os valores forem diferentes ou de tipos diferentes, false caso contrário.

Exemplo:
```javascript
5 !== "5" // true
```

### Operador de Maior (>):
- Verifica se o valor da esquerda é maior que o valor da direita.
- Retorna true se o valor da esquerda for maior, false caso contrário.

Exemplo:

```javascript
10 > 5 // true
```

### Operador de Menor (<):
- Verifica se o valor da esquerda é menor que o valor da direita.
- Retorna true se o valor da esquerda for menor, false caso contrário.

Exemplo:

```javascript
5 < 10 // true
```

### Operador de Maior ou Igual (>=):
- Verifica se o valor da esquerda é maior ou igual ao valor da direita.
- Retorna true se o valor da esquerda for maior ou igual, false caso contrário.

Exemplo:

```javascript
10 >= 10 // true
```

### Operador de Menor ou Igual (<=):
- Verifica se o valor da esquerda é menor ou igual ao valor da direita.
- Retorna true se o valor da esquerda for menor ou igual, false caso contrário.

Exemplo:

```javascript
    5 <= 10 // true
```

É importante entender como esses operadores de comparação funcionam, pois eles são amplamente usados em condicionais, loops e outras partes do JavaScript para tomar decisões e controlar o fluxo do programa com base em comparações de valores. Tenha em mente que a igualdade estrita (===) geralmente é preferível, pois leva em consideração tanto o valor quanto o tipo de dados, tornando as comparações mais previsíveis.