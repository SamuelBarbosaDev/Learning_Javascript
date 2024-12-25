# Aula: Expressões Regulares (Regex) em JavaScript

## **Objetivo da Aula**

- Compreender o conceito de expressões regulares (Regex).
- Aprender a criar e utilizar expressões regulares em JavaScript.
- Explorar exemplos práticos e aplicações comuns de Regex.

### **Conteúdo da Aula**

1. **Introdução às Expressões Regulares**
   - Definição e propósito.
   - Uso comum em validação de dados, busca e substituição de texto.

2. **Sintaxe Básica de Regex**
   - Literais e metacaracteres.
   - Operadores de quantificação.
   - Classes de caracteres e âncoras.

3. **Métodos de Regex em JavaScript**
   - `test()`, `exec()`.
   - Métodos de string: `match()`, `search()`, `replace()`, `split()`.

4. **Aplicações Práticas**
   - Validação de email.
   - Validação de número de telefone.
   - Busca e substituição de texto.

5. **Exercícios Práticos**
   - Criação e uso de expressões regulares.

#### **Detalhamento da Aula**

---

### 1. Introdução às Expressões Regulares

#### **O que são Expressões Regulares?**

Expressões Regulares, ou Regex, são padrões usados para corresponder a combinações de caracteres em strings. Elas são extremamente úteis para validação de entradas, buscas, e substituição de texto em aplicações.

#### **Exemplo:**

```javascript
const regex = /hello/;
console.log(regex.test("hello world")); // true
```

### 2. Sintaxe Básica de Regex

#### **Metacaracteres Comuns**

- **`.`**: Corresponde a qualquer caractere, exceto nova linha.
- **`^`**: Início da string.
- **`$`**: Fim da string.
- **`*`**: Zero ou mais ocorrências do caractere anterior.
- **`+`**: Uma ou mais ocorrências do caractere anterior.
- **`?`**: Zero ou uma ocorrência do caractere anterior.
- **`\`**: Escapa caracteres especiais.
- **`|`**: Ou lógico.
- **`[]`**: Conjunto de caracteres.
- **`()`**: Agrupamento.

#### **Exemplo:**

```javascript
const regex = /h.llo/; // Corresponde a "hello", "hallo", etc.
console.log(regex.test("hello")); // true
console.log(regex.test("hillo")); // true
console.log(regex.test("hxllo")); // true
```

### 3. Métodos de Regex em JavaScript

#### **Métodos de Execução**

- **`test()`**: Verifica se existe correspondência.

  ```javascript
  const regex = /hello/;
  console.log(regex.test('hello world')); // true
  ```

- **`exec()`**: Executa uma busca e retorna um objeto com informações da correspondência.

  ```javascript
  const regex = /hello/;
  const result = regex.exec('hello world');
  console.log(result[0]); // 'hello'
  ```

#### **Métodos de String**

- **`match()`**: Retorna correspondências encontradas.

  ```javascript
  const str = 'hello world';
  const matches = str.match(/hello/);
  console.log(matches[0]); // 'hello'
  ```

- **`search()`**: Retorna o índice da primeira correspondência.

  ```javascript
  const str = 'hello world';
  const index = str.search(/hello/);
  console.log(index); // 0
  ```

- **`replace()`**: Substitui correspondências por uma nova substring.

  ```javascript
  const str = 'hello world';
  const newStr = str.replace(/hello/, 'hi');
  console.log(newStr); // 'hi world'
  ```

- **`split()`**: Divide a string com base em uma expressão regular.

  ```javascript
  const str = 'apple,banana,orange';
  const fruits = str.split(/,/);
  console.log(fruits); // ['apple', 'banana', 'orange']
  ```

### 4. Aplicações Práticas

#### **Validação de Email**

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test('example@example.com')); // true
```

#### **Validação de Número de Telefone**

```javascript
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
console.log(phoneRegex.test('123-456-7890')); // true
```

#### **Busca e Substituição de Texto**

```javascript
const text = "The quick brown fox jumps over the lazy dog.";
const newText = text.replace(/fox/, 'cat');
console.log(newText); // 'The quick brown cat jumps over the lazy dog.'
```

### 5. Exercícios Práticos

#### **Exercício 1: Validação de CEP (Brasil)**

```javascript
const cepRegex = /^\d{5}-\d{3}$/;
console.log(cepRegex.test('12345-678')); // true
```

#### **Exercício 2: Extração de Dados**

```javascript
const dateRegex = /(\d{2})\/(\d{2})\/(\d{4})/;
const dateStr = 'Hoje é 23/12/2024';
const result = dateStr.match(dateRegex);
console.log(result[0]); // '23/12/2024'
console.log(result[1]); // '23' (dia)
console.log(result[2]); // '12' (mês)
console.log(result[3]); // '2024' (ano)
```

---

### **Conclusão**

Expressões Regulares são uma ferramenta poderosa em JavaScript para manipulação e validação de strings. Com a prática, você pode usar Regex para resolver uma ampla variedade de problemas de maneira eficiente e concisa.
