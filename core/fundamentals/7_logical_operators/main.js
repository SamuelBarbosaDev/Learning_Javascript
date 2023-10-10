/*
Operadores de comparação:

> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) **Não usar**
=== igualdade estrita (valor e tipo)
!= diferente (valor) **Não usar**
!== diferente estrito (valor e tipo)
*/

/*
Operadores Lógicos:

&& -> and -> E
|| -> or -> ou
! -> not -> não 
*/

const chove = true;
const dia_bonito = true;

if (chove || dia_bonito)
    console.log("Eu gosto de chuva ou de sol?")

else if (!chove && dia_bonito)
    console.log("Não está chovendo, e o dia está bonito.");

else if (!chove)
    console.log("Não está chovendo.");

else
    console.log("Está chovendo.");
