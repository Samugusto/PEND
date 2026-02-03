console.log("Olá, JavaScript!");

//tipos de operadores matemáticos
let a = 10;
let b = 3;
console.log("adição (+) :", a + b);
console.log("subtração (-) :", a - b);
console.log("multiplicação (*) :", a * b);
console.log("resto da divisão (%) : ", a % b);
console.log("exponenciação (**) :", a ** b);
console.log("divisão (/) : ", a / b);

//contador ++ adiciona +1 ao número no caso a saída é 6
let contador = 5;
contador++; //incremento o contador-- é descremento
console.log(contador);

//calculo de uma média de 3 números
let h = 10;
let e = 20;
let y = 8;
console.log((h + e + y)/3, "isso é o resultado"); // funciona colocar chaves "[]" ou parenteses "()"
//colocar "," no final de um calculo neste caso pode se colocar uma string

//resto de uma divisão
let r = 10;
let r2 = 40;
console.log(r % r2)

//operacores relacionais

let x = 10;
let y1 = "10";
console.log("igual", x == y1);
console.log("igualdade estrita", x === y1);
console.log("diferente", x != y1);
console.log("estritamente não igual", x !== y1);

//atividade de comparar idades
let idade = 19;
let md = 18;
if (idade >= md) {
    console.log("você é maior de idade");
}
else{
    console.log("você é menor de idade");
}

//atividade 2 

let n1 = 17;
let n2 = 18;
if (n2 > n1) {
    console.log(n2, "(n2) é maior e o", n1, "(n1) é o menor");
}
else if (n2 == n1){
    console.log("ambos são iguais(n1) (n2)", n2,",",n1);
}
else{
    console.log(n1, "(n1) é o maior e o", n2, "(n2) é o menor");
}

let idade2 = 20;
let temcarteira = true;

console.log(idade2 >= 18 && temcarteira); // o && funciona como se fosse um "e" exemplo "e tem carteira?"

let chovendo = false;
let guardachuva = true;

console.log(chovendo || guardachuva);

let ligado = false;
console.log(!ligado); //começa a virar true

//atividade 3 
nota = 10;
frequencia = 90;
if (nota >= 7 && frequencia >= 75){
    console.log("você foi Aprovado! ;)")
}else{
    console.log("você infelizmente não foi aprovado boa sorte na proxima ;(")
}

//atividade 4

let senha = false;
let token = true;

console.log(senha || token);
if (senha == true || token == true){
    console.log("acesso permitido")
}else{
    console.log("acesso negado")
}
