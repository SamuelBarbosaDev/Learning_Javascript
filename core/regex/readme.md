# Documentação Completa sobre Expressões Regulares (Regex)

## **O que são Expressões Regulares?**

Expressões Regulares (Regex) são padrões usados para encontrar correspondências dentro de strings. São extremamente úteis para validação de entradas, busca e substituição de texto, e manipulação de dados.

### Conteúdo

- [Documentação Completa sobre Expressões Regulares (Regex)](#documentação-completa-sobre-expressões-regulares-regex)
  - [**O que são Expressões Regulares?**](#o-que-são-expressões-regulares)
    - [Conteúdo](#conteúdo)
    - [Sintaxe Básica](#sintaxe-básica)
    - [Classes de Caracteres](#classes-de-caracteres)
    - [Quantificadores](#quantificadores)
      - [**Lazy**](#lazy)
      - [Exemplos de Uso dos Lazy Quantifiers](#exemplos-de-uso-dos-lazy-quantifiers)
    - [Âncoras](#âncoras)
    - [Grupos e Backreferences](#grupos-e-backreferences)
    - [Operadores Lógicos](#operadores-lógicos)
    - [Lookahead e Lookbehind](#lookahead-e-lookbehind)
    - [Exemplos Práticos](#exemplos-práticos)
    - [Ferramentas e Recursos](#ferramentas-e-recursos)

### Sintaxe Básica

```regex
/pattern/modifiers
```

- **pattern**: O padrão a ser correspondido.
- **modifiers**: Modificadores que alteram o comportamento da busca (como `g`, `i`, `m`).

### Classes de Caracteres

- `.`: Corresponde a qualquer caractere, exceto nova linha.
- **`[...]`**: Conjunto de caracteres.
  - `[abc]` corresponde a qualquer um dos caracteres `a`, `b`, ou `c`.
- **`\d`**: Qualquer dígito (0-9).
- **`\D`**: Qualquer caractere que não seja dígito.
- **`\w`**: Qualquer caractere alfanumérico (A-Z, a-z, 0-9, _).
- **`\W`**: Qualquer caractere que não seja alfanumérico.
- **`\s`**: Qualquer espaço em branco.
- **`\S`**: Qualquer caractere que não seja espaço em branco.

### Quantificadores

- **`*`**: Zero ou mais.
  - `a*` corresponde a zero ou mais `a`.
- **`+`**: Um ou mais.
  - `a+` corresponde a um ou mais `a`.
- **`?`**: Zero ou um.
  - `a?` corresponde a zero ou um `a`.
- **`{n}`**: Exatamente `n` ocorrências.
  - `a{3}` corresponde a exatamente três `a`.
- **`{n,}`**: Pelo menos `n` ocorrências.
  - `a{2,}` corresponde a duas ou mais `a`.
- **`{n,m}`**: Entre `n` e `m` ocorrências.
  - `a{2,4}` corresponde a de duas a quatro `a`.

#### **Lazy**

Corresponde ao mínimo possível

- `*?`: Zero ou mais, não-guloso.
- `+?`: Um ou mais, não-guloso.
- `??`: Zero ou um, não-guloso.

#### Exemplos de Uso dos Lazy Quantifiers

- **`a*?`**: Corresponde a zero ou mais `a`, mas busca a menor correspondência possível.

```regex
  "aaa" =~ /a*?/  ->  "" (zero ocorrências)
```

- **`a+?`**: Corresponde a uma ou mais `a`, mas busca a menor correspondência possível.

```regex
  "aaa" =~ /a+?/  ->  "a" (uma ocorrência)
```

- **`a??`**: Corresponde a zero ou uma `a`, mas busca a menor correspondência possível.

```regex
  "aaa" =~ /a??/  ->  "" (zero ocorrências)
```

### Âncoras

- **`^`**: Início da string.
  - `^abc` corresponde a `abc` no início da string.
- **`$`**: Fim da string.
  - `abc$` corresponde a `abc` no final da string.
- **`\b`**: Borda de palavra.
  - `\bword\b` corresponde à palavra `word` completa.
- **`\B`**: Não é borda de palavra.

### Grupos e Backreferences

- **Grupos**: `(pattern)`
  - `(abc)` corresponde a `abc` e pode ser referenciado.
- **Backreferences**: `\n`
  - `\1` refere-se ao primeiro grupo.

### Operadores Lógicos

- **`|`**: OU lógico.
  - `a|b` corresponde a `a` ou `b`.

### Lookahead e Lookbehind

- **Lookahead Positivo**: `(?=pattern)`
  - `a(?=b)` corresponde a `a` seguido de `b`, mas não inclui `b`.
- **Lookahead Negativo**: `(?!pattern)`
  - `a(?!b)` corresponde a `a` não seguido de `b`.
- **Lookbehind Positivo**: `(?<=pattern)`
  - `(?<=b)a` corresponde a `a` precedido por `b`.
- **Lookbehind Negativo**: `(?<!pattern)`
  - `(?<!b)a` corresponde a `a` não precedido por `b`.

### Exemplos Práticos

- **Validação de Email**:

  ```regex
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  ```

- **Validação de Número de Telefone (Formato: XXX-XXX-XXXX)**:

  ```regex
  /^\d{3}-\d{3}-\d{4}$/
  ```

- **Busca de Palavras**:

  ```regex
  /\bword\b/
  ```

### Ferramentas e Recursos

- [Regex101](https://regex101.com/): Ferramenta online para testar e debugar expressões regulares.
- [MDN Web Docs: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions): Documentação detalhada sobre expressões regulares no JavaScript.
- [JavaScript.info: Regular expressions](https://javascript.info/regular-expressions): Guia abrangente sobre expressões regulares.
