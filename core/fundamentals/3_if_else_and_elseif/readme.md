# Estruturas Condicionais em JavaScript

Em JavaScript, as estruturas condicionais são usadas para controlar o fluxo de um programa com base em condições lógicas. As estruturas condicionais mais comuns são if, else if e else.
if Statement

A estrutura if é usada para executar um bloco de código se uma determinada condição for verdadeira (avaliada como true). A sintaxe básica é a seguinte:

```javascript

if (condição) {
  // Código a ser executado se a condição for verdadeira
}
```

**Exemplo:**

```javascript

let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}
```

Neste exemplo, o código dentro do bloco if será executado porque a condição idade >= 18 é verdadeira.
else Statement

A estrutura else é usada em conjunto com if para fornecer um bloco de código a ser executado se a condição do if for falsa. A sintaxe é a seguinte:

```javascript

if (condição) {
  // Código a ser executado se a condição for verdadeira
} else {
  // Código a ser executado se a condição for falsa
}
```
**Exemplo:**

```javascript

let idade = 15;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```
Neste exemplo, como a condição idade >= 18 é falsa, o código dentro do bloco else é executado.
else if Statement

A estrutura else if é usada quando você precisa avaliar várias condições em sequência. Ela segue um bloco if e é seguida por um bloco else opcional. A sintaxe é a seguinte:

```javascript

if (condição1) {
  // Código a ser executado se a condição1 for verdadeira
} else if (condição2) {
  // Código a ser executado se a condição2 for verdadeira
} else {
  // Código a ser executado se nenhuma das condições for verdadeira
}
```
**Exemplo:**

```javascript

let diaSemana = "Sábado";

if (diaSemana === "Sábado") {
  console.log("É dia de descanso!");
} else if (diaSemana === "Domingo") {
  console.log("Ainda é dia de descanso!");
} else {
  console.log("É um dia de trabalho.");
}
```
Neste exemplo, como a condição diaSemana === "Sábado" é verdadeira, o código dentro do primeiro bloco if é executado e a execução do código condicional é encerrada.
Conclusão

As estruturas condicionais if, else if e else são fundamentais para controlar o fluxo de execução em JavaScript. Elas permitem que você tome decisões com base em condições lógicas e executem diferentes blocos de código de acordo com essas condições. Essas estruturas são essenciais para criar lógica e interatividade em seus programas JavaScript.