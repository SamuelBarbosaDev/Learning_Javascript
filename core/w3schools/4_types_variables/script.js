/*
Quando usar var, deixar ou const?

1. Sempre declare variáveis

2. Sempre use constSe o valor não deve ser alterado

3. Sempre use constse o tipo não deve ser alterado (Arrays e Objects)

4. Apenas o uso letSe você não pode usar const

5. Apenas o uso varse você tem que suportar navegadores antigos
*/

// Declarando variáveis
const variableConst = "CONST: Não ira ser alterado."
let variableLet = "LET: Pode ser alterado."
var variableVar = "VAR: Forma antiga de declara uma variável."

// Elements
const liConst = document.querySelector("#const")
const liLet = document.querySelector("#let")
const liVar = document.querySelector("#var")

// Conteúdo
liConst.innerHTML = variableConst
liLet.innerHTML = variableLet
liVar.innerHTML = variableVar
