# Herança

1. **Classes em JavaScript**:
   - A palavra-chave `class`, introduzida no ECMAScript 2015 (também conhecido como ES6), permite definir classes em JavaScript.
   - Uma classe é uma estrutura que encapsula propriedades (variáveis) e métodos (funções) relacionados.
   - No seu exemplo, temos duas classes: `DispositivoEletronico` e `Smartphone`.
   - A classe `DispositivoEletronico` possui um construtor que inicializa as propriedades `nome` e `ligado`. Ela também tem os métodos `ligar()` e `desligar()`.
   - A classe `Smartphone` herda da classe `DispositivoEletronico` usando a palavra-chave `extends`. Isso significa que o `Smartphone` terá todas as propriedades e métodos da classe pai, além de suas próprias propriedades (como `processador`).

2. **Herança em JavaScript**:
   - Na herança de classes em JavaScript, uma classe pode ser considerada como a "classe pai" ou "superclasse", enquanto a classe que herda as propriedades e métodos é denominada "classe filha" ou "subclasse".
   - A classe filha herda todas as características da classe pai e também pode adicionar novos comportamentos ou modificar os existentes.
   - No seu exemplo, `Smartphone` herda as propriedades e métodos da classe `DispositivoEletronico`.

3. **Superclasse e Subclasse**:
   - A classe `Smartphone` chama o construtor da classe pai (`DispositivoEletronico`) usando `super(nome)`. Isso garante que as propriedades `nome` e `ligado` sejam inicializadas corretamente.
   - Além disso, a classe `Smartphone` adiciona sua própria propriedade `processador`.

4. **Resultado do seu código**:
   - Quando você cria uma instância de `Smartphone` com `const teleco = new Smartphonme('s10', 'spandragon')`, o objeto `teleco` terá as propriedades `nome`, `ligado` e `processador`.
   - O método `ligar()` da classe pai também estará disponível para `teleco`.

Se você executar o código, verá o resultado no console com as informações do smartphone. Lembre-se de corrigir o nome da classe `Smartphonme` para `Smartphone`. 😉📱

Fonte: conversa com o Copilot, 25/06/2024
(1) Herança em JavaScript - Aprendendo desenvolvimento web | MDN. https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Classes_in_JavaScript.
(2) Aprenda sobre a herança de classes em JavaScript. https://awari.com.br/aprenda-sobre-a-heranca-de-classes-em-javascript/.
(3) Herança de Classes no TypeScript - nbkmundotech.com. https://www.nbkmundotech.com/artigos/heranca-de-classes-no-typescript.
(4) Recurso Herança em JavaScript: Para que serve? | Alura. https://www.alura.com.br/artigos/heranca-em-javascript.
(5) Herança e cadeia de protótipos (prototype chain) - JavaScript | MDN. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain.