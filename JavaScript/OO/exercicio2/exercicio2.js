class aluno {
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }
    aprender() {
        console.log(`${this.nome} Está aprendendo.`)
    }
    estudar() {
        console.log(`${this.nome} Está estudando.`)
    }
    apresentar() {
        console.log(`${this.nome} Está apresentando.`)
    }
}

const aluno1 = new aluno("Hugo", 16, "ADS", 23);

const aluno2 = new aluno("Lucas", 17, "Gestão de negócios", 54);

const aluno3 = new aluno("Ribeiro", 18, "Qualidade", 88);

console.log("-------------------------");
console.log("Atributos do Aluno 1: ");
console.log("- Nome", aluno1.nome);
console.log("- Idade", aluno1.idade);
console.log("- Cursando", aluno1.curso);
console.log("- Matrícula", aluno1.matricula);
console.log("-------------------------");
console.log("Atributos do Aluno 2: ");
console.log("- Nome", aluno2.nome);
console.log("- Idade", aluno2.idade);
console.log("- Cursando", aluno2.curso);
console.log("- Matrícula", aluno2.matricula);
console.log("-------------------------");
console.log("Atributos do Aluno 3: ");
console.log("- Nome", aluno3.nome);
console.log("- Idade", aluno3.idade);
console.log("- Cursando", aluno3.curso);
console.log("- Matrícula", aluno3.matricula);
console.log("-------------------------");

aluno1.aprender();
aluno2.apresentar();
aluno3.estudar();