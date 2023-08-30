# Expressões Regulares (Regex) em JavaScript

As expressões regulares, frequentemente chamadas de "regex" ou "regexp", são uma poderosa ferramenta para encontrar e manipular padrões de texto em JavaScript. Elas permitem que você pesquise, substitua e valide strings com base em padrões específicos. Expressões regulares são representadas por objetos RegExp em JavaScript.

## Criando uma Expressão Regular

Você pode criar uma expressão regular em JavaScript usando o construtor `RegExp` ou a notação literal entre barras `/`. Aqui estão dois exemplos equivalentes:

```javascript
// Usando o construtor RegExp
const regex1 = new RegExp("padrão");

// Usando a notação literal
const regex2 = /padrão/;
```

## Pesquisando Padrões

Para pesquisar um padrão em uma string, você pode usar o método exec() ou test() de uma expressão regular. O método exec() retorna uma matriz de correspondências ou null se não houver correspondência. O método test() retorna true se houver correspondência e false caso contrário.

```javascript
const texto = "Esta é uma string com um padrão.";

const regex = /padrão/;

// Usando exec() para encontrar correspondências
const resultado = regex.exec(texto);
console.log(resultado);

// Usando test() para verificar correspondência
const correspondencia = regex.test(texto);
console.log(correspondencia);
```

## Substituindo Padrões:

Você pode substituir padrões em uma string usando o método replace() com uma expressão regular. O método replace() substituirá a primeira correspondência encontrada por padrão, a menos que você use a flag global /g para substituir todas as correspondências.

```javascript
const texto = "Esta é uma string com um padrão.";

const regex = /padrão/;

// Substituir a primeira correspondência
const novoTexto = texto.replace(regex, "substituição");
console.log(novoTexto);

// Substituir todas as correspondências usando a flag global
const novoTextoGlobal = texto.replace(/padrão/g, "substituição");
console.log(novoTextoGlobal);
```

## Flags

As expressões regulares podem ser modificadas com várias flags para controlar o comportamento da pesquisa. Algumas das flags mais comuns incluem:

**/i:** Ignora a diferenciação entre maiúsculas e minúsculas.
**/g:** Substitui todas as correspondências (global).
**/m:** Realiza a pesquisa em várias linhas.

```javascript
const texto = "Texto de exemplo. TEXTO de exemplo.";

// Ignorar diferenciação entre maiúsculas e minúsculas
const regex1 = /texto/i;
console.log(regex1.test(texto)); // true

// Substituir todas as correspondências globalmente
const regex2 = /texto/g;
const novoTexto = texto.replace(regex2, "substituição");
console.log(novoTexto);
```

## Caracteres Especiais:

As expressões regulares podem usar caracteres especiais para representar classes de caracteres ou quantificadores. Alguns exemplos:

- **.: ** Representa qualquer caractere, exceto quebras de linha.
- **\d:** Representa um dígito (0-9).
- **\w:** Representa um caractere alfanumérico ou sublinhado.
- ***: ** Corresponde a 0 ou mais ocorrências.
- **+: ** Corresponde a 1 ou mais ocorrências.

## Pesquisando Padrões

Para pesquisar um padrão em uma string, você pode usar o método exec() ou test() de uma expressão regular. O método exec() retorna uma matriz de correspondências ou null se não houver correspondência. O método test() retorna true se houver correspondência e false caso contrário.

```javascript
const texto = "Esta é uma string com um padrão.";

const regex = /padrão/;

// Usando exec() para encontrar correspondências
const resultado = regex.exec(texto);
console.log(resultado);

// Usando test() para verificar correspondência
const correspondencia = regex.test(texto);
console.log(correspondencia);
```

## Substituindo Padrões

Você pode substituir padrões em uma string usando o método replace() com uma expressão regular. O método replace() substituirá a primeira correspondência encontrada por padrão, a menos que você use a flag global /g para substituir todas as correspondências.

```javascript
const texto = "Esta é uma string com um padrão.";

const regex = /padrão/;

// Substituir a primeira correspondência
const novoTexto = texto.replace(regex, "substituição");
console.log(novoTexto);

// Substituir todas as correspondências usando a flag global
const novoTextoGlobal = texto.replace(/padrão/g, "substituição");
console.log(novoTextoGlobal);
```

## Flags:

As expressões regulares podem ser modificadas com várias flags para controlar o comportamento da pesquisa. Algumas das flags mais comuns incluem:

- **/i:** Ignora a diferenciação entre maiúsculas e minúsculas.
- **/g:** Substitui todas as correspondências (global).
- **/m:** Realiza a pesquisa em várias linhas.

```javascript
const texto = "Texto de exemplo. TEXTO de exemplo.";

// Ignorar diferenciação entre maiúsculas e minúsculas
const regex1 = /texto/i;
console.log(regex1.test(texto)); // true

// Substituir todas as correspondências globalmente
const regex2 = /texto/g;
const novoTexto = texto.replace(regex2, "substituição");
console.log(novoTexto);
```

## Caracteres Especiais

As expressões regulares podem usar caracteres especiais para representar classes de caracteres ou quantificadores. Alguns exemplos:

- **.: ** Representa qualquer caractere, exceto quebras de linha.
- **\d:** Representa um dígito (0-9).
- **\w:** Representa um caractere alfanumérico ou sublinhado.
- ***: ** Corresponde a 0 ou mais ocorrências.
- **+: ** Corresponde a 1 ou mais ocorrências.

```javascript
const texto = "123 abc 456";

// Corresponder a dígitos usando \d
const regex = /\d+/g;
const correspondencias = texto.match(regex);
console.log(correspondencias); // ['123', '456']
```

Este é apenas um breve resumo das expressões regulares em JavaScript. Elas podem se tornar muito mais complexas e poderosas à medida que você se aprofunda em seu estudo. Use a documentação e recursos adicionais para explorar mais a fundo esse tópico importante em JavaScript.

const texto = "123 abc 456";

// Corresponder a dígitos usando \d
const regex = /\d+/g;
const correspondencias = texto.match(regex);
console.log(correspondencias); // ['123', '456']

Este é apenas um breve resumo das expressões regulares em JavaScript. Elas podem se tornar muito mais complexas e poderosas à medida que você se aprofunda em seu estudo. Use a documentação e recursos adicionais para explorar mais a fundo esse tópico importante em JavaScript.