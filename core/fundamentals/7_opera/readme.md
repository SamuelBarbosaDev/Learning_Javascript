# Operadores Lógicos em JavaScript

Os operadores lógicos em JavaScript são usados para realizar operações de lógica booleana em valores booleanos (verdadeiro ou falso). Eles são frequentemente usados para tomar decisões com base em múltiplas condições. JavaScript oferece três operadores lógicos principais: `&&` (E lógico), `||` (OU lógico), e `!` (NÃO lógico).

## Operador `&&` (E lógico)

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

Operador || (OU lógico)

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
Operador ! (NÃO lógico)

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

Precedência de Operadores

É importante observar que os operadores lógicos têm precedência em relação a outros operadores, como os operadores de comparação. No entanto, você pode usar parênteses para controlar a ordem de avaliação, se necessário.

```javascript

if ((a && b) || (c && d)) {
  // ...
}
```