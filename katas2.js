// comece a criar a sua função add na linha abaixo
function add(numero1,numero2){
    return numero1+numero2;
}


// descomente a linha seguinte para testar sua função
// console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(numero,QntVezes){
    let soma = 0;
    for (let contador = 1; contador<=QntVezes; contador++){
        soma = add(soma,numero)
    }
    return soma
}


// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (numero,QntVezes){
    let multiplicaçao = 1;
    for(let contador = 1; contador<=QntVezes; contador++){
        multiplicaçao = multiply(multiplicaçao,numero)
    }
    return multiplicaçao
}


// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(numero) {
    let fator = 1
    for(let contador = numero; contador>= 1 ; contador--){
        fator = multiply(fator,contador)
    }
    return fator
}


// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
