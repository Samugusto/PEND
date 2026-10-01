export function calculo() {
    let n1 = 2;
    let n2 = 3;

    let soma = n1 + n2;
    let subtracao = n1 - n2;
    let multiplicacao = n1 * n2;
    let divisao = n1/n2;

    return { soma, subtracao, multiplicacao, divisao };
}