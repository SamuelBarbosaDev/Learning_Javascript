# Guia de Expressões Regulares (Regex) em JavaScript

## O que são Expressões Regulares?

Expressões Regulares (Regex) são sequências de caracteres que formam um padrão de busca. Elas são usadas para realizar buscas e substituições em strings, validação de formatos e parsing de texto.

## Sintaxe Básica

- **Literals**: Os caracteres são interpretados literalmente.
  - Exemplo: `/hello/` corresponde a "hello".

- **Metacaracteres**: Caracteres com significados especiais.
  - `.`: Corresponde a qualquer caractere, exceto nova linha.
  - `^`: Início da string.
  - `$`: Fim da string.
  - `*`: Zero ou mais ocorrências do caractere anterior.
  - `+`: Uma ou mais ocorrências do caractere anterior.
  - `?`: Zero ou uma ocorrência do caractere anterior.
  - `\`: Escapa caracteres especiais.
  - `|`: Ou lógico.
  - `[]`: Conjunto de caracteres.
  - `()`: Agrupamento.

## Operadores de Quantificação

- **Greedy**: Corresponde ao máximo possível.
  - `*`: Zero ou mais.
  - `+`: Um ou mais.
  - `?`: Zero ou um.

- **Lazy**: Corresponde ao mínimo possível.
  - `*?`: Zero ou mais, não-guloso.
  - `+?`: Um ou mais, não-guloso.
  - `??`: Zero ou um, não-guloso.

### Sequências de Escape

- **`\d`**: Corresponde a qualquer dígito (0-9).
- **`\D`**: Corresponde a qualquer caractere que **não** seja um dígito.
- **`\s`**: Corresponde a qualquer espaço em branco (espaço, tabulação, nova linha, etc.).
- **`\S`**: Corresponde a qualquer caractere que **não** seja um espaço em branco.
- **`\w`**: Corresponde a qualquer caractere alfanumérico (letras A-Z, a-z, dígitos 0-9 e o caractere de sublinhado `_`).
- **`\W`**: Corresponde a qualquer caractere que **não** seja alfanumérico.

### Âncoras

- **`^`**: Corresponde ao início da string.
- **`$`**: Corresponde ao fim da string.
- **`\b`**: Corresponde a uma borda de palavra (início ou fim de uma palavra).
- **`\B`**: Corresponde a uma posição que não seja uma borda de

## Exemplos de Uso

### Criação de uma Regex

```javascript
const regex = /hello/;
const regexObj = new RegExp('hello');
